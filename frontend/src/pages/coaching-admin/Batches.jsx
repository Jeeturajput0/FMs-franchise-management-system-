import React from "react";
import PageHeader from "../../components/PageHeader";
import DataTable from "../../components/DataTable";
import { coachingAdminBatches } from "../../data/coachingAdminData";

export default function Batches() {
  const columns = [
    { header: "Batch ID", accessor: "id" },
    { header: "Batch Name", accessor: "name" },
    { header: "Course Program", accessor: "course" },
    { header: "Assigned Teacher", accessor: "teacher" },
    { header: "Students Enrolled", accessor: "totalStudents" },
    { header: "Class Timing", accessor: "timing" },
    { header: "Status", accessor: "status", isBadge: true },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        crumb="COACHING PORTAL / BATCHES"
        title="Active Study Batches"
        subtitle="Schedule and organize course cohorts, classroom allocations, and timings."
        actionLabel="+ Create Batch"
        onAction={() => alert("Create Batch")}
      />

      <DataTable
        title="Running Cohort Batches"
        subtitle="Batch timings and student counts"
        columns={columns}
        data={coachingAdminBatches}
        actionButtonLabel="+ Create Batch"
        onActionButtonClick={() => alert("Create Batch")}
      />
    </div>
  );
}
