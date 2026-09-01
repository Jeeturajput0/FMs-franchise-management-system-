import React from "react";
import PageHeader from "../../components/PageHeader";
import DataTable from "../../components/DataTable";

export default function FranchiseCertificates() {
  const certs = [
    { id: "FC-991", student: "Rahul Sharma", course: "Python for AI Specialist", date: "15 Aug 2026", qrCode: "QR-AIS-9982", status: "Verified & Issued" },
    { id: "FC-992", student: "Sneha Patel", course: "Data Analytics & PowerBI", date: "02 Jul 2026", qrCode: "QR-AIS-8840", status: "Verified & Issued" },
  ];

  const columns = [
    { header: "Certificate #", accessor: "id" },
    { header: "Student Name", accessor: "student" },
    { header: "Course Program", accessor: "course" },
    { header: "Issue Date", accessor: "date" },
    { header: "Security Code", accessor: "qrCode" },
    { header: "HQ Status", accessor: "status", isBadge: true },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        crumb="FRANCHISE / CERTIFICATES"
        title="Student Certificates & HQ Verifications"
        subtitle="Request official blockchain QR credentials for graduating scholars."
        actionLabel="Request Certificates"
        onAction={() => alert("Request Certificate from HQ")}
      />

      <DataTable
        title="Center Certificate Registry"
        subtitle="Approved graduation certificates"
        columns={columns}
        data={certs}
      />
    </div>
  );
}
