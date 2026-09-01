import React from "react";
import SuperAdminLayout from "../../../layouts/SuperAdminLayout";
import PageHeader from "../../../components/PageHeader";
import DataTable from "../../../components/DataTable";
import { superAdminFranchises } from "../../../data/superAdminData";

export default function FranchiseList() {
  const columns = [
    { header: "ID", accessor: "id" },
    { header: "Franchise Name", accessor: "name" },
    { header: "Location", accessor: "city" },
    { header: "Owner", accessor: "owner" },
    { header: "Students", accessor: "students" },
    { header: "Revenue", accessor: "revenue" },
    { header: "Status", accessor: "status", isBadge: true },
  ];

  return (
    <SuperAdminLayout>
      <PageHeader
        crumb="ADMIN PORTAL / FRANCHISES"
        title="Franchise Network Roster"
        subtitle="Manage all active and pending coaching franchises globally."
        actionLabel="+ Add Franchise"
        onAction={() => alert("Add Franchise modal")}
      />

      <DataTable
        title="All Franchises"
        subtitle="Filter and manage AI Scholars centers"
        columns={columns}
        data={superAdminFranchises}
        actionButtonLabel="+ Add Franchise"
        onActionButtonClick={() => alert("Add Franchise")}
      />
    </SuperAdminLayout>
  );
}

