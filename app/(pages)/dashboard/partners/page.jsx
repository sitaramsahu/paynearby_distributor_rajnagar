"use client";
import { useEffect, useState } from "react";

export default function PartnersPage() {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    fetchPartners();
  }, []);

  const fetchPartners = async () => {
    const res = await fetch("/api/partner");
    const data = await res.json();
    if (data.success) setPartners(data.partners);
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this partner?")) return;
    await fetch(`/api/partner?id=${id}`, { method: "DELETE" });
    fetchPartners();
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Partner Applications</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border bg-white rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Mobile</th>
              <th className="p-3 text-left">PAN</th>
              <th className="p-3 text-left">Aadhaar</th>
              <th className="p-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {partners.length > 0 ? (
              partners.map((p) => (
                <tr key={p.id} className="border-t">
                  <td className="p-3">{p.name}</td>
                  <td className="p-3">{p.email}</td>
                  <td className="p-3">{p.mobile}</td>
                  <td className="p-3">{p.pan}</td>
                  <td className="p-3">{p.aadhaar}</td>
                  <td className="p-3 text-center">
                    <button
                      onClick={() => handleDelete(p.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="p-4 text-center text-gray-500">
                  No partners found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
