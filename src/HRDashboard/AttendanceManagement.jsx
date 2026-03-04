import React, { useState } from "react";

const AttendanceManagement = () => {

  const [filter, setFilter] = useState("All");
  const [message, setMessage] = useState("");

  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      department: "IT",
      checkIn: "09:05 AM",
      checkOut: "06:00 PM",
      status: "Present",
      hours: "8h 55m"
    },
    {
      id: 2,
      name: "Priya Singh",
      department: "HR",
      checkIn: "09:45 AM",
      checkOut: "06:10 PM",
      status: "Late",
      hours: "8h 25m"
    }
  ]);

  // ✅ New Attendance Form State
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    department: "",
    checkIn: "",
    checkOut: "",
    status: "Present"
  });

  // ✅ Handle Input Change
  const handleChange = (e) => {
    setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value });
  };

  // ✅ Add Attendance Function with Validation
  const handleAddAttendance = () => {

    if (!newEmployee.name.trim()) {
      setMessage("Employee name is required.");
      return;
    }

    if (!newEmployee.department.trim()) {
      setMessage("Department is required.");
      return;
    }

    if (newEmployee.status === "Present" || newEmployee.status === "Late") {
      if (!newEmployee.checkIn || !newEmployee.checkOut) {
        setMessage("Check-In and Check-Out time required.");
        return;
      }
    }

    const newEntry = {
      id: employees.length + 1,
      ...newEmployee,
      hours: newEmployee.checkIn && newEmployee.checkOut ? "8h 00m" : "-"
    };

    setEmployees([...employees, newEntry]);

    setMessage("New attendance added successfully!");

    // Reset Form
    setNewEmployee({
      name: "",
      department: "",
      checkIn: "",
      checkOut: "",
      status: "Present"
    });
  };

  const filteredEmployees =
    filter === "All"
      ? employees
      : employees.filter((emp) => emp.status === filter);

  const total = employees.length;
  const present = employees.filter(e => e.status === "Present").length;
  const absent = employees.filter(e => e.status === "Absent").length;
  const late = employees.filter(e => e.status === "Late").length;
  const leave = employees.filter(e => e.status === "Leave").length;

  return (
    <div className="p-6 bg-gray-50 min-h-screen my-5">

      <h1 className="text-3xl font-bold mb-6">
        HR Attendance Management
      </h1>

      {/* ✅ Add Attendance Form */}
      <div className="bg-white p-5 rounded shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">Add Attendance</h2>

        <div className="grid grid-cols-5 gap-3">
          <input
            type="text"
            name="name"
            placeholder="Employee Name"
            value={newEmployee.name}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <input
            type="text"
            name="department"
            placeholder="Department"
            value={newEmployee.department}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <input
            type="time"
            name="checkIn"
            value={newEmployee.checkIn}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <input
            type="time"
            name="checkOut"
            value={newEmployee.checkOut}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <select
            name="status"
            value={newEmployee.status}
            onChange={handleChange}
            className="border p-2 rounded"
          >
            <option value="Present">Present</option>
            <option value="Late">Late</option>
            <option value="Absent">Absent</option>
            <option value="Leave">Leave</option>
          </select>
        </div>

        <button
          onClick={handleAddAttendance}
          className="mt-4 bg-black text-white px-4 py-2 rounded"
        >
          Add Attendance
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-5 gap-4 mb-8">
        <div className="bg-white p-4 rounded shadow">
          <h3>Total Employees</h3>
          <p className="text-xl font-bold">{total}</p>
        </div>

        <div className="bg-green-100 p-4 rounded">
          <h3>Present</h3>
          <p className="text-xl font-bold">{present}</p>
        </div>

        <div className="bg-red-100 p-4 rounded">
          <h3>Absent</h3>
          <p className="text-xl font-bold">{absent}</p>
        </div>

        <div className="bg-yellow-100 p-4 rounded">
          <h3>Late</h3>
          <p className="text-xl font-bold">{late}</p>
        </div>

        <div className="bg-blue-100 p-4 rounded">
          <h3>On Leave</h3>
          <p className="text-xl font-bold">{leave}</p>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-3 mb-6">
        {["All", "Present", "Late", "Absent", "Leave"].map((type) => (
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

      {/* Attendance Table */}
      <div className="bg-white p-5 rounded shadow">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Department</th>
              <th className="p-2 border">Check-In</th>
              <th className="p-2 border">Check-Out</th>
              <th className="p-2 border">Working Hours</th>
              <th className="p-2 border">Status</th>
            </tr>
          </thead>

          <tbody>
            {filteredEmployees.map((emp) => (
              <tr key={emp.id} className="text-center">
                <td className="p-2 border">{emp.name}</td>
                <td className="p-2 border">{emp.department}</td>
                <td className="p-2 border">{emp.checkIn || "-"}</td>
                <td className="p-2 border">{emp.checkOut || "-"}</td>
                <td className="p-2 border">{emp.hours}</td>
                <td className="p-2 border font-semibold">
                  {emp.status}
                </td>
              </tr>
            ))}
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

export default AttendanceManagement;