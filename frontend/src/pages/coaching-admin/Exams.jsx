import React from "react";
import PageHeader from "../../components/PageHeader";
import DataTable from "../../components/DataTable";

export default function CoachingExams() {
  const exams = [
    { id: "EXM-301", title: "Monthly Assessment: Neural Networks", batch: "Batch A & B", date: "10 Sep 2026", duration: "60 mins", examiner: "Dr. Priya Sen", status: "Scheduled" },
    { id: "EXM-302", title: "Mid-Term Python Diagnostic Test", batch: "Batch C", date: "05 Sep 2026", duration: "45 mins", examiner: "Prof. Rajesh", status: "Active Today" },
    { id: "EXM-303", title: "Final Capstone AI Lab Exam", batch: "Batch A", date: "28 Aug 2026", duration: "120 mins", examiner: "Dr. Priya Sen", status: "Completed" },
  ];

  const columns = [
    { header: "Exam ID", accessor: "id" },
    { header: "Examination Title", accessor: "title" },
    { header: "Target Batch", accessor: "batch" },
    { header: "Scheduled Date", accessor: "date" },
    { header: "Duration", accessor: "duration" },
    { header: "Proctor / Examiner", accessor: "examiner" },
    { header: "Status", accessor: "status", isBadge: true },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        crumb="COACHING / EXAMS"
        title="Examinations & Internal Tests"
        subtitle="Schedule center quizzes, mock tests, and certification qualifying exams."
        actionLabel="Schedule Exam"
        onAction={() => alert("Schedule Exam Modal")}
      />

      <DataTable
        title="Center Examination Schedule"
        subtitle="Live and upcoming scheduled tests"
        columns={columns}
        data={exams}
        actionButtonLabel="+ Create Exam"
        onActionButtonClick={() => alert("Create Exam")}
      />
    </div>
  );
}
