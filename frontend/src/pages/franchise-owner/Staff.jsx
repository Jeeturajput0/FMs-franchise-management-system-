import React from "react";
import PageHeader from "../../components/PageHeader";
import DataTable from "../../components/DataTable";
import { franchiseStaff } from "../../data/franchiseOwnerData";

export default function Staff() {
  const columns = [
    { header: "Staff ID", accessor: "id" },
    { header: "Staff Member", accessor: "name" },
    { header: "Designation", accessor: "role" },
    { header: "Monthly Salary", accessor: "salary" },
    { header: "Contact Number", accessor: "phone" },
    { header: "Status", accessor: "status", isBadge: true },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        crumb="FRANCHISE OWNER / STAFF"
        title="Center Staff & Faculty Roster"
        subtitle="Manage center counselors, lab technicians, and local instructors."
        actionLabel="+ Add Staff"
        onAction={() => alert("Add Staff")}
      />

      <DataTable
        title="Local Center Staff Directory"
        subtitle="Active personnel and payroll records"
        columns={columns}
        data={franchiseStaff}
        actionButtonLabel="+ Add Staff"
        onActionButtonClick={() => alert("Add Staff")}
      />
    </div>
  );
}
