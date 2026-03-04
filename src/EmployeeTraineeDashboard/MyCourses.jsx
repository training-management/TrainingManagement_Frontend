import React, { useState } from "react";

const MyCourses = () => {

  const [courses, setCourses] = useState([
    {
      id: "C-101",
      title: "Advanced React",
      instructor: "Mr. Arjun Mehta",
      duration: "6 Weeks",
      progress: 75,
      status: "In Progress"
    },
    {
      id: "C-102",
      title: "Workplace Communication",
      instructor: "Ms. Neha Sharma",
      duration: "4 Weeks",
      progress: 100,
      status: "Completed"
    },
    {
      id: "C-103",
      title: "Time Management Mastery",
      instructor: "Mr. Raj Verma",
      duration: "3 Weeks",
      progress: 0,
      status: "Not Started"
    }
  ]);

  const [message, setMessage] = useState("");

  const getStatus = (progress) => {
    if (progress === 100) return "Completed";
    if (progress === 0) return "Not Started";
    return "In Progress";
  };

  const handleStartCourse = (index) => {
    const updatedCourses = [...courses];

    if (updatedCourses[index].progress === 0) {
      updatedCourses[index].progress = 10;
      updatedCourses[index].status = "In Progress";
      setCourses(updatedCourses);
      setMessage("Course started successfully!");
    }
  };

  const totalCourses = courses.length;
  const completedCourses = courses.filter(c => c.status === "Completed").length;
  const inProgressCourses = courses.filter(c => c.status === "In Progress").length;

  return (
    <div className="p-8 bg-gray-100 min-h-screen mt-8">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          My Courses 
        </h1>
        <p className="text-gray-600 mt-3">
          Track your enrolled training programs and progress.
        </p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-3 gap-6 mb-10">

        <div className="bg-white p-5 rounded shadow">
          <h4>Total Courses</h4>
          <p className="text-2xl font-bold">{totalCourses}</p>
        </div>

        <div className="bg-green-100 p-5 rounded">
          <h4>Completed</h4>
          <p className="text-2xl font-bold">{completedCourses}</p>
        </div>

        <div className="bg-blue-100 p-5 rounded">
          <h4>In Progress</h4>
          <p className="text-2xl font-bold">{inProgressCourses}</p>
        </div>

      </div>

      {/* Courses Table */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Enrolled Courses</h2>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="border p-3 text-left">Course ID</th>
                <th className="border p-3 text-left">Title</th>
                <th className="border p-3 text-left">Instructor</th>
                <th className="border p-3 text-left">Duration</th>
                <th className="border p-3 text-left">Progress</th>
                <th className="border p-3 text-left">Status</th>
                <th className="border p-3 text-left">Action</th>
              </tr>
            </thead>

            <tbody>
              {courses.map((course, index) => (
                <tr key={index} className="hover:bg-gray-50">

                  <td className="border p-3">{course.id}</td>
                  <td className="border p-3 font-semibold">{course.title}</td>
                  <td className="border p-3">{course.instructor}</td>
                  <td className="border p-3">{course.duration}</td>

                  <td className="border p-3">
                    <div className="flex flex-col gap-2">
                      <span>{course.progress}%</span>
                      <div className="w-full bg-gray-200 h-2 rounded">
                        <div
                          className="bg-blue-500 h-2 rounded"
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </td>

                  <td className={`border p-3 font-semibold ${
                    course.status === "Completed"
                      ? "text-green-600"
                      : course.status === "In Progress"
                      ? "text-blue-600"
                      : "text-gray-600"
                  }`}>
                    {course.status}
                  </td>

                  <td className="border p-3">
                    {course.status === "Not Started" ? (
                      <button
                        onClick={() => handleStartCourse(index)}
                        className="bg-black text-white px-4 py-1 rounded"
                      >
                        Start
                      </button>
                    ) : (
                      <button
                        disabled
                        className="bg-gray-300 text-gray-600 px-4 py-1 rounded cursor-not-allowed"
                      >
                        Ongoing
                      </button>
                    )}
                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>

      {message && (
        <div className="mt-6 bg-green-100 text-green-800 p-3 rounded">
          {message}
        </div>
      )}

    </div>
  );
};

export default MyCourses;