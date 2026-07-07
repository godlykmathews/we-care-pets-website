import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Boarding Policy",
  description:
    "Boarding policy for We Care Pets dog boarding and dog day care in Eraviperoor, Kerala.",
};

export default function BoardingPolicyPage() {
  return (
    <LegalPage
      title="Boarding Policy"
      intro="This policy helps families understand how We Care Pets plans safe and comfortable stays for dogs and puppies."
      sections={[
        {
          heading: "Health and Vaccination",
          body: "Owners should share current vaccination status and any health concerns before boarding. Pets with contagious symptoms or unmanaged medical concerns may require additional discussion before acceptance.",
        },
        {
          heading: "Food and Medication",
          body: "Please provide clear food instructions, feeding times, medication notes, and special care requirements. Medication or special handling must be discussed before confirmation.",
        },
        {
          heading: "Indoor and Outdoor Cage Preference",
          body: "We offer indoor and outdoor cage facilities. Preferences are considered during booking, while final placement depends on suitability, availability, safety, and direct communication with We Care Pets.",
        },
        {
          heading: "Drop-off and Pick-up",
          body: "Drop-off and pick-up timing should be agreed directly. Final pricing and booking confirmation happen through direct communication with We Care Pets.",
        },
      ]}
    />
  );
}
