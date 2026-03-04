import React, { useState } from "react";
import { Plus, Search } from "lucide-react";

export default function CreateBatches() {
  // Sample employees for selection
  const employeesList = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Alice Johnson" },
    { id: 4, name: "Bob Brown" },
  ];

  const [batches, setBatches] = useState([]);
  const [batchName, setBatchName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedEmployees, setSelectedEmployees] = useState([]);
  const [status, setStatus] = useState("Active");
  const [search, setSearch] = useState("");

  const handleAddBatch = () => {
    if (!batchName || !startDate || !endDate || selectedEmployees.length === 0) {
      alert("Please fill all fields and select employees");
      return;
    }

    const newBatch = {
      id: Date.now(),
      name: batchName,
      startDate,
      endDate,
      employees: selectedEmployees,
      status,
    };

    setBatches([newBatch, ...batches]);

    // Reset form
    setBatchName("");
    setStartDate("");
    setEndDate("");
    setSelectedEmployees([]);
    setStatus("Active");
  };

  // Filtered batches by search
  const filteredBatches = batches.filter((b) =>
    b.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Batches</h1>
          <p className="text-gray-500 text-sm">Manage all employee batches</p>
        </div>

        {/* Add Batch Button */}
        <button
          className="flex items-center gap-2 bg-[#4EC1BE] text-white px-4 py-2 rounded-lg hover:opacity-90"
          onClick={handleAddBatch}
        >
          <Plus size={18} />
          Add Batch
        </button>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <p className="text-gray-500 text-sm">Total Batches</p>
          <h2 className="text-2xl font-bold mt-2">{batches.length}</h2>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <p className="text-gray-500 text-sm">Active Batches</p>
          <h2 className="text-2xl font-bold mt-2 text-green-600">
            {batches.filter((b) => b.status === "Active").length}
          </h2>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <p className="text-gray-500 text-sm">Inactive Batches</p>
          <h2 className="text-2xl font-bold mt-2 text-red-600">
            {batches.filter((b) => b.status === "Inactive").length}
          </h2>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white p-4 rounded-xl shadow-sm mb-6">
        <div className="flex items-center border rounded-lg px-3 py-2">
          <Search size={18} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search batches..."
            className="ml-2 w-full outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Create Batch Form */}
      <div className="bg-white p-6 rounded-xl shadow-sm mb-6 max-w-lg">
        <h2 className="text-xl font-bold mb-4">Create New Batch</h2>
        <input
          type="text"
          placeholder="Batch Name"
          className="border p-2 mb-3 w-full rounded"
          value={batchName}
          onChange={(e) => setBatchName(e.target.value)}
        />
        <div className="flex gap-3 mb-3">
          <input
            type="date"
            className="border p-2 w-1/2 rounded"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <input
            type="date"
            className="border p-2 w-1/2 rounded"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <select
          multiple
          className="border p-2 mb-3 w-full rounded"
          value={selectedEmployees.map((e) => e.id)}
          onChange={(e) =>
            setSelectedEmployees(
              Array.from(e.target.selectedOptions).map(
                (opt) => employeesList.find((emp) => emp.id === parseInt(opt.value))
              )
            )
          }
        >
          {employeesList.map((emp) => (
            <option key={emp.id} value={emp.id}>
              {emp.name}
            </option>
          ))}
        </select>
        <select
          className="border p-2 mb-3 w-full rounded"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

      {/* Batches Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100 text-gray-600 text-sm">
            <tr>
              <th className="p-4">Batch Name</th>
              <th className="p-4">Employees</th>
              <th className="p-4">Start Date</th>
              <th className="p-4">End Date</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {filteredBatches.length === 0 ? (
              <tr>
                <td colSpan={5} className="p-4 text-center text-gray-500">
                  No batches found
                </td>
              </tr>
            ) : (
              filteredBatches.map((batch) => (
                <tr key={batch.id} className="border-t hover:bg-gray-50">
                  <td className="p-4 font-medium">{batch.name}</td>
                  <td className="p-4">
                    {batch.employees.map((e) => e.name).join(", ")}
                  </td>
                  <td className="p-4">{batch.startDate}</td>
                  <td className="p-4">{batch.endDate}</td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs ${
                        batch.status === "Active"
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {batch.status}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}