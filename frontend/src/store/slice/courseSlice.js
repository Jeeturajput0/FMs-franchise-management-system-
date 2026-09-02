import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const API_URL = 'http://localhost:5000/api/courses';

const mapCourseToRow = (course) => ({
  id: course._id || course.id,
  title: course.title,
  category: course.category || 'General',
  duration: course.duration?.value ? `${course.duration.value} ${course.duration.unit}` : 'N/A',
  students: course.students || 0,
  price: `₹${Number(course.courseFee || 0).toLocaleString('en-IN')}`,
  status: course.isPublished ? 'Published' : 'Draft',
  raw: course,
});

export const fetchCourses = createAsyncThunk('courses/fetchCourses', async () => {
  const response = await fetch(API_URL, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch courses');
  }

  const data = await response.json();
  return (data.courses || []).map(mapCourseToRow);
});

export const addCourse = createAsyncThunk('courses/addCourse', async (coursePayload) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(coursePayload),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Failed to create course');
  }

  return mapCourseToRow(data.course || coursePayload);
});

export const deleteCourse = createAsyncThunk('courses/deleteCourse', async (courseId) => {
  const response = await fetch(`${API_URL}/${courseId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Failed to delete course');
  }

  return courseId;
});

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const courseSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addCourse.pending, (state) => {
        state.loading = true;
      })
      .addCase(addCourse.fulfilled, (state, action) => {
        state.loading = false;
        state.items.unshift(action.payload);
      })
      .addCase(addCourse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteCourse.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteCourse.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter((course) => course.id !== action.payload);
      })
      .addCase(deleteCourse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default courseSlice.reducer;
