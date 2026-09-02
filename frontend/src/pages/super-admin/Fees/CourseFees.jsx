import React from "react";
import PageHeader from "../../../components/PageHeader";
import DataTable from "../../../components/DataTable";
import StatCard from "../../../components/StatCard";

export default function CourseFees() {
  const courseFeesData = [
    { id: "CFE-101", student: "Rahul Sharma", course: "AI Pro", totalFee: "₹35,000", paid: "₹35,000", due: "₹0", plan: "One-Time (Full)", status: "Paid in Full" },
    { id: "CFE-102", student: "Sneha Patel", course: "Data Analytics", totalFee: "₹28,000", paid: "₹14,000", due: "₹14,000", plan: "2 Installments", status: "Partial Due" },
    { id: "CFE-103", student: "Karan Malhotra", course: "Full Stack AI", totalFee: "₹42,000", paid: "₹21,000", due: "₹21,000", plan: "3 Installments", status: "Partial Due" },
    { id: "CFE-104", student: "Ananya Iyer", course: "GenAI Master", totalFee: "₹45,000", paid: "₹45,000", due: "₹0", plan: "One-Time (Full)", status: "Paid in Full" },
  ];

  const columns = [
    { header: "Account ID", accessor: "id" },
    { header: "Student Name", accessor: "student" },
    { header: "Course Track", accessor: "course" },
    { header: "Total Tuition", accessor: "totalFee" },
    { header: "Amount Paid", accessor: "paid" },
    { header: "Remaining Due", accessor: "due" },
    { header: "Payment Plan", accessor: "plan" },
    { header: "Status", accessor: "status", isBadge: true },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        crumb="FEES / COURSE"
        title="Course Tuition Fee Ledger"
        subtitle="Manage course tuition payments, installments, and outstanding balances."
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <StatCard label="Total Tuition Billed" value="₹1.18 Cr" change="+16.2%" icon="wallet" tone="violet" />
        <StatCard label="Collected to Date" value="₹94.6 L" change="+14.1%" icon="wallet" tone="green" />
        <StatCard label="Outstanding Receivables" value="₹23.4 L" icon="clock" tone="orange" />
      </div>

      <DataTable
        title="Course Tuition Accounts"
        subtitle="Track payment installments and dues"
        columns={columns}
        data={courseFeesData}
      />
    </div>
  );
}

