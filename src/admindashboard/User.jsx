
import React, { useState } from "react";

export default function User() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("profile");
  const [userList, setUserList] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      phone: "9876543210",
      role: "Employee",
      department: "IT",
      team: "Frontend",
      status: "Active",
      joining: "2025-01-10",
      salary: 40000,
      image: "https://i.pravatar.cc/100?img=1",
    },
    {
      id: 2,
      name: "Priya Singh",
      email: "priya@gmail.com",
      phone: "8765432109",
      role: "HR",
      department: "HR",
      team: "Recruitment",
      status: "Inactive",
      joining: "2024-11-05",
      salary: 50000,
      image: "https://i.pravatar.cc/100?img=2",
    },

     {
      id: 2,
      name: "Riya Verma",
      email: "riya@gmail.com",
      phone: "5872568458",
      role: "Employee",
      department: "IT",
      team: "Recruitment",
      status: "Active",
      joining: "2024-11-05",
      salary: 10000,
      image: "https://i.pravatar.cc/100?img=2",
    },
  ]);
  

  const filteredUsers = userList.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalUsers = userList.length;
  const activeUsers = userList.filter((u) => u.status === "Active").length;
  const inactiveUsers = userList.filter((u) => u.status === "Inactive").length;

  // Add User
  const handleAddUser = () => {
    const newUser = {
      id: Date.now(),
      name: "New User",
      email: "newuser@gmail.com",
      phone: "9000000000",
      role: "Employee",
      department: "IT",
      team: "Backend",
      status: "Active",
      joining: "2026-01-01",
      salary: 35000,
      image: "https://i.pravatar.cc/100",
    };
    setUserList([...userList, newUser]);
  };

  // Delete User
  const handleDelete = (id) => {
    setUserList(userList.filter((u) => u.id !== id));
  };

  return (
  
   <div className="p-6 bg-gray-50 min-h-screen my-5">
      {/* Header */}
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Admin User Panel</h1>
        <button
          onClick={() => setShowModal(true)}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
        >
          + Add User
        </button>
      </div>

      {!selectedUser ? (
        <>
          {/* Summary Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <Card title="Total Users" value={totalUsers} />
            <Card title="Active Users" value={activeUsers} />
            <Card title="Inactive Users" value={inactiveUsers} />
          </div>

          {/* Search */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search user..."
              className="w-full md:w-1/3 p-2 border rounded-lg"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* User Table */}
          <div className="bg-white rounded-xl shadow p-4 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b">
                  <th className="p-2">Image</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Department</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="border-b hover:bg-gray-50">
                    <td className="p-2">
                      <img
                        src={user.image}
                        alt={user.name}
                        className="w-10 h-10 rounded-full"
                      />
                    </td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>{user.department}</td>
                    <td>
                      <span
                        className={`px-2 py-1 text-sm rounded-full ${
                          user.status === "Active"
                            ? "bg-green-100 text-green-600"
                            : "bg-red-100 text-red-600"
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="space-x-3">
                      <button
                        onClick={() => setSelectedUser(user)}
                        className="text-indigo-600 font-medium"
                      >
                        View
                      </button>
                      <button className="text-yellow-600 font-medium">
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(user.id)}
                        className="text-red-600 font-medium"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        /* User Detail Page */
        <div className="bg-white rounded-xl shadow p-6">
          <button
            onClick={() => setSelectedUser(null)}
            className="mb-4 text-indigo-600"
          >
            ← Back
          </button>

          <div className="flex items-center gap-4 mb-4">
            <img
              src={selectedUser.image}
              alt={selectedUser.name}
              className="w-20 h-20 rounded-full"
            />
            <div>
              <h2 className="text-xl font-bold">{selectedUser.name}</h2>
              <p className="text-gray-500">{selectedUser.role}</p>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-6 border-b mb-4">
            {["profile", "training", "attendance", "salary"].map((tab) => (
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

          {activeTab === "profile" && (
            <div className="grid md:grid-cols-2 gap-4">
              <Info label="Email" value={selectedUser.email} />
              <Info label="Phone" value={selectedUser.phone} />
              <Info label="Department" value={selectedUser.department} />
              <Info label="Team" value={selectedUser.team} />
              <Info label="Joining Date" value={selectedUser.joining} />
              <Info label="Status" value={selectedUser.status} />
            </div>
          )}

          {activeTab === "training" && (
            <div>
              <p>Assigned: React Training</p>
              <p>Completed: 2 Trainings</p>
              <p>Pending: 1 Training</p>
            </div>
          )}

          {activeTab === "attendance" && (
            <div>
              <p>Total Days: 22</p>
              <p>Present: 20</p>
              <p>Absent: 2</p>
            </div>
          )}

          {activeTab === "salary" && (
            <div>
              <p>Basic Salary: ₹{selectedUser.salary}</p>
              <p>Net Salary: ₹{selectedUser.salary + 5000}</p>
            </div>
          )}
        </div>
      )}
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








