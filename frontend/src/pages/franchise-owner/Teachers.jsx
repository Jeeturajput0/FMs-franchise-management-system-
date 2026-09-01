import React from "react";
import PageHeader from "../../components/PageHeader";
import DataTable from "../../components/DataTable";

export default function FranchiseTeachers() {
  const teachers = [
    { id: "FT-01", name: "Dr. Priya Sen", department: "AI & ML", batches: "2 Batches", phone: "+91 98111 22334", status: "Active" },
    { id: "FT-02", name: "Prof. Rajesh Gupta", department: "Data Science", batches: "1 Batch", phone: "+91 98222 33445", status: "Active" },
    { id: "FT-03", name: "Er. Amit Shah", department: "Full Stack Web", batches: "1 Batch", phone: "+91 98333 44556", status: "Active" },
  ];

  const columns = [
    { header: "Faculty ID", accessor: "id" },
    { header: "Instructor Name", accessor: "name" },
    { header: "Department", accessor: "department" },
    { header: "Active Classes", accessor: "batches" },
    { header: "Phone", accessor: "phone" },
    { header: "Status", accessor: "status", isBadge: true },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        crumb="FRANCHISE / TEACHERS"
        title="Local Center Faculty Roster"
        subtitle="Manage assigned instructors and classroom schedules for your center."
      />

      <DataTable
        title="Faculty Members"
        subtitle="Active teachers and course tracks"
        columns={columns}
        data={teachers}
        actionButtonLabel="+ Add Faculty"
        onActionButtonClick={() => alert("Add Faculty")}
      />
    </div>
  );
}
