import React from "react";
import PageHeader from "../../../components/PageHeader";
import DataTable from "../../../components/DataTable";

export default function CertificateList() {
  const certificates = [
    { certId: "CERT-AIS-9982", student: "Rahul Sharma", course: "Python for AI Specialist", issueDate: "15 Aug 2026", franchise: "Quantum Skill", status: "QR Verified" },
    { certId: "CERT-AIS-8840", student: "Sneha Patel", course: "Data Analytics & PowerBI", issueDate: "02 Jul 2026", franchise: "Apex AI", status: "QR Verified" },
    { certId: "CERT-AIS-7731", student: "Pooja Verma", course: "Full Stack Web Development", issueDate: "20 Jun 2026", franchise: "Zenith Tech", status: "Pending Review" },
    { certId: "CERT-AIS-6612", student: "Karan Malhotra", course: "GenAI Solutions Architect", issueDate: "01 Sep 2026", franchise: "Future Minds", status: "QR Verified" },
  ];

  const columns = [
    { header: "Certificate ID", accessor: "certId" },
    { header: "Student Name", accessor: "student" },
    { header: "Course Program", accessor: "course" },
    { header: "Franchise Center", accessor: "franchise" },
    { header: "Issue Date", accessor: "issueDate" },
    { header: "Verification Status", accessor: "status", isBadge: true },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        crumb="CERTIFICATES / REGISTRY"
        title="Issued Certificates & QR Verification"
        subtitle="Manage, generate, and verify official blockchain-backed AI Scholar credentials."
        actionLabel="Issue Certificate"
        onAction={() => alert("Issue Certificate Modal")}
      />

      <DataTable
        title="Official Certificate Registry"
        subtitle="Search verifiable student credentials and QR codes"
        columns={columns}
        data={certificates}
        actionButtonLabel="+ Generate Certificate"
        onActionButtonClick={() => alert("Issue Certificate")}
      />
    </div>
  );
}
