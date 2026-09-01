import React from "react";
import PageHeader from "../../components/PageHeader";
import DataTable from "../../components/DataTable";

export default function TeacherResults() {
  const results = [
    { id: "TR-101", student: "Rahul Sharma", test: "Python Weekly Quiz", score: "19 / 20", grade: "A+", percentile: "95%", status: "Passed" },
    { id: "TR-102", student: "Sneha Patel", test: "Python Weekly Quiz", score: "18 / 20", grade: "A", percentile: "90%", status: "Passed" },
    { id: "TR-103", student: "Aman Gupta", test: "Python Weekly Quiz", score: "15 / 20", grade: "B", percentile: "75%", status: "Passed" },
  ];

  const columns = [
    { header: "Record #", accessor: "id" },
    { header: "Student Name", accessor: "student" },
    { header: "Test / Quiz", accessor: "test" },
    { header: "Marks", accessor: "score" },
    { header: "Grade", accessor: "grade" },
    { header: "Percentile", accessor: "percentile" },
    { header: "Status", accessor: "status", isBadge: true },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        crumb="TEACHER / RESULTS"
        title="Student Marks & Evaluations"
        subtitle="Review grades and evaluate learning outcomes."
      />

      <DataTable
        title="Batch Evaluation Ledger"
        subtitle="Recent quiz marks and assignment scores"
        columns={columns}
        data={results}
      />
    </div>
  );
}
