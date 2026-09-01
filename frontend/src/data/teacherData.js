export const teacherStats = [
  { label: "My Students", value: "186", change: "+12 this batch", icon: "users", tone: "violet" },
  { label: "Active Courses", value: "6", change: "2 ongoing modules", icon: "book", tone: "blue" },
  { label: "Today's Classes", value: "4", change: "Next at 02:00 PM", icon: "clock", tone: "orange" },
  { label: "Pending Reviews", value: "12", change: "Assignments to grade", icon: "fileText", tone: "green" },
];

export const teacherTodaySchedule = [
  { time: "09:00 AM", course: "Python Basics", batch: "Batch A", students: 32, status: "Completed", room: "Lab 1" },
  { time: "11:00 AM", course: "AI Fundamentals", batch: "Batch B", students: 28, status: "Completed", room: "Hall 3" },
  { time: "02:00 PM", course: "Machine Learning", batch: "Batch C", students: 24, status: "Upcoming", room: "Lab 2" },
  { time: "04:30 PM", course: "Neural Networks & Deep Learning", batch: "Batch E", students: 30, status: "Scheduled", room: "Hall 2" },
];

export const teacherAssignments = [
  { id: "ASN-101", title: "Python Data Structures & OOPs Quiz", course: "Python Basics", batch: "Batch A", submitted: 28, total: 32, dueDate: "Tomorrow, 5:00 PM", status: "Pending Review" },
  { id: "ASN-102", title: "Linear Regression Implementation", course: "Machine Learning", batch: "Batch C", submitted: 22, total: 24, dueDate: "05 Sep 2026", status: "Open" },
  { id: "ASN-103", title: "Neural Network Architecture Diagram", course: "Deep Learning", batch: "Batch E", submitted: 30, total: 30, dueDate: "Completed", status: "Graded" },
];

export const teacherTests = [
  { id: "TST-301", title: "Mid-Term Python Evaluation", batch: "Batch A", date: "04 Sep 2026", duration: "60 Mins", totalMarks: 100, status: "Scheduled" },
  { id: "TST-302", title: "Supervised Learning Practical Test", batch: "Batch C", date: "10 Sep 2026", duration: "90 Mins", totalMarks: 100, status: "Draft" },
];

