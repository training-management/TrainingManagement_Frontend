import React, { useState } from "react";

const Assignments = () => {

  const [assignments, setAssignments] = useState([
    {
      id: "A-101",
      title: "React Hooks Project",
      course: "Advanced React",
      dueDate: "2026-03-05",
      status: "Pending"
    },
    {
      id: "A-102",
      title: "Communication Case Study",
      course: "Workplace Communication",
      dueDate: "2026-02-25",
      status: "Submitted"
    }
  ]);

  const [message, setMessage] = useState("");

  const getStatus = (assignment) => {
    const today = new Date().toISOString().split("T")[0];

    if (assignment.status === "Submitted") return "Submitted";
    if (assignment.dueDate < today) return "Late";
    return "Pending";
  };

  const handleSubmit = (index) => {

    const updatedAssignments = [...assignments];
    const status = getStatus(updatedAssignments[index]);

    if (status === "Late") {
      updatedAssignments[index].status = "Late";
      setMessage("Assignment submitted late.");
    } else {
      updatedAssignments[index].status = "Submitted";
      setMessage("Assignment submitted successfully!");
    }

    setAssignments(updatedAssignments);
  };

  const totalAssignments = assignments.length;
  const submittedCount = assignments.filter(a => getStatus(a) === "Submitted").length;
  const pendingCount = assignments.filter(a => getStatus(a) === "Pending").length;

  return (
    <div className="p-8 bg-gray-100 min-h-screen my-6 mx-5">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Assignments – Trainee Dashboard
        </h1>
        <p className="text-gray-600 mt-2">
          Complete and track your assigned tasks.
        </p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-3 gap-6 mb-10">

        <div className="bg-white p-5 rounded shadow">
          <h4>Total Assignments</h4>
          <p className="text-2xl font-bold">{totalAssignments}</p>
        </div>

        <div className="bg-green-100 p-5 rounded">
          <h4>Submitted</h4>
          <p className="text-2xl font-bold">{submittedCount}</p>
        </div>

        <div className="bg-blue-100 p-5 rounded">
          <h4>Pending</h4>
          <p className="text-2xl font-bold">{pendingCount}</p>
        </div>

      </div>

      {/* Assignments Table */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Assignment List</h2>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="border p-3 text-left">Assignment ID</th>
                <th className="border p-3 text-left">Title</th>
                <th className="border p-3 text-left">Course</th>
                <th className="border p-3 text-left">Due Date</th>
                <th className="border p-3 text-left">Status</th>
                <th className="border p-3 text-left">Action</th>
              </tr>
            </thead>

            <tbody>
              {assignments.map((assignment, index) => {
                const status = getStatus(assignment);

                return (
                  <tr key={index} className="hover:bg-gray-50">

                    <td className="border p-3">{assignment.id}</td>
                    <td className="border p-3 font-semibold">{assignment.title}</td>
                    <td className="border p-3">{assignment.course}</td>
                    <td className="border p-3">{assignment.dueDate}</td>

                    <td className={`border p-3 font-semibold ${
                      status === "Submitted"
                        ? "text-green-600"
                        : status === "Late"
                        ? "text-red-600"
                        : "text-blue-600"
                    }`}>
                      {status}
                    </td>

                    <td className="border p-3">
                      {status === "Submitted" ? (
                        <button
                          disabled
                          className="bg-gray-300 text-gray-600 px-4 py-1 rounded cursor-not-allowed"
                        >
                          Submitted
                        </button>
                      ) : (
                        <button
                          onClick={() => handleSubmit(index)}
                          className="bg-black text-white px-4 py-1 rounded"
                        >
                          Submit
                        </button>
                      )}
                    </td>

                  </tr>
                );
              })}
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

export default Assignments;