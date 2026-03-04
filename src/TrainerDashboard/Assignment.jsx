import { useState } from "react";

export default function Assignment() {
  const [assignments, setAssignments] = useState([
    {
      id: "ASG-001",
      title: "React Hooks Project",
      batch: "Batch A",
      totalStudents: 20,
      submitted: 15,
      totalMarks: 100,
      dueDate: "2026-03-10",
      status: "Active",
    },
    {
      id: "ASG-002",
      title: "Java OOPS Assignment",
      batch: "Batch B",
      totalStudents: 25,
      submitted: 25,
      totalMarks: 80,
      dueDate: "2026-02-28",
      status: "Closed",
    },
  ]);

  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState(null);

  const [form, setForm] = useState({
    title: "",
    batch: "",
    totalStudents: "",
    totalMarks: "",
    dueDate: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    const today = new Date().toISOString().split("T")[0];

    if (!form.title) newErrors.title = "Title required";
    if (!form.batch) newErrors.batch = "Batch required";
    if (!form.totalStudents || form.totalStudents <= 0)
      newErrors.totalStudents = "Enter valid student count";
    if (!form.totalMarks || form.totalMarks <= 0)
      newErrors.totalMarks = "Enter valid marks";
    if (!form.dueDate) newErrors.dueDate = "Due date required";
    if (form.dueDate < today)
      newErrors.dueDate = "Due date cannot be in past";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    if (editId) {
      setAssignments(
        assignments.map((a) =>
          a.id === editId
            ? {
                ...a,
                ...form,
              }
            : a
        )
      );
    } else {
      const newAssignment = {
        id: `ASG-${assignments.length + 1}`.padStart(7, "0"),
        ...form,
        submitted: 0,
        status: "Active",
      };
      setAssignments([...assignments, newAssignment]);
    }

    setForm({
      title: "",
      batch: "",
      totalStudents: "",
      totalMarks: "",
      dueDate: "",
    });
    setEditId(null);
    setShowModal(false);
  };

  const handleDelete = (id) => {
    setAssignments(assignments.filter((a) => a.id !== id));
  };

  const handleEdit = (assignment) => {
    setForm(assignment);
    setEditId(assignment.id);
    setShowModal(true);
  };

  const filteredAssignments = assignments.filter((a) => {
    return (
      (a.title.toLowerCase().includes(search.toLowerCase()) ||
        a.batch.toLowerCase().includes(search.toLowerCase())) &&
      (filterStatus === "All" || a.status === filterStatus)
    );
  });

  return (
    <div className="p-6 bg-gray-50 min-h-screen my-6 mx-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Assignment Management
        </h1>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition"
        >
          + Add Assignment
        </button>
      </div>

      {/* Search & Filter */}
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by title or batch..."
          className="border p-2 rounded-lg w-1/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border p-2 rounded-lg"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option>All</option>
          <option>Active</option>
          <option>Closed</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="p-3">ID</th>
              <th>Title</th>
              <th>Batch</th>
              <th>Progress</th>
              <th>Due Date</th>
              <th>Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredAssignments.map((a) => {
              const progress = Math.round(
                (a.submitted / a.totalStudents) * 100
              );

              return (
                <tr key={a.id} className="border-t">
                  <td className="p-3">{a.id}</td>
                  <td>{a.title}</td>
                  <td>{a.batch}</td>

                  <td>
                    <div className="w-40 bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-green-500 h-3 rounded-full"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-500">
                      {a.submitted}/{a.totalStudents}
                    </span>
                  </td>

                  <td>{a.dueDate}</td>

                  <td>
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        a.status === "Active"
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {a.status}
                    </span>
                  </td>

                  <td className="p-3 space-x-2">
                    <button
                      onClick={() => handleEdit(a)}
                      className="text-blue-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(a.id)}
                      className="text-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <div className="bg-white p-6 rounded-2xl w-96 shadow-lg">
            <h2 className="text-xl font-bold mb-4">
              {editId ? "Edit Assignment" : "Add Assignment"}
            </h2>

            <input
              type="text"
              placeholder="Title"
              className="border p-2 rounded-lg w-full mb-2"
              value={form.title}
              onChange={(e) =>
                setForm({ ...form, title: e.target.value })
              }
            />
            {errors.title && (
              <p className="text-red-500 text-sm">{errors.title}</p>
            )}

            <input
              type="text"
              placeholder="Batch"
              className="border p-2 rounded-lg w-full mb-2"
              value={form.batch}
              onChange={(e) =>
                setForm({ ...form, batch: e.target.value })
              }
            />
            {errors.batch && (
              <p className="text-red-500 text-sm">{errors.batch}</p>
            )}

            <input
              type="number"
              placeholder="Total Students"
              className="border p-2 rounded-lg w-full mb-2"
              value={form.totalStudents}
              onChange={(e) =>
                setForm({ ...form, totalStudents: e.target.value })
              }
            />

            <input
              type="number"
              placeholder="Total Marks"
              className="border p-2 rounded-lg w-full mb-2"
              value={form.totalMarks}
              onChange={(e) =>
                setForm({ ...form, totalMarks: e.target.value })
              }
            />

            <input
              type="date"
              className="border p-2 rounded-lg w-full mb-2"
              value={form.dueDate}
              onChange={(e) =>
                setForm({ ...form, dueDate: e.target.value })
              }
            />
            {errors.dueDate && (
              <p className="text-red-500 text-sm">{errors.dueDate}</p>
            )}

            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}