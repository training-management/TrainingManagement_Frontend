import React, { useState } from "react";

const Certificates = () => {

  const [certificates, setCertificates] = useState([
    {
      id: "C-101",
      title: "Advanced React Certification",
      issuedBy: "HR Training Dept",
      issueDate: "2026-01-10",
      validTill: "2027-01-10"
    },
    {
      id: "C-102",
      title: "Workplace Communication",
      issuedBy: "Corporate Learning",
      issueDate: "2025-02-01",
      validTill: "2026-02-01"
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [message, setMessage] = useState("");

  const [newCertificate, setNewCertificate] = useState({
    id: "",
    title: "",
    issuedBy: "",
    issueDate: "",
    validTill: ""
  });

  const [errors, setErrors] = useState({});

  const today = new Date().toISOString().split("T")[0];

  // ✅ Certificate Status
  const getStatus = (cert) => {
    if (cert.validTill < today) return "Expired";
    return "Valid";
  };

  // ✅ Validation
  const validate = () => {
    let newErrors = {};

    if (!newCertificate.id) newErrors.id = "Certificate ID required";
    if (!newCertificate.title) newErrors.title = "Title required";
    if (!newCertificate.issuedBy) newErrors.issuedBy = "Issuer required";
    if (!newCertificate.issueDate) newErrors.issueDate = "Issue date required";
    if (!newCertificate.validTill) newErrors.validTill = "Valid till date required";

    if (newCertificate.validTill < newCertificate.issueDate)
      newErrors.validTill = "Valid date must be after issue date";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ Add Certificate
  const handleAdd = () => {
    if (!validate()) return;

    setCertificates([...certificates, newCertificate]);

    setNewCertificate({
      id: "",
      title: "",
      issuedBy: "",
      issueDate: "",
      validTill: ""
    });

    setShowForm(false);
    setMessage("Certificate added successfully!");
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen my-6 mx-6">

      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">
            Certificates
          </h1>
          <p className="text-gray-600 mt-2">
            View and manage your earned certificates.
          </p>
        </div>

        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-black text-white px-5 py-2 rounded"
        >
          + Add Certificate
        </button>
      </div>

      {/* Add Certificate Form */}
      {showForm && (
        <div className="bg-white p-6 rounded shadow mb-8">
          <div className="grid grid-cols-2 gap-4">

            <div>
              <input
                placeholder="Certificate ID"
                value={newCertificate.id}
                onChange={(e) =>
                  setNewCertificate({ ...newCertificate, id: e.target.value })
                }
                className="border p-2 rounded w-full"
              />
              {errors.id && <p className="text-red-500 text-sm">{errors.id}</p>}
            </div>

            <div>
              <input
                placeholder="Certificate Title"
                value={newCertificate.title}
                onChange={(e) =>
                  setNewCertificate({ ...newCertificate, title: e.target.value })
                }
                className="border p-2 rounded w-full"
              />
              {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
            </div>

            <div>
              <input
                placeholder="Issued By"
                value={newCertificate.issuedBy}
                onChange={(e) =>
                  setNewCertificate({ ...newCertificate, issuedBy: e.target.value })
                }
                className="border p-2 rounded w-full"
              />
              {errors.issuedBy && <p className="text-red-500 text-sm">{errors.issuedBy}</p>}
            </div>

            <div>
              <input
                type="date"
                value={newCertificate.issueDate}
                onChange={(e) =>
                  setNewCertificate({ ...newCertificate, issueDate: e.target.value })
                }
                className="border p-2 rounded w-full"
              />
              {errors.issueDate && <p className="text-red-500 text-sm">{errors.issueDate}</p>}
            </div>

            <div>
              <input
                type="date"
                value={newCertificate.validTill}
                onChange={(e) =>
                  setNewCertificate({ ...newCertificate, validTill: e.target.value })
                }
                className="border p-2 rounded w-full"
              />
              {errors.validTill && <p className="text-red-500 text-sm">{errors.validTill}</p>}
            </div>

          </div>

          <div className="mt-4">
            <button
              onClick={handleAdd}
              className="bg-green-600 text-white px-5 py-2 rounded"
            >
              Save Certificate
            </button>
          </div>
        </div>
      )}

      {/* Certificates Table */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Certificate Records</h2>

        <table className="w-full border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border p-3 text-left">ID</th>
              <th className="border p-3 text-left">Title</th>
              <th className="border p-3 text-left">Issued By</th>
              <th className="border p-3 text-left">Issue Date</th>
              <th className="border p-3 text-left">Valid Till</th>
              <th className="border p-3 text-left">Status</th>
              <th className="border p-3 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {certificates.map((cert, index) => {
              const status = getStatus(cert);

              return (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border p-3">{cert.id}</td>
                  <td className="border p-3 font-semibold">{cert.title}</td>
                  <td className="border p-3">{cert.issuedBy}</td>
                  <td className="border p-3">{cert.issueDate}</td>
                  <td className="border p-3">{cert.validTill}</td>

                  <td className={`border p-3 font-semibold ${
                    status === "Valid"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}>
                    {status}
                  </td>

                  <td className="border p-3">
                    <button className="bg-black text-white px-4 py-1 rounded">
                      Download
                    </button>
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

export default Certificates;