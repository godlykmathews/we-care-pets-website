import { reviews } from "@/lib/siteData";
import { businessConfig } from "@/lib/business";
import SectionHeading from "./SectionHeading";

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="overflow-hidden bg-white px-4 py-14 md:px-5 md:py-24"
    >
      <SectionHeading
        eyebrow="Reviews"
        title="Trusted by local pet families."
        text="Real Google review snippets displayed visually."
      />
      <div className="mx-auto mt-8 max-w-4xl" data-reveal>
        <div className="review-poster-stage relative min-h-[300px] md:min-h-[260px]">
          {reviews.map((review, index) => (
            <figure
              key={review.name}
              className={`review-poster-card review-poster-${index} absolute rounded-[1.25rem] border border-[#E8DCCB] bg-white p-6 shadow-[0_18px_44px_rgba(31,61,54,0.10)]`}
            >
              <div className="mb-3 flex gap-1 text-[#D9903D]" aria-hidden>
                <span>*</span>
                <span>*</span>
                <span>*</span>
                <span>*</span>
                <span>*</span>
              </div>
              <blockquote className="text-base leading-7 text-[#1C1C1A]/78">
                &quot;{review.quote}&quot;
              </blockquote>
              <figcaption className="mt-5 font-black text-[#1F3D36]">
                {review.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
      <div className="mt-8 text-center">
        {businessConfig.googleBusinessProfileUrl ? (
          <a
            href={businessConfig.googleBusinessProfileUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-full bg-[#1F3D36] px-6 py-3 text-sm font-black uppercase tracking-[0.08em] text-white"
          >
            View all Google reviews
          </a>
        ) : (
          <span className="inline-flex rounded-full border border-[#E8DCCB] bg-white px-6 py-3 text-sm font-black uppercase tracking-[0.08em] text-[#1F3D36]/70">
            View all Google reviews
          </span>
        )}
      </div>
    </section>
  );
}
