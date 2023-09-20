export interface BenefitCardProps {
  slug: string;
  color: "magenta" | "cyan" | "green";
  title: string;
  description: string;
}

export const benefits: BenefitCardProps[] = [
  {
    slug: "portable",
    color: "magenta",
    title: "Portable",
    description:
      "Write one SDK that can run within any language or platform.",
  },
  {
    slug: "on-demand",
    color: "cyan",
    title: "On-Demand",
    description:
      "Wraps can be fetched at run-time, unlocking new use-cases.",
  },
  {
    slug: "secure",
    color: "green",
    title: "Secure",
    description:
      "Sandboxing keeps users safe, isolating wraps from app secrets.",
  },
];
