import React from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import StatCard from "../../components/StatCard";
import ProgressBar from "../../components/ProgressBar";
import QuickActions from "../../components/dashboard/QuickActions";
import {
  studentProfile,
  studentStats,
  studentCourses,
  studentAssignments,
  studentUpcomingTests,
} from "../../data/studentData";
import { Play, FileText, Award, Clock } from "lucide-react";

export default function StudentDashboard() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <PageHeader
        crumb="STUDENT LMS / DASHBOARD"
        title={`Welcome back, ${studentProfile.name} 👋`}
        subtitle="Continue your AI and coding learning journey and build real projects."
        actionLabel="Continue Learning"
        actionIcon="play"
        onAction={() => navigate("/dashboard/student/player")}
      />

      <QuickActions
        actions={[
          { label: "Resume Course", onClick: () => navigate("/dashboard/student/player"), variant: "primary" },
          { label: "Take Quiz / Test", onClick: () => alert("Start Test") },
          { label: "Submit Assignment", onClick: () => alert("Submit Assignment") },
          { label: "My Certificates", onClick: () => alert("Download Certificate") },
        ]}
      />

      {/* Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {studentStats.map((st, idx) => (
          <StatCard key={idx} {...st} />
        ))}
      </section>

      {/* Continue Learning Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-6 rounded-2xl shadow-lg border border-slate-800">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
              IN PROGRESS
            </span>
            <h2 className="text-xl font-bold text-white mt-2">
              Python for Artificial Intelligence & Machine Learning
            </h2>
            <p className="text-xs text-slate-300 mt-1">
              Module 8: Deep Convolutional Neural Networks & Computer Vision
            </p>
          </div>
          <button
            onClick={() => navigate("/dashboard/student/player")}
            className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-md transition-all cursor-pointer"
          >
            <Play className="w-4 h-4 fill-slate-950" />
            <span>Resume Lesson</span>
          </button>
        </div>
        <div className="mt-5">
          <ProgressBar value={78} />
        </div>
      </div>

      {/* My Courses & Upcoming Tests */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Course Cards */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
            <div>
              <h3 className="text-sm font-bold text-slate-900">Enrolled Programs</h3>
              <p className="text-xs text-slate-500">Active learning modules & track progress</p>
            </div>
            <button
              type="button"
              className="text-xs text-amber-600 font-bold hover:underline"
              onClick={() => navigate("/dashboard/student/courses")}
            >
              View all
            </button>
          </div>

          <div className="space-y-3">
            {studentCourses.map((c) => (
              <div key={c.id} className="p-4 border border-slate-100 rounded-xl bg-slate-50 space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-xs text-slate-900">{c.title}</h4>
                    <p className="text-[11px] text-slate-500">Faculty: {c.instructor}</p>
                  </div>
                  <span className="text-xs font-bold text-amber-600">{c.progress}%</span>
                </div>
                <ProgressBar value={c.progress} showValue={false} />
                <div className="flex justify-between items-center text-[11px] pt-1">
                  <span className="text-slate-400">Next: {c.nextLesson}</span>
                  <button
                    onClick={() => navigate("/dashboard/student/player")}
                    className="text-amber-600 font-bold hover:underline"
                  >
                    Watch Lesson →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pending Assignments & Tests */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
            <div>
              <h3 className="text-sm font-bold text-slate-900">Pending Assignments</h3>
              <p className="text-xs text-slate-500">Upcoming homework & project deadlines</p>
            </div>
            <button type="button" className="text-xs text-amber-600 font-bold hover:underline">
              View all
            </button>
          </div>

          <div className="space-y-2.5 mb-5">
            {studentAssignments.map((asn) => (
              <div key={asn.id} className="p-3 border border-slate-100 rounded-xl bg-slate-50 flex flex-col gap-1 text-xs">
                <div className="flex justify-between items-start">
                  <b className="text-slate-800">{asn.title}</b>
                  <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded-full">
                    {asn.status}
                  </span>
                </div>
                <small className="text-slate-500">{asn.course}</small>
                <div className="flex justify-between items-center text-[11px] mt-1">
                  <span className="text-rose-600 font-semibold">Due: {asn.dueDate}</span>
                  <button className="text-amber-600 font-bold hover:underline">
                    Submit →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
