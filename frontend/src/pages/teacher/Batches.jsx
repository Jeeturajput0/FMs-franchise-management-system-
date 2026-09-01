import React from "react";
import PageHeader from "../../components/PageHeader";
import DataTable from "../../components/DataTable";

export default function TeacherBatches() {
  const batches = [
    { id: "TB-01", name: "Python AI - Batch A", timing: "09:00 AM - 11:00 AM", students: 32, room: "AI Lab 1", progress: "82%", status: "Active" },
    { id: "TB-02", name: "AI Fundamentals - Batch B", timing: "11:30 AM - 01:30 PM", students: 28, room: "Classroom 2", progress: "65%", status: "Active" },
    { id: "TB-03", name: "Machine Learning - Batch C", timing: "02:30 PM - 04:30 PM", students: 24, room: "AI Lab 2", progress: "48%", status: "Active" },
    { id: "TB-04", name: "Deep Learning - Batch E", timing: "05:00 PM - 07:00 PM", students: 30, room: "Virtual Lab", progress: "30%", status: "Active" },
  ];

  const columns = [
    { header: "Batch Code", accessor: "id" },
    { header: "Batch Name", accessor: "name" },
    { header: "Schedule Time", accessor: "timing" },
    { header: "Enrolled", accessor: "students" },
    { header: "Classroom", accessor: "room" },
    { header: "Syllabus Progress", accessor: "progress" },
    { header: "Status", accessor: "status", isBadge: true },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        crumb="TEACHER / BATCHES"
        title="My Assigned Batches & Classes"
        subtitle="Manage daily lecture schedules, student rosters, and curriculum completion."
      />

      <DataTable
        title="Active Teaching Batches"
        subtitle="Assigned student cohorts"
        columns={columns}
        data={batches}
      />
    </div>
  );
}
