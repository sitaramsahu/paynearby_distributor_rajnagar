"use client";
import { useEffect, useState } from "react";
import { BarChart3, User, FileText } from "lucide-react";

export default function DashboardPage() {
  const [stats, setStats] = useState({
    users: 0,
    partners: 0,
    payments: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      const [u, p, pay] = await Promise.all([
        fetch("/api/register")
          .then((res) => res.json())
          .catch(() => []),
        fetch("/api/partner")
          .then((res) => res.json())
          .catch(() => []),
        fetch("/api/package-payment")
          .then((res) => res.json())
          .catch(() => []),
      ]);
      setStats({
        users: u?.users?.length || 0,
        partners: p?.partners?.length || 0,
        payments: pay?.payments?.length || 0,
      });
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Total Users" value={stats.users} icon={User} />
        <Card title="Partners" value={stats.partners} icon={FileText} />
        <Card title="Payments" value={stats.payments} icon={BarChart3} />
      </div>
    </div>
  );
}

function Card({ title, value, icon: Icon }) {
  return (
    <div className="bg-white shadow rounded-lg p-5 flex items-center justify-between">
      <div>
        <h2 className="text-gray-600">{title}</h2>
        <p className="text-2xl font-bold">{value}</p>
      </div>
      <Icon className="text-amber-600" size={28} />
    </div>
  );
}
