import React from "react";
import PageHeader from "../../../components/PageHeader";
import DataTable from "../../../components/DataTable";
import { superAdminFranchises } from "../../../data/superAdminData";
import { useNavigate } from "react-router-dom";

export default function FranchiseList() {
  const navigate = useNavigate();

  const columns = [
    { header: "ID", accessor: "id" },
    { header: "Franchise Name", accessor: "name" },
    { header: "Location", accessor: "city" },
    { header: "Owner", accessor: "owner" },
    { header: "Students", accessor: "students" },
    { header: "Monthly Revenue", accessor: "revenue" },
    { header: "Status", accessor: "status", isBadge: true },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        crumb="FRANCHISES / VIEW"
        title="Franchise Network Roster"
        subtitle="Manage all 48 registered coaching centers and academic franchises globally."
        actionLabel="Register Franchise"
        onAction={() => navigate("/admin/franchises/add")}
      />

      <DataTable
        title="All AI Scholars Centers"
        subtitle="Search, filter and inspect franchise performance"
        columns={columns}
        data={superAdminFranchises}
        actionButtonLabel="Add New Franchise"
        onActionButtonClick={() => navigate("/admin/franchises/add")}
      />
    </div>
  );
}
