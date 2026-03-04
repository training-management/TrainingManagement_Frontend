import React, { useState } from "react";

const Report = () => {

  // Sample Performance Data
  const [reportData, setReportData] = useState({
    employeeName: "Rahul Sharma",
    department: "IT",
    totalProjects: 4,
    completedProjects: 3,
    totalTests: 5,
    averageScore: 72,
    totalAssignments: 6,
    submittedAssignments: 5
  });

  const [feedback, setFeedback] = useState("");
  const [message, setMessage] = useState("");

  // 🔹 Performance Rating Logic
  const getRating = () => {
    const projectRate = (reportData.completedProjects / reportData.totalProjects) * 100;
    const assignmentRate = (reportData.submittedAssignments / reportData.totalAssignments) * 100;
    const testRate = reportData.averageScore;

    const overall = (projectRate + assignmentRate + testRate) / 3;

    if (overall >= 80) return "Excellent";
    if (overall >= 60) return "Good";
    if (overall >= 40) return "Average";
    return "Needs Improvement";
  };

  const rating = getRating();

  const handleSaveFeedback = () => {
    if (!feedback) {
      setMessage("Please enter feedback before saving.");
      return;
    }
    setMessage("Feedback saved successfully!");
    setFeedback("");
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen my-6 mx-6">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Performance Report
        </h1>
        <p className="text-gray-600 mt-3">
          View your overall performance summary and feedback.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-3 gap-6 mb-8">

        <div className="bg-white p-5 rounded shadow">
          <h4>Projects Completion</h4>
          <p className="text-2xl font-bold">
            {reportData.completedProjects}/{reportData.totalProjects}
          </p>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <h4>Average Test Score</h4>
          <p className="text-2xl font-bold">
            {reportData.averageScore}%
          </p>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <h4>Assignments Submitted</h4>
          <p className="text-2xl font-bold">
            {reportData.submittedAssignments}/{reportData.totalAssignments}
          </p>
        </div>

      </div>

      {/* Overall Rating */}
      <div className="bg-white p-6 rounded shadow mb-8">
        <h2 className="text-xl font-semibold mb-4">Overall Performance Rating</h2>

        <div className={`text-2xl font-bold ${
          rating === "Excellent"
            ? "text-green-600"
            : rating === "Good"
            ? "text-blue-600"
            : rating === "Average"
            ? "text-yellow-600"
            : "text-red-600"
        }`}>
          {rating}
        </div>
      </div>

      {/* Feedback Section */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Manager Feedback</h2>

        <textarea
          placeholder="Write feedback here..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          className="border p-3 rounded w-full h-32"
        />

        <button
          onClick={handleSaveFeedback}
          className="mt-4 bg-black text-white px-5 py-2 rounded"
        >
          Save Feedback
        </button>
      </div>

      {message && (
        <div className="mt-6 bg-yellow-100 text-yellow-800 p-3 rounded">
          {message}
        </div>
      )}

    </div>
  );
};

export default Report;