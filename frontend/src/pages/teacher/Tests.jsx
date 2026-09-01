import React from "react";
import PageHeader from "../../components/PageHeader";
import DataTable from "../../components/DataTable";

export default function TeacherTests() {
  const tests = [
    { id: "T-TST-01", title: "Python Basics Weekly Quiz", batch: "Batch A", date: "08 Sep 2026", questions: "20 MCQs", duration: "30 mins", status: "Scheduled" },
    { id: "T-TST-02", title: "Machine Learning Math Test", batch: "Batch B", date: "03 Sep 2026", questions: "15 Problems", duration: "45 mins", status: "Completed" },
  ];

  const columns = [
    { header: "Test ID", accessor: "id" },
    { header: "Quiz / Test Title", accessor: "title" },
    { header: "Batch", accessor: "batch" },
    { header: "Scheduled Date", accessor: "date" },
    { header: "Questions", accessor: "questions" },
    { header: "Time Limit", accessor: "duration" },
    { header: "Status", accessor: "status", isBadge: true },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        crumb="TEACHER / TESTS"
        title="Classroom Tests & Pop Quizzes"
        subtitle="Create automated quizzes and test student understanding."
        actionLabel="+ Create Quiz"
        onAction={() => alert("Create Quiz Modal")}
      />

      <DataTable
        title="My Quizzes & Evaluations"
        subtitle="Batch quizzes and marks"
        columns={columns}
        data={tests}
      />
    </div>
  );
}
