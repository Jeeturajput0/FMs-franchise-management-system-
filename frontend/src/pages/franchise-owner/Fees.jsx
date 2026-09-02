import React from "react";
import PageHeader from "../../components/PageHeader";
import DataTable from "../../components/DataTable";
import StatCard from "../../components/StatCard";

export default function FranchiseFees() {
  const feeTransactions = [
    { invoice: "F-INV-01", student: "Rahul Sharma", course: "Python AI Pro", amount: "₹35,000", royaltyShare: "₹5,250 (15%)", netEarned: "₹29,750", date: "01 Aug 2026", status: "Settled" },
    { invoice: "F-INV-02", student: "Sneha Patel", course: "Data Science", amount: "₹28,000", royaltyShare: "₹4,200 (15%)", netEarned: "₹23,800", date: "15 Jul 2026", status: "Settled" },
    { invoice: "F-INV-03", student: "Aman Gupta", course: "Full Stack AI", amount: "₹42,000", royaltyShare: "₹6,300 (15%)", netEarned: "₹35,700", date: "20 Jun 2026", status: "Settled" },
  ];

  const columns = [
    { header: "Receipt #", accessor: "invoice" },
    { header: "Student Name", accessor: "student" },
    { header: "Course Track", accessor: "course" },
    { header: "Gross Tuition", accessor: "amount" },
    { header: "HQ Royalty (15%)", accessor: "royaltyShare" },
    { header: "Net Franchise Share", accessor: "netEarned" },
    { header: "Status", accessor: "status", isBadge: true },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        crumb="FRANCHISE / FEES"
        title="Tuition Collections & Royalty Split"
        subtitle="Manage student fee collections and 15% automated HQ royalty distribution."
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <StatCard label="Gross Center Collection" value="₹24.8 L" change="+16.4%" icon="wallet" tone="green" />
        <StatCard label="Net Center Share (85%)" value="₹21.08 L" change="+16.4%" icon="wallet" tone="violet" />
        <StatCard label="HQ Royalty Paid (15%)" value="₹3.72 L" icon="chart" tone="orange" />
      </div>

      <DataTable
        title="Tuition Collection Ledger"
        subtitle="Receipts and revenue share breakdown"
        columns={columns}
        data={feeTransactions}
      />
    </div>
  );
}
