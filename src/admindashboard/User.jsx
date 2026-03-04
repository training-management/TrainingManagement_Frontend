import React, { useState } from "react";
import { motion } from "framer-motion";

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
  ]);

  const filteredUsers = userList.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalUsers = userList.length;
  const activeUsers = userList.filter((u) => u.status === "Active").length;
  const inactiveUsers = userList.filter((u) => u.status === "Inactive").length;

  const handleDelete = (id) => {
    setUserList(userList.filter((u) => u.id !== id));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="p-6 bg-gray-50 min-h-screen my-5"
    >
      {/* Header */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex justify-between mb-6"
      >
        <h1 className="text-2xl font-bold">Admin User Panel</h1>
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
        >
          + Add User
        </motion.button>
      </motion.div>

      {!selectedUser ? (
        <>
          {/* Summary Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {[ 
              { title: "Total Users", value: totalUsers },
              { title: "Active Users", value: activeUsers },
              { title: "Inactive Users", value: inactiveUsers },
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card title={card.title} value={card.value} />
              </motion.div>
            ))}
          </div>

          {/* Search */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <input
              type="text"
              placeholder="Search user..."
              className="w-full md:w-1/3 p-2 border rounded-lg mb-4"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </motion.div>

          {/* User Table */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="bg-white rounded-xl shadow p-4 overflow-x-auto"
          >
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
                {filteredUsers.map((user, index) => (
                  <motion.tr
                    key={user.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border-b hover:bg-gray-50"
                  >
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
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </>
      ) : (
        /* User Detail Page */
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-xl shadow p-6"
        >
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
              <motion.button
                key={tab}
                whileHover={{ scale: 1.05 }}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 capitalize ${
                  activeTab === tab
                    ? "border-b-2 border-indigo-600 font-semibold"
                    : "text-gray-500"
                }`}
              >
                {tab}
              </motion.button>
            ))}
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
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

            {activeTab === "training" && <p>Assigned & Completed Trainings</p>}
            {activeTab === "attendance" && <p>Attendance Summary</p>}
            {activeTab === "salary" && (
              <p>Net Salary: ₹{selectedUser.salary + 5000}</p>
            )}
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}

/* Components */

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