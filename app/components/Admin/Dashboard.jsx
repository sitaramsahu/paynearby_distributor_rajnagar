import React from 'react'

const Dashboard = () => {
  return (
    <div>
        <div className="bg-white p-6 rounded shadow">
              <h2 className="text-xl font-bold mb-2">Admin Panel</h2>
              <p>Manage users, view reports, and configure system settings.</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h2 className="text-xl font-bold mb-2">Analytics</h2>
              <p>View statistics, user activity, and system health.</p>
            </div>
    </div>
  )
}

export default Dashboard
