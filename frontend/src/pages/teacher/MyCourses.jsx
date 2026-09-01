import React from "react";
import TeacherLayout from "../../layouts/TeacherLayout";
import PageHeader from "../../components/PageHeader";
import ProgressBar from "../../components/ProgressBar";
import Button from "../../components/Button";

export default function MyCourses() {
  const courses = [
    { title: "Python Basics & Object Oriented Programming", batch: "Batch A", students: 32, progress: 82 },
    { title: "AI Fundamentals & Machine Learning Algorithms", batch: "Batch B", students: 28, progress: 65 },
    { title: "Supervised & Unsupervised Machine Learning", batch: "Batch C", students: 24, progress: 48 },
    { title: "Deep Learning & Computer Vision", batch: "Batch E", students: 30, progress: 30 },
  ];

  return (
    <TeacherLayout>
      <PageHeader
        crumb="FACULTY PORTAL / MY COURSES"
        title="Assigned Courses & Curriculum"
        subtitle="Manage your active teaching tracks, syllabus, and study materials."
        actionLabel="+ Upload Material"
        actionIcon="folder"
        onAction={() => alert("Upload Material")}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {courses.map((c, idx) => (
          <div key={idx} className="panel space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[11px] font-bold text-[#7658df] uppercase">{c.batch}</span>
                <h3 className="font-bold text-[#25213a] text-base mt-0.5">{c.title}</h3>
              </div>
              <span className="text-xs text-gray-500 font-semibold">{c.students} Students</span>
            </div>

            <ProgressBar value={c.progress} label="Syllabus Completion" />

            <div className="flex justify-end gap-2 pt-2 border-t border-gray-100">
              <Button size="sm" variant="secondary" icon="folder">
                Materials
              </Button>
              <Button size="sm" icon="fileText">
                Assignments
              </Button>
            </div>
          </div>
        ))}
      </div>
    </TeacherLayout>
  );
}

