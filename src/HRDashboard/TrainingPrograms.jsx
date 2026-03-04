import React, { useState } from "react";
import { Plus, Search } from "lucide-react";

function TrainingPrograms() {
 const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    trainer: "",
    duration: "",
    date: "",
    status: "Active",
  });

 
  const [errors, setErrors] = useState({});

  const handleAddProgram = () => {
    let newErrors = {};

    // Name Validation
    if (!formData.name.trim()) {
      newErrors.name = "Program name is required";
    }

    // Trainer Validation
    if (!formData.trainer.trim()) {
      newErrors.trainer = "Trainer name is required";
    }

    // Duration Validation
    if (!formData.duration.trim()) {
      newErrors.duration = "Duration is required";
    }

    // Date Validation
    if (!formData.date) {
      newErrors.date = "Start date is required";
    } else {
      const today = new Date();
      const selectedDate = new Date(formData.date);

      // Remove time part
      today.setHours(0, 0, 0, 0);
      selectedDate.setHours(0, 0, 0, 0);

      if (selectedDate < today) {
        newErrors.date = "Start date cannot be in the past";
      }
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Program Added Successfully ✅");
      setFormData({
        name: "",
        trainer: "",
        duration: "",
        date: "",
        status: "Active",
      });
      setShowForm(false);
    }
  };


  return (
    <div className="p-6 bg-gray-50 min-h-screen">

      {/* Page Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Training Programs</h1>
          <p className="text-gray-500 text-sm mt-2">
            Manage all company training programs
          </p>
        </div>
 <button
        onClick={() => setShowForm(!showForm)}
        className="bg-[#4EC1BE] text-white px-4 py-2 rounded-lg mb-6"
      >
        Add Program
      </button>

      {showForm && (
        <div className="bg-white p-6 rounded-xl shadow-md max-w-2xl">
          <h2 className="text-lg font-semibold mb-4">Add New Program</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Program Name */}
            <div>
              <input
                type="text"
                placeholder="Program Name"
                className="border p-2 rounded-lg w-full"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Trainer Name */}
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
              {errors.trainer && (
                <p className="text-red-500 text-sm mt-1">{errors.trainer}</p>
              )}
            </div>

            {/* Duration */}
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
              {errors.duration && (
                <p className="text-red-500 text-sm mt-1">{errors.duration}</p>
              )}
            </div>

            {/* Date */}
            <div>
              <input
                type="date"
                className="border p-2 rounded-lg w-full"
                value={formData.date}
                
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                  
                }
              />
              {errors.date && (
                <p className="text-red-500 text-sm mt-1">{errors.date}</p>
              )}
            </div>

            {/* Status */}
            <div className="md:col-span-2">
              <select
                className="border p-2 rounded-lg w-full"
                value={formData.status}
                onChange={(e) =>
                  setFormData({ ...formData, status: e.target.value })
                }
              >
                <option value="Active">Active</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
          </div>

          <button
            onClick={handleAddProgram}
            className="mt-4 bg-[#4EC1BE] text-white px-4 py-2 rounded-lg"
          >
            Save Program
          </button>
        </div>
      )}
    </div>
  


      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <p className="text-gray-500 text-sm">Total Programs</p>
          <h2 className="text-2xl font-bold mt-2">12</h2>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm">
          <p className="text-gray-500 text-sm">Active Programs</p>
          <h2 className="text-2xl font-bold mt-2 text-green-600">8</h2>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm">
          <p className="text-gray-500 text-sm">Completed Programs</p>
          <h2 className="text-2xl font-bold mt-2 text-blue-600">4</h2>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white p-4 rounded-xl shadow-sm mb-6">
        <div className="flex items-center border rounded-lg px-3 py-2">
          <Search size={18} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search training programs..."
            className="ml-2 w-full outline-none"
          />
        </div>
      </div>

      {/* Programs Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100 text-gray-600 text-sm">
            <tr>
              <th className="p-4">Program Name</th>
              <th className="p-4">Trainer</th>
              <th className="p-4">Duration</th>
              <th className="p-4">Start Date</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr className="border-t hover:bg-gray-50">
              <td className="p-4 font-medium">React Development</td>
              <td className="p-4">John Smith</td>
              <td className="p-4">4 Weeks</td>
              <td className="p-4">01 Feb 2026</td>
              <td className="p-4">
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs">
                  Active
                </span>
              </td>
            </tr>

            <tr className="border-t hover:bg-gray-50">
              <td className="p-4 font-medium">Soft Skills Training</td>
              <td className="p-4">Sarah Lee</td>
              <td className="p-4">2 Weeks</td>
              <td className="p-4">15 Jan 2026</td>
              <td className="p-4">
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs">
                  Completed
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default TrainingPrograms;