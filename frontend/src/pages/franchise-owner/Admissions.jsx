import React from "react";
import PageHeader from "../../components/PageHeader";
import DataTable from "../../components/DataTable";
import { franchiseRecentAdmissions } from "../../data/franchiseOwnerData";

export default function Admissions() {
  const columns = [
    { header: "Admission ID", accessor: "id" },
    { header: "Student Name", accessor: "studentName" },
    { header: "Course Program", accessor: "course" },
    { header: "Admission Date", accessor: "date" },
    { header: "Initial Fee Paid", accessor: "feePaid" },
    { header: "Lead Source", accessor: "agent" },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        crumb="FRANCHISE OWNER / ADMISSIONS"
        title="Student Admissions & Enrollment"
        subtitle="Manage student applications and walk-in seat allocations for your center."
        actionLabel="+ New Admission"
        onAction={() => alert("New Admission")}
      />

      <DataTable
        title="Admissions Registry"
        subtitle="Franchise center admissions pipeline"
        columns={columns}
        data={franchiseRecentAdmissions}
        actionButtonLabel="+ New Admission"
        onActionButtonClick={() => alert("New Admission")}
      />
    </div>
  );
}
