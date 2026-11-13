"use client";

import { useState } from "react";

interface ApplicationForm {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  company: string;
  role: string;
}

type FormErrors = Partial<Record<keyof ApplicationForm, string>>;

export default function AnsokanPage() {
  const [formData, setFormData] = useState<ApplicationForm>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    company: "",
    role: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [statusMessage, setStatusMessage] = useState<{
    text: string;
    type: "success" | "error";
  } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "Förnamn är obligatoriskt.";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Efternamn är obligatoriskt.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "E-postadress är obligatorisk.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Ange en giltig e-postadress.";
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Telefonnummer är obligatoriskt.";
    } else if (!/^[0-9+\s-]{7,15}$/.test(formData.phoneNumber.trim())) {
      newErrors.phoneNumber = "Ange ett giltigt telefonnummer.";
    }
    if (!formData.company.trim()) {
      newErrors.company = "Företag / Skola är obligatoriskt.";
    }
    if (!formData.role.trim()) {
      newErrors.role = "Roll är obligatorisk.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: keyof ApplicationForm, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage(null);

    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("https://localhost:7138/api/Applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatusMessage({
          text: "Tack för din ansökan! En bekräftelse har skickats till din e-post.",
          type: "success",
        });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          company: "",
          role: "",
        });
      } else {
        setStatusMessage({
          text: "Ett fel uppstod vid registreringen. Kontrollera uppgifterna och försök igen.",
          type: "error",
        });
      }
    } catch {
      setStatusMessage({
        text: "Kunde inte ansluta till servern. Kontrollera att backend är igång.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-slate-900 text-white rounded-xl mt-10">
      <h1 className="text-2xl font-bold mb-6">Ansök till Nerdklubben</h1>

      {statusMessage && (
        <p
          className={`mb-4 p-3 rounded text-sm ${
            statusMessage.type === "success"
              ? "bg-green-950/60 text-green-400 border border-green-700"
              : "bg-red-950/60 text-red-400 border border-red-700"
          }`}
        >
          {statusMessage.text}
        </p>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-3">
        <div>
          <input
            type="text"
            placeholder="Förnamn"
            value={formData.firstName}
            onChange={(e) => handleChange("firstName", e.target.value)}
            className={`w-full p-3 rounded bg-slate-800 text-white border ${
              errors.firstName ? "border-red-500" : "border-slate-700"
            }`}
          />
          {errors.firstName && (
            <p className="mt-1 text-xs text-red-400">{errors.firstName}</p>
          )}
        </div>

        <div>
          <input
            type="text"
            placeholder="Efternamn"
            value={formData.lastName}
            onChange={(e) => handleChange("lastName", e.target.value)}
            className={`w-full p-3 rounded bg-slate-800 text-white border ${
              errors.lastName ? "border-red-500" : "border-slate-700"
            }`}
          />
          {errors.lastName && (
            <p className="mt-1 text-xs text-red-400">{errors.lastName}</p>
          )}
        </div>

        <div>
          <input
            type="email"
            placeholder="E-postadress"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className={`w-full p-3 rounded bg-slate-800 text-white border ${
              errors.email ? "border-red-500" : "border-slate-700"
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-400">{errors.email}</p>
          )}
        </div>

        <div>
          <input
            type="tel"
            placeholder="Telefonnummer"
            value={formData.phoneNumber}
            onChange={(e) => handleChange("phoneNumber", e.target.value)}
            className={`w-full p-3 rounded bg-slate-800 text-white border ${
              errors.phoneNumber ? "border-red-500" : "border-slate-700"
            }`}
          />
          {errors.phoneNumber && (
            <p className="mt-1 text-xs text-red-400">{errors.phoneNumber}</p>
          )}
        </div>

        <div>
          <input
            type="text"
            placeholder="Företag / Skola"
            value={formData.company}
            onChange={(e) => handleChange("company", e.target.value)}
            className={`w-full p-3 rounded bg-slate-800 text-white border ${
              errors.company ? "border-red-500" : "border-slate-700"
            }`}
          />
          {errors.company && (
            <p className="mt-1 text-xs text-red-400">{errors.company}</p>
          )}
        </div>

        <div>
          <input
            type="text"
            placeholder="Roll"
            value={formData.role}
            onChange={(e) => handleChange("role", e.target.value)}
            className={`w-full p-3 rounded bg-slate-800 text-white border ${
              errors.role ? "border-red-500" : "border-slate-700"
            }`}
          />
          {errors.role && (
            <p className="mt-1 text-xs text-red-400">{errors.role}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-bold rounded cursor-pointer"
        >
          {isSubmitting ? "Skickar..." : "Skicka Ansökan"}
        </button>
      </form>
    </div>
  );
}
