import React from "react";
import PageHeader from "../../../components/PageHeader";
import DataTable from "../../../components/DataTable";
import { superAdminCourses } from "../../../data/superAdminData";
import { useNavigate } from "react-router-dom";

export default function CourseList() {
  const navigate = useNavigate();

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
        crumb="COURSES / OVERVIEW"
        title="Curriculum & Master Course Catalog"
        subtitle="Manage master learning tracks, AI certifications, and course syllabus across franchises."
        actionLabel="Create New Course"
        onAction={() => alert("Create New Course Modal")}
      />

      <DataTable
        title="Active Master Programs"
        subtitle="Filter and manage course syllabus, pricing and modules"
        columns={columns}
        data={superAdminCourses}
        actionButtonLabel="+ Add Course"
        onActionButtonClick={() => alert("Add Course")}
      />
    </div>
  );
}
