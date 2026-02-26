import React, { useState } from "react";

export default function MainTrainerDashboard() {

  const [activeTab, setActiveTab] = useState("overview");
  const [selectedTrainee, setSelectedTrainee] = useState("");
  const [rating, setRating] = useState("");
  const [remark, setRemark] = useState("");

  const trainer = {
    name: "Rahul Sharma",
    trainerId: "TR001",
    department: "IT",
    specialization: "Frontend Development",
    experience: "5 Years",
    email: "rahul@company.com",
    image: "https://i.pravatar.cc/150?img=12",
  };

  const [trainees] = useState([
    { id: 1, name: "Amit", training: "React", progress: 85, attendance: 95, rating: 4.5 },
    { id: 2, name: "Neha", training: "JavaScript", progress: 60, attendance: 80, rating: 3.8 },
    { id: 3, name: "Rohit", training: "Next.js", progress: 40, attendance: 70, rating: 3.2 },
    { id: 4, name: "Simran", training: "TypeScript", progress: 92, attendance: 98, rating: 4.9 },
  ]);

  const schedule = [
    { id: 1, title: "React Session", date: "2025-02-26", time: "10:00 AM", status: "Upcoming" },
    { id: 2, title: "Next.js Advanced", date: "2025-02-27", time: "2:00 PM", status: "Upcoming" },
  ];

  // 📊 Advanced Calculations
  const totalTrainees = trainees.length;
  const activeTrainings = 4;
  const todaySessions = schedule.length;

  const avgProgress = (
    trainees.reduce((sum, t) => sum + t.progress, 0) / trainees.length
  ).toFixed(1);

  const avgAttendance = (
    trainees.reduce((sum, t) => sum + t.attendance, 0) / trainees.length
  ).toFixed(1);

  const avgRating = (
    trainees.reduce((sum, t) => sum + t.rating, 0) / trainees.length
  ).toFixed(1);

  const topPerformer = trainees.reduce((prev, current) =>
    prev.progress > current.progress ? prev : current
  );

  const lowPerformers = trainees.filter(t => t.progress < 50);

  const handleEvaluation = () => {
    if (!selectedTrainee || !rating) {
      alert("Select trainee and rating");
      return;
    }
    alert(`Evaluation Submitted for ${selectedTrainee}`);
    setSelectedTrainee("");
    setRating("");
    setRemark("");
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen mx-5 my-5">

      {/* Profile Header */}
      <div className="bg-white rounded-xl shadow p-6 mb-6 flex items-center gap-6">
        <img src={trainer.image} className="w-24 h-24 rounded-full" />
        <div>
          <h2 className="text-2xl font-bold">{trainer.name}</h2>
          <p>ID: {trainer.trainerId}</p>
          <p>{trainer.department} | {trainer.specialization}</p>
          <p>{trainer.experience} Experience</p>
          <p className="text-gray-500">{trainer.email}</p>
        </div>
      </div>

      {/* Professional Stats Cards */}
      <div className="grid md:grid-cols-4 gap-6 mb-6">
        <Card title="Total Trainees" value={totalTrainees} />
        <Card title="Active Trainings" value={activeTrainings} />
        <Card title="Today's Sessions" value={todaySessions} />
        <Card title="Avg Progress %" value={avgProgress + "%"} />
        <Card title="Avg Attendance %" value={avgAttendance + "%"} />
        <Card title="Avg Rating" value={avgRating} />
        <Card title="Top Performer" value={topPerformer.name} />
        <Card title="Low Performers" value={lowPerformers.length} />
      </div>

      {/* Tabs Section */}
      <div className="bg-white rounded-xl shadow p-6">

        <div className="flex gap-6 border-b mb-6">
          {["overview", "trainees", "schedule", "evaluation"].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 capitalize ${
                activeTab === tab
                  ? "border-b-2 border-indigo-600 font-semibold"
                  : "text-gray-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Overview */}
        {activeTab === "overview" && (
          <div>
            <h3 className="text-lg font-semibold mb-4">Performance Summary</h3>

            <p>Average Progress: {avgProgress}%</p>
            <p>Average Attendance: {avgAttendance}%</p>
            <p>Average Rating: {avgRating}</p>

            {lowPerformers.length > 0 && (
              <div className="mt-4 p-4 bg-red-100 rounded-lg">
                <h4 className="font-semibold text-red-600">⚠ Low Performance Alert</h4>
                {lowPerformers.map(t => (
                  <p key={t.id}>{t.name} - {t.progress}%</p>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Trainee Table */}
        {activeTab === "trainees" && (
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th>Name</th>
                <th>Training</th>
                <th>Progress</th>
                <th>Attendance</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody>
              {trainees.map(t => (
                <tr key={t.id} className="border-b">
                  <td>{t.name}</td>
                  <td>{t.training}</td>
                  <td>{t.progress}%</td>
                  <td>{t.attendance}%</td>
                  <td>{t.rating}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {/* Schedule */}
        {activeTab === "schedule" && (
          <div>
            {schedule.map(s => (
              <div key={s.id} className="border p-4 rounded-lg mb-3">
                <h4 className="font-semibold">{s.title}</h4>
                <p>{s.date} | {s.time}</p>
                <p>Status: {s.status}</p>
              </div>
            ))}
          </div>
        )}

        {/* Evaluation */}
        {activeTab === "evaluation" && (
          <div>
            <select
              value={selectedTrainee}
              onChange={(e) => setSelectedTrainee(e.target.value)}
              className="w-full border p-2 rounded mb-3"
            >
              <option value="">Select Trainee</option>
              {trainees.map(t => (
                <option key={t.id}>{t.name}</option>
              ))}
            </select>

            <input
              type="number"
              placeholder="Rating (1-5)"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="w-full border p-2 rounded mb-3"
            />

            <textarea
              placeholder="Remarks"
              value={remark}
              onChange={(e) => setRemark(e.target.value)}
              className="w-full border p-2 rounded mb-3"
            />

            <button
              onClick={handleEvaluation}
              className="bg-indigo-600 text-white px-4 py-2 rounded"
            >
              Submit Evaluation
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="text-gray-500">{title}</h3>
      <p className="text-xl font-bold mt-2">{value}</p>
    </div>
  );
}