"use client";

import { FormEvent, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { businessConfig } from "@/lib/business";

type BookingDetails = {
  ownerName: string;
  phone: string;
  dogName: string;
  breedSize: string;
  cagePreference: string;
  dropOffDate: string;
  pickUpDate: string;
  note: string;
};

const initialDetails: BookingDetails = {
  ownerName: "",
  phone: "",
  dogName: "",
  breedSize: "",
  cagePreference: "Not sure",
  dropOffDate: "",
  pickUpDate: "",
  note: "",
};

const fieldClass =
  "w-full rounded-2xl border border-[#D8CDC0] bg-white px-4 py-4 text-base font-bold text-[#1C1C1A] outline-none transition placeholder:text-[#1C1C1A]/36 focus:border-[#6B8F71] focus:bg-white focus:shadow-[0_0_0_4px_rgba(107,143,113,0.14)]";

const cagePreferences = ["Indoor", "Outdoor", "Not sure"];

export function createWhatsAppMessage(details: BookingDetails) {
  return [
    "Dog Boarding Enquiry - We Care Pets",
    "",
    `Owner Name: ${details.ownerName || "-"}`,
    `Phone: ${details.phone || "-"}`,
    `Dog Name: ${details.dogName || "-"}`,
    `Breed / Size: ${details.breedSize || "-"}`,
    `Cage Preference: ${details.cagePreference || "-"}`,
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
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Owner name" meta="Required">
          <input
            required
            value={details.ownerName}
            onChange={(event) => updateField("ownerName", event.target.value)}
            className={fieldClass}
            type="text"
            placeholder="Your full name"
          />
        </Field>
        <Field label="Phone number" meta="Required">
          <input
            required
            value={details.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            className={fieldClass}
            type="tel"
            placeholder="9446669982"
          />
        </Field>
        <Field label="Dog name" meta="Required">
          <input
            required
            value={details.dogName}
            onChange={(event) => updateField("dogName", event.target.value)}
            className={fieldClass}
            type="text"
            placeholder="Fido"
          />
        </Field>
        <Field label="Breed / size" meta="Optional">
          <input
            value={details.breedSize}
            onChange={(event) => updateField("breedSize", event.target.value)}
            className={fieldClass}
            type="text"
            placeholder="Golden Retriever / medium"
          />
        </Field>
        <Field label="Drop-off date" meta="Required">
          <input
            required
            value={details.dropOffDate}
            onChange={(event) => updateField("dropOffDate", event.target.value)}
            className={fieldClass}
            type="date"
          />
        </Field>
        <Field label="Pick-up date" meta="Required">
          <input
            required
            value={details.pickUpDate}
            onChange={(event) => updateField("pickUpDate", event.target.value)}
            className={fieldClass}
            type="date"
          />
        </Field>
      </div>
      <div className="space-y-3" role="radiogroup" aria-label="Cage preference">
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm font-black text-[#1F3D36]">Cage preference</p>
          <span className="text-xs font-bold text-[#1C1C1A]/46">Optional</span>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {cagePreferences.map((preference) => {
            const isSelected = details.cagePreference === preference;

            return (
              <label
                key={preference}
                className={`flex min-h-12 cursor-pointer select-none items-center justify-center rounded-full border px-5 py-3 text-center text-sm font-black transition active:scale-[0.98] ${
                  isSelected
                    ? "border-[#6B8F71] bg-[#6B8F71] text-white shadow-[0_10px_22px_rgba(107,143,113,0.18)]"
                    : "border-[#D8CDC0] bg-white text-[#1F3D36] hover:border-[#6B8F71] hover:bg-[#6B8F71]/10"
                }`}
              >
                <input
                  type="radio"
                  name="cagePreference"
                  value={preference}
                  checked={isSelected}
                  onChange={() => updateField("cagePreference", preference)}
                  className="sr-only"
                />
                {preference}
              </label>
            );
          })}
        </div>
      </div>
      <Field label="Short note / special care" meta="Optional">
        <textarea
          value={details.note}
          onChange={(event) => updateField("note", event.target.value)}
          className={`${fieldClass} min-h-28 resize-y`}
          placeholder="Any allergies, medication, food notes, or special requirements?"
        />
      </Field>
      {!hasWhatsAppNumber ? (
        <p className="rounded-2xl border border-[#D9903D]/35 bg-[#FFF8EF] p-4 text-sm font-bold leading-6 text-[#1F3D36]">
          WhatsApp number will be added soon.
        </p>
      ) : null}
      <div className="pt-2">
        <button
          className="w-full rounded-2xl bg-[#D9903D] px-6 py-5 text-base font-black text-white shadow-[0_18px_34px_rgba(217,144,61,0.24)] transition hover:-translate-y-0.5 hover:bg-[#C67E2D] disabled:cursor-not-allowed disabled:bg-[#A9B8AD] disabled:shadow-none disabled:hover:translate-y-0"
          disabled={!hasWhatsAppNumber}
          type="submit"
        >
          {hasWhatsAppNumber
            ? "Send Enquiry on WhatsApp"
            : "WhatsApp Number Coming Soon"}
        </button>
        <p className="mt-4 text-center text-xs font-bold leading-5 text-[#1C1C1A]/55">
          No online payment required. We Care Pets will confirm availability and
          pricing directly.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  meta,
  children,
}: {
  label: string;
  meta: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 flex items-center justify-between gap-3">
        <span className="text-sm font-black text-[#1F3D36]">{label}</span>
        <span className="text-xs font-bold text-[#1C1C1A]/46">{meta}</span>
      </span>
      {children}
    </label>
  );
}
