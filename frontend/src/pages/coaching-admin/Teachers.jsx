import React from "react";
import CoachingAdminLayout from "../../layouts/CoachingAdminLayout";
import PageHeader from "../../components/PageHeader";
import DataTable from "../../components/DataTable";
import { coachingAdminTeachers } from "../../data/coachingAdminData";

export default function Teachers() {
  const columns = [
    { header: "Faculty ID", accessor: "id" },
    { header: "Teacher Name", accessor: "name" },
    { header: "Subject Domain", accessor: "subject" },
    { header: "Batches Assigned", accessor: "batches" },
    { header: "Total Students", accessor: "students" },
    { header: "Rating", accessor: "rating" },
    { header: "Status", accessor: "status", isBadge: true },
  ];

  return (
    <CoachingAdminLayout>
      <PageHeader
        crumb="COACHING PORTAL / TEACHERS"
        title="Faculty & Teachers Directory"
        subtitle="Manage institute teaching staff and assigned batches."
        actionLabel="+ Add Teacher"
        onAction={() => alert("Add Teacher")}
      />

      <DataTable
        title="Teaching Staff"
        subtitle="Faculty list and ratings"
        columns={columns}
        data={coachingAdminTeachers}
        actionButtonLabel="+ Add Teacher"
        onActionButtonClick={() => alert("Add Teacher")}
      />
    </CoachingAdminLayout>
  );
}

