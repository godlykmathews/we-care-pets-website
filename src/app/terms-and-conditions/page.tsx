import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Terms and conditions for We Care Pets dog boarding, day care, and pet stay services.",
};

export default function TermsAndConditionsPage() {
  return (
    <LegalPage
      title="Terms and Conditions"
      intro="These terms outline the basic expectations for using We Care Pets boarding, day care, and pet stay services."
      sections={[
        {
          heading: "Service Scope",
          body: "We Care Pets provides dog boarding, dog day care, short-term boarding, long-term boarding, and indoor and outdoor cage facilities for dogs and puppies.",
        },
        {
          heading: "Booking Confirmation",
          body: "Submitting an enquiry does not guarantee a booking. Final pricing, availability, care requirements, and booking confirmation happen through direct communication with We Care Pets.",
        },
        {
          heading: "Owner Responsibility",
          body: "Owners must provide accurate pet health, vaccination, temperament, food, medication, and emergency information before the stay. We may decline or modify care if information is incomplete or safety concerns arise.",
        },
        {
          heading: "Pet Safety",
          body: "We take reasonable care to provide a safe and engaging environment. Owners acknowledge that pet boarding involves normal risks related to animal behavior, health, and adjustment to a new environment.",
        },
      ]}
    />
  );
}
