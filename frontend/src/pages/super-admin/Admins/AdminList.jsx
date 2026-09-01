import React from "react";
import SuperAdminLayout from "../../../layouts/SuperAdminLayout";
import PageHeader from "../../../components/PageHeader";
import DataTable from "../../../components/DataTable";
import Badge from "../../../components/Badge";
import { superAdminUsers } from "../../../data/superAdminData";

export default function AdminList() {
  const columns = [
    { header: "ID", accessor: "id" },
    { header: "User Name", accessor: "name" },
    { header: "Email Address", accessor: "email" },
    {
      header: "Role",
      accessor: "role",
      render: (row) => (
        <Badge variant="purple">
          {row.role.replace("_", " ").toUpperCase()}
        </Badge>
      ),
    },
    { header: "Organization", accessor: "org" },
    { header: "Status", accessor: "status", isBadge: true },
    { header: "Last Active", accessor: "lastActive" },
  ];

  const roleFilterOptions = [
    { label: "Super Admins", value: "super_admin" },
    { label: "Coaching Admins", value: "coaching_admin" },
    { label: "Teachers", value: "teacher" },
    { label: "Students", value: "student" },
    { label: "Franchise Owners", value: "franchise_owner" },
  ];

  return (
    <SuperAdminLayout>
      <PageHeader
        crumb="ADMIN PORTAL / USER MANAGEMENT"
        title="Network User Management"
        subtitle="Control accounts and permissions across all 5 platform roles."
        actionLabel="+ Add New User"
        onAction={() => alert("Add New User")}
      />

      <DataTable
        title="User Accounts & Role Permissions"
        subtitle="Super Admins, Coaching Admins, Teachers, Students, Franchise Owners"
        columns={columns}
        data={superAdminUsers}
        filterOptions={roleFilterOptions}
        actionButtonLabel="+ Create Admin Account"
        onActionButtonClick={() => alert("Create Admin Account")}
      />
    </SuperAdminLayout>
  );
}

