import React from "react";
import PageHeader from "../../components/PageHeader";
import DataTable from "../../components/DataTable";

export default function TeacherAssignments() {
  const assignments = [
    { id: "T-ASN-01", title: "Build Logistic Regression from Scratch", batch: "Batch A", dueDate: "15 Sep 2026", submitted: "28 / 32", pendingReview: 4, status: "Review in Progress" },
    { id: "T-ASN-02", title: "EDA on Housing Prices with Seaborn", batch: "Batch B", dueDate: "10 Sep 2026", submitted: "25 / 28", pendingReview: 1, status: "Review in Progress" },
    { id: "T-ASN-03", title: "Implement K-Means Clustering on Customer Data", batch: "Batch C", dueDate: "02 Sep 2026", submitted: "24 / 24", pendingReview: 0, status: "All Graded" },
  ];

  const columns = [
    { header: "Code", accessor: "id" },
    { header: "Assignment Title", accessor: "title" },
    { header: "Batch", accessor: "batch" },
    { header: "Submission Due", accessor: "dueDate" },
    { header: "Turned In", accessor: "submitted" },
    { header: "Pending Grading", accessor: "pendingReview" },
    { header: "Status", accessor: "status", isBadge: true },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        crumb="TEACHER / ASSIGNMENTS"
        title="Student Assignments & Homework"
        subtitle="Create assignments, set deadlines, and grade student submissions."
        actionLabel="+ Create Assignment"
        onAction={() => alert("Create Assignment Modal")}
      />

      <DataTable
        title="Classroom Homework Roster"
        subtitle="Manage student submissions and grade book"
        columns={columns}
        data={assignments}
        actionButtonLabel="+ Create Assignment"
        onActionButtonClick={() => alert("Create Assignment")}
      />
    </div>
  );
}
