import React from "react";
import SuperAdminLayout from "../../../layouts/SuperAdminLayout";
import PageHeader from "../../../components/PageHeader";
import DataTable from "../../../components/DataTable";

export default function CertificateList() {
  const certificates = [
    { certId: "CERT-AIS-9982", student: "Rahul Sharma", course: "Python for AI Specialist", issueDate: "15 Aug 2026", status: "QR Verified" },
    { certId: "CERT-AIS-8840", student: "Sneha Patel", course: "Data Analytics & PowerBI", issueDate: "02 Jul 2026", status: "QR Verified" },
    { certId: "CERT-AIS-7731", student: "Pooja Verma", course: "Full Stack Web Development", issueDate: "20 Jun 2026", status: "Pending Review" },
  ];

  const columns = [
    { header: "Certificate ID", accessor: "certId" },
    { header: "Student Name", accessor: "student" },
    { header: "Course Title", accessor: "course" },
    { header: "Issue Date", accessor: "issueDate" },
    { header: "Verification Status", accessor: "status", isBadge: true },
  ];

  return (
    <SuperAdminLayout>
      <PageHeader
        crumb="ADMIN PORTAL / CERTIFICATES"
        title="Issued Certificates & QR Verification"
        subtitle="Manage and verify official AI Scholars credentials."
        actionLabel="+ Issue Certificate"
        onAction={() => alert("Issue Certificate")}
      />

      <DataTable
        title="Official Certificate Registry"
        subtitle="Verifiable student credentials"
        columns={columns}
        data={certificates}
        actionButtonLabel="+ Issue Certificate"
        onActionButtonClick={() => alert("Issue Certificate")}
      />
    </SuperAdminLayout>
  );
}

