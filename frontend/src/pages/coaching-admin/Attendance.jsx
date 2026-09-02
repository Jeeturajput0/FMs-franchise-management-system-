import React from "react";
import PageHeader from "../../components/PageHeader";
import DataTable from "../../components/DataTable";
import StatCard from "../../components/StatCard";

export default function CoachingAttendance() {
  const attendanceData = [
    { id: "ATT-101", batch: "Python AI - Batch A", date: "01 Sep 2026", present: "28 / 30", percentage: "93.3%", teacher: "Dr. Priya Sen", status: "Marked" },
    { id: "ATT-102", batch: "Data Science - Batch B", date: "01 Sep 2026", present: "24 / 25", percentage: "96.0%", teacher: "Prof. Rajesh", status: "Marked" },
    { id: "ATT-103", batch: "GenAI Master - Batch C", date: "01 Sep 2026", present: "18 / 20", percentage: "90.0%", teacher: "Dr. Priya Sen", status: "Marked" },
    { id: "ATT-104", batch: "Full Stack AI - Batch D", date: "01 Sep 2026", present: "0 / 22", percentage: "0.0%", teacher: "Er. Amit Shah", status: "Pending" },
  ];

  const columns = [
    { header: "Record ID", accessor: "id" },
    { header: "Batch Cohort", accessor: "batch" },
    { header: "Session Date", accessor: "date" },
    { header: "Present / Total", accessor: "present" },
    { header: "Attendance Rate", accessor: "percentage" },
    { header: "Faculty", accessor: "teacher" },
    { header: "Status", accessor: "status", isBadge: true },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        crumb="COACHING / ATTENDANCE"
        title="Student & Faculty Daily Attendance"
        subtitle="Track daily classroom attendance, biometric logs, and batch compliance."
        actionLabel="Take Attendance"
        onAction={() => alert("Take Attendance Modal")}
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <StatCard label="Average Attendance" value="94.2%" change="+2.1%" icon="userCheck" tone="green" />
        <StatCard label="Today's Active Batches" value="4 Batches" icon="calendar" tone="violet" />
        <StatCard label="Pending Submission" value="1 Batch" icon="clock" tone="orange" />
      </div>

      <DataTable
        title="Daily Attendance Logs"
        subtitle="Batch-wise attendance records for today"
        columns={columns}
        data={attendanceData}
        actionButtonLabel="+ Mark Attendance"
        onActionButtonClick={() => alert("Mark Attendance")}
      />
    </div>
  );
}
