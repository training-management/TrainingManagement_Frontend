import React, { useState } from "react";

const Settingss = () => {

  const [formData, setFormData] = useState({
    companyName: "TechNova Pvt Ltd",
    hrEmail: "hr@technova.com",
    contactNumber: "",
    ratingScale: 5,
    notifyExpiringCert: true,
    notifyPerformanceReview: true
  });

  const [message, setMessage] = useState("");

  const handleSaveSettings = () => {

    if (!formData.companyName || !formData.hrEmail || !formData.contactNumber) {
      setMessage("All required fields must be filled.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.hrEmail)) {
      setMessage("Enter a valid email address.");
      return;
    }

    if (formData.contactNumber.length < 10) {
      setMessage("Contact number must be at least 10 digits.");
      return;
    }

    setMessage("Settings saved successfully!");
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen my-6 mx-6">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          HR Settings – Dashboard Configuration
        </h1>
        <p className="text-gray-600 mt-2">
          Manage company and HR system preferences.
        </p>
      </div>

      <div className="bg-white p-8 rounded shadow">

        <h2 className="text-xl font-semibold mb-6">Company Information</h2>

        <div className="grid grid-cols-2 gap-6">

          <div>
            <label className="block mb-2 font-medium">Company Name *</label>
            <input
              type="text"
              className="border p-2 rounded w-full"
              value={formData.companyName}
              onChange={(e)=>setFormData({...formData,companyName:e.target.value})}
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">HR Email *</label>
            <input
              type="email"
              className="border p-2 rounded w-full"
              value={formData.hrEmail}
              onChange={(e)=>setFormData({...formData,hrEmail:e.target.value})}
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Contact Number *</label>
            <input
              type="text"
              className="border p-2 rounded w-full"
              value={formData.contactNumber}
              onChange={(e)=>setFormData({...formData,contactNumber:e.target.value})}
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Performance Rating Scale</label>
            <select
              className="border p-2 rounded w-full"
              value={formData.ratingScale}
              onChange={(e)=>setFormData({...formData,ratingScale:e.target.value})}
            >
              <option value={5}>1 - 5 Scale</option>
              <option value={10}>1 - 10 Scale</option>
            </select>
          </div>

        </div>

        {/* Notification Settings */}
        <h2 className="text-xl font-semibold mt-10 mb-6">
          Notification Preferences
        </h2>

        <div className="space-y-4">

          <div className="flex items-center justify-between">
            <span>Notify when certifications are expiring</span>
            <input
              type="checkbox"
              checked={formData.notifyExpiringCert}
              onChange={(e)=>setFormData({...formData,notifyExpiringCert:e.target.checked})}
            />
          </div>

          <div className="flex items-center justify-between">
            <span>Notify before performance reviews</span>
            <input
              type="checkbox"
              checked={formData.notifyPerformanceReview}
              onChange={(e)=>setFormData({...formData,notifyPerformanceReview:e.target.checked})}
            />
          </div>

        </div>

        <button
          onClick={handleSaveSettings}
          className="mt-8 bg-black text-white px-6 py-2 rounded"
        >
          Save Settings
        </button>

      </div>

      {message && (
        <div className="mt-6 bg-green-100 text-green-800 p-3 rounded">
          {message}
        </div>
      )}

    </div>
  );
};

export default Settingss;