import React from "react";
import PageHeader from "../../components/PageHeader";
import DataTable from "../../components/DataTable";
import StatCard from "../../components/StatCard";

export default function CoachingFees() {
  const feeRecords = [
    { invoice: "INV-C801", student: "Rahul Sharma", course: "Python AI", amount: "₹18,500", date: "01 Sep 2026", mode: "UPI", status: "Paid in Full" },
    { invoice: "INV-C802", student: "Sneha Patel", course: "Data Science", amount: "₹12,000", date: "31 Aug 2026", mode: "Cash", status: "Installment 1" },
    { invoice: "INV-C803", student: "Aman Gupta", course: "GenAI Master", amount: "₹15,000", date: "30 Aug 2026", mode: "Online Gateway", status: "Paid in Full" },
    { invoice: "INV-C804", student: "Rohan Verma", course: "Full Stack AI", amount: "₹8,000", date: "28 Aug 2026", mode: "Net Banking", status: "Overdue" },
  ];

  const columns = [
    { header: "Receipt #", accessor: "invoice" },
    { header: "Student Name", accessor: "student" },
    { header: "Course Track", accessor: "course" },
    { header: "Amount Paid", accessor: "amount" },
    { header: "Payment Date", accessor: "date" },
    { header: "Channel", accessor: "mode" },
    { header: "Status", accessor: "status", isBadge: true },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        crumb="COACHING / FEES"
        title="Center Fee Collection & Dues"
        subtitle="Manage student fee installments, receipts, and cash ledger."
        actionLabel="Record Fee Payment"
        onAction={() => alert("Record Fee Modal")}
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <StatCard label="Monthly Collection" value="₹4.85 L" change="+14.2%" icon="wallet" tone="green" />
        <StatCard label="Pending Installments" value="₹68,000" icon="clock" tone="orange" />
        <StatCard label="Paid Up Ratio" value="91.4%" change="+3.5%" icon="chart" tone="violet" />
      </div>

      <DataTable
        title="Center Fee Receipts"
        subtitle="Search transactions by student or receipt number"
        columns={columns}
        data={feeRecords}
        actionButtonLabel="+ Collect Payment"
        onActionButtonClick={() => alert("Collect Payment")}
      />
    </div>
  );
}
