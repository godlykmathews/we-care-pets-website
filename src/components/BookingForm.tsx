"use client";

import { FormEvent, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { businessConfig } from "@/lib/business";

type BookingDetails = {
  ownerName: string;
  phone: string;
  dogName: string;
  breedSize: string;
  dropOffDate: string;
  pickUpDate: string;
  note: string;
};

const initialDetails: BookingDetails = {
  ownerName: "",
  phone: "",
  dogName: "",
  breedSize: "",
  dropOffDate: "",
  pickUpDate: "",
  note: "",
};

export function createWhatsAppMessage(details: BookingDetails) {
  return [
    "Dog Boarding Enquiry - We Care Pets",
    "",
    `Owner Name: ${details.ownerName || "-"}`,
    `Phone: ${details.phone || "-"}`,
    `Dog Name: ${details.dogName || "-"}`,
    `Breed / Size: ${details.breedSize || "-"}`,
    `Drop-off Date: ${details.dropOffDate || "-"}`,
    `Pick-up Date: ${details.pickUpDate || "-"}`,
    `Note: ${details.note || "-"}`,
    "",
    "Please confirm availability and pricing.",
  ].join("\n");
}

export default function BookingForm() {
  const [details, setDetails] = useState(initialDetails);
  const hasWhatsAppNumber = Boolean(businessConfig.whatsappNumber);

  const whatsappUrl = useMemo(() => {
    const message = encodeURIComponent(createWhatsAppMessage(details));
    return `https://wa.me/${businessConfig.whatsappNumber}?text=${message}`;
  }, [details]);

  function updateField(field: keyof BookingDetails, value: string) {
    setDetails((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (hasWhatsAppNumber) {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    }
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Owner name">
          <input
            required
            value={details.ownerName}
            onChange={(event) => updateField("ownerName", event.target.value)}
            className="input-field"
            type="text"
            placeholder="Your name"
          />
        </Field>
        <Field label="Phone number">
          <input
            required
            value={details.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            className="input-field"
            type="tel"
            placeholder="Your mobile number"
          />
        </Field>
        <Field label="Dog name">
          <input
            required
            value={details.dogName}
            onChange={(event) => updateField("dogName", event.target.value)}
            className="input-field"
            type="text"
            placeholder="Bruno"
          />
        </Field>
        <Field label="Breed / size">
          <input
            value={details.breedSize}
            onChange={(event) => updateField("breedSize", event.target.value)}
            className="input-field"
            type="text"
            placeholder="Labrador / medium"
          />
        </Field>
        <Field label="Drop-off date">
          <input
            required
            value={details.dropOffDate}
            onChange={(event) => updateField("dropOffDate", event.target.value)}
            className="input-field"
            type="date"
          />
        </Field>
        <Field label="Pick-up date">
          <input
            required
            value={details.pickUpDate}
            onChange={(event) => updateField("pickUpDate", event.target.value)}
            className="input-field"
            type="date"
          />
        </Field>
      </div>
      <Field label="Short note / special care">
        <textarea
          value={details.note}
          onChange={(event) => updateField("note", event.target.value)}
          className="input-field min-h-24 resize-y"
          placeholder="Food, medication, temperament, or anything important..."
        />
      </Field>
      {!hasWhatsAppNumber ? (
        <p className="rounded-2xl border border-[#D9903D]/35 bg-[#FFF8EF] p-4 text-sm font-bold leading-6 text-[#1F3D36]">
          WhatsApp number will be added soon.
        </p>
      ) : null}
      <button
        className="w-full rounded-full bg-[#25D366] px-6 py-4 text-base font-black text-white shadow-[0_16px_28px_rgba(37,211,102,0.20)] transition hover:-translate-y-0.5 hover:bg-[#20bd5a] disabled:cursor-not-allowed disabled:bg-[#A9B8AD] disabled:shadow-none disabled:hover:translate-y-0"
        disabled={!hasWhatsAppNumber}
        type="submit"
      >
        {hasWhatsAppNumber
          ? "Send Enquiry on WhatsApp"
          : "WhatsApp Number Coming Soon"}
      </button>
    </form>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block text-xs font-black uppercase tracking-[0.08em] text-[#1F3D36]">
      <span className="mb-2 block">{label}</span>
      {children}
    </label>
  );
}
