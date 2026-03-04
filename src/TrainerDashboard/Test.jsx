import { useState } from "react";

export default function Test() {
  const [tests, setTests] = useState([
    {
      id: "TST-001",
      title: "React Advanced Test",
      batch: "Batch A",
      marks: 100,
      duration: 60,
      students: 20,
      attempted: 12,
      date: "2026-03-10",
    },
    {
      id: "TST-002",
      title: "Node.js Evaluation",
      batch: "Batch B",
      marks: 80,
      duration: 90,
      students: 25,
      attempted: 25,
      date: "2026-02-20",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    title: "",
    batch: "",
    marks: "",
    duration: "",
    students: "",
    date: "",
  });

  const [errors, setErrors] = useState({});

  const getStatus = (date) => {
    const today = new Date().toISOString().split("T")[0];
    if (date > today) return "Upcoming";
    if (date === today) return "Live";
    return "Completed";
  };

  const validate = () => {
    let newErrors = {};
    const today = new Date().toISOString().split("T")[0];

    if (!form.title) newErrors.title = "Title required";
    if (!form.batch) newErrors.batch = "Batch required";
    if (!form.marks || form.marks <= 0) newErrors.marks = "Valid marks required";
    if (!form.duration || form.duration <= 0)
      newErrors.duration = "Valid duration required";
    if (!form.students || form.students <= 0)
      newErrors.students = "Valid student count required";
    if (!form.date) newErrors.date = "Date required";
    if (form.date < today) newErrors.date = "Date cannot be in past";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAdd = () => {
    if (!validate()) return;

    const newTest = {
      id: `TST-${tests.length + 1}`.padStart(7, "0"),
      ...form,
      attempted: 0,
    };

    setTests([...tests, newTest]);
    setForm({
      title: "",
      batch: "",
      marks: "",
      duration: "",
      students: "",
      date: "",
    });
    setShowModal(false);
  };

  const totalTests = tests.length;
  const completedTests = tests.filter(
    (t) => getStatus(t.date) === "Completed"
  ).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 p-8">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          🎓 Trainer Test Dashboard
        </h1>
        <button
          onClick={() => setShowModal(true)}
          className="bg-purple-600 text-white px-6 py-2 rounded-2xl shadow-lg hover:scale-105 transition"
        >
          + Create Test
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-2xl shadow">
          <p className="text-gray-500">Total Tests</p>
          <h2 className="text-2xl font-bold">{totalTests}</h2>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow">
          <p className="text-gray-500">Completed</p>
          <h2 className="text-2xl font-bold text-green-600">
            {completedTests}
          </h2>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow">
          <p className="text-gray-500">Upcoming</p>
          <h2 className="text-2xl font-bold text-blue-600">
            {totalTests - completedTests}
          </h2>
        </div>
      </div>

      {/* Test Cards */}
      <div className="grid grid-cols-3 gap-6">
        {tests.map((test) => {
          const progress = Math.round(
            (test.attempted / test.students) * 100
          );
          const status = getStatus(test.date);

          return (
            <div
              key={test.id}
              className="bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:scale-105 transition"
            >
              <h2 className="text-lg font-semibold mb-2">
                {test.title}
              </h2>
              <p className="text-sm text-gray-500 mb-2">
                Batch: {test.batch}
              </p>

              <div className="text-sm mb-3">
                <p>Marks: {test.marks}</p>
                <p>Duration: {test.duration} mins</p>
                <p>Date: {test.date}</p>
              </div>

              <div className="mb-3">
                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div
                    className="bg-purple-500 h-2 rounded-full"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {test.attempted}/{test.students} Attempted
                </p>
              </div>

              <span
                className={`px-3 py-1 text-xs rounded-full ${
                  status === "Upcoming"
                    ? "bg-blue-100 text-blue-600"
                    : status === "Live"
                    ? "bg-yellow-100 text-yellow-600"
                    : "bg-green-100 text-green-600"
                }`}
              >
                {status}
              </span>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
          <div className="bg-white p-6 rounded-2xl w-96 shadow-xl">
            <h2 className="text-xl font-bold mb-4">
              Create New Test
            </h2>

            {["title", "batch", "marks", "duration", "students"].map(
              (field) => (
                <input
                  key={field}
                  type="text"
                  placeholder={field}
                  className="border p-2 rounded-lg w-full mb-2"
                  value={form[field]}
                  onChange={(e) =>
                    setForm({ ...form, [field]: e.target.value })
                  }
                />
              )
            )}

            <input
              type="date"
              className="border p-2 rounded-lg w-full mb-2"
              value={form.date}
              onChange={(e) =>
                setForm({ ...form, date: e.target.value })
              }
            />

            {Object.values(errors).map((err, i) => (
              <p key={i} className="text-red-500 text-sm">
                {err}
              </p>
            ))}

            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleAdd}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg"
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