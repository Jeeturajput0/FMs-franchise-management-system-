import React from "react";
import { useNavigate } from "react-router-dom";
import StudentLayout from "../../layouts/StudentLayout";
import PageHeader from "../../components/PageHeader";
import StatCard from "../../components/StatCard";
import ProgressBar from "../../components/ProgressBar";
import Button from "../../components/Button";
import QuickActions from "../../components/dashboard/QuickActions";
import {
  studentProfile,
  studentStats,
  studentCourses,
  studentAssignments,
  studentUpcomingTests,
} from "../../data/studentData";

export default function StudentDashboard() {
  const navigate = useNavigate();

  return (
    <StudentLayout>
      <PageHeader
        crumb="STUDENT LMS / DASHBOARD"
        title={`Welcome back, ${studentProfile.name} 👋`}
        subtitle="Continue your learning journey and keep building your skills."
        actionLabel="Continue Learning"
        actionIcon="play"
        onAction={() => navigate("/dashboard/student/player")}
      />

      <QuickActions
        actions={[
          { label: "Continue Learning", icon: "play", onClick: () => navigate("/dashboard/student/player") },
          { label: "Start Test", icon: "clock", onClick: () => alert("Start Test") },
          { label: "Submit Assignment", icon: "fileText", onClick: () => alert("Submit Assignment") },
          { label: "Download Certificate", icon: "award", onClick: () => alert("Download Certificate") },
        ]}
      />

      {/* Cards */}
      <section className="stats-grid">
        {studentStats.map((st, idx) => (
          <StatCard key={idx} {...st} />
        ))}
      </section>

      {/* Continue Learning Banner */}
      <div className="panel bg-gradient-to-r from-[#282146] to-[#45367b] text-white p-6 rounded-2xl mb-6 shadow-lg">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-[#a890f5]">
              IN PROGRESS
            </span>
            <h2 className="text-xl font-bold text-white mt-1">
              Python for Artificial Intelligence & ML
            </h2>
            <p className="text-xs text-gray-300 mt-1">
              Module 8: Decision Trees & Random Forests
            </p>
          </div>
          <Button
            variant="primary"
            icon="play"
            onClick={() => navigate("/dashboard/student/player")}
          >
            Resume Lesson
          </Button>
        </div>
        <div className="mt-4">
          <ProgressBar value={78} />
        </div>
      </div>

      {/* My Courses & Upcoming Tests */}
      <section className="dashboard-grid">
        {/* Course Cards */}
        <article className="panel">
          <div className="panel-head">
            <div>
              <h3>Enrolled Courses</h3>
              <p>Active learning modules & track progress</p>
            </div>
            <button type="button" className="text-button" onClick={() => navigate("/dashboard/student/courses")}>
              View all
            </button>
          </div>

          <div className="space-y-4">
            {studentCourses.map((c) => (
              <div key={c.id} className="p-4 border border-gray-100 rounded-xl bg-gray-50/50 space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-xs text-[#25213a]">{c.title}</h4>
                    <p className="text-[11px] text-gray-500">Faculty: {c.instructor}</p>
                  </div>
                  <span className="text-xs font-bold text-[#7658df]">{c.progress}%</span>
                </div>
                <ProgressBar value={c.progress} showValue={false} />
                <div className="flex justify-between items-center text-[11px] pt-1">
                  <span className="text-gray-400">Next: {c.nextLesson}</span>
                  <button
                    onClick={() => navigate("/dashboard/student/player")}
                    className="text-[#7658df] font-semibold hover:underline"
                  >
                    Watch Lesson →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </article>

        {/* Pending Assignments & Tests */}
        <article className="panel">
          <div className="panel-head">
            <div>
              <h3>Pending Assignments</h3>
              <p>Upcoming homework & project submissions</p>
            </div>
            <button type="button" className="text-button">
              View all
            </button>
          </div>

          <div className="space-y-3 mb-6">
            {studentAssignments.map((asn) => (
              <div key={asn.id} className="p-3 border border-gray-100 rounded-xl bg-white flex flex-col gap-1 text-xs">
                <div className="flex justify-between items-start">
                  <b className="text-[#25213a]">{asn.title}</b>
                  <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded-full">
                    {asn.status}
                  </span>
                </div>
                <small className="text-gray-500">{asn.course}</small>
                <div className="flex justify-between items-center text-[11px] mt-1">
                  <span className="text-rose-600 font-medium">Due: {asn.dueDate}</span>
                  <button className="text-[#7658df] font-bold hover:underline">
                    Submit →
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-100 pt-4">
            <h4 className="font-bold text-xs text-[#25213a] mb-2">Upcoming Tests</h4>
            {studentUpcomingTests.map((t) => (
              <div key={t.id} className="p-3 border border-purple-100 rounded-xl bg-[#faf9fe] text-xs flex justify-between items-center">
                <div>
                  <b className="text-[#25213a] block">{t.title}</b>
                  <small className="text-gray-500">{t.date} at {t.time}</small>
                </div>
                <Button size="sm" icon="play">
                  Start
                </Button>
              </div>
            ))}
          </div>
        </article>
      </section>
    </StudentLayout>
  );
}

