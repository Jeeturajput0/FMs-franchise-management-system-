import React from "react";
import PageHeader from "../../components/PageHeader";
import DataTable from "../../components/DataTable";

export default function StudentResults() {
  const myResults = [
    { test: "Module 1 Quiz: Python Foundations", date: "15 Aug 2026", score: "19 / 20", grade: "A+", status: "Passed" },
    { test: "Module 2 Test: Data Structures & OOPs", date: "22 Aug 2026", score: "18 / 20", grade: "A", status: "Passed" },
    { test: "Mid-Term ML Diagnostic Evaluation", date: "30 Aug 2026", score: "46 / 50", grade: "A+", status: "Passed" },
  ];

  const columns = [
    { header: "Exam / Assessment", accessor: "test" },
    { header: "Evaluation Date", accessor: "date" },
    { header: "Score", accessor: "score" },
    { header: "Grade", accessor: "grade" },
    { header: "Result Status", accessor: "status", isBadge: true },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        crumb="STUDENT / RESULTS"
        title="My Grades & Test Scorecards"
        subtitle="Track your academic performance, quiz rankings, and certification eligibility."
      />

      <DataTable
        title="Assessment History"
        subtitle="Published marks and evaluation breakdown"
        columns={columns}
        data={myResults}
      />
    </div>
  );
}
