import React, { useState } from "react";

const AssignTraining = () => {

  const [formData, setFormData] = useState({
    employee: "",
    training: "",
    startDate: "",
    endDate: "",
    status: "Assigned"
  });

  const [assignments, setAssignments] = useState([]);
  const [message, setMessage] = useState("");

  const employees = ["Rahul Sharma", "Priya Singh", "Aman Verma"];
  const trainings = ["React Basics", "Leadership Skills", "Finance Management"];

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Assign Training with Validation
  const handleAssign = () => {

    if (!formData.employee) {
      setMessage("Please select employee.");
      return;
    }

    if (!formData.training) {
      setMessage("Please select training program.");
      return;
    }

    if (!formData.startDate) {
      setMessage("Start date is required.");
      return;
    }

    if (!formData.endDate) {
      setMessage("End date is required.");
      return;
    }

    if (formData.endDate < formData.startDate) {
      setMessage("End date cannot be before start date.");
      return;
    }

    const newAssignment = {
      id: assignments.length + 1,
      ...formData
    };

    setAssignments([...assignments, newAssignment]);
    setMessage("Training assigned successfully!");

    // Reset form
    setFormData({
      employee: "",
      training: "",
      startDate: "",
      endDate: "",
      status: "Assigned"
    });
  };

  const totalAssigned = assignments.length;
  const completed = assignments.filter(a => a.status === "Completed").length;
  const inProgress = assignments.filter(a => a.status === "In Progress").length;

  return (
    <div className="p-6 bg-gray-50 min-h-screen my-5">

      <h1 className="text-3xl font-bold mb-6">
        Assign Training – HR Panel
      </h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-3 gap-4 mb-8">

        <div className="bg-white p-4 rounded shadow">
          <h3>Total Assigned</h3>
          <p className="text-xl font-bold">{totalAssigned}</p>
        </div>

        <div className="bg-yellow-100 p-4 rounded">
          <h3>In Progress</h3>
          <p className="text-xl font-bold">{inProgress}</p>
        </div>

        <div className="bg-green-100 p-4 rounded">
          <h3>Completed</h3>
          <p className="text-xl font-bold">{completed}</p>
        </div>

      </div>

      {/* Assign Form */}
      <div className="bg-white p-5 rounded shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">Assign New Training</h2>

        <div className="grid grid-cols-5 gap-3">

          <select
            name="employee"
            value={formData.employee}
            onChange={handleChange}
            className="border p-2 rounded"
          >
            <option value="">Select Employee</option>
            {employees.map((emp, index) => (
              <option key={index} value={emp}>{emp}</option>
            ))}
          </select>

          <select
            name="training"
            value={formData.training}
            onChange={handleChange}
            className="border p-2 rounded"
          >
            <option value="">Select Training</option>
            {trainings.map((train, index) => (
              <option key={index} value={train}>{train}</option>
            ))}
          </select>

          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="border p-2 rounded"
          >
            <option value="Assigned">Assigned</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>

        </div>

        <button
          onClick={handleAssign}
          className="mt-4 bg-black text-white px-4 py-2 rounded"
        >
          Assign Training
        </button>
      </div>

      {/* Assigned List Table */}
      <div className="bg-white p-5 rounded shadow">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">Employee</th>
              <th className="p-2 border">Training</th>
              <th className="p-2 border">Start Date</th>
              <th className="p-2 border">End Date</th>
              <th className="p-2 border">Status</th>
            </tr>
          </thead>

          <tbody>
            {assignments.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center p-4 text-gray-500">
                  No training assigned yet.
                </td>
              </tr>
            ) : (
              assignments.map((item) => (
                <tr key={item.id} className="text-center">
                  <td className="p-2 border">{item.employee}</td>
                  <td className="p-2 border">{item.training}</td>
                  <td className="p-2 border">{item.startDate}</td>
                  <td className="p-2 border">{item.endDate}</td>
                  <td className="p-2 border font-semibold">
                    {item.status}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Message */}
      {message && (
        <div className="mt-4 p-3 bg-white border rounded text-center font-semibold">
          {message}
        </div>
      )}

    </div>
  );
};

export default AssignTraining;