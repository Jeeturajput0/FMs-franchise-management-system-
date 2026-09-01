import React from "react";
import PageHeader from "../../components/PageHeader";
import DataTable from "../../components/DataTable";

export default function FranchiseStudents() {
  const students = [
    { id: "FS-101", name: "Rahul Sharma", course: "Python AI Pro", date: "01 Aug 2026", totalFee: "₹35,000", status: "Active" },
    { id: "FS-102", name: "Sneha Patel", course: "Data Science", date: "15 Jul 2026", totalFee: "₹28,000", status: "Active" },
    { id: "FS-103", name: "Aman Gupta", course: "Full Stack AI", date: "20 Jun 2026", totalFee: "₹42,000", status: "Active" },
  ];

  const columns = [
    { header: "Student ID", accessor: "id" },
    { header: "Student Name", accessor: "name" },
    { header: "Program", accessor: "course" },
    { header: "Admission Date", accessor: "date" },
    { header: "Billed Tuition", accessor: "totalFee" },
    { header: "Enrollment Status", accessor: "status", isBadge: true },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        crumb="FRANCHISE / STUDENTS"
        title="Center Enrolled Students"
        subtitle="Manage active scholars registered at your local AI Scholar center."
        actionLabel="+ New Student"
        onAction={() => alert("New Student Modal")}
      />

      <DataTable
        title="Local Center Student Directory"
        subtitle="Search and view student records"
        columns={columns}
        data={students}
      />
    </div>
  );
}
