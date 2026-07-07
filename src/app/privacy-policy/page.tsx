import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for We Care Pets dog boarding enquiries and customer communication.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="This policy explains how We Care Pets handles enquiry and booking information for dog boarding, day care, and pet stay services."
      sections={[
        {
          heading: "Information We Collect",
          body: "We may collect owner name, contact number, pet name, breed, age, stay dates, vaccination status, food instructions, medication notes, temperament details, and other information you choose to share for pet care planning.",
        },
        {
          heading: "How We Use Information",
          body: "Information is used to respond to enquiries, assess boarding suitability, plan safe care, coordinate drop-off and pick-up, and communicate directly with you about your pet's stay.",
        },
        {
          heading: "Direct Communication",
          body: "Final pricing, availability, and booking confirmation happen through direct communication with We Care Pets. Please avoid sharing unnecessary sensitive information unless it is relevant to your pet's care.",
        },
        {
          heading: "Data Sharing",
          body: "We do not sell customer information. Details may be shared only when needed for pet safety, legal compliance, or emergency veterinary support.",
        },
      ]}
    />
  );
}
