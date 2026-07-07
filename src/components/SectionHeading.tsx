type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  light?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  text,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
      data-reveal
    >
      {eyebrow ? (
        <p
          className={`mb-3 text-sm font-bold uppercase tracking-[0.18em] ${
            light ? "text-[#F5B35F]" : "text-[#D9903D]"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`text-2xl font-black leading-tight md:text-4xl ${
          light ? "text-white" : "text-[#1F3D36]"
        }`}
      >
        {title}
      </h2>
      {text ? (
        <p
          className={`mt-4 text-base leading-7 md:text-lg md:leading-8 ${
            light ? "text-white/78" : "text-[#1C1C1A]/72"
          }`}
        >
          {text}
        </p>
      ) : null}
    </div>
  );
}
