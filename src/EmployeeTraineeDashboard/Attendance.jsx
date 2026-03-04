import React, { useState } from "react";

const Attendance = () => {

  const [attendance, setAttendance] = useState([
    { date: "2026-02-25", status: "Present" },
    { date: "2026-02-26", status: "Absent" },
    { date: "2026-02-27", status: "Present" }
  ]);

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("Present");
  const [message, setMessage] = useState("");

  const handleMarkAttendance = () => {

    if (!selectedDate) {
      setMessage("Please select a date.");
      return;
    }

    const alreadyMarked = attendance.find(a => a.date === selectedDate);

    if (alreadyMarked) {
      setMessage("Attendance already marked for this date.");
      return;
    }

    const today = new Date().toISOString().split("T")[0];

    if (selectedDate > today) {
      setMessage("Cannot mark attendance for future date.");
      return;
    }

    setAttendance([...attendance, { date: selectedDate, status: selectedStatus }]);
    setSelectedDate("");
    setMessage("Attendance marked successfully!");
  };

  const totalDays = attendance.length;
  const presentDays = attendance.filter(a => a.status === "Present").length;
  const attendancePercentage = totalDays > 0
    ? ((presentDays / totalDays) * 100).toFixed(1)
    : 0;

  return (
    <div className="p-8 bg-gray-100 min-h-screen my-6 mx-6">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Attendance – Trainee Dashboard
        </h1>
        <p className="text-gray-600 mt-2">
          Track and manage your training attendance.
        </p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-3 gap-6 mb-10">

        <div className="bg-white p-5 rounded shadow">
          <h4>Total Marked Days</h4>
          <p className="text-2xl font-bold">{totalDays}</p>
        </div>

        <div className="bg-green-100 p-5 rounded">
          <h4>Present Days</h4>
          <p className="text-2xl font-bold">{presentDays}</p>
        </div>

        <div className="bg-blue-100 p-5 rounded">
          <h4>Attendance %</h4>
          <p className="text-2xl font-bold">{attendancePercentage}%</p>
        </div>

      </div>

      {/* Mark Attendance Section */}
      <div className="bg-white p-6 rounded shadow mb-10">
        <h2 className="text-xl font-semibold mb-4">Mark Attendance</h2>

        <div className="flex gap-4 items-center">

          <input
            type="date"
            className="border p-2 rounded"
            value={selectedDate}
            onChange={(e)=>setSelectedDate(e.target.value)}
          />

          <select
            className="border p-2 rounded"
            value={selectedStatus}
            onChange={(e)=>setSelectedStatus(e.target.value)}
          >
            <option value="Present">Present</option>
            <option value="Absent">Absent</option>
          </select>

          <button
            onClick={handleMarkAttendance}
            className="bg-black text-white px-5 py-2 rounded"
          >
            Submit
          </button>

        </div>
      </div>

      {/* Attendance Table */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Attendance Records</h2>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="border p-3 text-left">Date</th>
                <th className="border p-3 text-left">Status</th>
              </tr>
            </thead>

            <tbody>
              {attendance.map((record, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border p-3">{record.date}</td>

                  <td className={`border p-3 font-semibold ${
                    record.status === "Present"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}>
                    {record.status}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>

      {message && (
        <div className="mt-6 bg-yellow-100 text-yellow-800 p-3 rounded">
          {message}
        </div>
      )}

    </div>
  );
};

export default Attendance;