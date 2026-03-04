import { useState } from "react";

export default function MyBatches() {

  const [batches, setBatches] = useState([
    {
      id: "B-101",
      course: "Advanced React",
      startDate: "2026-03-01",
      endDate: "2026-04-15",
      students: 25,
      status: "Ongoing"
    },
    {
      id: "B-102",
      course: "Leadership Skills",
      startDate: "2026-02-01",
      endDate: "2026-03-10",
      students: 18,
      status: "Completed"
    }
  ]);

  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    id: "",
    course: "",
    startDate: "",
    endDate: "",
    students: "",
    status: "Ongoing"
  });

  const [errors, setErrors] = useState({});

  // Handle Input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validation
  const validate = () => {
    let newErrors = {};

    if (!formData.id.trim()) newErrors.id = "Batch ID is required";
    if (!formData.course.trim()) newErrors.course = "Course name is required";
    if (!formData.startDate) newErrors.startDate = "Start date is required";
    if (!formData.endDate) newErrors.endDate = "End date is required";

    if (formData.startDate && formData.endDate) {
      if (new Date(formData.endDate) < new Date(formData.startDate)) {
        newErrors.endDate = "End date cannot be before start date";
      }
    }

    if (!formData.students) {
      newErrors.students = "Number of students required";
    } else if (formData.students <= 0) {
      newErrors.students = "Must be greater than 0";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Add Batch
  const handleAddBatch = () => {
    if (validate()) {
      setBatches([...batches, formData]);
      setFormData({
        id: "",
        course: "",
        startDate: "",
        endDate: "",
        students: "",
        status: "Ongoing"
      });
      setShowForm(false);
      alert("Batch Added Successfully ✅");
    }
  };

  const getStatusColor = (status) => {
    if (status === "Completed") return "bg-green-100 text-green-600";
    if (status === "Ongoing") return "bg-blue-100 text-blue-600";
    return "bg-yellow-100 text-yellow-600";
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen my-6 mx-6">

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">My Batches</h1>

        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + Add Batch
        </button>
      </div>

      {/* Add Form */}
      {showForm && (
        <div className="bg-white p-6 rounded-xl shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-4">Create New Batch</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div>
              <input
                type="text"
                name="id"
                placeholder="Batch ID"
                value={formData.id}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
              {errors.id && <p className="text-red-500 text-sm">{errors.id}</p>}
            </div>

            <div>
              <input
                type="text"
                name="course"
                placeholder="Course Name"
                value={formData.course}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
              {errors.course && <p className="text-red-500 text-sm">{errors.course}</p>}
            </div>

            <div>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
              {errors.startDate && <p className="text-red-500 text-sm">{errors.startDate}</p>}
            </div>

            <div>
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
              {errors.endDate && <p className="text-red-500 text-sm">{errors.endDate}</p>}
            </div>

            <div>
              <input
                type="number"
                name="students"
                placeholder="Number of Students"
                value={formData.students}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
              {errors.students && <p className="text-red-500 text-sm">{errors.students}</p>}
            </div>

            <div>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              >
                <option value="Ongoing">Ongoing</option>
                <option value="Completed">Completed</option>
                <option value="Upcoming">Upcoming</option>
              </select>
            </div>

          </div>

          <div className="mt-4 flex justify-end">
            <button
              onClick={handleAddBatch}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Save Batch
            </button>
          </div>
        </div>
      )}

      {/* Batch Table */}
      <div className="bg-white rounded-xl shadow-md overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="p-3">Batch ID</th>
              <th className="p-3">Course</th>
              <th className="p-3">Start</th>
              <th className="p-3">End</th>
              <th className="p-3">Students</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {batches.map((batch, index) => (
              <tr key={index} className="border-t hover:bg-gray-50">
                <td className="p-3">{batch.id}</td>
                <td className="p-3">{batch.course}</td>
                <td className="p-3">{batch.startDate}</td>
                <td className="p-3">{batch.endDate}</td>
                <td className="p-3">{batch.students}</td>
                <td className="p-3">
                  <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(batch.status)}`}>
                    {batch.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}