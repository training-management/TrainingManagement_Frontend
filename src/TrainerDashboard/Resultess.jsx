import React, { useState } from "react";

const Resultss = () => {

  const [filter, setFilter] = useState("All");

  const trainees = [
    { id: 1, name: "Rahul Sharma", batch: "React A", score: 88 },
    { id: 2, name: "Priya Singh", batch: "React A", score: 62 },
    { id: 3, name: "Aman Verma", batch: "Node B", score: 95 },
    { id: 4, name: "Sneha Patel", batch: "Node B", score: 45 },
  ];

  // Result Logic
  const getResultStatus = (score) => {
    if (score >= 80) return "Distinction";
    if (score >= 60) return "Pass";
    return "Fail";
  };

  // Filter Logic
  const filteredData =
    filter === "All"
      ? trainees
      : trainees.filter(
          (t) => getResultStatus(t.score) === filter
        );

  const total = trainees.length;
  const avgScore =
    trainees.reduce((sum, t) => sum + t.score, 0) / total;

  const distinctionCount = trainees.filter(
    (t) => getResultStatus(t.score) === "Distinction"
  ).length;

  const passCount = trainees.filter(
    (t) => getResultStatus(t.score) === "Pass"
  ).length;

  const failCount = trainees.filter(
    (t) => getResultStatus(t.score) === "Fail"
  ).length;

  const topPerformer = trainees.reduce((prev, curr) =>
    prev.score > curr.score ? prev : curr
  );

  return (
    <div className="p-6 my-5 bg-gray-100 min-h-screen">

      <h1 className="text-3xl font-bold mb-6">
        Trainer Result Dashboard
      </h1>

      {/* Statistics Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">

        <div className="bg-white p-4 rounded shadow">
          <h3>Total Trainees</h3>
          <p className="text-2xl font-bold">{total}</p>
        </div>

        <div className="bg-green-100 p-4 rounded">
          <h3>Distinction</h3>
          <p className="text-2xl font-bold">{distinctionCount}</p>
        </div>

        <div className="bg-blue-100 p-4 rounded">
          <h3>Pass</h3>
          <p className="text-2xl font-bold">{passCount}</p>
        </div>

        <div className="bg-red-100 p-4 rounded">
          <h3>Fail</h3>
          <p className="text-2xl font-bold">{failCount}</p>
        </div>

      </div>

      {/* Top Performer */}
      <div className="bg-yellow-100 p-4 rounded mb-6">
        <h2 className="font-semibold">
          🏆 Top Performer: {topPerformer.name} ({topPerformer.score})
        </h2>
        <p>Average Score: {avgScore.toFixed(1)}</p>
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-4 mb-6">
        {["All", "Distinction", "Pass", "Fail"].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-4 py-2 rounded ${
              filter === type
                ? "bg-black text-white"
                : "bg-white border"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Result Table */}
      <div className="bg-white p-5 rounded shadow">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Batch</th>
              <th className="p-2 border">Score</th>
              <th className="p-2 border">Result</th>
            </tr>
          </thead>

          <tbody>
            {filteredData.map((t) => (
              <tr key={t.id} className="text-center">
                <td className="p-2 border">{t.name}</td>
                <td className="p-2 border">{t.batch}</td>
                <td className="p-2 border">{t.score}</td>
                <td
                  className={`p-2 border font-semibold ${
                    getResultStatus(t.score) === "Fail"
                      ? "text-red-600"
                      : "text-green-600"
                  }`}
                >
                  {getResultStatus(t.score)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Export Button */}
      <div className="mt-6">
        <button className="bg-purple-600 text-white px-5 py-2 rounded">
          Export Results
        </button>
      </div>

    </div>
  );
};

export default Resultss;