import React from "react";
import PageHeader from "../../../components/PageHeader";
import DataTable from "../../../components/DataTable";
import StatCard from "../../../components/StatCard";

export default function CertificateFees() {
  const certFees = [
    { id: "CRT-301", student: "Karan Malhotra", certType: "AI Pro Professional Certificate", fee: "₹1,500", date: "01 Sep 2026", franchise: "Zenith Tech", status: "Paid" },
    { id: "CRT-302", student: "Sneha Patel", certType: "Data Science Mastery", fee: "₹1,500", date: "31 Aug 2026", franchise: "Apex AI", status: "Paid" },
    { id: "CRT-303", student: "Aman Gupta", certType: "GenAI Solutions Architect", fee: "₹2,000", date: "30 Aug 2026", franchise: "Quantum Skill", status: "Paid" },
  ];

  const columns = [
    { header: "Order ID", accessor: "id" },
    { header: "Student Name", accessor: "student" },
    { header: "Certification Track", accessor: "certType" },
    { header: "Issuance Fee", accessor: "fee" },
    { header: "Payment Date", accessor: "date" },
    { header: "Franchise Center", accessor: "franchise" },
    { header: "Status", accessor: "status", isBadge: true },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        crumb="FEES / CERTIFICATE"
        title="Certification Issuance Fees"
        subtitle="Tracking fees collected for blockchain-verified graduation credentials and hardcopy certificates."
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <StatCard label="Total Certificate Revenue" value="₹3.65 L" change="+21%" icon="award" tone="green" />
        <StatCard label="Credentials Issued" value="243" change="+32" icon="fileText" tone="violet" />
        <StatCard label="Pending Verifications" value="8" icon="clock" tone="orange" />
      </div>

      <DataTable
        title="Certificate Processing Fee Records"
        subtitle="Receipts issued for certified graduation badges"
        columns={columns}
        data={certFees}
      />
    </div>
  );
}

