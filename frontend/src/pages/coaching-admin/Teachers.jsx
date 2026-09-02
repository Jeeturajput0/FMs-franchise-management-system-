import React from "react";
import PageHeader from "../../components/PageHeader";
import DataTable from "../../components/DataTable";
import { coachingAdminTeachers } from "../../data/coachingAdminData";

export default function Teachers() {
  const columns = [
    { header: "Faculty ID", accessor: "id" },
    { header: "Teacher Name", accessor: "name" },
    { header: "Subject / Track", accessor: "subject" },
    { header: "Active Batches", accessor: "batches" },
    { header: "Contact Email", accessor: "email" },
    { header: "Status", accessor: "status", isBadge: true },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        crumb="COACHING PORTAL / TEACHERS"
        title="Faculty & Teachers Directory"
        subtitle="Manage assigned subjects, teacher batches, and daily attendance."
        actionLabel="+ Add Teacher"
        onAction={() => alert("Add Teacher")}
      />

      <DataTable
        title="Institute Faculty Members"
        subtitle="Subject instructors and class coordinators"
        columns={columns}
        data={coachingAdminTeachers}
        actionButtonLabel="+ Add Teacher"
        onActionButtonClick={() => alert("Add Teacher")}
      />
    </div>
  );
}
