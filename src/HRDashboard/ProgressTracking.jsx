import React, { useState } from "react";

const ProgressTracking = () => {

  const [progressData, setProgressData] = useState([
    {
      id: "EMP-001",
      name: "Rahul Sharma",
      department: "IT",
      training: "Advanced React",
      completion: 85,
      skillScore: 88,
      growth: 12,
      status: "On Track"
    },
    {
      id: "EMP-002",
      name: "Priya Singh",
      department: "HR",
      training: "Leadership Program",
      completion: 60,
      skillScore: 75,
      growth: 8,
      status: "On Track"
    },
    {
      id: "EMP-003",
      name: "Aman Verma",
      department: "Finance",
      training: "Financial Compliance",
      completion: 40,
      skillScore: 65,
      growth: 3,
      status: "Behind"
    }
  ]);

  const [message, setMessage] = useState("");
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    department: "",
    training: "",
    completion: "",
    skillScore: "",
    growth: ""
  });

  const handleAddEmployee = () => {

    if (
      !formData.id ||
      !formData.name ||
      !formData.department ||
      !formData.training ||
      formData.completion === "" ||
      formData.skillScore === "" ||
      formData.growth === ""
    ) {
      setMessage("All fields are required.");
      return;
    }

    if (
      formData.completion < 0 || formData.completion > 100 ||
      formData.skillScore < 0 || formData.skillScore > 100
    ) {
      setMessage("Completion & Skill Score must be between 0 and 100.");
      return;
    }

    const getStatus = (completion) => {
      if (completion === 100) return "Completed";
      if (completion < 50) return "Behind";
      return "On Track";
    };

    const newEmployee = {
      ...formData,
      completion: Number(formData.completion),
      skillScore: Number(formData.skillScore),
      growth: Number(formData.growth),
      status: getStatus(Number(formData.completion))
    };

    setProgressData([...progressData, newEmployee]);

    setFormData({
      id: "",
      name: "",
      department: "",
      training: "",
      completion: "",
      skillScore: "",
      growth: ""
    });

    setShowForm(false);
    setMessage("Employee added successfully!");
  };

  const totalEmployees = progressData.length;

  const avgCompletion = totalEmployees > 0
    ? (
        progressData.reduce((sum, p) => sum + p.completion, 0) /
        totalEmployees
      ).toFixed(1)
    : 0;

  const completedTrainings = progressData.filter(p => p.completion === 100).length;
  const behindSchedule = progressData.filter(p => p.status === "Behind").length;

  return (
    <div className="p-8 bg-gray-100 min-h-screen my-5">

      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">
          Progress Tracking – HR Panel
        </h1>

        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-black text-white px-5 py-2 rounded"
        >
          + Add Employee
        </button>
      </div>

      {/* Add Employee Form */}
      {showForm && (
        <div className="bg-white p-6 rounded shadow mb-8">
          <h2 className="text-xl font-semibold mb-4">Add Employee</h2>

          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="Employee ID" className="border p-2 rounded"
              value={formData.id}
              onChange={(e)=>setFormData({...formData,id:e.target.value})}
            />

            <input type="text" placeholder="Name" className="border p-2 rounded"
              value={formData.name}
              onChange={(e)=>setFormData({...formData,name:e.target.value})}
            />

            <input type="text" placeholder="Department" className="border p-2 rounded"
              value={formData.department}
              onChange={(e)=>setFormData({...formData,department:e.target.value})}
            />

            <input type="text" placeholder="Training Program" className="border p-2 rounded"
              value={formData.training}
              onChange={(e)=>setFormData({...formData,training:e.target.value})}
            />

            <input type="number" placeholder="Completion %" className="border p-2 rounded"
              value={formData.completion}
              onChange={(e)=>setFormData({...formData,completion:e.target.value})}
            />

            <input type="number" placeholder="Skill Score" className="border p-2 rounded"
              value={formData.skillScore}
              onChange={(e)=>setFormData({...formData,skillScore:e.target.value})}
            />

            <input type="number" placeholder="Growth %" className="border p-2 rounded col-span-2"
              value={formData.growth}
              onChange={(e)=>setFormData({...formData,growth:e.target.value})}
            />
          </div>

          <button
            onClick={handleAddEmployee}
            className="mt-4 bg-blue-600 text-white px-5 py-2 rounded"
          >
            Save Employee
          </button>
        </div>
      )}

      {/* Overview Cards */}
      <div className="grid grid-cols-4 gap-6 mb-10">
        <div className="bg-white p-5 rounded shadow">
          <h4>Total In Training</h4>
          <p className="text-2xl font-bold">{totalEmployees}</p>
        </div>

        <div className="bg-blue-100 p-5 rounded">
          <h4>Avg Completion</h4>
          <p className="text-2xl font-bold">{avgCompletion}%</p>
        </div>

        <div className="bg-green-100 p-5 rounded">
          <h4>Completed</h4>
          <p className="text-2xl font-bold">{completedTrainings}</p>
        </div>

        <div className="bg-red-100 p-5 rounded">
          <h4>Behind Schedule</h4>
          <p className="text-2xl font-bold">{behindSchedule}</p>
        </div>
      </div>

      {/* ✅ Employee Progress Table (Added Section) */}
      <div className="bg-white p-6 rounded shadow mb-10">
        <h2 className="text-xl font-semibold mb-4">Employee Progress</h2>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="border p-3 text-left">Employee ID</th>
                <th className="border p-3 text-left">Name</th>
                <th className="border p-3 text-left">Department</th>
                <th className="border p-3 text-left">Training Program</th>
                <th className="border p-3 text-left">Completion</th>
                <th className="border p-3 text-left">Skill Score</th>
                <th className="border p-3 text-left">Growth %</th>
                <th className="border p-3 text-left">Status</th>
              </tr>
            </thead>

            <tbody>
              {progressData.map((emp, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border p-3">{emp.id}</td>
                  <td className="border p-3 font-semibold">{emp.name}</td>
                  <td className="border p-3">{emp.department}</td>
                  <td className="border p-3">{emp.training}</td>

                  <td className="border p-3">
                    <div className="flex flex-col gap-2">
                      <span>{emp.completion}%</span>
                      <div className="w-full bg-gray-200 h-2 rounded">
                        <div
                          className="bg-blue-500 h-2 rounded"
                          style={{ width: `${emp.completion}%` }}
                        ></div>
                      </div>
                    </div>
                  </td>

                  <td className="border p-3">{emp.skillScore}</td>
                  <td className="border p-3">{emp.growth}%</td>

                  <td className={`border p-3 font-semibold ${
                    emp.status === "Behind"
                      ? "text-red-600"
                      : emp.status === "Completed"
                      ? "text-green-600"
                      : "text-blue-600"
                  }`}>
                    {emp.status}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>

      {message && (
        <div className="bg-yellow-100 text-yellow-800 p-3 rounded">
          {message}
        </div>
      )}

    </div>
  );
};

export default ProgressTracking;