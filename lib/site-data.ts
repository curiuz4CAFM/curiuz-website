import {
  Headset, Wrench, Boxes, FileSignature, Users2, PackageSearch,
  ShieldAlert, Leaf, Truck, DoorOpen, type LucideIcon,
  BrainCircuit, Layers, Compass, Rocket, LineChart, Cog, Building2,
  Workflow, Gauge, ServerCog, ClipboardCheck, Search, PenTool,
  Target, ShieldCheck, UserCog, Lightbulb, TrendingUp, Network,
  Recycle, AlertTriangle, HelpCircle,
  Eye, Award, RefreshCw, HeartHandshake, Gem, Handshake,
} from 'lucide-react'

/** The 10 Premyz solution suites (25+ modules) — the product spine.
 *  `slug` matches the real anchors on premyz.com/solutions#<slug>. */
export type Suite = {
  slug: string
  name: string
  blurb: string
  icon: LucideIcon
  modules: string[]
}

/** Base + key routes on the live Premyz product site (trailing slashes match premyz.com). */
export const PREMYZ_SITE = 'https://premyz.com'
export const PREMYZ_SOLUTIONS = `${PREMYZ_SITE}/solutions/`
export const PREMYZ_DEMO = `${PREMYZ_SITE}/contact/`
/** Deep-link to a specific suite section on premyz.com/solutions. */
export const premyzSuiteUrl = (slug: string) => `${PREMYZ_SITE}/solutions/#${slug}`

export const PREMYZ_SUITES: Suite[] = [
  { slug: 'service-desk-work', name: 'Service Desk & Work', icon: Headset, blurb: 'AI-powered ticketing and work-order management.', modules: ['Helpdesk', 'Work Orders', 'SLA Tracking'] },
  { slug: 'maintenance-ppm', name: 'Maintenance & PPM', icon: Wrench, blurb: 'Planned and predictive maintenance scheduling.', modules: ['PPM Planner', 'Predictive Alerts', 'Asset Health'] },
  { slug: 'asset-space', name: 'Asset & Space', icon: Boxes, blurb: 'Digital asset registry and location hierarchy.', modules: ['Asset Registry', 'Space Mgmt', 'QR Access'] },
  { slug: 'contracts-commercial', name: 'Contracts & Commercial', icon: FileSignature, blurb: 'SLA, KPI and invoice management in one place.', modules: ['Contracts', 'KPIs', 'Invoicing'] },
  { slug: 'crm-sales', name: 'CRM & Sales', icon: Users2, blurb: 'Lead-to-project workflow with tender management.', modules: ['Leads', 'Tenders', 'Estimation'] },
  { slug: 'materials-procurement', name: 'Materials & Procurement', icon: PackageSearch, blurb: 'Inventory and purchasing, integrated to the field.', modules: ['Inventory', 'Purchasing', 'Suppliers'] },
  { slug: 'hse-risk-permits', name: 'HSE, Risk & Permits', icon: ShieldAlert, blurb: 'Safety, incidents and permit-to-work systems.', modules: ['Permits', 'Incidents', 'Risk Register'] },
  { slug: 'sustainability-energy', name: 'Sustainability & Energy', icon: Leaf, blurb: 'Carbon, waste and energy tracking with analytics.', modules: ['Energy', 'Carbon', 'Waste'] },
  { slug: 'workforce-fleet-camp', name: 'Workforce, Fleet & Camp', icon: Truck, blurb: 'Team, fleet and accommodation operations.', modules: ['Rostering', 'Fleet', 'Camp'] },
  { slug: 'workplace-visitor', name: 'Workplace & Visitor', icon: DoorOpen, blurb: 'Booking, visitor management and compliance.', modules: ['Bookings', 'Visitors', 'Compliance'] },
]

export const PREMYZ_INDUSTRIES = [
  'Real Estate & Property', 'Healthcare & Hospitals', 'Education & Campuses',
  'Retail & Malls', 'Government & Public', 'Hospitality & Leisure',
  'Industrial & Manufacturing', 'FM Service Providers',
]

export const PREMYZ_FEATURES = [
  { title: 'Offline-first mobile app', desc: 'Field technicians keep working with no signal — data syncs the moment they reconnect.' },
  { title: 'AI analytics & anomaly detection', desc: 'Spot failing assets and SLA risk before they become emergencies.' },
  { title: 'Estimation workbench', desc: 'Bid costing and budget management built for FM tenders.' },
  { title: 'Open API & integrations', desc: 'Plug into your ERP and BI stack — data flows both ways.' },
  { title: 'Role-based access & audit', desc: 'Granular permissions and full audit trails across every module.' },
  { title: 'Real-time dashboards', desc: 'Portfolio-wide visibility from the command centre to the mobile.' },
]

/** Curiuz consulting services — the human expertise behind the platform. */
export const CURIUZ_SERVICES: { name: string; desc: string; icon: LucideIcon }[] = [
  { name: 'AI Advisory', desc: 'Strategy and roadmaps to put AI to work where it moves the needle.', icon: BrainCircuit },
  { name: 'Digital Services', desc: 'Digital growth enablement across the customer and operating model.', icon: Layers },
  { name: 'Business Process Optimization', desc: 'Streamline and re-engineer processes for measurable efficiency.', icon: Compass },
  { name: 'Digital Operations', desc: 'Integrate technology and process into resilient day-to-day operations.', icon: Cog },
  { name: 'ERP Consulting', desc: 'System alignment and integration that fits how you actually work.', icon: Building2 },
  { name: 'Programme Governance', desc: 'Governance and execution that keeps transformation on track.', icon: Rocket },
  { name: 'Customer Experience', desc: 'Design experiences that turn service into a competitive edge.', icon: LineChart },
]

export const CURIUZ_STATS = [
  { value: '26+', label: 'Years of experience' },
  { value: '30+', label: 'Success stories' },
  { value: '10', label: 'Premyz solution suites' },
  { value: '25+', label: 'Product modules' },
]

export const TESTIMONIALS = [
  { quote: 'Their solutions are not just innovative but highly practical, enabling predictive and intelligent decision-making.', name: 'Project Director', org: 'Banking Organisation' },
  { quote: 'Premyz gave us portfolio-wide visibility we never had — reactive firefighting turned into planned maintenance.', name: 'IT Director', org: 'Facility Management' },
  { quote: 'The team understood our numbers before they touched our systems. Rare in this industry.', name: 'CFO', org: 'Real Estate Group' },
  { quote: 'A partner that thinks forward. The advisory and the platform reinforce each other.', name: 'Finance Manager', org: 'Real Estate' },
]

export const NAV_LINKS = [
  { label: 'About', href: '/#about' },
  { label: 'Products', href: '/products/premyz', mega: true },
  { label: 'Services', href: '/services', mega: true },
  { label: 'Resources', href: '/#resources' },
]

/** Contact details — update phone with your real number. */
export const CONTACT = {
  email: 'hello@curiuz.com',
  phone: '+971 4 000 0000',
  address: 'New Crescent Street, Dubai, UAE',
}

/* ─────────────── CONSULTING CONTENT (Curiuz core offering) ─────────────── */

/** "What We Do" — the four consulting services, each with a dedicated page. */
export type Pillar = {
  id: string
  slug: string
  name: string
  short: string
  icon: LucideIcon
  summary: string
  points: string[]
  image: string
  detail: {
    tagline: string
    overview: string[]
    included: { title: string; desc: string }[]
    deliverables: string[]
    outcomes: string[]
  }
}

export const serviceUrl = (slug: string) => `/services/${slug}`

export const CURIUZ_PILLARS: Pillar[] = [
  {
    id: 'process',
    slug: 'business-process-optimization',
    name: 'Business Process Definition & Optimization',
    short: 'Process Definition & Optimization',
    icon: Workflow,
    summary: 'Discover, document and redesign how work actually gets done.',
    points: [
      'End-to-end process discovery and documentation',
      'Current-state (As-Is) and future-state (To-Be) design',
      'Identify inefficiencies, bottlenecks and control gaps',
      'Standardization and governance of core processes',
    ],
    image: '/img/workplace.webp',
    detail: {
      tagline: 'See how work really flows — then make it flow better.',
      overview: [
        "Most performance problems aren't people problems — they're process problems. Undocumented handoffs, duplicated effort and invisible bottlenecks quietly erode cost, speed and control. We make the way work happens visible, then redesign it to be simpler, faster and governable.",
        'Working alongside your teams, we map end-to-end processes as they actually run today, pinpoint where value leaks, and design a future state that is standardized, scalable and ready to be automated by the right system.',
      ],
      included: [
        { title: 'End-to-end discovery & documentation', desc: 'Structured workshops and shadowing to capture how each process truly runs — across departments and systems.' },
        { title: 'As-Is / To-Be process design', desc: 'Clear current-state maps and a future-state design that removes waste and closes control gaps.' },
        { title: 'Bottleneck & control-gap analysis', desc: 'Identify the specific steps that add delay, cost or risk — with evidence, not opinion.' },
        { title: 'Standardization & governance', desc: 'Turn ad-hoc variations into standard processes with clear owners, controls and RACI.' },
      ],
      deliverables: [
        'Process inventory & end-to-end maps (As-Is / To-Be)',
        'Prioritized gap and improvement register',
        'Standard operating procedures (SOPs) and RACI',
        'Process governance model',
      ],
      outcomes: [
        'Fewer handoffs, rework and delays',
        'Clear ownership and accountability',
        'A process baseline ready for ERP or automation',
      ],
    },
  },
  {
    id: 'efficiency',
    slug: 'operational-efficiency',
    name: 'Operational Efficiency & Performance Improvement',
    short: 'Operational Efficiency',
    icon: Gauge,
    summary: 'Turn processes into measurable cost, speed and productivity gains.',
    points: [
      'Cost, productivity and cycle-time optimization',
      'KPI and performance framework design',
      'Operating model and role-clarity definition',
      'Continuous improvement and value-realization tracking',
    ],
    image: '/img/team-tablet.webp',
    detail: {
      tagline: 'Turn better processes into measurable cost, speed and productivity gains.',
      overview: [
        'A tidy process map is only valuable if it moves the numbers. We connect process change to hard performance metrics — cost, cycle time, productivity and quality — and put the KPIs and operating model in place to sustain the gains.',
        "We define what 'good' looks like, instrument it, and build a continuous-improvement rhythm so value keeps compounding long after the engagement ends.",
      ],
      included: [
        { title: 'Cost, productivity & cycle-time optimization', desc: 'Target the drivers that most affect unit cost and throughput, and re-engineer them.' },
        { title: 'KPI & performance framework design', desc: 'A concise set of metrics that actually drive behaviour — with clear definitions and targets.' },
        { title: 'Operating model & role clarity', desc: 'Align structure, roles and decision rights to the way work should flow.' },
        { title: 'Continuous improvement & value tracking', desc: 'Cadence, dashboards and governance to track realized value against the business case.' },
      ],
      deliverables: [
        'KPI framework & performance dashboard design',
        'Operating model & role-clarity (RACI) definition',
        'Efficiency improvement roadmap with quantified targets',
        'Value-realization tracker',
      ],
      outcomes: [
        'Lower cost-to-serve and faster cycle times',
        'Metrics leaders trust and act on',
        'A durable, self-sustaining improvement engine',
      ],
    },
  },
  {
    id: 'erp',
    slug: 'erp-advisory-implementation',
    name: 'ERP Advisory & Implementation Support',
    short: 'ERP Advisory & Implementation',
    icon: ServerCog,
    summary: 'Independent, ERP-agnostic guidance from business case to go-live.',
    points: [
      'ERP readiness assessment and business case',
      'Requirements definition and solution blueprinting',
      'Vendor and system selection advisory',
      'Implementation governance, testing and change management',
    ],
    image: '/img/command-centre.webp',
    detail: {
      tagline: 'Independent, ERP-agnostic guidance from business case to go-live.',
      overview: [
        'ERP programs fail on business readiness far more often than on technology. As an independent, vendor-neutral advisor, we make sure you buy the right system for the right reasons — and that your processes, data and people are ready before implementation starts.',
        'From the initial business case through selection, blueprinting and go-live governance, we sit on your side of the table — protecting scope, budget and outcomes.',
      ],
      included: [
        { title: 'ERP readiness assessment & business case', desc: 'Honest readiness scoring and a defensible business case with costs, benefits and risks.' },
        { title: 'Requirements & solution blueprinting', desc: 'Translate optimized processes into clear, prioritized requirements and a target blueprint.' },
        { title: 'Vendor & system selection advisory', desc: 'Structured, objective evaluation and negotiation support — with no vendor bias.' },
        { title: 'Implementation governance, testing & change', desc: 'PMO-grade governance, a test strategy and change management to keep delivery on track.' },
      ],
      deliverables: [
        'ERP readiness assessment & business case',
        'Requirements catalogue & solution blueprint',
        'Vendor evaluation & selection recommendation',
        'Governance, test and change-management plans',
      ],
      outcomes: [
        'The right system, chosen objectively',
        'Fewer surprises, scope creep and overruns',
        'A program governed to deliver its business case',
      ],
    },
  },
  {
    id: 'post-impl',
    slug: 'post-implementation-review',
    name: 'Post-Implementation Review & Optimization',
    short: 'Post-Implementation Review',
    icon: ClipboardCheck,
    summary: 'Make sure the system you bought delivers the value you planned.',
    points: [
      'ERP health checks and process-adoption reviews',
      'Gap analysis between designed and actual system usage',
      'Optimization of configurations, controls and reports',
      'Stabilization, performance tuning and enhancement roadmap',
    ],
    image: '/img/control-room.webp',
    detail: {
      tagline: 'Make sure the system you bought delivers the value you planned.',
      overview: [
        'Go-live is the start, not the finish. Many organizations run new ERPs the old way — with adoption gaps, workarounds and unused capability quietly draining the return. We review how the system is actually being used and close the gap between design and reality.',
        'Through structured health checks and optimization, we stabilize the platform, tune performance and build an enhancement roadmap so the investment keeps paying back.',
      ],
      included: [
        { title: 'ERP health check & adoption review', desc: 'Assess configuration, controls and how well teams have adopted the designed processes.' },
        { title: 'Design-vs-actual gap analysis', desc: 'Pinpoint where real usage diverges from the intended design — and why.' },
        { title: 'Configuration, controls & reporting optimization', desc: 'Fix and tune configurations, controls and reports to restore intended value.' },
        { title: 'Stabilization & enhancement roadmap', desc: 'Performance tuning and a prioritized roadmap of enhancements.' },
      ],
      deliverables: [
        'ERP health-check report & scorecard',
        'Adoption & gap-analysis findings',
        'Optimization backlog (configuration, controls, reports)',
        'Stabilization & enhancement roadmap',
      ],
      outcomes: [
        'Higher adoption and cleaner data',
        'Reclaimed value from an existing investment',
        'A clear roadmap for continuous improvement',
      ],
    },
  },
]

/** "How We Work" — the four-stage delivery method (vector diagram). */
export type ProcessStep = {
  key: string
  title: string
  icon: LucideIcon
  desc: string
}

export const CURIUZ_PROCESS: ProcessStep[] = [
  { key: 'discover', title: 'Discover', icon: Search, desc: 'Understand the business context, objectives and pain points.' },
  { key: 'define', title: 'Define', icon: PenTool, desc: 'Design clear, scalable and measurable processes.' },
  { key: 'deliver', title: 'Deliver', icon: Truck, desc: 'Support implementation with strong governance and control.' },
  { key: 'optimize', title: 'Optimize', icon: TrendingUp, desc: 'Ensure sustained value realization after go-live.' },
]

/** "Why Curiuz" — differentiators. */
export const CURIUZ_WHY: { title: string; desc: string; icon: LucideIcon }[] = [
  { title: 'Business-first mindset', desc: 'Technology serves the process — not the other way around.', icon: Target },
  { title: 'Execution focused', desc: 'Clear deliverables and measurable outcomes, every engagement.', icon: ShieldCheck },
  { title: 'ERP-agnostic expertise', desc: 'Independent, objective advisory with no vendor bias.', icon: Network },
  { title: 'Lean & senior-led', desc: 'Experienced consultants in hands-on, senior-led teams.', icon: UserCog },
  { title: 'Curious by design', desc: 'We challenge assumptions to find better answers.', icon: Lightbulb },
]

/** "Who We Serve" — segments + industries. */
export const CURIUZ_SEGMENTS = [
  { title: 'Mid-to-large enterprises', desc: 'Complex operations that need clarity, standardization and control.', icon: Building2 },
  { title: 'Organizations preparing for ERP', desc: 'Growing businesses getting transformation-ready before they invest.', icon: Rocket },
  { title: 'Teams stabilizing existing ERP', desc: 'Companies optimizing or rescuing an ERP landscape already in place.', icon: Cog },
]

export const CURIUZ_INDUSTRIES = ['Services', 'Infrastructure', 'Manufacturing', 'Operations-heavy businesses']

/** "Why now" — market-insight cards (auto-scrolling marquee).
 *  NOTE: figures are widely-cited industry estimates — verify & cite before publishing. */
export const MARKET_INSIGHTS: {
  topic: string
  figure: string
  label: string
  insight: string
  source: string
  icon: LucideIcon
}[] = [
  {
    topic: 'Facility Management',
    figure: '$1.3T',
    label: 'Global FM market',
    insight:
      'The systems that keep buildings and operations running are a trillion-dollar industry — still mostly managed reactively.',
    source: 'Industry market estimates',
    icon: Building2,
  },
  {
    topic: 'ERP Failure',
    figure: 'up to 70%',
    label: 'of ERP projects miss their goals',
    insight:
      'Most ERP programs disappoint — rarely because of the technology, almost always because the underlying processes were never questioned.',
    source: 'Widely-reported industry studies',
    icon: AlertTriangle,
  },
  {
    topic: 'ESG & Emissions',
    figure: '~40%',
    label: 'of global CO₂ emissions',
    insight:
      'The built environment is the single largest source of emissions — putting facilities at the centre of every ESG agenda.',
    source: 'UN Environment Programme',
    icon: Leaf,
  },
  {
    topic: 'Waste Management',
    figure: '~40%',
    label: "of the world's waste",
    insight:
      'Buildings and construction generate a vast share of global waste — much of it avoidable with better operations and data.',
    source: 'Built-environment research',
    icon: Recycle,
  },
  {
    topic: 'AI & the Workplace',
    figure: 'AI-first',
    label: 'from reactive to predictive',
    insight:
      'AI is reshaping how facilities are run — anomaly detection, predictive maintenance and self-optimizing operations replace guesswork.',
    source: 'Emerging industry practice',
    icon: BrainCircuit,
  },
  {
    topic: 'Preventive Maintenance',
    figure: '3–5×',
    label: 'the cost of reactive repairs',
    insight:
      'Unplanned breakdowns cost several times more than planned upkeep — visibility and scheduling turn cost into control.',
    source: 'Maintenance benchmarking',
    icon: Gauge,
  },
]

/** The curiosity hook that ties the insight section together. */
export const CURIOSITY_ICON = HelpCircle

/* ─────────────────────────── ABOUT ─────────────────────────── */

/** About sub-navigation (mega-menu + pages). */
export const ABOUT_LINKS: { label: string; slug: string; desc: string; icon: LucideIcon }[] = [
  { label: 'Our Philosophy', slug: 'philosophy', desc: 'Think Forward — how curiosity and AI shape what’s next.', icon: Lightbulb },
  { label: 'Our Values', slug: 'values', desc: 'The seven principles behind every engagement.', icon: HeartHandshake },
  { label: 'Founder', slug: 'founder', desc: 'Meet Manish Jha, Founder & CEO of Curiuz.', icon: UserCog },
]
export const aboutUrl = (slug: string) => `/about/${slug}`

/** Our Philosophy — "Think Forward". */
export const PHILOSOPHY = {
  kicker: 'Powered by Curiosity. Enabled by AI.',
  belief: 'Curiosity drives transformation. Thinking forward delivers it.',
  intro: [
    'Think Forward is our philosophy for shaping what’s next — not reacting to what’s now. We believe the organizations that keep questioning, learning and evolving are the ones that lead. So we start where others stop: with the right questions.',
    'In a world defined by rapid technological shifts and constant disruption, reactive thinking is no longer enough. Businesses need to anticipate change, adapt with speed, and decide with clarity. That is where our philosophy comes to life — through a deliberate fusion of human curiosity and artificial intelligence.',
  ],
  sections: [
    {
      title: 'Curiosity as the catalyst',
      body: 'Curiosity pushes us past the obvious — to challenge legacy assumptions and surface the possibilities others overlook. We immerse ourselves in your ecosystem, understanding not just systems and processes but the intent and ambition behind them. The right question is often more powerful than the quick answer.',
    },
    {
      title: 'AI as the enabler',
      body: 'Curiosity sets the direction; AI multiplies the capability. We turn data into decisions — moving you from hindsight to foresight with predictive, prescriptive strategies. Our use of AI is pragmatic and outcome-focused: deployed where it creates tangible value, never for novelty’s sake.',
    },
    {
      title: 'From insight to impact',
      body: 'Philosophy means little without execution. We close the gap between strategy and delivery, translating every idea into outcomes that are measurable, scalable and built to last — whether that’s optimizing a process, implementing an enterprise system, or standing up a digital platform.',
    },
  ],
  pillars: [
    { name: 'Curiosity-Driven Thinking', desc: 'We question deeply and explore widely, challenging convention to uncover new possibilities.', icon: Eye },
    { name: 'AI-Enabled Intelligence', desc: 'We harness data, analytics and automation for smarter, faster decisions.', icon: BrainCircuit },
    { name: 'Future-Ready Design', desc: 'We build solutions that scale, adapt and stay resilient as needs evolve.', icon: Layers },
    { name: 'Proactive Transformation', desc: 'We anticipate change and act ahead of disruption — not after it.', icon: Rocket },
    { name: 'Value-Centric Execution', desc: 'We measure success in outcomes: sustained, tangible business value.', icon: Target },
  ],
}

/** Our Values — the seven principles. */
export const CURIUZ_VALUES: { name: string; desc: string; icon: LucideIcon }[] = [
  { name: 'Curiosity with Purpose', desc: 'Curiosity is the foundation of innovation — but ours is deliberate, aimed squarely at insights that change outcomes.', icon: Lightbulb },
  { name: 'Client-Centric Thinking', desc: 'Your success defines ours. We craft strategies tailored to your goals — never generic answers.', icon: HeartHandshake },
  { name: 'Intelligence through AI & Data', desc: 'We pair human expertise with responsible AI to move you from intuition-led action to insight-led strategy.', icon: BrainCircuit },
  { name: 'Excellence in Execution', desc: 'Ideas create value only when delivered. We bring discipline, rigor and accountability to every engagement.', icon: Award },
  { name: 'Integrity & Transparency', desc: 'Trust is the core of every partnership. We operate with honesty, clarity and openness — always.', icon: ShieldCheck },
  { name: 'Agility & Adaptability', desc: 'In a fast-changing world we stay flexible, refining our approach as conditions and priorities shift.', icon: RefreshCw },
  { name: 'Value-Driven Mindset', desc: 'Every recommendation ties to tangible impact — efficiency, cost, experience or growth.', icon: Gem },
]

/** Founder. */
export const FOUNDER = {
  name: 'Manish Jha',
  role: 'Founder & CEO',
  lead: 'A technology leader with 25+ years turning enterprise technology and AI into measurable business value.',
  bio: [
    'Manish founded Curiuz to pair deep consulting expertise with hands-on execution — helping organizations move from ambition to outcome. His work spans digital transformation, enterprise technology and AI-driven innovation across diverse industries and geographies.',
    'Over his career he has held leadership roles at global firms including EY and Avery Dennison, and leading GCC organizations such as Imdaad and HITEK.AI. He has advised CXOs on IT strategy, led large-scale Oracle and enterprise-platform transformations, and delivered complex, multi-million-dollar programs across ERP, CAFM, CRM and AI enablement.',
    'His signature is aligning technology to business outcomes — building high-performing teams and driving sustained operational excellence, not one-off wins.',
  ],
  quote: 'We start where others stop — by asking the right questions.',
  highlights: [
    { label: '25+ years', desc: 'Digital transformation & enterprise technology' },
    { label: 'EY · Avery Dennison', desc: 'Global consulting & enterprise leadership' },
    { label: 'Imdaad · HITEK.AI', desc: 'Leading GCC transformation roles' },
    { label: 'ERP · CAFM · CRM · AI', desc: 'Multi-million-dollar program delivery' },
  ],
  expertise: ['Digital transformation', 'AI enablement', 'Oracle & ERP', 'CAFM', 'CRM', 'IT strategy', 'Programme governance', 'Team building'],
}
