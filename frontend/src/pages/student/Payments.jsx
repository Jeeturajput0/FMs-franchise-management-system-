import React from "react";
import PageHeader from "../../components/PageHeader";
import DataTable from "../../components/DataTable";

export default function StudentPayments() {
  const receipts = [
    { id: "REC-ST901", feeType: "Course Tuition Fee (Full)", amount: "₹24,999", date: "01 Aug 2026", mode: "UPI / Razorpay", status: "Paid" },
    { id: "REC-ST902", feeType: "Registration & Kit Fee", amount: "₹2,500", date: "15 Jul 2026", mode: "UPI", status: "Paid" },
  ];

  const columns = [
    { header: "Receipt ID", accessor: "id" },
    { header: "Payment For", accessor: "feeType" },
    { header: "Amount Paid", accessor: "amount" },
    { header: "Transaction Date", accessor: "date" },
    { header: "Channel", accessor: "mode" },
    { header: "Status", accessor: "status", isBadge: true },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        crumb="STUDENT / PAYMENTS"
        title="My Fee Payment Receipts"
        subtitle="Tuition fee history, receipts, and outstanding dues."
      />

      <DataTable
        title="Payment Invoices & Receipts"
        subtitle="Download official tax invoices and payment slips"
        columns={columns}
        data={receipts}
      />
    </div>
  );
}
