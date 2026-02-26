import React from "react";
import { Plus, Search } from "lucide-react";

function TrainingPrograms() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">

      {/* Page Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Training Programs</h1>
          <p className="text-gray-500 text-sm">
            Manage all company training programs
          </p>
        </div>

        <button className="flex items-center gap-2 bg-[#4EC1BE] text-white px-4 py-2 rounded-lg hover:opacity-90">
          <Plus size={18} />
          Add Program
        </button>
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