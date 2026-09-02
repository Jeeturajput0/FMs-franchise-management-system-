import React from "react";
import PageHeader from "../../components/PageHeader";
import DataTable from "../../components/DataTable";

export default function CoachingResults() {
  const results = [
    { id: "RES-901", student: "Rahul Sharma", exam: "Mid-Term Python", score: "94 / 100", grade: "A+", percentile: "98.2%", status: "Passed" },
    { id: "RES-902", student: "Sneha Patel", exam: "Mid-Term Python", score: "88 / 100", grade: "A", percentile: "92.0%", status: "Passed" },
    { id: "RES-903", student: "Aman Gupta", exam: "Mid-Term Python", score: "76 / 100", grade: "B+", percentile: "81.5%", status: "Passed" },
    { id: "RES-904", student: "Kunal Ghosh", exam: "Mid-Term Python", score: "42 / 100", grade: "C", percentile: "45.0%", status: "Retest Required" },
  ];

  const columns = [
    { header: "Result ID", accessor: "id" },
    { header: "Student Name", accessor: "student" },
    { header: "Examination", accessor: "exam" },
    { header: "Score", accessor: "score" },
    { header: "Grade", accessor: "grade" },
    { header: "Percentile", accessor: "percentile" },
    { header: "Evaluation", accessor: "status", isBadge: true },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        crumb="COACHING / RESULTS"
        title="Student Exam Scores & Performance"
        subtitle="Publish marks, generate report cards, and identify students requiring extra mentoring."
        actionLabel="Export Scorecards"
        onAction={() => alert("Export Scorecards CSV")}
      />

      <DataTable
        title="Published Scorecards"
        subtitle="Batch-wise examination evaluation ledger"
        columns={columns}
        data={results}
      />
    </div>
  );
}
