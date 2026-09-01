import React from "react";
import SuperAdminLayout from "../../../layouts/SuperAdminLayout";
import PageHeader from "../../../components/PageHeader";
import DataTable from "../../../components/DataTable";

export default function StudentList() {
  const students = [
    { id: "STU-001", name: "Rahul Sharma", email: "rahul@gmail.com", franchise: "TechVeda Academy", course: "Python AI", status: "Active" },
    { id: "STU-002", name: "Sneha Patel", email: "sneha@gmail.com", franchise: "NextGen Hub", course: "Data Analytics", status: "Active" },
    { id: "STU-003", name: "Karan Malhotra", email: "karan@gmail.com", franchise: "Bright Minds", course: "Full Stack Dev", status: "Active" },
    { id: "STU-004", name: "Riya Verma", email: "riya@gmail.com", franchise: "Zenith Skill", course: "Machine Learning", status: "Pending" },
  ];

  const columns = [
    { header: "ID", accessor: "id" },
    { header: "Student Name", accessor: "name" },
    { header: "Email Address", accessor: "email" },
    { header: "Franchise Center", accessor: "franchise" },
    { header: "Enrolled Course", accessor: "course" },
    { header: "Status", accessor: "status", isBadge: true },
  ];

  return (
    <SuperAdminLayout>
      <PageHeader
        crumb="ADMIN PORTAL / STUDENTS"
        title="Global Student Directory"
        subtitle="Manage and monitor students enrolled across the entire network."
        actionLabel="+ Add Student"
        onAction={() => alert("Add Student")}
      />

      <DataTable
        title="All Enrolled Students"
        subtitle="Search and filter student records"
        columns={columns}
        data={students}
        actionButtonLabel="+ Add Student"
        onActionButtonClick={() => alert("Add Student")}
      />
    </SuperAdminLayout>
  );
}

