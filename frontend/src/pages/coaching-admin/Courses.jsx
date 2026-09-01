import React from "react";
import PageHeader from "../../components/PageHeader";
import DataTable from "../../components/DataTable";

export default function CoachingCourses() {
  const courses = [
    { id: "CRS-01", title: "Python for Artificial Intelligence", batches: "2 Active", students: 58, instructor: "Dr. Priya Sen", duration: "12 Weeks", status: "Running" },
    { id: "CRS-02", title: "Data Analytics & PowerBI Masterclass", batches: "1 Active", students: 25, instructor: "Prof. Rajesh", duration: "8 Weeks", status: "Running" },
    { id: "CRS-03", title: "Full Stack AI Web Development", batches: "1 Active", students: 22, instructor: "Er. Amit Shah", duration: "16 Weeks", status: "Running" },
    { id: "CRS-04", title: "Generative AI & LLM Solutions", batches: "1 Active", students: 20, instructor: "Dr. Priya Sen", duration: "10 Weeks", status: "Running" },
  ];

  const columns = [
    { header: "Course ID", accessor: "id" },
    { header: "Course Name", accessor: "title" },
    { header: "Running Batches", accessor: "batches" },
    { header: "Enrolled Students", accessor: "students" },
    { header: "Lead Faculty", accessor: "instructor" },
    { header: "Duration", accessor: "duration" },
    { header: "Status", accessor: "status", isBadge: true },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        crumb="COACHING / COURSES"
        title="Center Active Courses"
        subtitle="Syllabus coverage and batch distribution across licensed AI Scholar programs."
      />

      <DataTable
        title="Enrolled Training Programs"
        subtitle="Manage program cohorts and syllabus milestones"
        columns={columns}
        data={courses}
      />
    </div>
  );
}
