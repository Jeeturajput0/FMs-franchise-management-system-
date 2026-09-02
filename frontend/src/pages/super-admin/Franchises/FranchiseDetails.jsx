import React from "react";
import PageHeader from "../../../components/PageHeader";
import StatCard from "../../../components/StatCard";
import DataTable from "../../../components/DataTable";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function FranchiseDetails() {
  const navigate = useNavigate();

  const franchiseInfo = {
    name: "Quantum Skill Academy",
    id: "FR-101",
    city: "Bengaluru, Karnataka",
    owner: "Dr. Alok Verma",
    phone: "+91 98765 11223",
    email: "contact@quantumacademy.com",
    status: "Active & Verified",
  };

  const students = [
    { id: "ST-01", name: "Rahul Sharma", course: "Python AI Pro", progress: "78%", status: "Active" },
    { id: "ST-02", name: "Ananya Roy", course: "Data Analytics", progress: "92%", status: "Active" },
    { id: "ST-03", name: "Karan Malhotra", course: "Full Stack Dev", progress: "64%", status: "Active" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <button
          onClick={() => navigate("/admin/franchises")}
          className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-white border border-slate-200 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        <PageHeader
          crumb="FRANCHISES / DETAILS"
          title={franchiseInfo.name}
          subtitle={`${franchiseInfo.city} • Center ID: ${franchiseInfo.id}`}
          actionLabel="Edit Franchise"
          onAction={() => navigate("/admin/franchises/edit")}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <StatCard label="Total Enrolled Students" value="1,842" change="+12% this mo" icon="users" tone="violet" />
        <StatCard label="Monthly Revenue" value="₹24.8L" change="Target Met" icon="wallet" tone="green" />
        <StatCard label="Active Instructors" value="18" change="4 AI Labs" icon="userCheck" tone="blue" />
      </div>

      <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs">
        <h3 className="font-bold text-slate-900 text-sm mb-4 pb-2 border-b border-slate-100">
          Franchise Contact & Verification Profile
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-xs">
          <div><span className="text-slate-400 block uppercase tracking-wider font-semibold mb-1">Director Name</span><b className="text-slate-800 text-sm">{franchiseInfo.owner}</b></div>
          <div><span className="text-slate-400 block uppercase tracking-wider font-semibold mb-1">Contact Phone</span><b className="text-slate-800 text-sm">{franchiseInfo.phone}</b></div>
          <div><span className="text-slate-400 block uppercase tracking-wider font-semibold mb-1">Official Email</span><b className="text-slate-800 text-sm">{franchiseInfo.email}</b></div>
          <div><span className="text-slate-400 block uppercase tracking-wider font-semibold mb-1">Status</span><b className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-md inline-block">{franchiseInfo.status}</b></div>
        </div>
      </div>

      <DataTable
        title="Enrolled Students at Quantum Skill Academy"
        subtitle="Current active batch roster"
        columns={[
          { header: "ID", accessor: "id" },
          { header: "Name", accessor: "name" },
          { header: "Course Program", accessor: "course" },
          { header: "Syllabus Progress", accessor: "progress" },
          { header: "Status", accessor: "status", isBadge: true },
        ]}
        data={students}
      />
    </div>
  );
}
