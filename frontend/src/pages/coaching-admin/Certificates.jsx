import React from "react";
import PageHeader from "../../components/PageHeader";
import DataTable from "../../components/DataTable";

export default function CoachingCertificates() {
  const certs = [
    { id: "CRT-C101", student: "Rahul Sharma", course: "Python AI Pro", date: "28 Aug 2026", qrCode: "QR-AIS-8812", status: "Verified & Issued" },
    { id: "CRT-C102", student: "Sneha Patel", course: "Data Science", date: "25 Aug 2026", qrCode: "QR-AIS-8813", status: "Verified & Issued" },
    { id: "CRT-C103", student: "Aman Gupta", course: "Full Stack Dev", date: "20 Aug 2026", qrCode: "QR-AIS-8814", status: "Pending Verification" },
  ];

  const columns = [
    { header: "Certificate #", accessor: "id" },
    { header: "Student Name", accessor: "student" },
    { header: "Course Track", accessor: "course" },
    { header: "Issuance Date", accessor: "date" },
    { header: "Security Code", accessor: "qrCode" },
    { header: "Status", accessor: "status", isBadge: true },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        crumb="COACHING / CERTIFICATES"
        title="Student Certificates & Issuance"
        subtitle="Manage student course completion certificates and HQ approvals."
      />

      <DataTable
        title="Center Certificate Registry"
        subtitle="Issued and pending student certificates"
        columns={columns}
        data={certs}
        actionButtonLabel="Request Certificate"
        onActionButtonClick={() => alert("Request Certificate from HQ")}
      />
    </div>
  );
}
