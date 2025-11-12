"use client";
import { useEffect, useState } from "react";

export default function PaymentsPage() {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    fetchPayments();
  }, []);

  const fetchPayments = async () => {
    const res = await fetch("/api/package-payment");
    const data = await res.json();
    if (data.success) setPayments(data.payment || data.payments || []);
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Package Payments</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border bg-white rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Mobile</th>
              <th className="p-3 text-left">PAN</th>
              <th className="p-3 text-left">Store</th>
              <th className="p-3 text-left">Reference</th>
              <th className="p-3 text-center">Screenshot</th>
            </tr>
          </thead>
          <tbody>
            {payments.length > 0 ? (
              payments.map((p) => (
                <tr key={p.id} className="border-t">
                  <td className="p-3">{p.name}</td>
                  <td className="p-3">{p.mobile}</td>
                  <td className="p-3">{p.panNo}</td>
                  <td className="p-3">{p.storeName}</td>
                  <td className="p-3">{p.referenceNo}</td>
                  <td className="p-3 text-center">
                    {p.screenshot ? (
                      <a
                        href={p.screenshot}
                        target="_blank"
                        className="text-blue-600 hover:underline"
                      >
                        View
                      </a>
                    ) : (
                      "—"
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="p-4 text-center text-gray-500">
                  No payments found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
