import React from "react";
import PageHeader from "../../components/PageHeader";
import DataTable from "../../components/DataTable";
import StatCard from "../../components/StatCard";
import { franchiseExpenses } from "../../data/franchiseOwnerData";

export default function FranchiseExpenses() {
  const columns = [
    { header: "Expense ID", accessor: "id" },
    { header: "Expense Title", accessor: "title" },
    { header: "Category", accessor: "category" },
    { header: "Payment Date", accessor: "date" },
    { header: "Amount", accessor: "amount" },
    { header: "Status", accessor: "status", isBadge: true },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        crumb="FRANCHISE / EXPENSES"
        title="Center Operational Expenses"
        subtitle="Manage facility rent, electricity, instructor salaries, and hardware maintenance."
        actionLabel="+ Record Expense"
        onAction={() => alert("Record Expense Modal")}
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <StatCard label="Total Monthly Expenses" value="₹1.85 L" change="-4.2% optimized" icon="trendingDown" tone="orange" />
        <StatCard label="Faculty Payroll" value="₹1.10 L" icon="users" tone="violet" />
        <StatCard label="Lab Infrastructure" value="₹45,000" icon="wallet" tone="blue" />
      </div>

      <DataTable
        title="Expense Voucher Ledger"
        subtitle="Monthly operational outflows"
        columns={columns}
        data={franchiseExpenses}
        actionButtonLabel="+ Add Expense"
        onActionButtonClick={() => alert("Record Expense")}
      />
    </div>
  );
}
