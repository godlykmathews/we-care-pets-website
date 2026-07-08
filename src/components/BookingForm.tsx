"use client";

import { useState } from "react";
import type { MouseEvent, PointerEvent, ReactNode } from "react";
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

const fieldClass =
  "w-full rounded-2xl border border-[#D8CDC0] bg-white px-4 py-4 text-base font-bold text-[#1C1C1A] outline-none transition placeholder:text-[#1C1C1A]/36 focus:border-[#6B8F71] focus:bg-white focus:shadow-[0_0_0_4px_rgba(107,143,113,0.14)]";

function cleanMessageValue(value: string) {
  return value.trim().replace(/\s+/g, " ") || "-";
}

function formatDateForMessage(value: string) {
  if (!value) {
    return "-";
  }

  const [year, month, day] = value.split("-").map(Number);

  if (!year || !month || !day) {
    return value;
  }

  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(year, month - 1, day));
}

export function createWhatsAppMessage(details: BookingDetails) {
  return [
    "Hi We Care Pets,",
    "",
    "I would like to enquire about dog boarding.",
    "",
    "*Booking Details*",
    `- Owner name: ${cleanMessageValue(details.ownerName)}`,
    `- Phone number: ${cleanMessageValue(details.phone)}`,
    `- Dog name: ${cleanMessageValue(details.dogName)}`,
    `- Breed / size: ${cleanMessageValue(details.breedSize)}`,
    `- Drop-off date: ${formatDateForMessage(details.dropOffDate)}`,
    `- Pick-up date: ${formatDateForMessage(details.pickUpDate)}`,
    `- Care notes: ${cleanMessageValue(details.note)}`,
    "",
    "Please confirm availability and pricing for these dates.",
    "Thank you.",
  ].join("\n");
}

function createWhatsAppUrl(details: BookingDetails) {
  return `https://wa.me/${businessConfig.whatsappNumber}?text=${encodeURIComponent(
    createWhatsAppMessage(details),
  )}`;
}

function getFormValue(formData: FormData, field: keyof BookingDetails) {
  const value = formData.get(field);
  return typeof value === "string" ? value : "";
}

function getBookingDetailsFromForm(form: HTMLFormElement): BookingDetails {
  const formData = new FormData(form);

  return {
    ownerName: getFormValue(formData, "ownerName"),
    phone: getFormValue(formData, "phone"),
    dogName: getFormValue(formData, "dogName"),
    breedSize: getFormValue(formData, "breedSize"),
    dropOffDate: getFormValue(formData, "dropOffDate"),
    pickUpDate: getFormValue(formData, "pickUpDate"),
    note: getFormValue(formData, "note"),
  };
}

export default function BookingForm() {
  const [details, setDetails] = useState(initialDetails);
  const hasWhatsAppNumber = Boolean(businessConfig.whatsappNumber);
  const whatsappUrl = createWhatsAppUrl(details);

  function updateField(field: keyof BookingDetails, value: string) {
    setDetails((current) => ({ ...current, [field]: value }));
  }

  function refreshWhatsAppLink(link: HTMLAnchorElement) {
    const form = link.closest("form");

    if (form instanceof HTMLFormElement) {
      const nextDetails = getBookingDetailsFromForm(form);
      setDetails(nextDetails);
      link.href = createWhatsAppUrl(nextDetails);
    }
  }

  function handleWhatsAppPointerDown(event: PointerEvent<HTMLAnchorElement>) {
    refreshWhatsAppLink(event.currentTarget);
  }

  function handleWhatsAppClick(event: MouseEvent<HTMLAnchorElement>) {
    refreshWhatsAppLink(event.currentTarget);

    const form = event.currentTarget.closest("form");

    if (!hasWhatsAppNumber || !form?.reportValidity()) {
      event.preventDefault();
    }
  }

  return (
    <form
      id="booking-form"
      className="space-y-6"
      onSubmit={(event) => event.preventDefault()}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Owner name" meta="Required">
          <input
            required
            name="ownerName"
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
            name="phone"
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
            name="dogName"
            value={details.dogName}
            onChange={(event) => updateField("dogName", event.target.value)}
            className={fieldClass}
            type="text"
            placeholder="Fido"
          />
        </Field>
        <Field label="Breed / size" meta="Optional">
          <input
            name="breedSize"
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
            name="dropOffDate"
            value={details.dropOffDate}
            onChange={(event) => updateField("dropOffDate", event.target.value)}
            className={fieldClass}
            type="date"
          />
        </Field>
        <Field label="Pick-up date" meta="Required">
          <input
            required
            name="pickUpDate"
            value={details.pickUpDate}
            onChange={(event) => updateField("pickUpDate", event.target.value)}
            className={fieldClass}
            type="date"
          />
        </Field>
      </div>
      <Field label="Short note / special care" meta="Optional">
        <textarea
          name="note"
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
        {hasWhatsAppNumber ? (
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            onPointerDown={handleWhatsAppPointerDown}
            onClick={handleWhatsAppClick}
            className="block w-full rounded-2xl bg-[#D9903D] px-6 py-5 text-center text-base font-black text-white shadow-[0_18px_34px_rgba(217,144,61,0.24)] transition hover:-translate-y-0.5 hover:bg-[#C67E2D] focus-visible:outline focus-visible:outline-4 focus-visible:outline-[#D9903D]/30"
          >
            Send Enquiry on WhatsApp
          </a>
        ) : (
          <button
            className="w-full cursor-not-allowed rounded-2xl bg-[#A9B8AD] px-6 py-5 text-base font-black text-white shadow-none"
            disabled
            type="button"
          >
            WhatsApp Number Coming Soon
          </button>
        )}
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
