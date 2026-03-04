import React, { useState } from "react";

const Projects = () => {

  const [projects, setProjects] = useState([
    {
      id: "P-001",
      title: "HR Dashboard System",
      technology: "React + Tailwind",
      startDate: "2026-02-01",
      endDate: "2026-03-10",
      progress: 70
    },
    {
      id: "P-002",
      title: "Employee Attendance Module",
      technology: "MERN Stack",
      startDate: "2026-01-15",
      endDate: "2026-02-20",
      progress: 100
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [message, setMessage] = useState("");

  const [newProject, setNewProject] = useState({
    id: "",
    title: "",
    technology: "",
    startDate: "",
    endDate: "",
    progress: ""
  });

  const [errors, setErrors] = useState({});

  const today = new Date().toISOString().split("T")[0];

  // 🔹 Status Logic
  const getStatus = (project) => {
    if (project.progress == 100) return "Completed";
    if (project.endDate < today) return "Delayed";
    return "Ongoing";
  };

  // 🔹 Validation
  const validate = () => {
    let newErrors = {};

    if (!newProject.id) newErrors.id = "Project ID required";
    if (!newProject.title) newErrors.title = "Title required";
    if (!newProject.technology) newErrors.technology = "Technology required";
    if (!newProject.startDate) newErrors.startDate = "Start date required";
    if (!newProject.endDate) newErrors.endDate = "End date required";
    if (newProject.startDate < today)
      newErrors.startDate = "Start date cannot be in past";
    if (newProject.endDate < newProject.startDate)
      newErrors.endDate = "End date must be after start date";
    if (!newProject.progress)
      newErrors.progress = "Progress required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 🔹 Add Project
  const handleAdd = () => {
    if (!validate()) return;

    setProjects([
      ...projects,
      { ...newProject, progress: Number(newProject.progress) }
    ]);

    setNewProject({
      id: "",
      title: "",
      technology: "",
      startDate: "",
      endDate: "",
      progress: ""
    });

    setShowForm(false);
    setMessage("New project added successfully!");
  };

  const totalProjects = projects.length;
  const completed = projects.filter(p => getStatus(p) === "Completed").length;
  const ongoing = projects.filter(p => getStatus(p) === "Ongoing").length;

  return (
    <div className="p-8 bg-gray-100 min-h-screen my-6 mx-6">

      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">
            Projects – Trainee Dashboard
          </h1>
          <p className="text-gray-600 mt-2">
            Manage and track your assigned projects.
          </p>
        </div>

        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-black text-white px-5 py-2 rounded"
        >
          + Add Project
        </button>
      </div>

      {/* Add Project Form */}
      {showForm && (
        <div className="bg-white p-6 rounded shadow mb-8">
          <div className="grid grid-cols-2 gap-4">

            <div>
              <input
                placeholder="Project ID"
                value={newProject.id}
                onChange={(e) =>
                  setNewProject({ ...newProject, id: e.target.value })
                }
                className="border p-2 rounded w-full"
              />
              {errors.id && <p className="text-red-500 text-sm">{errors.id}</p>}
            </div>

            <div>
              <input
                placeholder="Project Title"
                value={newProject.title}
                onChange={(e) =>
                  setNewProject({ ...newProject, title: e.target.value })
                }
                className="border p-2 rounded w-full"
              />
              {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
            </div>

            <div>
              <input
                placeholder="Technology"
                value={newProject.technology}
                onChange={(e) =>
                  setNewProject({ ...newProject, technology: e.target.value })
                }
                className="border p-2 rounded w-full"
              />
              {errors.technology && <p className="text-red-500 text-sm">{errors.technology}</p>}
            </div>

            <div>
              <input
                type="number"
                placeholder="Progress %"
                value={newProject.progress}
                onChange={(e) =>
                  setNewProject({ ...newProject, progress: e.target.value })
                }
                className="border p-2 rounded w-full"
              />
              {errors.progress && <p className="text-red-500 text-sm">{errors.progress}</p>}
            </div>

            <div>
              <input
                type="date"
                value={newProject.startDate}
                onChange={(e) =>
                  setNewProject({ ...newProject, startDate: e.target.value })
                }
                className="border p-2 rounded w-full"
              />
              {errors.startDate && <p className="text-red-500 text-sm">{errors.startDate}</p>}
            </div>

            <div>
              <input
                type="date"
                value={newProject.endDate}
                onChange={(e) =>
                  setNewProject({ ...newProject, endDate: e.target.value })
                }
                className="border p-2 rounded w-full"
              />
              {errors.endDate && <p className="text-red-500 text-sm">{errors.endDate}</p>}
            </div>

          </div>

          <div className="mt-4">
            <button
              onClick={handleAdd}
              className="bg-green-600 text-white px-5 py-2 rounded"
            >
              Save Project
            </button>
          </div>
        </div>
      )}

      {/* Overview Cards */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-5 rounded shadow">
          <h4>Total Projects</h4>
          <p className="text-2xl font-bold">{totalProjects}</p>
        </div>

        <div className="bg-green-100 p-5 rounded">
          <h4>Completed</h4>
          <p className="text-2xl font-bold">{completed}</p>
        </div>

        <div className="bg-blue-100 p-5 rounded">
          <h4>Ongoing</h4>
          <p className="text-2xl font-bold">{ongoing}</p>
        </div>
      </div>

      {/* Projects Table */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Project List</h2>

        <table className="w-full border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border p-3 text-left">ID</th>
              <th className="border p-3 text-left">Title</th>
              <th className="border p-3 text-left">Technology</th>
              <th className="border p-3 text-left">Start</th>
              <th className="border p-3 text-left">End</th>
              <th className="border p-3 text-left">Progress</th>
              <th className="border p-3 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {projects.map((project, index) => {
              const status = getStatus(project);

              return (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border p-3">{project.id}</td>
                  <td className="border p-3 font-semibold">{project.title}</td>
                  <td className="border p-3">{project.technology}</td>
                  <td className="border p-3">{project.startDate}</td>
                  <td className="border p-3">{project.endDate}</td>

                  <td className="border p-3">
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-black h-3 rounded-full"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-sm">{project.progress}%</span>
                  </td>

                  <td className={`border p-3 font-semibold ${
                    status === "Completed"
                      ? "text-green-600"
                      : status === "Delayed"
                      ? "text-red-600"
                      : "text-blue-600"
                  }`}>
                    {status}
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

export default Projects;