// app/ansokan/page.tsx
"use client";

import { useState } from "react";

export default function AnsokanPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    company: "",
    role: "",
  });

  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("https://localhost:7138/api/Applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("Tack för din ansökan! Vi hör av oss snart.");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          company: "",
          role: "",
        });
      } else {
        setMessage("Ett fel uppstod. Försök igen.");
      }
    } catch (error) {
      setMessage("Kunde inte ansluta till servern.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-slate-900 text-white rounded-xl mt-10">
      <h1 className="text-2xl font-bold mb-6">Ansök till Nerdklubben</h1>
      {message && <p className="mb-4 text-green-400">{message}</p>}

      <form onSubmit={handleSubmit} className="space-y-2 text-black">
        <input
          type="text"
          placeholder="Förnamn"
          required
          value={formData.firstName}
          onChange={(e) =>
            setFormData({ ...formData, firstName: e.target.value })
          }
          className="w-full p-3 rounded bg-slate-800 text-white border border-slate-700"
        />
        <input
          type="text"
          placeholder="Efternamn"
          required
          value={formData.lastName}
          onChange={(e) =>
            setFormData({ ...formData, lastName: e.target.value })
          }
          className="w-full p-3 rounded bg-slate-800 text-white border border-slate-700"
        />
        <input
          type="email"
          placeholder="E-postadress"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full p-3 rounded bg-slate-800 text-white border border-slate-700"
        />
        <input
          type="tel"
          placeholder="Telefonnummer"
          required
          value={formData.phoneNumber}
          onChange={(e) =>
            setFormData({ ...formData, phoneNumber: e.target.value })
          }
          className="w-full p-3 rounded bg-slate-800 text-white border border-slate-700"
        />

        <input
          type="text"
          placeholder="Företag / Skola"
          value={formData.company}
          onChange={(e) =>
            setFormData({ ...formData, company: e.target.value })
          }
          className="w-full p-3 rounded bg-slate-800 text-white border border-slate-700"
        />
        <input
          type="text"
          placeholder="Roll"
          value={formData.role}
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          className="w-full p-3 rounded bg-slate-800 text-white border border-slate-700"
        />

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded cursor-pointer"
        >
          Skicka Ansökan
        </button>
      </form>
    </div>
  );
}
