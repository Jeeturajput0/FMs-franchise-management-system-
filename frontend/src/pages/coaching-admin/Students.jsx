import React from "react";
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
    <div className="space-y-6">
      <PageHeader
        crumb="COACHING PORTAL / STUDENTS"
        title="Institute Students Roster"
        subtitle="Manage all active student enrollments, batches, and fee payment status."
        actionLabel="+ Add Student"
        onAction={() => alert("Add Student")}
      />

      <DataTable
        title="Enrolled Center Students"
        subtitle="Filter by batch, attendance, and fee clearance"
        columns={columns}
        data={coachingAdminStudents}
        actionButtonLabel="+ Add Student"
        onActionButtonClick={() => alert("Add Student")}
      />
    </div>
  );
}
