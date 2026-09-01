import React from "react";
import PageHeader from "../../../components/PageHeader";
import DataTable from "../../../components/DataTable";

export default function CourseTests() {
  const tests = [
    { id: "TST-501", name: "Mid-Term Examination: Deep Learning", course: "AI Pro", questions: "50 MCQs + 2 Code", duration: "90 mins", passingMarks: "70%", status: "Scheduled" },
    { id: "TST-502", name: "Weekly Quiz 4: Vector Embeddings & RAG", course: "GenAI Master", questions: "25 MCQs", duration: "30 mins", passingMarks: "60%", status: "Live Now" },
    { id: "TST-503", name: "Final Certification Evaluation", course: "Data Science", questions: "60 MCQs + Case Study", duration: "120 mins", passingMarks: "75%", status: "Completed" },
    { id: "TST-504", name: "Python Diagnostic Readiness Test", course: "All Tracks", questions: "30 MCQs", duration: "45 mins", passingMarks: "50%", status: "Active" },
  ];

  const columns = [
    { header: "Test ID", accessor: "id" },
    { header: "Exam / Quiz Title", accessor: "name" },
    { header: "Associated Course", accessor: "course" },
    { header: "Structure", accessor: "questions" },
    { header: "Duration", accessor: "duration" },
    { header: "Passing Cutoff", accessor: "passingMarks" },
    { header: "Status", accessor: "status", isBadge: true },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        crumb="COURSES / TESTS"
        title="Examinations & Automated Quizzes"
        subtitle="Manage proctored exams, weekly tests, and certification qualification scorecards."
        actionLabel="+ Schedule Test"
        onAction={() => alert("Create Test")}
      />

      <DataTable
        title="Examination Hub"
        subtitle="Track live quizzes and schedule upcoming evaluation dates"
        columns={columns}
        data={tests}
        actionButtonLabel="Create New Test"
        onActionButtonClick={() => alert("Create Test")}
      />
    </div>
  );
}

