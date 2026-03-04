import React, { useState } from "react";
import { Plus, Search, Users } from "lucide-react";

export default function TeamMember() {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "9876543210",
      role: "Developer",
      department: "IT",
      team: "Frontend Team",
      joiningDate: "2026-01-10",
      status: "Active",
      
    },
  ]);

  const [teams, setTeams] = useState(["Frontend Team"]);
  const [search, setSearch] = useState("");
  const [showMemberModal, setShowMemberModal] = useState(false);
  const [showTeamModal, setShowTeamModal] = useState(false);

  const filteredMembers = members.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen my-5">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Team Members</h1>
          <p className="text-gray-500 text-sm">
            Manage all company team members
          </p>
        </div>

        <div className="flex gap-3">
         

          <button
            onClick={() => setShowMemberModal(true)}
            className="flex items-center gap-2 bg-[#4EC1BE] text-white px-4 py-2 rounded-lg"
          >
            <Plus size={18} />
            Add Member
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <StatCard title="Total Members" value={members.length} />
        <StatCard
          title="Active Members"
          value={members.filter((m) => m.status === "Active").length}
          color="text-green-600"
        />
        <StatCard
          title="Total Teams"
          value={teams.length}
          color="text-indigo-600"
        />
      </div>

      {/* Search */}
      <div className="bg-white p-4 rounded-xl shadow-sm mb-6">
        <div className="flex items-center border rounded-lg px-3 py-2">
          <Search size={18} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search team members..."
            className="ml-2 w-full outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100 text-gray-600 text-sm">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Role</th>
              <th className="p-4">Department</th>
              <th className="p-4">Team</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredMembers.map((member) => (
              <tr key={member.id} className="border-t hover:bg-gray-50">
                <td className="p-4 font-medium">{member.name}</td>
                <td className="p-4">{member.email}</td>
                <td className="p-4">{member.role}</td>
                <td className="p-4">{member.department}</td>
                <td className="p-4">{member.team}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs ${
                      member.status === "Active"
                      
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {member.status}
                  </span>

                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modals */}
      {showMemberModal && (
        <AddMemberModal
          onClose={() => setShowMemberModal(false)}
          onSave={(newMember) =>
            setMembers([...members, { ...newMember, id: Date.now() }])
          }
          teams={teams}
        />
      )}

      {showTeamModal && (
        <CreateTeamModal
          onClose={() => setShowTeamModal(false)}
          onSave={(teamName) => setTeams([...teams, teamName])}
        />
      )}
    </div>
  );
}

/* ----------------- Components ----------------- */

function StatCard({ title, value, color = "text-black" }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm">
      <p className="text-gray-500 text-sm">{title}</p>
      <h2 className={`text-2xl font-bold mt-2 ${color}`}>{value}</h2>
    </div>
  );
}

function AddMemberModal({ onClose, onSave, teams }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    department: "",
    
    joiningDate: "",
    status: "Active",
   
  });

  const handleSubmit = () => {
    onSave(form);
    onClose();
  };

  return (
    <ModalWrapper onClose={onClose} title="Add Team Member">
      <div className="grid gap-3">
        {Object.keys(form).map((field) =>
          field === "status" ? (
            <select
              key={field}
              className="border p-2 rounded"
              value={form.status}
              onChange={(e) =>
                setForm({ ...form, status: e.target.value })
              }
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          ) : field === "team" ? (
            <select
              key={field}
              className="border p-2 rounded"
              value={form.team}
              onChange={(e) =>
                setForm({ ...form, team: e.target.value })
              }
            >
              <option value="">Select Team</option>
              {teams.map((t, i) => (
                <option key={i} value={t}>
                  {t}
                </option>
              ))}
            </select>
          ) : (
            <input
              key={field}
              type={field === "joiningDate" ? "date" : "text"}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              className="border p-2 rounded"
              value={form[field]}
              onChange={(e) =>
                setForm({ ...form, [field]: e.target.value })
              }
            />
          )
        )}
      </div>

      <ModalButtons onClose={onClose} onSave={handleSubmit} />
    </ModalWrapper>
  );
}

function CreateTeamModal({ onClose, onSave }) {
  const [teamName, setTeamName] = useState("");

  const handleSubmit = () => {
    if (!teamName) return;
    onSave(teamName);
    onClose();
  };

  return (
    <ModalWrapper onClose={onClose} title="Create Team">
      <input
        type="text"
        placeholder="Team Name"
        className="border p-2 w-full rounded"
        value={teamName}
        onChange={(e) => setTeamName(e.target.value)}
      />
      <ModalButtons onClose={onClose} onSave={handleSubmit} />
    </ModalWrapper>
  );
}

function ModalWrapper({ children, onClose, title }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl w-96">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        {children}
      </div>
    </div>
  );
}

function ModalButtons({ onClose, onSave }) {
  return (
    <div className="flex justify-end gap-3 mt-4">
      <button onClick={onClose} className="px-4 py-2 border rounded">
        Cancel
      </button>
      <button
        onClick={onSave}
        className="px-4 py-2 bg-indigo-600 text-white rounded"
      >
        Save
      </button>
    </div>
  );
}