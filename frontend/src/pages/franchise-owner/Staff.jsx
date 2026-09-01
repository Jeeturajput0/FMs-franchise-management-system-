import React from "react";
import FranchiseOwnerLayout from "../../layouts/FranchiseOwnerLayout";
import PageHeader from "../../components/PageHeader";
import DataTable from "../../components/DataTable";
import { franchiseStaff } from "../../data/franchiseOwnerData";

export default function Staff() {
  const columns = [
    { header: "Staff ID", accessor: "id" },
    { header: "Name", accessor: "name" },
    { header: "Designation / Role", accessor: "role" },
    { header: "Department", accessor: "dept" },
    { header: "Contact Number", accessor: "phone" },
    { header: "Status", accessor: "status", isBadge: true },
  ];

  return (
    <FranchiseOwnerLayout>
      <PageHeader
        crumb="FRANCHISE OWNER / STAFF"
        title="Center Staff & Operations Team"
        subtitle="Manage counselor, academic heads, and IT staff members."
        actionLabel="+ Add Staff Member"
        onAction={() => alert("Add Staff Member")}
      />

      <DataTable
        title="Operational Staff Roster"
        subtitle="Franchise personnel details"
        columns={columns}
        data={franchiseStaff}
        actionButtonLabel="+ Add Staff"
        onActionButtonClick={() => alert("Add Staff")}
      />
    </FranchiseOwnerLayout>
  );
}

