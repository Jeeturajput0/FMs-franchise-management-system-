import React from "react";
import PageHeader from "../../../components/PageHeader";
import DataTable from "../../../components/DataTable";

export default function PaymentHistory() {
  const payments = [
    { invoice: "INV-9901", student: "Rahul Sharma", amount: "₹24,999", date: "01 Sep 2026", method: "UPI / Razorpay", type: "Full Course Fee", status: "Completed" },
    { invoice: "INV-9902", student: "Sneha Patel", amount: "₹2,500", date: "31 Aug 2026", method: "Net Banking", type: "Registration Fee", status: "Completed" },
    { invoice: "INV-9903", student: "Vikram Malhotra", amount: "₹1,500", date: "29 Aug 2026", method: "Credit Card", type: "Certificate Fee", status: "Completed" },
    { invoice: "INV-9904", student: "Ananya Iyer", amount: "₹12,500", date: "28 Aug 2026", method: "UPI / PhonePe", type: "Installment #2", status: "Completed" },
    { invoice: "INV-9905", student: "Rohan V.", amount: "₹2,500", date: "27 Aug 2026", method: "Cash at Center", type: "Registration Fee", status: "Pending" },
  ];

  const columns = [
    { header: "Invoice ID", accessor: "invoice" },
    { header: "Student Name", accessor: "student" },
    { header: "Fee Type", accessor: "type" },
    { header: "Amount", accessor: "amount" },
    { header: "Payment Date", accessor: "date" },
    { header: "Channel", accessor: "method" },
    { header: "Status", accessor: "status", isBadge: true },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        crumb="FEES / HISTORY"
        title="Fee Payment Transaction History"
        subtitle="Complete ledger of all payments collected across franchise centers and online gateway."
        actionLabel="Export CSV Report"
        onAction={() => alert("Exporting payments CSV")}
      />

      <DataTable
        title="Network Invoices & Receipts"
        subtitle="Search transactions by invoice, student, or payment status"
        columns={columns}
        data={payments}
      />
    </div>
  );
}
