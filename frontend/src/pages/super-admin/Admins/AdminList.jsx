import React from "react";
import PageHeader from "../../../components/PageHeader";
import DataTable from "../../../components/DataTable";
import { superAdminUsers } from "../../../data/superAdminData";

export default function AdminList() {
  const columns = [
    { header: "ID", accessor: "id" },
    { header: "Admin / Staff Name", accessor: "name" },
    { header: "Email Address", accessor: "email" },
    {
      header: "Role Permission",
      accessor: "role",
      render: (row) => (
        <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wide bg-amber-100 text-amber-900 border border-amber-200">
          {row.role.replace("_", " ")}
        </span>
      ),
    },
    { header: "Branch / Org", accessor: "org" },
    { header: "Account Status", accessor: "status", isBadge: true },
    { header: "Last Activity", accessor: "lastActive" },
  ];

  const roleFilterOptions = [
    { label: "Super Admins", value: "super_admin" },
    { label: "Coaching Admins", value: "coaching_admin" },
    { label: "Teachers", value: "teacher" },
    { label: "Franchise Owners", value: "franchise_owner" },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        crumb="ADMINS / TEAM"
        title="Administrative Team & Role Permissions"
        subtitle="Manage access control, permissions, and security policies for HQ and regional staff."
        actionLabel="Add Admin User"
        onAction={() => alert("Add Admin User Modal")}
      />

      <DataTable
        title="Platform Staff & Regional Administrators"
        subtitle="Manage authorization levels and active sessions"
        columns={columns}
        data={superAdminUsers}
        filterOptions={roleFilterOptions}
        actionButtonLabel="+ Add Admin"
        onActionButtonClick={() => alert("Create Admin Account")}
      />
    </div>
  );
}
