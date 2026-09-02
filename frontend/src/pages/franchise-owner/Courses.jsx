import React from "react";
import PageHeader from "../../components/PageHeader";
import DataTable from "../../components/DataTable";

export default function FranchiseCourses() {
  const courses = [
    { id: "FC-01", title: "Python for AI Specialist", duration: "12 Weeks", enrolled: 58, fee: "₹35,000", status: "Active" },
    { id: "FC-02", title: "Data Science & Machine Learning", duration: "8 Weeks", enrolled: 25, fee: "₹28,000", status: "Active" },
    { id: "FC-03", title: "Full Stack AI Development", duration: "16 Weeks", enrolled: 22, fee: "₹42,000", status: "Active" },
  ];

  const columns = [
    { header: "Course ID", accessor: "id" },
    { header: "Course Title", accessor: "title" },
    { header: "Program Duration", accessor: "duration" },
    { header: "Enrolled Students", accessor: "enrolled" },
    { header: "Tuition Price", accessor: "fee" },
    { header: "Status", accessor: "status", isBadge: true },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        crumb="FRANCHISE / COURSES"
        title="Licensed Learning Tracks"
        subtitle="Manage active AI Scholar programs offered at your coaching center."
      />

      <DataTable
        title="Licensed AI Curriculum"
        subtitle="Active master programs running at your center"
        columns={columns}
        data={courses}
      />
    </div>
  );
}
