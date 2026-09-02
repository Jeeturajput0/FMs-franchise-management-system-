import React from "react";
import PageHeader from "../../components/PageHeader";
import DataTable from "../../components/DataTable";

export default function TeacherStudents() {
  const students = [
    { id: "ST-01", name: "Rahul Sharma", batch: "Python AI - Batch A", attendance: "96%", assignments: "8 / 8 Completed", avgGrade: "A+", status: "Active" },
    { id: "ST-02", name: "Sneha Patel", batch: "Python AI - Batch A", attendance: "92%", assignments: "7 / 8 Completed", avgGrade: "A", status: "Active" },
    { id: "ST-03", name: "Aman Gupta", batch: "AI Fundamentals - Batch B", attendance: "88%", assignments: "6 / 8 Completed", avgGrade: "B+", status: "Active" },
    { id: "ST-04", name: "Riya Verma", batch: "Machine Learning - Batch C", attendance: "74%", assignments: "4 / 8 Completed", avgGrade: "C", status: "Needs Support" },
  ];

  const columns = [
    { header: "Roll #", accessor: "id" },
    { header: "Student Name", accessor: "name" },
    { header: "Enrolled Batch", accessor: "batch" },
    { header: "Attendance", accessor: "attendance" },
    { header: "Assignments", accessor: "assignments" },
    { header: "Academic Grade", accessor: "avgGrade" },
    { header: "Status", accessor: "status", isBadge: true },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        crumb="TEACHER / STUDENTS"
        title="My Students Directory"
        subtitle="Individual student learning analytics, attendance records, and assignment grading."
      />

      <DataTable
        title="Enrolled Batch Students"
        subtitle="Search and view student academic metrics"
        columns={columns}
        data={students}
      />
    </div>
  );
}
