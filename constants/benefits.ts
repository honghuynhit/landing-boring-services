export interface BenefitCardProps {
  slug: string;
  color: "magenta" | "cyan" | "green";
  title: string;
  description: string;
}

export const benefits: BenefitCardProps[] = [
  // {
  //   slug: "portable",
  //   color: "magenta",
  //   title: "Portable",
  //   description:
  //     "Write one SDK that can run within any language or platform.",
  // },
  // {
  //   slug: "on-demand",
  //   color: "cyan",
  //   title: "On-Demand",
  //   description:
  //     "Wraps can be fetched at run-time, unlocking new use-cases.",
  // },
  // {
  //   slug: "secure",
  //   color: "green",
  //   title: "Secure",
  //   description:
  //     "Sandboxing keeps users safe, isolating wraps from app secrets.",
  // },
  {
    slug: "https://evo.ninja/",
    color: "magenta",
    title: "Evo.ninja",
    description:
      "Evo.ninja is a multi-agent app capable of writing code, researching the web, and analyzing data.",
  },
  {
    slug: "https://www.unblock.gg/",
    color: "cyan",
    title: "Unblock",
    description:
      "Unblock lets everyday users iInteract with all of web3 through an intuitive chat interface.",
  },
  {
    slug: "https://docs.polywrap.io/",
    color: "green",
    title: "The Polywrap Framework",
    description:
      "The Polywrap Framework helps developers reduce code duplication, eliminate rebuilds, and create extensible software.",
  },
];
