import React from "react";
import PageHeader from "../../../components/PageHeader";
import DataTable from "../../../components/DataTable";

export default function StudentList() {
  const students = [
    { id: "STU-001", name: "Rahul Sharma", email: "rahul@gmail.com", franchise: "Quantum Skill Academy", course: "Python AI Pro", status: "Active", joined: "12 Aug 2026" },
    { id: "STU-002", name: "Sneha Patel", email: "sneha@gmail.com", franchise: "Apex AI Hub", course: "Data Analytics", status: "Active", joined: "18 Aug 2026" },
    { id: "STU-003", name: "Karan Malhotra", email: "karan@gmail.com", franchise: "Zenith Tech", course: "Full Stack AI Dev", status: "Active", joined: "01 Sep 2026" },
    { id: "STU-004", name: "Riya Verma", email: "riya@gmail.com", franchise: "Future Minds", course: "GenAI Master", status: "Pending", joined: "02 Sep 2026" },
    { id: "STU-005", name: "Aman Gupta", email: "aman@gmail.com", franchise: "Quantum Skill Academy", course: "Python AI Pro", status: "Active", joined: "14 Jul 2026" },
    { id: "STU-006", name: "Pooja Hegde", email: "pooja@gmail.com", franchise: "Apex AI Hub", course: "GenAI Master", status: "Active", joined: "20 Jun 2026" },
  ];

  const columns = [
    { header: "ID", accessor: "id" },
    { header: "Student Name", accessor: "name" },
    { header: "Email Address", accessor: "email" },
    { header: "Franchise Center", accessor: "franchise" },
    { header: "Enrolled Course", accessor: "course" },
    { header: "Admission Date", accessor: "joined" },
    { header: "Status", accessor: "status", isBadge: true },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        crumb="STUDENTS / DIRECTORY"
        title="Global Student Directory"
        subtitle="Manage 12,450 enrolled students across all partner franchises and regional centers."
        actionLabel="Enroll Student"
        onAction={() => alert("Enroll Student Modal")}
      />

      <DataTable
        title="Active Student Database"
        subtitle="Search by student name, roll number, course track, or franchise location"
        columns={columns}
        data={students}
        actionButtonLabel="Add New Student"
        onActionButtonClick={() => alert("Enroll Student")}
      />
    </div>
  );
}
