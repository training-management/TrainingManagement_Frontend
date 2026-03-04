import React from 'react'

function PlatformUsage() {
  return (
    <div> <h2 className="text-2xl font-bold mb-6 text-gray-800 mx-5 my-5">
        Platform Usage
      </h2>

      <div className="grid grid-cols-4 gap-6 mb-8">
        <Card title="Daily Active Users" value="186" />
        <Card title="Monthly Logins" value="3,240" />
        <Card title="Courses Accessed" value="1,120" />
        <Card title="Reports Generated" value="78" />
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold mb-4">
            Most Popular Training
          </h3>
          <p className="text-gray-600">
            React Advanced Training has the highest enrollment this month.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold mb-4">
            System Performance
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li>✔ 99% Platform Uptime</li>
            <li>✔ Fast Login Response</li>
            <li>✔ Secure Role-Based Access</li>
          </ul>
        </div>
      </div>
    </div>
  );
}


function Card({ title, value }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="text-gray-500 text-sm">{title}</h3>
      <p className="text-2xl font-bold text-gray-800 mt-2">{value}</p>
    </div>
  );
}
  


export default PlatformUsage