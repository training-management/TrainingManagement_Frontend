import React, { useState } from "react";

const PerformanceReports = () => {

  const [reports, setReports] = useState([
    {
      id: "EMP-001",
      name: "Rahul Sharma",
      department: "IT",
      reviewPeriod: "Jan 2026",
      rating: 4.5,
      feedback: "Excellent technical performance.",
      status: "Excellent"
    },
    {
      id: "EMP-002",
      name: "Priya Singh",
      department: "HR",
      reviewPeriod: "Jan 2026",
      rating: 3.8,
      feedback: "Strong leadership skills.",
      status: "Good"
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    department: "",
    reviewPeriod: "",
    rating: "",
    feedback: ""
  });

  // Auto Status Generator
  const getStatus = (rating) => {
    if (rating >= 4.5) return "Excellent";
    if (rating >= 3) return "Good";
    return "Needs Improvement";
  };

  const handleAddReport = () => {

    if (
      !formData.id ||
      !formData.name ||
      !formData.department ||
      !formData.reviewPeriod ||
      formData.rating === "" ||
      !formData.feedback
    ) {
      setMessage("All fields are required.");
      return;
    }

    if (formData.rating < 1 || formData.rating > 5) {
      setMessage("Rating must be between 1 and 5.");
      return;
    }

    const newReport = {
      ...formData,
      rating: Number(formData.rating),
      status: getStatus(Number(formData.rating))
    };

    setReports([...reports, newReport]);

    setFormData({
      id: "",
      name: "",
      department: "",
      reviewPeriod: "",
      rating: "",
      feedback: ""
    });

    setShowForm(false);
    setMessage("Performance report added successfully!");
  };

  const totalReports = reports.length;

  const avgRating = totalReports > 0
    ? (reports.reduce((sum, r) => sum + r.rating, 0) / totalReports).toFixed(2)
    : 0;

  const excellentCount = reports.filter(r => r.status === "Excellent").length;

  return (
    <div className="p-8 bg-gray-100 min-h-screen my-6">

      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">
          Performance Reports – HR Panel
        </h1>

        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-black text-white px-5 py-2 rounded"
        >
          + Add Report
        </button>
      </div>

      {/* Form */}
      {showForm && (
        <div className="bg-white p-6 rounded shadow mb-8">
          <h2 className="text-xl font-semibold mb-4">Add Performance Report</h2>

          <div className="grid grid-cols-2 gap-4">

            <input
              type="text"
              placeholder="Employee ID"
              className="border p-2 rounded"
              value={formData.id}
              onChange={(e)=>setFormData({...formData,id:e.target.value})}
            />

            <input
              type="text"
              placeholder="Employee Name"
              className="border p-2 rounded"
              value={formData.name}
              onChange={(e)=>setFormData({...formData,name:e.target.value})}
            />

            <input
              type="text"
              placeholder="Department"
              className="border p-2 rounded"
              value={formData.department}
              onChange={(e)=>setFormData({...formData,department:e.target.value})}
            />

            <input
              type="text"
              placeholder="Review Period (e.g. Jan 2026)"
              className="border p-2 rounded"
              value={formData.reviewPeriod}
              onChange={(e)=>setFormData({...formData,reviewPeriod:e.target.value})}
            />

            <input
              type="number"
              step="0.1"
              placeholder="Rating (1-5)"
              className="border p-2 rounded"
              value={formData.rating}
              onChange={(e)=>setFormData({...formData,rating:e.target.value})}
            />

            <textarea
              placeholder="Performance Feedback"
              className="border p-2 rounded col-span-2"
              value={formData.feedback}
              onChange={(e)=>setFormData({...formData,feedback:e.target.value})}
            />
          </div>

          <button
            onClick={handleAddReport}
            className="mt-4 bg-blue-600 text-white px-5 py-2 rounded"
          >
            Save Report
          </button>
        </div>
      )}

      {/* Overview Cards */}
      <div className="grid grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-5 rounded shadow">
          <h4>Total Reports</h4>
          <p className="text-2xl font-bold">{totalReports}</p>
        </div>

        <div className="bg-blue-100 p-5 rounded">
          <h4>Average Rating</h4>
          <p className="text-2xl font-bold">{avgRating}</p>
        </div>

        <div className="bg-green-100 p-5 rounded">
          <h4>Excellent Performers</h4>
          <p className="text-2xl font-bold">{excellentCount}</p>
        </div>
      </div>

      {/* Reports Table */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Performance Records</h2>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="border p-3 text-left">Employee ID</th>
                <th className="border p-3 text-left">Name</th>
                <th className="border p-3 text-left">Department</th>
                <th className="border p-3 text-left">Review Period</th>
                <th className="border p-3 text-left">Rating</th>
                <th className="border p-3 text-left">Status</th>
              </tr>
            </thead>

            <tbody>
              {reports.map((rep, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border p-3">{rep.id}</td>
                  <td className="border p-3 font-semibold">{rep.name}</td>
                  <td className="border p-3">{rep.department}</td>
                  <td className="border p-3">{rep.reviewPeriod}</td>
                  <td className="border p-3">{rep.rating}</td>

                  <td className={`border p-3 font-semibold ${
                    rep.status === "Excellent"
                      ? "text-green-600"
                      : rep.status === "Good"
                      ? "text-blue-600"
                      : "text-red-600"
                  }`}>
                    {rep.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {message && (
        <div className="mt-6 bg-yellow-100 text-yellow-800 p-3 rounded">
          {message}
        </div>
      )}

    </div>
  );
};

export default PerformanceReports;