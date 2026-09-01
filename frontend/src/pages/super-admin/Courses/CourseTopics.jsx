import React from "react";
import PageHeader from "../../../components/PageHeader";
import DataTable from "../../../components/DataTable";

export default function CourseTopics() {
  const topicsData = [
    { id: "TOP-01", name: "Vector Spaces & Matrix Decompositions", module: "Math Foundations", course: "AI Pro", duration: "45 mins", difficulty: "Intermediate" },
    { id: "TOP-02", name: "Loss Functions & Optimization (SGD, Adam)", module: "ML Core", course: "AI Pro", duration: "60 mins", difficulty: "Hard" },
    { id: "TOP-03", name: "Convolutional Filters & Pooling Layers", module: "Deep Learning", course: "AI Pro", duration: "50 mins", difficulty: "Medium" },
    { id: "TOP-04", name: "Transformer Self-Attention Math", module: "Generative AI", course: "AI Pro", duration: "90 mins", difficulty: "Hard" },
    { id: "TOP-05", name: "REST APIs with FastAPI for ML Models", module: "Model Serving", course: "MLOps", duration: "40 mins", difficulty: "Easy" },
    { id: "TOP-06", name: "Vector Databases & Embeddings (Pinecone)", module: "Generative AI", course: "AI Pro", duration: "55 mins", difficulty: "Medium" },
  ];

  const columns = [
    { header: "Topic ID", accessor: "id" },
    { header: "Topic Name", accessor: "name" },
    { header: "Module", accessor: "module" },
    { header: "Course", accessor: "course" },
    { header: "Est. Duration", accessor: "duration" },
    { header: "Difficulty", accessor: "difficulty", isBadge: true },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        crumb="COURSES / TOPICS"
        title="Topic Breakdown & Lesson Plans"
        subtitle="Granular lecture topics, practical exercises, and lab sessions."
        actionLabel="+ Create Topic"
        onAction={() => alert("Create Topic")}
      />

      <DataTable
        title="All Course Topics"
        subtitle="Manage lecture scripts and topic mapping"
        columns={columns}
        data={topicsData}
        actionButtonLabel="Add New Topic"
        onActionButtonClick={() => alert("Add Topic")}
      />
    </div>
  );
}

