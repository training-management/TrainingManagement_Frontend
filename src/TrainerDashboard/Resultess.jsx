import React, { useState } from "react";
import { motion } from "framer-motion";

const Resultss = () => {

  const [filter, setFilter] = useState("All");

  const trainees = [
    { id: 1, name: "Rahul Sharma", batch: "React A", score: 88 },
    { id: 2, name: "Priya Singh", batch: "React A", score: 62 },
    { id: 3, name: "Aman Verma", batch: "Node B", score: 95 },
    { id: 4, name: "Sneha Patel", batch: "Node B", score: 45 },
  ];

  const getResultStatus = (score) => {
    if (score >= 80) return "Distinction";
    if (score >= 60) return "Pass";
    return "Fail";
  };

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="p-6 my-5 bg-gray-100 min-h-screen"
    >

      <motion.h1
        initial={{ y: -30 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-6"
      >
        Trainer Result Dashboard
      </motion.h1>

      {/* Statistics Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">

        {[ 
          { title: "Total Trainees", value: total, bg: "bg-white" },
          { title: "Distinction", value: distinctionCount, bg: "bg-green-100" },
          { title: "Pass", value: passCount, bg: "bg-blue-100" },
          { title: "Fail", value: failCount, bg: "bg-red-100" },
        ].map((card, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className={`${card.bg} p-4 rounded shadow cursor-pointer`}
          >
            <h3>{card.title}</h3>
            <p className="text-2xl font-bold">{card.value}</p>
          </motion.div>
        ))}

      </div>

      {/* Top Performer */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.02 }}
        className="bg-yellow-100 p-4 rounded mb-6 shadow"
      >
        <h2 className="font-semibold">
          🏆 Top Performer: {topPerformer.name} ({topPerformer.score})
        </h2>
        <p>Average Score: {avgScore.toFixed(1)}</p>
      </motion.div>

      {/* Filter Buttons */}
      <div className="flex gap-4 mb-6">
        {["All", "Distinction", "Pass", "Fail"].map((type) => (
          <motion.button
            key={type}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFilter(type)}
            className={`px-4 py-2 rounded transition ${
              filter === type
                ? "bg-black text-white"
                : "bg-white border"
            }`}
          >
            {type}
          </motion.button>
        ))}
      </div>

      {/* Result Table */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="bg-white p-5 rounded shadow"
      >
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
            {filteredData.map((t, index) => (
              <motion.tr
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center hover:bg-gray-100 transition"
              >
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
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {/* Export Button */}
      <div className="mt-6">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-purple-600 text-white px-5 py-2 rounded shadow-lg"
        >
          Export Results
        </motion.button>
      </div>

    </motion.div>
  );
};

export default Resultss;