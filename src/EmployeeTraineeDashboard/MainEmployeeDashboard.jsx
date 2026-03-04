import React, { useState } from "react";

export default function MainEmployeeDashboard() {

  const [activeTab, setActiveTab] = useState("profile");

  const user = {
    name: "Amit Verma",
    employeeId: "EMP001",
    role: "Trainee", // change to Employee if needed
    department: "IT",
    team: "Frontend",
    email: "amit@gmail.com",
    phone: "9876543210",
    address: "Delhi, India",
    joiningDate: "2025-01-01",
    status: "Active",
    image: "",

    attendance: {
      present: 22,
      absent: 2,
      late: 1,
      percentage: 92,
    },

    training: [
      { name: "React Training", progress: 80 },
      { name: "JavaScript Advanced", progress: 60 },
    ],

    salary: {
      basic: 30000,
      bonus: 5000,
      deduction: 2000,
    },
  };

  const netSalary =
    user.salary.basic + user.salary.bonus - user.salary.deduction;

  return (
    <div className="p-6 bg-gray-100 min-h-screen mt-5">

      {/* Profile Header */}
      <div className="bg-white rounded-xl shadow p-6 mb-6 flex items-center gap-6">
        <img
          src={user.image}
          alt="profile"
          className="w-24 h-24 rounded-full"
        />
        <div>
          <h2 className="text-2xl font-bold">{user.name}</h2>
          <p>ID: {user.employeeId}</p>
          <p>{user.role} - {user.department}</p>
          <span className="text-green-600 font-medium">{user.status}</span>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid md:grid-cols-4 gap-6 mb-6">
        <Card title="Attendance %" value={user.attendance.percentage + "%"} />
        <Card title="Total Trainings" value={user.training.length} />
        <Card title="Present Days" value={user.attendance.present} />
        {user.role === "Employee" && (
          <Card title="Net Salary" value={"₹" + netSalary} />
        )}
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow p-6">
        <div className="flex gap-6 border-b mb-4">
          {["profile", "training", "attendance", "salary"].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 capitalize ${
                activeTab === tab
                  ? "border-b-2 border-indigo-600 font-semibold"
                  : "text-gray-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Profile */}
        {activeTab === "profile" && (
          <div className="grid md:grid-cols-2 gap-4">
            <Info label="Email" value={user.email} />
            <Info label="Phone" value={user.phone} />
            <Info label="Address" value={user.address} />
            <Info label="Joining Date" value={user.joiningDate} />
            <Info label="Department" value={user.department} />
            <Info label="Team" value={user.team} />
          </div>
        )}

        {/* Training */}
        {activeTab === "training" && (
          <div className="space-y-4">
            {user.training.map((t, index) => (
              <div key={index}>
                <p className="mb-1">{t.name} ({t.progress}%)</p>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-indigo-600 h-3 rounded-full"
                    style={{ width: `${t.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Attendance */}
        {activeTab === "attendance" && (
          <div className="grid md:grid-cols-2 gap-4">
            <Info label="Present Days" value={user.attendance.present} />
            <Info label="Absent Days" value={user.attendance.absent} />
            <Info label="Late Entries" value={user.attendance.late} />
            <Info label="Attendance %" value={user.attendance.percentage + "%"} />
          </div>
        )}

        {/* Salary */}
        {activeTab === "salary" && user.role === "Employee" && (
          <div className="grid md:grid-cols-2 gap-4">
            <Info label="Basic Salary" value={"₹" + user.salary.basic} />
            <Info label="Bonus" value={"₹" + user.salary.bonus} />
            <Info label="Deduction" value={"₹" + user.salary.deduction} />
            <Info label="Net Salary" value={"₹" + netSalary} />
          </div>
        )}

        {activeTab === "salary" && user.role === "Trainee" && (
          <p className="text-gray-500">Salary information not available for Trainee.</p>
        )}
      </div>

    </div>
  );
}

function Card({ title, value }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="text-gray-500">{title}</h3>
      <p className="text-2xl font-bold mt-2">{value}</p>
    </div>
  );
}

function Info({ label, value }) {
  return (
    <div>
      <p className="text-gray-500 text-sm">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  );
}