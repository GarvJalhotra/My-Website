/**
 * PORTFOLIO CONFIGURATION - GARV JALHOTRA
 * Edit this file to customize your name, bio, projects, experience, skills, and social links.
 */

window.PORTFOLIO_CONFIG = {
  profile: {
    name: "Garv Jalhotra",
    handle: "@garvjalhotra",
    role: "Full-Stack Developer & Creative Technologist",
    tagline: "Bridging system architecture, generative systems, and high-impact digital experiences.",
    location: "Global / Remote",
    status: "Available for high-stakes projects & technical leadership",
    coordinates: "37.7749° N, 122.4194° W",
    bio: [
      "I engineer resilient backend architectures and build immersive, pixel-perfect digital interfaces.",
      "Specializing in modern web applications, distributed systems, real-time interfaces, and generative AI workflows. I treat code like high craft and digital products like living spaces."
    ],
    social: [
      { name: "GitHub", url: "https://github.com/garvjalhotra", icon: "github" },
      { name: "LinkedIn", url: "https://linkedin.com/in/garvjalhotra", icon: "linkedin" },
      { name: "X / Twitter", url: "https://twitter.com/garvjalhotra", icon: "twitter" },
      { name: "Email", url: "mailto:garv@example.com", icon: "mail" }
    ],
    stats: [
      { label: "Production Deployments", value: "85+" },
      { label: "Years Engineering", value: "5+" },
      { label: "System Uptime Track", value: "99.99%" },
      { label: "Coffee to Code Ratio", value: "∞" }
    ]
  },

  theme: {
    primaryColor: "#00F0FF", // Cyber cyan
    accentColor: "#A855F7",  // Neon violet
    matrixGreen: "#10B981",  // Emerald terminal green
    darkBg: "#08090C",       // Deep obsidian canvas
    cardBg: "#0F1117"
  },

  projects: [
    {
      id: "synapse-ai",
      title: "Synapse: Real-Time Neural Workflow Engine",
      category: "Distributed Systems & AI",
      tagline: "Low-latency streaming orchestrator connecting multi-modal LLM graphs with live audio-visual output.",
      year: "2026",
      featured: true,
      tags: ["TypeScript", "Rust", "WebSockets", "Python", "WebGPU"],
      badge: "Flagship Project",
      coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
      overview: "Synapse is an ultra-fast execution engine designed to coordinate complex generative pipelines across multi-agent systems with sub-50ms token and stream routing.",
      problem: "Traditional agentic workflows suffered from latency stacking, unpredictable state drift, and brittle recovery when nodes timed out.",
      solution: "Engineered a reactive event-mesh architecture in Rust with WebAssembly client nodes and interactive canvas visualization for live pipeline inspection.",
      metrics: [
        { label: "Throughput", value: "14,000 req/sec" },
        { label: "Latency P99", value: "32ms" },
        { label: "Memory Footprint", value: "-68%" }
      ],
      deliverables: ["Core Daemon Engine", "Interactive DAG Canvas", "Telemetry Dashboard", "Open-Source SDK"],
      demoUrl: "https://github.com/garvjalhotra",
      repoUrl: "https://github.com/garvjalhotra"
    },
    {
      id: "hyperion-canvas",
      title: "Hyperion: Spatial Design OS",
      category: "Creative Technology & UI",
      tagline: "An infinite 3D vector canvas engineered for collaborative hardware architecture and wireframe simulations.",
      year: "2025",
      featured: true,
      tags: ["WebGL", "Three.js", "React", "Tailwind CSS", "WebRTC"],
      badge: "Design Award Nominee",
      coverImage: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1200&auto=format&fit=crop",
      overview: "Hyperion reimagines the design canvas as an infinite spatial coordinate system with multi-cursor collaboration and hardware schematic emulation.",
      problem: "Engineers and designers had to toggle between disconnected CAD apps and standard flat Figma mockups without real-time physics validation.",
      solution: "Created an in-browser spatial rendering runtime using custom GLSL shaders with live multiplayer CRDT synchronization.",
      metrics: [
        { label: "FPS on 4K", value: "60 FPS solid" },
        { label: "Max Elements", value: "50,000+ nodes" },
        { label: "Collaboration Sync", value: "<15ms delta" }
      ],
      deliverables: ["Spatial Math Engine", "Custom Shader Pipeline", "Infinite Zoom Viewport", "Multi-user CRDT"],
      demoUrl: "https://github.com/garvjalhotra",
      repoUrl: "https://github.com/garvjalhotra"
    },
    {
      id: "sentinel-core",
      title: "Sentinel: Autonomous Cloud Shield",
      category: "Cloud Security & Infrastructure",
      tagline: "Autonomous zero-trust policy engine continuously analyzing network topology and mitigating zero-day attack vectors.",
      year: "2025",
      featured: true,
      tags: ["Go", "Kubernetes", "eBPF", "GraphQL", "PostgreSQL"],
      badge: "Enterprise Grade",
      coverImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
      overview: "Built an eBPF-driven kernel observability and real-time defense layer deployed across multi-cloud Kubernetes clusters.",
      problem: "Slow perimeter threat detection allowed lateral movement within internal service meshes before security teams received alerts.",
      solution: "Leveraged eBPF kernel hooks to inspect socket packets at line rate, feeding a deterministic anomaly detection engine.",
      metrics: [
        { label: "Inspection Overhead", value: "< 1.2% CPU" },
        { label: "Auto-Isolation", value: "180ms" },
        { label: "Protected Clusters", value: "120+ nodes" }
      ],
      deliverables: ["Kernel eBPF Probes", "Security Mesh Daemon", "Live Threat Map UI", "Audit Telemetry"],
      demoUrl: "https://github.com/garvjalhotra",
      repoUrl: "https://github.com/garvjalhotra"
    },
    {
      id: "quantum-flow",
      title: "Vortex: Algorithmic Market Visualizer",
      category: "Fintech & Data Engineering",
      tagline: "High-frequency order-book 3D heat-map visualizing liquidity flow, arbitrage vectors, and market depth in real-time.",
      year: "2024",
      featured: false,
      tags: ["TypeScript", "WebSockets", "D3.js", "Canvas2D", "Docker"],
      badge: "High-Frequency Data",
      coverImage: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=1200&auto=format&fit=crop",
      overview: "A specialized financial telemetry dashboard capable of rendering 100,000 orderbook updates per second with smooth GPU particle physics.",
      problem: "Traditional charts lag severely during high market volatility spikes, blinding institutional operators.",
      solution: "Engineered dual-buffered Canvas rendering with off-screen Web Workers handling JSON parsing and binary stream decoding.",
      metrics: [
        { label: "Msg Rate", value: "100k msg/sec" },
        { label: "Zero Dropped Frames", value: "100%" },
        { label: "Latency", value: "8ms" }
      ],
      deliverables: ["Binary Stream Parser", "GPU Depth Heatmap", "Historical Replay Engine"],
      demoUrl: "https://github.com/garvjalhotra",
      repoUrl: "https://github.com/garvjalhotra"
    }
  ],

  experience: [
    {
      role: "Lead Systems Architect & Full-Stack Engineer",
      company: "Apex Tech Labs",
      period: "2024 — Present",
      location: "San Francisco / Remote",
      description: "Spearheading the engineering of next-generation distributed systems, real-time client runtimes, and developer infrastructure.",
      highlights: [
        "Architected high-throughput microservices handling millions of events daily.",
        "Created internal design system and interactive tooling adopted by 40+ engineers."
      ]
    },
    {
      role: "Senior Creative Technologist",
      company: "Lucid Matrix Studio",
      period: "2022 — 2024",
      location: "New York / Hybrid",
      description: "Crafted award-winning digital interactive experiences, 3D web applications, and experimental product prototypes.",
      highlights: [
        "Directed frontend performance optimizations achieving flawless 60 FPS on mobile and desktop.",
        "Built custom WebGL and GSAP animation engines for tier-1 brand product launches."
      ]
    },
    {
      role: "Software Engineer",
      company: "Cognitive Vector Systems",
      period: "2020 — 2022",
      location: "Remote",
      description: "Developed core platform APIs, database architecture, and customer-facing dashboard web apps.",
      highlights: [
        "Reduced database query latency by 45% through indexing and caching optimizations.",
        "Mentored junior engineers and instituted automated CI/CD deployment pipelines."
      ]
    }
  ],

  skills: {
    core: ["TypeScript / JavaScript", "Rust / Go", "Python", "HTML5 & Modern CSS3"],
    frontend: ["React / Next.js", "Three.js / WebGL", "Tailwind CSS", "GSAP Animations", "Canvas API"],
    backend: ["Node.js / Express", "GraphQL / REST", "WebSockets / WebRTC", "PostgreSQL", "Redis", "Kafka"],
    devops: ["Docker & Kubernetes", "AWS / Cloudflare", "CI/CD Workflows", "eBPF & Linux Kernel"],
    tools: ["Figma / UI Systems", "Git & GitHub Actions", "Neovim / VSCode", "Web Audio API"]
  },

  journeyMilestones: [
    { year: "Origin", label: "Kernel Initialized", detail: "First line of code written, fell in love with compilers and pixels." },
    { year: "Phase I", label: "Full-Stack Mastery", detail: "Shipped dozens of enterprise web apps and distributed backends." },
    { year: "Phase II", label: "Creative Engineering", detail: "Merged hard engineering with interactive spatial design and audio aesthetics." },
    { year: "Phase III", label: "AI & Distributed Systems", detail: "Building autonomous systems, neural pipelines, and future-ready architectures." }
  ]
};
