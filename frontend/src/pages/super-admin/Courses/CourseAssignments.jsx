import React from "react";
import PageHeader from "../../../components/PageHeader";
import DataTable from "../../../components/DataTable";

export default function CourseAssignments() {
  const assignments = [
    { id: "ASN-201", title: "Build CNN Classifier on CIFAR-10", course: "AI Pro", dueDate: "15 Sep 2026", submissions: "142 / 160", weightage: "15%", status: "Active" },
    { id: "ASN-202", title: "Implement RAG Pipeline with LangChain", course: "GenAI Master", dueDate: "22 Sep 2026", submissions: "89 / 110", weightage: "20%", status: "Active" },
    { id: "ASN-203", title: "Credit Card Fraud Detection ML Pipeline", course: "Data Science", dueDate: "05 Sep 2026", submissions: "205 / 205", weightage: "10%", status: "Graded" },
    { id: "ASN-204", title: "Autonomous Web Agent with Function Calling", course: "GenAI Master", dueDate: "30 Sep 2026", submissions: "12 / 110", weightage: "25%", status: "Draft" },
  ];

  const columns = [
    { header: "ID", accessor: "id" },
    { header: "Assignment Title", accessor: "title" },
    { header: "Course Track", accessor: "course" },
    { header: "Due Date", accessor: "dueDate" },
    { header: "Submissions", accessor: "submissions" },
    { header: "Weight", accessor: "weightage" },
    { header: "Status", accessor: "status", isBadge: true },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        crumb="COURSES / ASSIGNMENTS"
        title="Student Assignments & Capstone Projects"
        subtitle="Review submission deadlines, grading metrics, and project rubrics across all batches."
        actionLabel="+ New Assignment"
        onAction={() => alert("Create Assignment")}
      />

      <DataTable
        title="Coursework Assignments"
        subtitle="Manage grading deadlines and submission tracking"
        columns={columns}
        data={assignments}
        actionButtonLabel="Create Assignment"
        onActionButtonClick={() => alert("Create Assignment")}
      />
    </div>
  );
}

