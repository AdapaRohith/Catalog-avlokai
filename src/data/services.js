import servicesMarkdown from "../../servicers.md?raw";

// Industry-specific Unsplash images — each set of 10 maps to one industry's automations
const industryImages = {
  "IT Services & Software Development": [
    "1517694712202-14dd9538aa97", // code on laptop screen
    "1554224155-6726b3ff858f", // financial dashboard
    "1553877522-43269d4ea984", // team at whiteboard
    "1531482615-6b1b4dc9e859", // project management board
    "1573164713988-8665fc963095", // client handshake meeting
    "1542831371-29b0f74f9713", // coding close-up
    "1504384308090-c894fdcc538d", // clock and time
    "1450101499163-c8848e968838", // legal contract document
    "1460925895917-afdab827c52f", // analytics chart screen
    "1556745753-b2904692b3cd", // support headset
  ],
  "E-Commerce & Retail": [
    "1556742049-0cfed4f6a45d", // ecommerce shopping cart
    "1556741533-6e6a62e6c150", // review stars rating
    "1566576912321-d58ddd7a6088", // shipping boxes warehouse
    "1563013544-824ae1b704d3", // abandoned cart email
    "1472851294608-062f824d29cc", // product catalog display
    "1533750349-39c8f6f18527", // customer segments analytics
    "1580480055273-228ff5388ef8", // return package
    "1611162616305-c69b3fa7fbe0", // social media shopping
    "1531746790095-e5e4e5b7f3e6", // chatbot on phone
    "1556742400-b5b7c512f3b4", // loyalty rewards card
  ],
  "Manufacturing & Logistics": [
    "1586528116311-ad8dd3c8310d", // supply chain containers
    "1581091226825-a6a2a5aee158", // quality inspection factory
    "1454165804606-c3d57bc86b40", // vendor handshake
    "1553877522-43ce6bce3d05", // warehouse inventory shelves
    "1565793298595-6a879b1d9492", // production line machines
    "1581092335397-9583eb92d232", // maintenance technician
    "1450101499163-c8848e968838", // compliance documents
    "1494412574643-ff11b0a5eb19", // shipping truck logistics
    "1553413077-190dd305871c", // warehouse worker
    "1551288049-bebda4e38f71", // analytics forecast chart
  ],
  "Healthcare & Pharma": [
    "1576091160399-112ba8d25d1d", // doctor appointment
    "1576091160550-2173dba999ef", // medical data compliance
    "1530497610245-94d3c16cda28", // medical records digital
    "1585435557343-3b092031a831", // pharmacy medicines
    "1504813184591-01572f98c85f", // insurance billing desk
    "1579684385127-1ef15d508118", // lab testing
    "1519494026892-80bbd2d6fd0d", // hospital staff scheduling
    "1587854692152-cbe660dbde88", // drug inventory shelf
    "1559757148-5c350d0d3c56", // patient care reminder
    "1532094349884-543bc11b234d", // medical research lab
  ],
  "Real Estate & Construction": [
    "1560518883-ce09059eeffa", // modern building exterior
    "1486406146926-c627a92ad1ab", // real estate cityscape
    "1504307651254-35680f356dfd", // construction site
    "1450101499163-c8848e968838", // legal documents
    "1560448204-e02f11c3d0e2", // project cost estimating
    "1504384308090-c894fdcc538d", // payment processing
    "1541888946425-d81bb19240f5", // construction workers
    "1582407947304-fd86f028f716", // CRM property management
    "1600585154340-be6161a56a0c", // modern apartment
    "1497366216548-37526070297c", // luxury property
  ],
  "SMB Automations": [
    "1556761175-b413da4baf72", // small business workspace
    "1499951360447-b19be8fe80f5", // social media dashboard
    "1519389953810-1950815bdfac", // creative studio
    "1523726491678-bf852e717f6a", // business invoice
    "1516321318423-f06f85e504b3", // appointment scheduling
    "1556742400-b5b7c512f3b4", // loyalty card small shop
    "1504868584819-eb814e8fd8dc", // feedback form
    "1551288049-bebda4e38f71", // data reporting
    "1507679622140-5205562723c3", // email marketing
    "1556745753-b2904692b3cd", // customer support
  ],
};

// Fallback for unknown industries
const fallbackImages = [
  "1451187580459-43490279c0fa", // technology abstract
  "1518770660439-4636190af475", // digital network
  "1526374965328-7f61d4dc18c5", // modern workspace
];

const getDynamicImage = (index, industry = "") => {
  const images = industryImages[industry] || fallbackImages;
  const id = images[index % images.length];
  return `https://images.unsplash.com/photo-${id}?w=1400&q=80&auto=format&fit=crop`;
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

// Static image overrides for specific services (slug → public image path)
const imageOverrides = {
  "it-services-and-software-development-performance-metrics-and-dashboard-generation": "/dashboard_metrics.png",
  "it-services-and-software-development-contract-expiration-and-renewal-alerts": "/contract_alerts.png",
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
    image: imageOverrides[automation.id] || getDynamicImage(index, automation.industry),
    imageAlt: `${automation.title} — ${automation.industry} automation`,
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
