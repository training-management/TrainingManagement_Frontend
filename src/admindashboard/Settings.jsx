import { useState } from "react";

export default function Settings() {
  const [form, setForm] = useState({
    name: "Admin User",
    email: "admin@training.com",
    platformName: "Training Management System",
    notifications: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSave = () => {
    alert("Settings Saved Successfully ✅");
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        Admin Settings
      </h1>

      <div className="grid grid-cols-2 gap-8">
        
        {/* Profile Settings */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">
            Profile Settings
          </h2>

          <div className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="border p-2 rounded"
              placeholder="Admin Name"
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="border p-2 rounded"
              placeholder="Admin Email"
            />
          </div>
        </div>

        {/* System Settings */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">
            System Settings
          </h2>

          <div className="flex flex-col gap-4">
            <input
              type="text"
              name="platformName"
              value={form.platformName}
              onChange={handleChange}
              className="border p-2 rounded"
              placeholder="Platform Name"
            />

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="notifications"
                checked={form.notifications}
                onChange={handleChange}
              />
              Enable Email Notifications
            </label>
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-white p-6 rounded-xl shadow col-span-2">
          <h2 className="text-xl font-semibold mb-4">
            Security Settings
          </h2>

          <div className="flex flex-col gap-4">
            <input
              type="password"
              placeholder="Change Password"
              className="border p-2 rounded"
            />
            <input
              type="password"
              placeholder="Confirm New Password"
              className="border p-2 rounded"
            />
          </div>
        </div>

      </div>

      {/* Save Button */}
      <button
        onClick={handleSave}
        className="mt-8 bg-teal-500 text-white px-6 py-2 rounded-lg"
      >
        Save Changes
      </button>
    </div>
  );
}