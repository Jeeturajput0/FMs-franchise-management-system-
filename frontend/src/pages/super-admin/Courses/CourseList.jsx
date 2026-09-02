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
    <div className="space-y-6">
      <PageHeader
        crumb="ADMIN PORTAL / COURSES"
        title="Curriculum & Courses Management"
        subtitle="Manage master course catalog across all franchises."
        actionLabel="+ Add Course"
        onAction={() => alert("Add Course")}
      />

      {error && (
        <div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700">
          {error}
        </div>
      )}

      <DataTable
        title="Active Master Programs"
        subtitle="Filter and manage course syllabus, pricing and modules"
        columns={columns}
        data={items}
        actionButtonLabel="+ Add Course"
        onActionButtonClick={() => alert("Add Course")}
      />
    </SuperAdminLayout>
  );
}
