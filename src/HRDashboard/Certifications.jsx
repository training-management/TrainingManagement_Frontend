import React, { useState } from "react";

const Certifications = () => {

  const [certifications, setCertifications] = useState([
    {
      id: "EMP-001",
      name: "Rahul Sharma",
      department: "IT",
      certificate: "AWS Cloud Practitioner",
      issueDate: "2025-01-15",
      expiryDate: "2027-01-15",
      status: "Valid"
    },
    {
      id: "EMP-002",
      name: "Priya Singh",
      department: "HR",
      certificate: "HR Compliance Certification",
      issueDate: "2024-05-10",
      expiryDate: "2026-05-10",
      status: "Valid"
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    department: "",
    certificate: "",
    issueDate: "",
    expiryDate: ""
  });

  const getStatus = (expiryDate) => {
    const today = new Date();
    const expiry = new Date(expiryDate);

    const diffTime = expiry - today;
    const diffDays = diffTime / (1000 * 60 * 60 * 24);

    if (diffDays < 0) return "Expired";
    if (diffDays <= 60) return "Expiring Soon";
    return "Valid";
  };

  const handleAddCertification = () => {

    if (
      !formData.id ||
      !formData.name ||
      !formData.department ||
      !formData.certificate ||
      !formData.issueDate ||
      !formData.expiryDate
    ) {
      setMessage("All fields are required.");
      return;
    }

    if (new Date(formData.expiryDate) <= new Date(formData.issueDate)) {
      setMessage("Expiry date must be after issue date.");
      return;
    }

    const newCertification = {
      ...formData,
      status: getStatus(formData.expiryDate)
    };

    setCertifications([...certifications, newCertification]);

    setFormData({
      id: "",
      name: "",
      department: "",
      certificate: "",
      issueDate: "",
      expiryDate: ""
    });

    setShowForm(false);
    setMessage("Certification added successfully!");
  };

  const totalCertificates = certifications.length;
  const expiredCount = certifications.filter(c => c.status === "Expired").length;
  const expiringSoon = certifications.filter(c => c.status === "Expiring Soon").length;

  return (
    <div className="p-8 bg-gray-100 min-h-screen my-6">

      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">
          Employee Certifications – HR Panel
        </h1>

        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-black text-white px-5 py-2 rounded"
        >
          + Add Certification
        </button>
      </div>

      {/* Form */}
      {showForm && (
        <div className="bg-white p-6 rounded shadow mb-8">
          <h2 className="text-xl font-semibold mb-4">Add Certification</h2>

          <div className="grid grid-cols-2 gap-4">

            <input
              type="text"
              placeholder="Employee ID"
              className="border p-2 rounded"
              value={formData.id}
              onChange={(e)=>setFormData({...formData,id:e.target.value})}
            />

            <input
              type="text"
              placeholder="Employee Name"
              className="border p-2 rounded"
              value={formData.name}
              onChange={(e)=>setFormData({...formData,name:e.target.value})}
            />

            <input
              type="text"
              placeholder="Department"
              className="border p-2 rounded"
              value={formData.department}
              onChange={(e)=>setFormData({...formData,department:e.target.value})}
            />

            <input
              type="text"
              placeholder="Certificate Name"
              className="border p-2 rounded"
              value={formData.certificate}
              onChange={(e)=>setFormData({...formData,certificate:e.target.value})}
            />

            <input
              type="date"
              className="border p-2 rounded"
              value={formData.issueDate}
              onChange={(e)=>setFormData({...formData,issueDate:e.target.value})}
            />

            <input
              type="date"
              className="border p-2 rounded"
              value={formData.expiryDate}
              onChange={(e)=>setFormData({...formData,expiryDate:e.target.value})}
            />

          </div>

          <button
            onClick={handleAddCertification}
            className="mt-4 bg-blue-600 text-white px-5 py-2 rounded"
          >
            Save Certification
          </button>
        </div>
      )}

      {/* Overview Cards */}
      <div className="grid grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-5 rounded shadow">
          <h4>Total Certifications</h4>
          <p className="text-2xl font-bold">{totalCertificates}</p>
        </div>

        <div className="bg-red-100 p-5 rounded">
          <h4>Expired</h4>
          <p className="text-2xl font-bold">{expiredCount}</p>
        </div>

        <div className="bg-yellow-100 p-5 rounded">
          <h4>Expiring Soon</h4>
          <p className="text-2xl font-bold">{expiringSoon}</p>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Certification Records</h2>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="border p-3 text-left">Employee ID</th>
                <th className="border p-3 text-left">Name</th>
                <th className="border p-3 text-left">Department</th>
                <th className="border p-3 text-left">Certificate</th>
                <th className="border p-3 text-left">Issue Date</th>
                <th className="border p-3 text-left">Expiry Date</th>
                <th className="border p-3 text-left">Status</th>
              </tr>
            </thead>

            <tbody>
              {certifications.map((cert, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border p-3">{cert.id}</td>
                  <td className="border p-3 font-semibold">{cert.name}</td>
                  <td className="border p-3">{cert.department}</td>
                  <td className="border p-3">{cert.certificate}</td>
                  <td className="border p-3">{cert.issueDate}</td>
                  <td className="border p-3">{cert.expiryDate}</td>

                  <td className={`border p-3 font-semibold ${
                    cert.status === "Expired"
                      ? "text-red-600"
                      : cert.status === "Expiring Soon"
                      ? "text-yellow-600"
                      : "text-green-600"
                  }`}>
                    {cert.status}
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

export default Certifications;