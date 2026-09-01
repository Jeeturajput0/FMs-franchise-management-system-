import React from "react";
import CoachingAdminLayout from "../../layouts/CoachingAdminLayout";
import PageHeader from "../../components/PageHeader";
import DataTable from "../../components/DataTable";
import { coachingAdminStudents } from "../../data/coachingAdminData";

export default function Students() {
  const columns = [
    { header: "Student ID", accessor: "id" },
    { header: "Name", accessor: "name" },
    { header: "Course", accessor: "course" },
    { header: "Batch", accessor: "batch" },
    { header: "Attendance Rate", accessor: "attendance" },
    { header: "Fee Status", accessor: "feeStatus" },
    { header: "Status", accessor: "status", isBadge: true },
  ];

  return (
    <CoachingAdminLayout>
      <PageHeader
        crumb="COACHING PORTAL / STUDENTS"
        title="Institute Students"
        subtitle="Manage all active student enrollments, batches, and fees."
        actionLabel="+ Add Student"
        onAction={() => alert("Add Student")}
      />

      <DataTable
        title="Student Roster"
        subtitle="Enrolled students list"
        columns={columns}
        data={coachingAdminStudents}
        actionButtonLabel="+ Add Student"
        onActionButtonClick={() => alert("Add Student")}
      />
    </CoachingAdminLayout>
  );
}

