import React from "react";
import PageHeader from "../../../components/PageHeader";
import DataTable from "../../../components/DataTable";
import StatCard from "../../../components/StatCard";

export default function RegistrationFees() {
  const regData = [
    { id: "REG-801", student: "Aryan Mehra", course: "AI Pro", franchise: "Quantum Skill", fee: "₹2,500", date: "01 Sep 2026", status: "Paid" },
    { id: "REG-802", student: "Divya Shah", course: "GenAI Master", franchise: "Apex AI", fee: "₹2,500", date: "31 Aug 2026", status: "Paid" },
    { id: "REG-803", student: "Kunal Ghosh", course: "Full Stack AI", franchise: "Zenith Tech", fee: "₹2,500", date: "29 Aug 2026", status: "Paid" },
    { id: "REG-804", student: "Simran Kaur", course: "Data Science", franchise: "Future Minds", fee: "₹2,500", date: "27 Aug 2026", status: "Pending" },
  ];

  const columns = [
    { header: "Receipt ID", accessor: "id" },
    { header: "Student Name", accessor: "student" },
    { header: "Selected Program", accessor: "course" },
    { header: "Franchise Center", accessor: "franchise" },
    { header: "Reg. Amount", accessor: "fee" },
    { header: "Date", accessor: "date" },
    { header: "Status", accessor: "status", isBadge: true },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        crumb="FEES / REGISTRATION"
        title="Student Registration Fees"
        subtitle="Tracking initial onboarding and registration deposits from prospective scholars."
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <StatCard label="Total Reg. Collections" value="₹8.45 L" change="+12.4%" icon="wallet" tone="green" />
        <StatCard label="New Enrollees This Month" value="338" change="+24" icon="users" tone="blue" />
        <StatCard label="Pending Confirmations" value="14" icon="clock" tone="orange" />
      </div>

      <DataTable
        title="Registration Fee Records"
        subtitle="Receipts issued upon student seat booking"
        columns={columns}
        data={regData}
      />
    </div>
  );
}

