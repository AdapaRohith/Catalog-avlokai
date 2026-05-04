import servicesMarkdown from "../../servicers.md?raw";

const industryImages = {
  "IT Services & Software Development":
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=80&auto=format&fit=crop",
  "E-Commerce & Retail":
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1400&q=80&auto=format&fit=crop",
  "Manufacturing & Logistics":
    "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1400&q=80&auto=format&fit=crop",
  "Healthcare & Pharma":
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1400&q=80&auto=format&fit=crop",
  "Real Estate & Construction":
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=80&auto=format&fit=crop",
  "SMB Automations":
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1400&q=80&auto=format&fit=crop",
};

const normalizeCurrency = (value = "") =>
  value
    .replace(/ƒ,1/g, "INR ")
    .replace(/ƒ,/g, "INR ")
    .replace(/\s+/g, " ")
    .trim();

const publicMonthlyFee = (value = "") => normalizeCurrency(value).replace(/\s*\(.+\)$/, "");

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const parseEnterpriseIndustries = () => {
  const industryMatches = [...servicesMarkdown.matchAll(/^## Industry \d+: (.+)$/gm)];

  return industryMatches.map((match, index) => {
    const industry = match[1].trim();
    const start = match.index;
    const end =
      index + 1 < industryMatches.length
        ? industryMatches[index + 1].index
        : servicesMarkdown.indexOf("## STARTUP TIER");
    const block = servicesMarkdown.slice(start, end);

    const automations = [...block.matchAll(/^### (\d+\.\d+) (.+)$([\s\S]*?)(?=^---\s*$)/gm)].map((entry) => {
      const body = entry[3];
      const title = entry[2].trim();

      return {
        id: slugify(`${industry}-${title}`),
        name: title,
        title,
        industry,
        category: industry,
        useCase: normalizeCurrency((body.match(/\*\*Description:\*\*\s*(.+)/) || [])[1]),
        buildFee: normalizeCurrency((body.match(/\*\*Build Fee:\*\*\s*(.+)/) || [])[1]),
        monthlyFee: publicMonthlyFee((body.match(/\*\*Client Subscription Fee:\*\*\s*(.+)/) || [])[1]),
      };
    });

    return {
      id: slugify(industry),
      name: industry,
      description: "10 focused automations for high-ROI operating workflows.",
      automations,
    };
  });
};

const parseSmbAutomations = () => {
  const startupStart = servicesMarkdown.indexOf("## STARTUP TIER");
  const startupBlock = servicesMarkdown.slice(startupStart);

  const automations = [...startupBlock.matchAll(/^### S\d+: (.+)$([\s\S]*?)(?=^---\s*$)/gm)].map((entry) => {
    const body = entry[2];
    const title = entry[1].trim();

    return {
      id: slugify(`SMB Automations-${title}`),
      name: title,
      title,
      industry: "SMB Automations",
      category: "SMB Automations",
      useCase: normalizeCurrency((body.match(/\*\*Description:\*\*\s*(.+)/) || [])[1]),
      buildFee: normalizeCurrency((body.match(/\*\*Build Fee:\*\*\s*(.+)/) || [])[1]),
      monthlyFee: publicMonthlyFee((body.match(/\*\*Client Fee:\*\*\s*(.+)/) || [])[1]),
    };
  });

  return {
    id: "smb-automations",
    name: "SMB Automations",
    description: "Lean loss-leader automations for businesses with teams under 5 people.",
    automations,
  };
};

export const serviceIndustries = [...parseEnterpriseIndustries(), parseSmbAutomations()];

const services = serviceIndustries.flatMap((industry) =>
  industry.automations.map((automation, index) => ({
    ...automation,
    shortDescription: automation.useCase,
    tagline: automation.useCase,
    detailedDescription: automation.useCase,
    problem: automation.useCase,
    audience:
      automation.industry === "SMB Automations"
        ? "Built for solopreneurs and businesses with teams under 5 people."
        : `Built for ${automation.industry} teams ready to remove manual operating work.`,
    spotlight: "A focused automation with a clear setup fee and a simple monthly operating fee.",
    startingPrice: automation.buildFee,
    pricingModel: `Build fee + ${automation.monthlyFee}`,
    timeline: automation.industry === "SMB Automations" ? "1 to 2 days" : "15 to 20 days",
    image: industryImages[automation.industry],
    imageAlt: `${automation.industry} automation workspace`,
    tags: [automation.industry, "Automation", "Book a demo"],
    useCases: [automation.useCase],
    metrics: [
      { value: automation.buildFee, label: "build fee" },
      { value: automation.monthlyFee, label: "monthly fee" },
      { value: automation.industry === "SMB Automations" ? "<5" : "10", label: automation.industry === "SMB Automations" ? "person teams" : "industry set" },
    ],
    outcomes: [automation.title, automation.useCase, `Setup cost: ${automation.buildFee}`],
    process: [
      "Book a demo and map the workflow.",
      "Connect the required tools and test the automation.",
      "Launch with monitoring and monthly support.",
    ],
    deliverables: [automation.title, automation.useCase, `Monthly fee: ${automation.monthlyFee}`],
    idealFor:
      automation.industry === "SMB Automations"
        ? ["Solopreneurs", "Micro-businesses", "Teams under 5 people"]
        : [automation.industry, "Growing operations teams", "Businesses with repeatable manual workflows"],
    industryIndex: index,
  }))
);

export const serviceCategories = serviceIndustries.map((industry) => industry.name);

export const studioPillars = [
  {
    title: "Pick the workflow",
    description: "Choose the automation that removes the most manual work first.",
  },
  {
    title: "Book the demo",
    description: "We map tools, edge cases, and the exact operating path before build.",
  },
  {
    title: "Launch and run",
    description: "Each service has a setup fee and a simple monthly operating fee.",
  },
];

export const rolloutSteps = [
  {
    title: "Select industry",
    description: "Start from the page that best matches your operating model.",
  },
  {
    title: "Choose automation",
    description: "Review the title, use case, setup cost, and monthly fee.",
  },
  {
    title: "Book a demo",
    description: "Every service routes into the contact flow for a short discovery call.",
  },
  {
    title: "Go live",
    description: "We build, test, connect, and support the automation.",
  },
];

export default services;
