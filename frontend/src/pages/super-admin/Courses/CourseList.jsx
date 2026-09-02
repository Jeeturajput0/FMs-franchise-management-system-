import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SuperAdminLayout from '../../../layouts/SuperAdminLayout';
import PageHeader from '../../../components/PageHeader';
import DataTable from '../../../components/DataTable';
import Button from '../../../components/Button';
import Modal from '../../../components/Modal';
import Icon from '../../../components/Icon';
import { addCourse, deleteCourse, fetchCourses } from '../../../store/slice/courseSlice';

const initialForm = {
  title: '',
  description: '',
  shortDescription: '',
  category: '',
  duration: 3,
  courseFee: 15000,
  level: 'Beginner',
  isPublished: true,
};

export default function CourseList() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.courses);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  const columns = useMemo(
    () => [
      { header: 'ID', accessor: 'id' },
      { header: 'Course Title', accessor: 'title' },
      { header: 'Category', accessor: 'category' },
      { header: 'Duration', accessor: 'duration' },
      { header: 'Enrolled Students', accessor: 'students' },
      { header: 'Fee Price', accessor: 'price' },
      { header: 'Status', accessor: 'status', isBadge: true },
    ],
    []
  );

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);

    try {
      await dispatch(
        addCourse({
          title: form.title,
          description: form.description || form.shortDescription || 'Course description',
          shortDescription: form.shortDescription,
          category: form.category,
          duration: { value: Number(form.duration), unit: 'months' },
          courseFee: Number(form.courseFee),
          level: form.level,
          isPublished: form.isPublished,
        })
      ).unwrap();

      setIsModalOpen(false);
      setForm(initialForm);
    } catch (submissionError) {
      console.error(submissionError);
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (courseId) => {
    if (!window.confirm('Are you sure you want to delete this course?')) return;

    try {
      await dispatch(deleteCourse(courseId)).unwrap();
    } catch (deleteError) {
      console.error(deleteError);
    }
  };

  return (
    <SuperAdminLayout>
      <PageHeader
        crumb="ADMIN PORTAL / COURSES"
        title="Curriculum & Courses Management"
        subtitle="Manage master course catalog across all franchises."
        actionLabel="+ Add Course"
        onAction={() => setIsModalOpen(true)}
      />

      {error && (
        <div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700">
          {error}
        </div>
      )}

      <DataTable
        title="Master Courses Roster"
        subtitle="Active programs and learning tracks"
        columns={columns}
        data={items}
        actionButtonLabel="+ Add Course"
        onActionButtonClick={() => setIsModalOpen(true)}
        renderActions={(row) => (
          <>
            <button
              title="View Details"
              className="p-1.5 rounded-lg text-gray-400 hover:text-[#7154db] hover:bg-[#f0ebff] transition-colors"
            >
              <Icon name="eye" size={15} />
            </button>
            <button
              title="Edit"
              className="p-1.5 rounded-lg text-gray-400 hover:text-[#7154db] hover:bg-[#f0ebff] transition-colors"
            >
              <Icon name="edit" size={15} />
            </button>
            <button
              title="Delete"
              onClick={() => handleDelete(row.id)}
              className="p-1.5 rounded-lg text-gray-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
            >
              <Icon name="trash" size={15} />
            </button>
          </>
        )}
      />

      {loading && (
        <div className="mt-4 text-xs text-gray-500">Loading courses...</div>
      )}

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add Course"
        subtitle="Create a new master course"
        maxWidth="max-w-xl"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="mb-1 block text-xs font-semibold text-gray-700">Course title</label>
              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:border-[#7154db]"
                placeholder="e.g. Advanced React"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-1 block text-xs font-semibold text-gray-700">Short description</label>
              <textarea
                name="shortDescription"
                value={form.shortDescription}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:border-[#7154db]"
                rows="3"
                placeholder="Short course summary"
              />
            </div>

            <div>
              <label className="mb-1 block text-xs font-semibold text-gray-700">Category</label>
              <input
                name="category"
                value={form.category}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:border-[#7154db]"
                placeholder="Web Development"
              />
            </div>

            <div>
              <label className="mb-1 block text-xs font-semibold text-gray-700">Level</label>
              <select
                name="level"
                value={form.level}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:border-[#7154db]"
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>

            <div>
              <label className="mb-1 block text-xs font-semibold text-gray-700">Duration (months)</label>
              <input
                name="duration"
                type="number"
                min="1"
                value={form.duration}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:border-[#7154db]"
              />
            </div>

            <div>
              <label className="mb-1 block text-xs font-semibold text-gray-700">Course fee</label>
              <input
                name="courseFee"
                type="number"
                min="0"
                value={form.courseFee}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:border-[#7154db]"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-700">
            <input
              type="checkbox"
              name="isPublished"
              checked={form.isPublished}
              onChange={handleChange}
              className="h-4 w-4 rounded border-gray-300 text-[#7154db] focus:ring-[#7154db]"
            />
            Publish immediately
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <Button variant="outline" type="button" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={submitting}>
              {submitting ? 'Saving...' : 'Save Course'}
            </Button>
          </div>
        </form>
      </Modal>
    </SuperAdminLayout>
  );
}

