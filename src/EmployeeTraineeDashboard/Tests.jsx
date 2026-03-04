import React, { useState } from "react";

const Tests = () => {

  const [tests, setTests] = useState([
    {
      id: "T-101",
      title: "React Fundamentals Test",
      course: "Advanced React",
      date: "2026-03-10",
      score: 78
    },
    {
      id: "T-102",
      title: "Communication Skills Test",
      course: "Workplace Communication",
      date: "2026-02-20",
      score: 45
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [message, setMessage] = useState("");

  const [newTest, setNewTest] = useState({
    id: "",
    title: "",
    course: "",
    date: "",
    score: ""
  });

  const [errors, setErrors] = useState({});

  const today = new Date().toISOString().split("T")[0];

  // ✅ Result Logic
  const getResult = (test) => {
    if (test.date > today) return "Upcoming";
    if (test.score >= 50) return "Passed";
    return "Failed";
  };

  // ✅ Validation
  const validate = () => {
    let newErrors = {};

    if (!newTest.id) newErrors.id = "Test ID required";
    if (!newTest.title) newErrors.title = "Title required";
    if (!newTest.course) newErrors.course = "Course required";
    if (!newTest.date) newErrors.date = "Test date required";
    if (!newTest.score) newErrors.score = "Score required";

    if (newTest.score < 0 || newTest.score > 100)
      newErrors.score = "Score must be between 0 and 100";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ Add Test
  const handleAdd = () => {
    if (!validate()) return;

    setTests([
      ...tests,
      { ...newTest, score: Number(newTest.score) }
    ]);

    setNewTest({
      id: "",
      title: "",
      course: "",
      date: "",
      score: ""
    });

    setShowForm(false);
    setMessage("New test added successfully!");
  };

  const totalTests = tests.length;
  const passed = tests.filter(t => getResult(t) === "Passed").length;
  const failed = tests.filter(t => getResult(t) === "Failed").length;

  return (
    <div className="p-8 bg-gray-100 min-h-screen my-6 mx-6">

      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">
            Tests 
          </h1>
          <p className="text-gray-600 mt-2">
            View and manage your test performance.
          </p>
        </div>

        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-black text-white px-5 py-2 rounded"
        >
          + Add Test
        </button>
      </div>

      {/* Add Test Form */}
      {showForm && (
        <div className="bg-white p-6 rounded shadow mb-8">
          <div className="grid grid-cols-2 gap-4">

            <div>
              <input
                placeholder="Test ID"
                value={newTest.id}
                onChange={(e) =>
                  setNewTest({ ...newTest, id: e.target.value })
                }
                className="border p-2 rounded w-full"
              />
              {errors.id && <p className="text-red-500 text-sm">{errors.id}</p>}
            </div>

            <div>
              <input
                placeholder="Test Title"
                value={newTest.title}
                onChange={(e) =>
                  setNewTest({ ...newTest, title: e.target.value })
                }
                className="border p-2 rounded w-full"
              />
              {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
            </div>

            <div>
              <input
                placeholder="Course"
                value={newTest.course}
                onChange={(e) =>
                  setNewTest({ ...newTest, course: e.target.value })
                }
                className="border p-2 rounded w-full"
              />
              {errors.course && <p className="text-red-500 text-sm">{errors.course}</p>}
            </div>

            <div>
              <input
                type="date"
                value={newTest.date}
                onChange={(e) =>
                  setNewTest({ ...newTest, date: e.target.value })
                }
                className="border p-2 rounded w-full"
              />
              {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
            </div>

            <div>
              <input
                type="number"
                placeholder="Score (0-100)"
                value={newTest.score}
                onChange={(e) =>
                  setNewTest({ ...newTest, score: e.target.value })
                }
                className="border p-2 rounded w-full"
              />
              {errors.score && <p className="text-red-500 text-sm">{errors.score}</p>}
            </div>

          </div>

          <div className="mt-4">
            <button
              onClick={handleAdd}
              className="bg-green-600 text-white px-5 py-2 rounded"
            >
              Save Test
            </button>
          </div>
        </div>
      )}

      {/* Overview Cards */}
      <div className="grid grid-cols-3 gap-6 mb-8">

        <div className="bg-white p-5 rounded shadow">
          <h4>Total Tests</h4>
          <p className="text-2xl font-bold">{totalTests}</p>
        </div>

        <div className="bg-green-100 p-5 rounded">
          <h4>Passed</h4>
          <p className="text-2xl font-bold">{passed}</p>
        </div>

        <div className="bg-red-100 p-5 rounded">
          <h4>Failed</h4>
          <p className="text-2xl font-bold">{failed}</p>
        </div>

      </div>

      {/* Tests Table */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Test Records</h2>

        <table className="w-full border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border p-3 text-left">ID</th>
              <th className="border p-3 text-left">Title</th>
              <th className="border p-3 text-left">Course</th>
              <th className="border p-3 text-left">Date</th>
              <th className="border p-3 text-left">Score</th>
              <th className="border p-3 text-left">Result</th>
            </tr>
          </thead>

          <tbody>
            {tests.map((test, index) => {
              const result = getResult(test);

              return (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border p-3">{test.id}</td>
                  <td className="border p-3 font-semibold">{test.title}</td>
                  <td className="border p-3">{test.course}</td>
                  <td className="border p-3">{test.date}</td>
                  <td className="border p-3">{test.score}%</td>

                  <td className={`border p-3 font-semibold ${
                    result === "Passed"
                      ? "text-green-600"
                      : result === "Failed"
                      ? "text-red-600"
                      : "text-blue-600"
                  }`}>
                    {result}
                  </td>
                </tr>
              );
            })}
          </tbody>

        </table>
      </div>

      {message && (
        <div className="mt-6 bg-yellow-100 text-yellow-800 p-3 rounded">
          {message}
        </div>
      )}

    </div>
  );
};

export default Tests;