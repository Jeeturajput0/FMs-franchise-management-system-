import React from "react";
import SuperAdminLayout from "../../../layouts/SuperAdminLayout";
import PageHeader from "../../../components/PageHeader";
import StatCard from "../../../components/StatCard";
import DataTable from "../../../components/DataTable";

export default function FranchiseDetails() {
  const franchiseInfo = {
    name: "TechVeda Academy",
    id: "FR-101",
    city: "Bengaluru, Karnataka",
    owner: "Arjun Kumar",
    phone: "+91 98765 11223",
    email: "contact@techveda.in",
    status: "Active",
  };

  const students = [
    { id: "ST-01", name: "Rahul Sharma", course: "Python AI", progress: "78%", status: "Active" },
    { id: "ST-02", name: "Ananya Roy", course: "Data Analytics", progress: "92%", status: "Active" },
    { id: "ST-03", name: "Karan Johar", course: "Full Stack Dev", progress: "64%", status: "Active" },
  ];

  return (
    <SuperAdminLayout>
      <PageHeader
        crumb="ADMIN / FRANCHISES / DETAILS"
        title={franchiseInfo.name}
        subtitle={`${franchiseInfo.city} • Center ID: ${franchiseInfo.id}`}
        actionLabel="Edit Franchise"
        onAction={() => alert("Edit Franchise")}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <StatCard label="Total Enrolled" value="1,842" change="+12% this mo" icon="users" tone="violet" />
        <StatCard label="Monthly Revenue" value="₹6.4L" change="Target Met" icon="wallet" tone="green" />
        <StatCard label="Active Teachers" value="18" change="4 Departments" icon="userCheck" tone="blue" />
      </div>

      <div className="panel mb-6">
        <h3 className="font-bold text-[#25213a] text-base mb-2">Franchise Contact & Profile</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
          <div><span className="text-gray-400 block">Owner Name</span><b>{franchiseInfo.owner}</b></div>
          <div><span className="text-gray-400 block">Phone</span><b>{franchiseInfo.phone}</b></div>
          <div><span className="text-gray-400 block">Email</span><b>{franchiseInfo.email}</b></div>
          <div><span className="text-gray-400 block">Status</span><b className="text-emerald-600">{franchiseInfo.status}</b></div>
        </div>
      </div>

      <DataTable
        title="Enrolled Students at TechVeda"
        subtitle="Current active batch roster"
        columns={[
          { header: "ID", accessor: "id" },
          { header: "Name", accessor: "name" },
          { header: "Course", accessor: "course" },
          { header: "Progress", accessor: "progress" },
          { header: "Status", accessor: "status", isBadge: true },
        ]}
        data={students}
      />
    </SuperAdminLayout>
  );
}

