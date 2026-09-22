import Image from "next/image";
import { Check } from "lucide-react";

type FeatureItemProps = {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  bulletPoints: readonly string[];
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

export default function FeatureItem({
  number,
  eyebrow,
  title,
  description,
  bulletPoints,
  image,
  imageAlt,
  reverse = false,
}: FeatureItemProps) {
  return (
    <article
      className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div>
        <p className="mb-3 text-sm font-semibold tracking-[0.18em] text-primary">
          {eyebrow}
        </p>

        <p className="mb-3 text-sm font-medium text-text-muted">
          FEATURE {number}
        </p>

        <h3 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          {title}
        </h3>

        <p className="mt-5 max-w-xl leading-8 text-text-secondary">
          {description}
        </p>

        <ul className="mt-6 space-y-3">
          {bulletPoints.map((point) => (
            <li
              key={point}
              className="flex items-start gap-3 text-text-secondary"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Check size={16} strokeWidth={2.5} aria-hidden="true" />
              </span>

              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative">
        <Image
          src={image}
          alt={imageAlt}
          width={1400}
          height={900}
          sizes="(max-width: 1024px) 90vw, 42vw"
          className="h-auto w-full"
        />
      </div>
    </article>
  );
}