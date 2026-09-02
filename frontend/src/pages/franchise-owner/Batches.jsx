import React from "react";
import PageHeader from "../../components/PageHeader";
import DataTable from "../../components/DataTable";

export default function FranchiseBatches() {
  const batches = [
    { id: "FB-01", name: "Python AI - Morning Batch", timing: "09:00 AM - 11:00 AM", students: 30, lab: "Lab 1", teacher: "Dr. Priya Sen", status: "Running" },
    { id: "FB-02", name: "Python AI - Evening Batch", timing: "05:00 PM - 07:00 PM", students: 28, lab: "Lab 2", teacher: "Dr. Priya Sen", status: "Running" },
    { id: "FB-03", name: "Data Science - Weekend Batch", timing: "10:00 AM - 02:00 PM (Sat/Sun)", students: 25, lab: "Lab 1", teacher: "Prof. Rajesh", status: "Running" },
  ];

  const columns = [
    { header: "Batch Code", accessor: "id" },
    { header: "Batch Name", accessor: "name" },
    { header: "Timing", accessor: "timing" },
    { header: "Capacity", accessor: "students" },
    { header: "Lab Room", accessor: "lab" },
    { header: "Instructor", accessor: "teacher" },
    { header: "Status", accessor: "status", isBadge: true },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        crumb="FRANCHISE / BATCHES"
        title="Classroom Cohorts & Batches"
        subtitle="Schedule center batches and lab room allocations."
        actionLabel="+ Create Batch"
        onAction={() => alert("Create Batch Modal")}
      />

      <DataTable
        title="Center Running Batches"
        subtitle="Batch timings and student capacities"
        columns={columns}
        data={batches}
      />
    </div>
  );
}
