import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Cancellation Policy",
  description:
    "Cancellation policy for We Care Pets dog boarding and pet stay bookings.",
};

export default function CancellationPolicyPage() {
  return (
    <LegalPage
      title="Cancellation Policy"
      intro="This policy explains how changes and cancellations are handled for We Care Pets boarding enquiries and confirmed stays."
      sections={[
        {
          heading: "Enquiries",
          body: "An enquiry is not a confirmed booking. If plans change before confirmation, please inform We Care Pets directly so availability can be managed.",
        },
        {
          heading: "Confirmed Bookings",
          body: "Cancellation timing, any applicable charges, and changes to dates should be discussed directly with We Care Pets. Final pricing and booking confirmation happen through direct communication.",
        },
        {
          heading: "Early Pick-up or Extended Stay",
          body: "If you need early pick-up or an extended stay, contact We Care Pets as soon as possible. Extensions depend on availability and direct confirmation.",
        },
        {
          heading: "Emergency Changes",
          body: "We understand that travel and family plans can change. We Care Pets will handle emergency changes case by case through direct communication.",
        },
      ]}
    />
  );
}
