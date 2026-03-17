const services = [
  {
    id: "website-automation-setup",
    name: "Digital Growth Systems",
    category: "Web Experience",
    tagline: "Build digital systems that capture demand, qualify interest, and route opportunities automatically.",
    shortDescription:
      "High-conversion digital experiences with CRM sync, booking flows, and automation triggers built into every major interaction.",
    detailedDescription:
      "We design sales-driven digital systems that act like operational assets, not static brochures. Every touchpoint is wired into your pipeline so leads are scored, routed, and followed up without manual chasing.",
    problem: "Your digital presence looks fine, but it still leaks leads and creates manual admin work behind the scenes.",
    audience: "Founders, agencies, clinics, and service businesses that need their digital channels to generate pipeline every day.",
    spotlight:
      "Built for teams that want Apple-grade polish on the front end and operational discipline behind the scenes.",
    startingPrice: "INR 15,000",
    pricingModel: "Project engagement",
    timeline: "2 to 4 weeks",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=80&auto=format&fit=crop",
    imageAlt: "Premium analytics dashboard and business performance screens",
    tags: ["Lead capture", "Booking", "CRM sync"],
    useCases: ["Sales funnels", "Landing pages", "Booking flows"],
    metrics: [
      { value: "14-28", label: "day launch window" },
      { value: "24/7", label: "lead capture coverage" },
      { value: "3x", label: "faster lead response" },
    ],
    outcomes: [
      "Conversion-first page architecture",
      "Instant CRM and inbox handoff",
      "Automated follow-up sequences",
    ],
    process: [
      "Map the current customer journey, friction points, and conversion goals.",
      "Design an interface system with clear hierarchy, velocity, and trust-building content blocks.",
      "Build the digital system with integrated forms, scheduling, CRM hooks, and analytics events.",
      "Launch with measurement, refinement, and a clean operational handoff.",
    ],
    deliverables: [
      "Responsive React, Next.js, or CMS implementation",
      "Lead capture and qualification flows",
      "Calendar and payment integration",
      "Analytics event plan and dashboard",
      "Post-launch optimization checklist",
    ],
    idealFor: [
      "Teams replacing disconnected channels with revenue systems",
      "Operators who need cleaner handoff into sales",
      "Brands that want premium visual credibility",
    ],
  },
  {
    id: "social-media-automation",
    name: "Social Media Automation",
    category: "Growth Engine",
    tagline: "Run a multi-channel content machine without living inside scheduling tools all week.",
    shortDescription:
      "Unified scheduling, approval flows, DM automation, and reporting so your growth team ships more with less overhead.",
    detailedDescription:
      "We build a disciplined publishing and response engine across the channels that matter to you. Content gets planned, routed, approved, posted, and measured from one operating layer, with automations handling the repetitive work.",
    problem: "Social media is stealing time from strategy, creative work, and actual selling.",
    audience: "Founders, content teams, agencies, and operators who need consistent social presence without manual grind.",
    spotlight:
      "Turns content operations from a calendar headache into a repeatable system with clear momentum.",
    startingPrice: "INR 10,000",
    pricingModel: "Monthly retainer",
    timeline: "1 to 2 weeks",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1400&q=80&auto=format&fit=crop",
    imageAlt: "Social media analytics and planning workspace",
    tags: ["Scheduling", "Approvals", "Analytics"],
    useCases: ["Content teams", "Launch calendars", "DM triage"],
    metrics: [
      { value: "80%", label: "manual posting removed" },
      { value: "1", label: "single reporting hub" },
      { value: "7d", label: "content visibility cadence" },
    ],
    outcomes: [
      "Fewer missed posts and approvals",
      "Faster team coordination",
      "Consistent engagement handling",
    ],
    process: [
      "Audit the current channel mix, cadence, and approval bottlenecks.",
      "Create a structured content pipeline with templates, review states, and publishing rules.",
      "Automate posting, response routing, and recurring reporting.",
      "Train the team on the new operating rhythm and performance dashboard.",
    ],
    deliverables: [
      "Cross-channel scheduling workflow",
      "Approval and asset handoff system",
      "DM or response automation rules",
      "Performance reporting dashboard",
      "Team enablement session",
    ],
    idealFor: [
      "Lean teams scaling their publishing cadence",
      "Agencies juggling multiple client accounts",
      "Businesses that need sharper visibility into performance",
    ],
  },
  {
    id: "ai-chatbot-integration",
    name: "AI Chatbot Integration",
    category: "Conversational AI",
    tagline: "Deploy always-on assistants that answer, qualify, route, and book in your tone of voice.",
    shortDescription:
      "Web, WhatsApp, and support assistants trained on your business so conversations keep moving after hours and at scale.",
    detailedDescription:
      "We build AI assistants that do more than deflect FAQs. They capture intent, guide prospects, schedule meetings, support customers, and create structured data for the team behind the scenes.",
    problem: "You lose momentum when prospects arrive outside office hours or ask the same questions repeatedly.",
    audience: "Businesses with high inquiry volume, repetitive questions, or slow handoffs between marketing and support.",
    spotlight:
      "Designed to feel human, stay aligned with your business, and connect directly into the systems your team already uses.",
    startingPrice: "INR 20,000",
    pricingModel: "Setup plus optimization",
    timeline: "2 to 3 weeks",
    image:
      "https://images.unsplash.com/photo-1676299081847-824916de030a?w=1400&q=80&auto=format&fit=crop",
    imageAlt: "AI conversation interface shown on a modern device",
    tags: ["Web AI", "WhatsApp", "Lead qualification"],
    useCases: ["Support triage", "Lead capture", "Appointment booking"],
    metrics: [
      { value: "24/7", label: "coverage window" },
      { value: "<30s", label: "first response target" },
      { value: "4x", label: "faster qualification" },
    ],
    outcomes: [
      "Always-on customer response",
      "Clear lead qualification before handoff",
      "Lower support load for the team",
    ],
    process: [
      "Capture the most common questions, objections, and decision paths.",
      "Define assistant behavior, tone, escalation rules, and integrations.",
      "Train, test, and launch on web, WhatsApp, or other priority channels.",
      "Review transcripts, refine prompts, and improve routing quality over time.",
    ],
    deliverables: [
      "Custom AI assistant behavior design",
      "Knowledge base and prompt configuration",
      "Web or WhatsApp deployment",
      "Analytics and escalation dashboard",
      "Performance tuning loop",
    ],
    idealFor: [
      "Businesses receiving repetitive inbound questions",
      "Sales teams that need cleaner qualification",
      "Support teams under response pressure",
    ],
  },
  {
    id: "crm-workflow-automation",
    name: "CRM and Workflow Automation",
    category: "Operations Core",
    tagline: "Connect your CRM, invoicing, project delivery, and team alerts into one clean operating system.",
    shortDescription:
      "Multi-step automations for lead routing, status changes, invoicing, delivery handoffs, and internal notifications.",
    detailedDescription:
      "We stitch together the tools your team already uses into a cohesive backend system. Instead of manual updates and copy-paste admin, every status change triggers the next action automatically.",
    problem: "Your tools hold the right information, but the work between them still depends on people remembering the next step.",
    audience: "Service businesses, agencies, and ops-heavy teams that want fewer handoff mistakes and tighter delivery.",
    spotlight:
      "This is the backend upgrade that keeps leads, invoices, projects, and follow-up moving without dropped balls.",
    startingPrice: "INR 25,000",
    pricingModel: "Project engagement",
    timeline: "2 to 4 weeks",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=80&auto=format&fit=crop",
    imageAlt: "Workflow dashboard and CRM analytics on a wide display",
    tags: ["CRM", "Ops", "Notifications"],
    useCases: ["Lead routing", "Invoicing", "Project handoffs"],
    metrics: [
      { value: "0", label: "manual copy-paste goals" },
      { value: "90%", label: "handoff automation rate" },
      { value: "1", label: "source of truth" },
    ],
    outcomes: [
      "Fewer dropped tasks",
      "Cleaner handoff between teams",
      "More predictable delivery operations",
    ],
    process: [
      "Audit the current tools, data ownership, and critical manual handoffs.",
      "Design the future-state automation architecture and failure handling.",
      "Implement workflows across CRM, email, invoicing, PM tools, and alerts.",
      "Stress test edge cases, document the system, and onboard the team.",
    ],
    deliverables: [
      "CRM and pipeline architecture",
      "Automation scenarios and routing rules",
      "Documentation and fallback paths",
      "Team training and support handoff",
      "30-day stabilization support",
    ],
    idealFor: [
      "Teams scaling delivery without adding admin headcount",
      "Businesses with messy lead-to-fulfillment pipelines",
      "Operators who need stronger system visibility",
    ],
  },
  {
    id: "custom-ai-solutions",
    name: "Custom AI Solutions",
    category: "Applied Intelligence",
    tagline: "Design bespoke AI workflows for the exact operational problem generic tools cannot solve.",
    shortDescription:
      "From internal copilots to document automation and decision support, we build AI systems around your real workflows.",
    detailedDescription:
      "When your problem is too nuanced for off-the-shelf software, we architect a custom AI workflow around it. That may mean document extraction, internal search, proposal generation, enrichment, prediction, or a private assistant connected to your stack.",
    problem: "You have a valuable workflow with enough complexity that no standard tool fits cleanly.",
    audience: "Teams with proprietary processes, internal knowledge bottlenecks, or ambitious automation goals.",
    spotlight:
      "The high-end tier for businesses that want a strategic advantage, not just time savings.",
    startingPrice: "INR 50,000",
    pricingModel: "Custom scope",
    timeline: "4 to 8 weeks",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1400&q=80&auto=format&fit=crop",
    imageAlt: "Abstract AI neural network visual displayed across screens",
    tags: ["Custom AI", "Internal tools", "Decision support"],
    useCases: ["Document processing", "Knowledge search", "Copilots"],
    metrics: [
      { value: "MVP", label: "validated in weeks" },
      { value: "1:1", label: "workflow fit focus" },
      { value: "High", label: "automation leverage" },
    ],
    outcomes: [
      "Automation shaped to your exact workflow",
      "Higher leverage from internal knowledge",
      "Long-term platform advantage",
    ],
    process: [
      "Break the workflow into inputs, decisions, edge cases, and success criteria.",
      "Prototype the smallest high-leverage AI experience for validation.",
      "Iterate the model, interface, and operational controls with real feedback.",
      "Deploy with governance, documentation, and a practical optimization roadmap.",
    ],
    deliverables: [
      "AI workflow architecture",
      "Custom interface or admin layer",
      "API and system integration",
      "Monitoring and governance controls",
      "Optimization roadmap",
    ],
    idealFor: [
      "Teams with high-value repetitive workflows",
      "Businesses sitting on underused internal data",
      "Operators investing in durable differentiation",
    ],
  },
];

export const serviceCategories = ["All", ...new Set(services.map((service) => service.category))];

export const studioPillars = [
  {
    title: "Look premium",
    description: "Make your business feel sharper, bigger, and easier to trust from the first interaction.",
  },
  {
    title: "Sell faster",
    description: "Turn every visit into a cleaner path toward inquiry, booking, and conversion.",
  },
  {
    title: "Scale smoothly",
    description: "Automations keep leads, ops, and delivery moving without extra admin overhead.",
  },
];

export const rolloutSteps = [
  {
    title: "Find the biggest win",
    description: "We target the page, workflow, or funnel that will move revenue fastest.",
  },
  {
    title: "Design to convert",
    description: "We shape the message, hierarchy, and visuals to pull people toward action.",
  },
  {
    title: "Automate the backend",
    description: "CRM, routing, follow-up, and workflows get connected so the business does real work automatically.",
  },
  {
    title: "Launch for growth",
    description: "We tune the experience around what gets more clicks, more calls, and more closed deals.",
  },
];

export default services;
