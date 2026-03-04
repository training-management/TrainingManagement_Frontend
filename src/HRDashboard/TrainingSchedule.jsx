import React, { useState } from "react";
import { Plus, Search } from "lucide-react";

export default function TrainingSchedule() {
  // Sample Training Sessions
 const initialSessions = [
    {
      id: 1,
      name: "React Development",
      trainer: "John Smith",
      batch: "Frontend Dev - Feb 2026",
      duration: "4 Weeks",
      startDate: "2026-03-01",
      endDate: "2026-03-28",
      status: "Upcoming",
    },
    {
      id: 2,
      name: "Soft Skills",
      trainer: "Sarah Lee",
      batch: "All Employees - Jan 2026",
      duration: "2 Weeks",
      startDate: "2026-01-15",
      endDate: "2026-01-29",
      status: "Completed",
    },
  ];

  const [sessions, setSessions] = useState(initialSessions);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    trainer: "",
    batch: "",
    duration: "",
    startDate: "",
    endDate: "",
    status: "Upcoming",
  });

  const [errors, setErrors] = useState({});

  const filteredSessions = sessions.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddSession = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Training name is required";
    if (!formData.trainer.trim()) newErrors.trainer = "Trainer name is required";
    if (!formData.batch.trim()) newErrors.batch = "Batch is required";
    if (!formData.duration.trim()) newErrors.duration = "Duration is required";

    // Date validation
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (!formData.startDate) {
      newErrors.startDate = "Start date is required";
    } else {
      const [y, m, d] = formData.startDate.split("-");
      const start = new Date(y, m - 1, d);
      if (start < today) {
        newErrors.startDate = "Start date cannot be in the past";
      }
    }

    if (!formData.endDate) {
      newErrors.endDate = "End date is required";
    } else if (formData.startDate) {
      const [sy, sm, sd] = formData.startDate.split("-");
      const [ey, em, ed] = formData.endDate.split("-");
      const start = new Date(sy, sm - 1, sd);
      const end = new Date(ey, em - 1, ed);

      if (end < start) {
        newErrors.endDate = "End date must be after start date";
      }
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const newSession = {
        ...formData,
        id: sessions.length + 1,
      };

      setSessions([...sessions, newSession]);

      setFormData({
        name: "",
        trainer: "",
        batch: "",
        duration: "",
        startDate: "",
        endDate: "",
        status: "Upcoming",
      });

      setShowForm(false);
    }
  };


  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Training Schedule</h1>
          <p className="text-gray-500 text-sm">
            Manage all upcoming and completed training sessions
          </p>
        </div>

        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 bg-[#4EC1BE] text-white px-4 py-2 rounded-lg hover:opacity-90"
        >
          <Plus size={18} />
          Add Session
        </button>
      </div>

      {/* Add Session Form */}
      {showForm && (
        <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2 w-100">

            <div>
              <input
                type="text"
                placeholder="Training Name"
                className="border p-2 rounded-lg w-full"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

            <div>
              <input
                type="text"
                placeholder="Trainer Name"
                className="border p-2 rounded-lg w-full"
                value={formData.trainer}
                onChange={(e) =>
                  setFormData({ ...formData, trainer: e.target.value })
                }
              />
              {errors.trainer && <p className="text-red-500 text-sm">{errors.trainer}</p>}
            </div>

            <div>
              <input
                type="text"
                placeholder="Batch"
                className="border p-2 rounded-lg w-full"
                value={formData.batch}
                onChange={(e) =>
                  setFormData({ ...formData, batch: e.target.value })
                }
              />
              {errors.batch && <p className="text-red-500 text-sm">{errors.batch}</p>}
            </div>

            <div>
              <input
                type="text"
                placeholder="Duration"
                className="border p-2 rounded-lg w-full"
                value={formData.duration}
                onChange={(e) =>
                  setFormData({ ...formData, duration: e.target.value })
                }
              />
              {errors.duration && <p className="text-red-500 text-sm">{errors.duration}</p>}
            </div>

            <div>
              <input
                type="date"
                className="border p-2 rounded-lg w-full"
                value={formData.startDate}
                onChange={(e) =>
                  setFormData({ ...formData, startDate: e.target.value })
                }
              />
              {errors.startDate && <p className="text-red-500 text-sm">{errors.startDate}</p>}
            </div>

            <div>
              <input
                type="date"
                className="border p-2 rounded-lg w-full"
                value={formData.endDate}
                onChange={(e) =>
                  setFormData({ ...formData, endDate: e.target.value })
                }
              />
              {errors.endDate && <p className="text-red-500 text-sm">{errors.endDate}</p>}
            </div>

            <div className="md:col-span-2">
              <select
                className="border p-2 rounded-lg w-full"
                value={formData.status}
                onChange={(e) =>
                  setFormData({ ...formData, status: e.target.value })
                }
              >
                <option value="Upcoming">Upcoming</option>
                <option value="Active">Active</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
          </div>

          <button
            onClick={handleAddSession}
            className="mt-4 bg-[#4EC1BE] text-white px-4 py-2 rounded-lg"
          >
            Save Session
          </button>
        </div>
      )}

      {/* Rest of your existing code remains SAME */}

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <p className="text-gray-500 text-sm">Total Sessions</p>
          <h2 className="text-2xl font-bold mt-2">{sessions.length}</h2>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <p className="text-gray-500 text-sm">Upcoming Sessions</p>
          <h2 className="text-2xl font-bold mt-2 text-green-600">
            {sessions.filter((s) => s.status === "Upcoming").length}
          </h2>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <p className="text-gray-500 text-sm">Completed Sessions</p>
          <h2 className="text-2xl font-bold mt-2 text-blue-600">
            {sessions.filter((s) => s.status === "Completed").length}
          </h2>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white p-4 rounded-xl shadow-sm mb-6">
        <div className="flex items-center border rounded-lg px-3 py-2">
          <Search size={18} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search training sessions..."
            className="ml-2 w-full outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Training Schedule Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100 text-gray-600 text-sm">
            <tr>
              <th className="p-4">Training Name</th>
              <th className="p-4">Trainer</th>
              <th className="p-4">Batch</th>
              <th className="p-4">Duration</th>
              <th className="p-4">Start Date</th>
              <th className="p-4">End Date</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {filteredSessions.length === 0 ? (
              <tr>
                <td colSpan={7} className="p-4 text-center text-gray-500">
                  No sessions found
                </td>
              </tr>
            ) : (
              filteredSessions.map((session) => (
                <tr key={session.id} className="border-t hover:bg-gray-50">
                  <td className="p-4 font-medium">{session.name}</td>
                  <td className="p-4">{session.trainer}</td>
                  <td className="p-4">{session.batch}</td>
                  <td className="p-4">{session.duration}</td>
                  <td className="p-4">{session.startDate}</td>
                  <td className="p-4">{session.endDate}</td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs ${
                        session.status === "Upcoming"
                          ? "bg-yellow-100 text-yellow-600"
                          : session.status === "Active"
                          ? "bg-green-100 text-green-600"
                          : "bg-blue-100 text-blue-600"
                      }`}
                    >
                      {session.status}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}