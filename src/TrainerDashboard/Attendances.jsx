import { useState } from "react";

export default function Attendances() {

  const today = new Date().toISOString().split("T")[0];

  const [attendanceList, setAttendanceList] = useState([
    {
      id: "ATT-101",
      studentName: "Rahul Sharma",
      batch: "B-101",
      date: today,
      status: "Present"
    }
  ]);

  const [formData, setFormData] = useState({
    id: "",
    studentName: "",
    batch: "",
    date: "",
    status: "Present"
  });

  const [errors, setErrors] = useState({});
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [editingIndex, setEditingIndex] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.id.trim()) newErrors.id = "Attendance ID required";
    if (!formData.studentName.trim()) newErrors.studentName = "Student name required";
    if (!formData.batch.trim()) newErrors.batch = "Batch required";
    if (!formData.date) newErrors.date = "Date required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    if (editingIndex !== null) {
      const updated = [...attendanceList];
      updated[editingIndex] = formData;
      setAttendanceList(updated);
      setEditingIndex(null);
    } else {
      setAttendanceList([...attendanceList, formData]);
    }

    setFormData({
      id: "",
      studentName: "",
      batch: "",
      date: "",
      status: "Present"
    });

    setShowForm(false);
  };

  const handleEdit = (index) => {
    setFormData(attendanceList[index]);
    setEditingIndex(index);
    setShowForm(true);
  };

  const handleDelete = (index) => {
    if (window.confirm("Delete this record?")) {
      setAttendanceList(attendanceList.filter((_, i) => i !== index));
    }
  };

  const filteredList = attendanceList.filter((item) => {
    const matchSearch =
      item.studentName.toLowerCase().includes(search.toLowerCase()) ||
      item.batch.toLowerCase().includes(search.toLowerCase());

    const matchStatus =
      filterStatus === "All" || item.status === filterStatus;

    return matchSearch && matchStatus;
  });

  const statusColor = (status) => {
    if (status === "Present") return "bg-green-100 text-green-600";
    if (status === "Absent") return "bg-red-100 text-red-600";
    if (status === "Late") return "bg-yellow-100 text-yellow-700";
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen my-6 mx-6">

      {/* Header Controls */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
        <h1 className="text-3xl font-bold">Trainer Attendances</h1>

        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Search student..."
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
            <option value="Present">Present</option>
            <option value="Absent">Absent</option>
            <option value="Late">Late</option>
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

            <div>
              <input
                type="text"
                name="id"
                placeholder="Attendance ID"
                value={formData.id}
                onChange={handleChange}
                className="border p-2 rounded w-full"
              />
              {errors.id && <p className="text-red-500 text-sm">{errors.id}</p>}
            </div>

            <div>
              <input
                type="text"
                name="studentName"
                placeholder="Student Name"
                value={formData.studentName}
                onChange={handleChange}
                className="border p-2 rounded w-full"
              />
              {errors.studentName && <p className="text-red-500 text-sm">{errors.studentName}</p>}
            </div>

            <div>
              <input
                type="text"
                name="batch"
                placeholder="Batch"
                value={formData.batch}
                onChange={handleChange}
                className="border p-2 rounded w-full"
              />
              {errors.batch && <p className="text-red-500 text-sm">{errors.batch}</p>}
            </div>

            <div>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="border p-2 rounded w-full"
              />
              {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
            </div>

            <div>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="border p-2 rounded w-full"
              >
                <option value="Present">Present</option>
                <option value="Absent">Absent</option>
                <option value="Late">Late</option>
              </select>
            </div>

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
              <th className="p-3">ID</th>
              <th className="p-3">Student</th>
              <th className="p-3">Batch</th>
              <th className="p-3">Date</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredList.map((item, index) => (
              <tr key={index} className="border-t hover:bg-gray-50 transition">
                <td className="p-3">{item.id}</td>
                <td className="p-3">{item.studentName}</td>
                <td className="p-3">{item.batch}</td>
                <td className="p-3">{item.date}</td>
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