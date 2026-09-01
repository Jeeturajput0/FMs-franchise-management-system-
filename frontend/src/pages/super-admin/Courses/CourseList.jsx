import React from "react";
import SuperAdminLayout from "../../../layouts/SuperAdminLayout";
import PageHeader from "../../../components/PageHeader";
import DataTable from "../../../components/DataTable";
import { superAdminCourses } from "../../../data/superAdminData";

export default function CourseList() {
  const columns = [
    { header: "ID", accessor: "id" },
    { header: "Course Title", accessor: "title" },
    { header: "Category", accessor: "category" },
    { header: "Duration", accessor: "duration" },
    { header: "Enrolled Students", accessor: "students" },
    { header: "Fee Price", accessor: "price" },
    { header: "Status", accessor: "status", isBadge: true },
  ];

  return (
    <SuperAdminLayout>
      <PageHeader
        crumb="ADMIN PORTAL / COURSES"
        title="Curriculum & Courses Management"
        subtitle="Manage master course catalog across all franchises."
        actionLabel="+ Add Course"
        onAction={() => alert("Add Course")}
      />

      <DataTable
        title="Master Courses Roster"
        subtitle="Active programs and learning tracks"
        columns={columns}
        data={superAdminCourses}
        actionButtonLabel="+ Add Course"
        onActionButtonClick={() => alert("Add Course")}
      />
    </SuperAdminLayout>
  );
}

