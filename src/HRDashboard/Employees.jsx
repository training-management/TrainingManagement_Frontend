import React from "react";

const Employees = () => {

  const employees = [
    {
      id: "EMP-001",
      name: "Rahul Sharma",
      designation: "Senior Developer",
      department: "IT",
      type: "Full-Time",
      manager: "Anita Mehra",
      experience: 5,
      performance: 4.5,
      status: "Active"
    },
    {
      id: "EMP-002",
      name: "Priya Singh",
      designation: "HR Manager",
      department: "HR",
      type: "Full-Time",
      manager: "Director HR",
      experience: 7,
      performance: 4.8,
      status: "Active"
    },
    {
      id: "EMP-003",
      name: "Aman Verma",
      designation: "Account Executive",
      department: "Finance",
      type: "Contract",
      manager: "Finance Head",
      experience: 3,
      performance: 3.9,
      status: "Probation"
    }
  ];

  const totalEmployees = employees.length;
  const activeEmployees = employees.filter(e => e.status === "Active").length;
  const probationEmployees = employees.filter(e => e.status === "Probation").length;
  const avgExperience = (
    employees.reduce((sum, e) => sum + e.experience, 0) / totalEmployees
  ).toFixed(1);

  const avgPerformance = (
    employees.reduce((sum, e) => sum + e.performance, 0) / totalEmployees
  ).toFixed(1);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">

      <h1 className="text-3xl font-bold mb-8">
        Employees Management – HR Panel
      </h1>

      {/* Executive Overview */}
      <div className="grid grid-cols-5 gap-6 mb-10">

        <div className="bg-white p-5 rounded shadow">
          <h4 className="text-gray-500">Total Workforce</h4>
          <p className="text-2xl font-bold">{totalEmployees}</p>
        </div>

        <div className="bg-green-100 p-5 rounded">
          <h4>Active Employees</h4>
          <p className="text-2xl font-bold">{activeEmployees}</p>
        </div>

        <div className="bg-yellow-100 p-5 rounded">
          <h4>On Probation</h4>
          <p className="text-2xl font-bold">{probationEmployees}</p>
        </div>

        <div className="bg-blue-100 p-5 rounded">
          <h4>Avg Experience</h4>
          <p className="text-2xl font-bold">{avgExperience} yrs</p>
        </div>

        <div className="bg-purple-100 p-5 rounded">
          <h4>Avg Performance</h4>
          <p className="text-2xl font-bold">{avgPerformance} ⭐</p>
        </div>

      </div>

      {/* HR Action Panel */}
      <div className="flex gap-4 mb-8">
        <button className="bg-black text-white px-5 py-2 rounded">
          Add Employee
        </button>
        <button className="bg-blue-600 text-white px-5 py-2 rounded">
          Bulk Import
        </button>
        <button className="bg-green-600 text-white px-5 py-2 rounded">
          Start Review Cycle
        </button>
        <button className="bg-gray-700 text-white px-5 py-2 rounded">
          Generate Workforce Report
        </button>
      </div>

      {/* Professional Directory Table */}
      <div className="bg-white p-6 rounded shadow">

        <table className="w-full border-collapse">

          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-3 border">Employee ID</th>
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Designation</th>
              <th className="p-3 border">Department</th>
              <th className="p-3 border">Type</th>
              <th className="p-3 border">Manager</th>
              <th className="p-3 border">Experience</th>
              <th className="p-3 border">Performance</th>
              <th className="p-3 border">Status</th>
              <th className="p-3 border">Actions</th>
            </tr>
          </thead>

          <tbody>
            {employees.map(emp => (
              <tr key={emp.id} className="hover:bg-gray-50">
                <td className="p-3 border">{emp.id}</td>
                <td className="p-3 border font-medium">{emp.name}</td>
                <td className="p-3 border">{emp.designation}</td>
                <td className="p-3 border">{emp.department}</td>
                <td className="p-3 border">{emp.type}</td>
                <td className="p-3 border">{emp.manager}</td>
                <td className="p-3 border">{emp.experience} yrs</td>
                <td className="p-3 border">{emp.performance} ⭐</td>
                <td className={`p-3 border font-semibold ${
                  emp.status === "Active"
                    ? "text-green-600"
                    : "text-yellow-600"
                }`}>
                  {emp.status}
                </td>
                <td className="p-3 border">
                  <button className="text-blue-600 mr-2">View</button>
                  <button className="text-green-600 mr-2">Edit</button>
                  <button className="text-red-600">Deactivate</button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  );
};

export default Employees;