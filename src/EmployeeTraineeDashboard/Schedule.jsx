import React, { useState } from "react";

const Schedule = () => {

  const [sessions] = useState([
    {
      id: "S-101",
      course: "Advanced React",
      trainer: "Mr. Arjun Mehta",
      date: "2026-03-05",
      time: "10:00 AM",
      mode: "Online"
    },
    {
      id: "S-102",
      course: "Workplace Communication",
      trainer: "Ms. Neha Sharma",
      date: "2026-03-01",
      time: "2:00 PM",
      mode: "Offline"
    },
    {
      id: "S-103",
      course: "Time Management",
      trainer: "Mr. Raj Verma",
      date: "2026-02-20",
      time: "11:00 AM",
      mode: "Online"
    }
  ]);

  const getStatus = (sessionDate) => {
    const today = new Date();
    const session = new Date(sessionDate);

    const todayDate = today.toISOString().split("T")[0];

    if (sessionDate === todayDate) return "Today";
    if (session > today) return "Upcoming";
    return "Completed";
  };

  const totalSessions = sessions.length;
  const upcomingSessions = sessions.filter(s => getStatus(s.date) === "Upcoming").length;
  const todaySessions = sessions.filter(s => getStatus(s.date) === "Today").length;

  return (
    <div className="p-8 bg-gray-100 min-h-screen">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Training Schedule – Trainee Dashboard
        </h1>
        <p className="text-gray-600 mt-2">
          View your upcoming and completed training sessions.
        </p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-3 gap-6 mb-10">

        <div className="bg-white p-5 rounded shadow">
          <h4>Total Sessions</h4>
          <p className="text-2xl font-bold">{totalSessions}</p>
        </div>

        <div className="bg-blue-100 p-5 rounded">
          <h4>Upcoming</h4>
          <p className="text-2xl font-bold">{upcomingSessions}</p>
        </div>

        <div className="bg-yellow-100 p-5 rounded">
          <h4>Today</h4>
          <p className="text-2xl font-bold">{todaySessions}</p>
        </div>

      </div>

      {/* Schedule Table */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Session Details</h2>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="border p-3 text-left">Session ID</th>
                <th className="border p-3 text-left">Course</th>
                <th className="border p-3 text-left">Trainer</th>
                <th className="border p-3 text-left">Date</th>
                <th className="border p-3 text-left">Time</th>
                <th className="border p-3 text-left">Mode</th>
                <th className="border p-3 text-left">Status</th>
              </tr>
            </thead>

            <tbody>
              {sessions.map((session, index) => {
                const status = getStatus(session.date);

                return (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="border p-3">{session.id}</td>
                    <td className="border p-3 font-semibold">{session.course}</td>
                    <td className="border p-3">{session.trainer}</td>
                    <td className="border p-3">{session.date}</td>
                    <td className="border p-3">{session.time}</td>
                    <td className="border p-3">{session.mode}</td>

                    <td className={`border p-3 font-semibold ${
                      status === "Completed"
                        ? "text-green-600"
                        : status === "Today"
                        ? "text-yellow-600"
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
      </div>

    </div>
  );
};

export default Schedule;