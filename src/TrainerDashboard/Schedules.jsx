import { useState } from "react";

export default function Schedules() {

  const today = new Date().toISOString().split("T")[0];

  const [schedules, setSchedules] = useState([
    {
      id: "SCH-101",
      batch: "B-101",
      sessionTitle: "React Hooks",
      date: today,
      startTime: "10:00",
      endTime: "12:00",
      mode: "Online",
      meetingLink: "https://meet.google.com/demo",
      room: "",
      status: "Scheduled"
    }
  ]);

  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [editingIndex, setEditingIndex] = useState(null);

  const [formData, setFormData] = useState({
    id: "",
    batch: "",
    sessionTitle: "",
    date: "",
    startTime: "",
    endTime: "",
    mode: "Online",
    meetingLink: "",
    room: "",
    status: "Scheduled"
  });

  const [errors, setErrors] = useState({});
  const [showForm, setShowForm] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.id.trim()) newErrors.id = "Required";
    if (!formData.batch.trim()) newErrors.batch = "Required";
    if (!formData.sessionTitle.trim()) newErrors.sessionTitle = "Required";
    if (!formData.date || formData.date < today)
      newErrors.date = "Invalid date";
    if (!formData.startTime) newErrors.startTime = "Required";
    if (!formData.endTime || formData.endTime <= formData.startTime)
      newErrors.endTime = "Invalid time";

    if (formData.mode === "Online" && !formData.meetingLink.trim())
      newErrors.meetingLink = "Required";

    if (formData.mode === "Offline" && !formData.room.trim())
      newErrors.room = "Required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    if (editingIndex !== null) {
      const updated = [...schedules];
      updated[editingIndex] = formData;
      setSchedules(updated);
      setEditingIndex(null);
    } else {
      setSchedules([...schedules, formData]);
    }

    setFormData({
      id: "",
      batch: "",
      sessionTitle: "",
      date: "",
      startTime: "",
      endTime: "",
      mode: "Online",
      meetingLink: "",
      room: "",
      status: "Scheduled"
    });

    setShowForm(false);
  };

  const handleEdit = (index) => {
    setFormData(schedules[index]);
    setEditingIndex(index);
    setShowForm(true);
  };

  const handleDelete = (index) => {
    if (window.confirm("Are you sure?")) {
      setSchedules(schedules.filter((_, i) => i !== index));
    }
  };

  const filteredSchedules = schedules.filter((item) => {
    const matchSearch =
      item.sessionTitle.toLowerCase().includes(search.toLowerCase()) ||
      item.batch.toLowerCase().includes(search.toLowerCase());

    const matchStatus =
      filterStatus === "All" || item.status === filterStatus;

    return matchSearch && matchStatus;
  });

  const statusColor = (status) => {
    if (status === "Completed") return "bg-green-100 text-green-600";
    if (status === "Ongoing") return "bg-yellow-100 text-yellow-700";
    if (status === "Cancelled") return "bg-red-100 text-red-600";
    return "bg-blue-100 text-blue-600";
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen my-6 mx-6">

      {/* Header Controls */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
        <h1 className="text-3xl font-bold">Advanced Schedules</h1>

        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Search session..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border px-3 py-2 rounded"
          />

          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="border px-3 py-2 rounded"
          >
            <option value="All">All</option>
            <option value="Scheduled">Scheduled</option>
            <option value="Ongoing">Ongoing</option>
            <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option>
          </select>

          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            + Add
          </button>
        </div>
      </div>

      {/* Form */}
      {showForm && (
        <div className="bg-white p-6 rounded-xl shadow mb-6 transition-all duration-300">
          <div className="grid md:grid-cols-2 gap-4">

            {["id","batch","sessionTitle"].map((field) => (
              <div key={field}>
                <input
                  type="text"
                  name={field}
                  placeholder={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                />
                {errors[field] && <p className="text-red-500 text-sm">{errors[field]}</p>}
              </div>
            ))}

            <input type="date" name="date" value={formData.date}
              onChange={handleChange} className="border p-2 rounded" />

            <input type="time" name="startTime" value={formData.startTime}
              onChange={handleChange} className="border p-2 rounded" />

            <input type="time" name="endTime" value={formData.endTime}
              onChange={handleChange} className="border p-2 rounded" />

            <select name="mode" value={formData.mode}
              onChange={handleChange} className="border p-2 rounded">
              <option>Online</option>
              <option>Offline</option>
            </select>

            {formData.mode === "Online" && (
              <input type="text" name="meetingLink"
                placeholder="Meeting Link"
                value={formData.meetingLink}
                onChange={handleChange}
                className="border p-2 rounded" />
            )}

            {formData.mode === "Offline" && (
              <input type="text" name="room"
                placeholder="Room Number"
                value={formData.room}
                onChange={handleChange}
                className="border p-2 rounded" />
            )}

            <select name="status"
              value={formData.status}
              onChange={handleChange}
              className="border p-2 rounded">
              <option>Scheduled</option>
              <option>Ongoing</option>
              <option>Completed</option>
              <option>Cancelled</option>
            </select>

          </div>

          <div className="mt-4 text-right">
            <button
              onClick={handleSubmit}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
            >
              {editingIndex !== null ? "Update" : "Save"}
            </button>
          </div>
        </div>
      )}

      {/* Table */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3">Session</th>
              <th className="p-3">Batch</th>
              <th className="p-3">Date</th>
              <th className="p-3">Time</th>
              <th className="p-3">Mode</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredSchedules.map((item, index) => (
              <tr key={index} className="border-t hover:bg-gray-50 transition">
                <td className="p-3">{item.sessionTitle}</td>
                <td className="p-3">{item.batch}</td>
                <td className="p-3">{item.date}</td>
                <td className="p-3">{item.startTime} - {item.endTime}</td>
                <td className="p-3">{item.mode}</td>
                <td className="p-3">
                  <span className={`px-3 py-1 rounded-full text-sm ${statusColor(item.status)}`}>
                    {item.status}
                  </span>
                </td>
                <td className="p-3 flex gap-2">
                  <button
                    onClick={() => handleEdit(index)}
                    className="bg-yellow-400 px-3 py-1 rounded text-white hover:bg-yellow-500"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="bg-red-500 px-3 py-1 rounded text-white hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}