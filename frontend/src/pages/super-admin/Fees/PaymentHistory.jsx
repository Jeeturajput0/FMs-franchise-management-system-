import React from "react";
import SuperAdminLayout from "../../../layouts/SuperAdminLayout";
import PageHeader from "../../../components/PageHeader";
import DataTable from "../../../components/DataTable";

export default function PaymentHistory() {
  const payments = [
    { invoice: "INV-9901", student: "Rahul Sharma", amount: "₹24,999", date: "01 Sep 2026", method: "UPI / GPay", status: "Completed" },
    { invoice: "INV-9902", student: "Sneha Patel", amount: "₹18,500", date: "31 Aug 2026", method: "Net Banking", status: "Completed" },
    { invoice: "INV-9903", student: "Vikram Malhotra", amount: "₹15,000", date: "29 Aug 2026", method: "Credit Card", status: "Completed" },
    { invoice: "INV-9904", student: "Ananya Iyer", amount: "₹5,000", date: "28 Aug 2026", method: "Cash Deposit", status: "Pending" },
  ];

  const columns = [
    { header: "Invoice ID", accessor: "invoice" },
    { header: "Student Name", accessor: "student" },
    { header: "Amount Paid", accessor: "amount" },
    { header: "Payment Date", accessor: "date" },
    { header: "Payment Method", accessor: "method" },
    { header: "Status", accessor: "status", isBadge: true },
  ];

  return (
    <SuperAdminLayout>
      <PageHeader
        crumb="ADMIN PORTAL / FEES / HISTORY"
        title="Fee Payment Transactions History"
        subtitle="Full log of registration, course, and certificate payments."
        actionLabel="Export Records"
        onAction={() => alert("Exporting payments CSV")}
        actionIcon="download"
      />

      <DataTable
        title="All System Invoices"
        subtitle="Network revenue transaction records"
        columns={columns}
        data={payments}
      />
    </SuperAdminLayout>
  );
}

