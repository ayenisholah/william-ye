export const profile = {
  name: "William Ye",
  role: "Senior AI Engineer",
  location: "San Francisco, CA",
  email: "williamyeny@gmail.com",
  phone: "+1 929 548 7774",
  linkedin: "https://www.linkedin.com/in/will-ye-",
  resume: "/William-Ye-Resume.pdf",
  available: "Available for work",
  education: "B.S. Computer Science · Duke",
  heroWords: ["AI pipelines", "NLP systems", "MLOps platforms", "real-time inference", "data infrastructure"],
  summaryLead:
    "Senior AI & full-stack engineer with 6 years shipping scalable AI, NLP, and software systems across fintech, cloud, and startup environments.",
  summaryBody:
    "I've improved operational efficiency by up to 35%, cut processing time by 25%, and handled 1M+ requests/month through AI pipelines, automation, and robust architecture - while leading cross-functional teams and mentoring engineers to build production-ready systems that optimize performance and reliability.",
  summaryTail:
    "Proficient across cloud-native architecture, AI/ML integration, and the full software development lifecycle."
};

export const heroStats = [
  { value: 6, suffix: "+", label: "years exp" },
  { value: 1, suffix: "M+", label: "requests / mo" },
  { value: 35, suffix: "%", label: "efficiency up" },
  { value: 4, suffix: "", label: "companies" }
];

export const metricsBig = [
  { value: 35, suffix: "%", desc: "boost in operational efficiency via AI automation", tag: "@ RAMP" },
  { value: 1, suffix: "M+", desc: "requests / month served by AI-driven pipelines", tag: "@ RAMP" },
  { value: 30, suffix: "%", desc: "higher semantic search accuracy on NLP models", tag: "@ COHERE" }
];

export const metricsSmall = [
  { value: 25, suffix: "%", label: "faster analytics" },
  { value: 40, suffix: "%", label: "faster training" },
  { value: 20, suffix: "%", label: "lower latency" },
  { value: 500, suffix: "k+", label: "req/mo @ Cohere" },
  { value: 50, suffix: "%", label: "more data coverage" },
  { value: 5, suffix: "", label: "engineers mentored" }
];

export const experience = [
  {
    monogram: "R",
    company: "Ramp",
    role: "Senior AI Engineer",
    dates: "05/2023 - 02/2026",
    meta: "San Francisco · 2 yrs 9 mos",
    tags: ["Python", "PyTorch", "TensorFlow", "MLOps", "Observability"],
    bullets: [
      "Boosted operational efficiency by **35%** by implementing AI-powered automation across workflows.",
      "Reduced financial analytics processing time by **25%** through integrated ML models.",
      "Designed and deployed scalable AI pipelines with Python, TensorFlow, and PyTorch for real-time decision-making.",
      "Scaled workflow throughput to **1M+** requests/month using AI-driven solutions.",
      "Accelerated model training by **40%** by revamping data pipelines and feature-engineering strategies.",
      "Strengthened reliability and compliance with monitoring & observability, reducing incidents by **15%**.",
      "Mentored **5** junior engineers, boosting team productivity and knowledge sharing."
    ]
  },
  {
    monogram: "Co",
    company: "Cohere",
    role: "AI Engineer",
    dates: "05/2021 - 05/2023",
    meta: "Remote · 2 yrs",
    tags: ["NLP", "Transformers", "Fine-tuning", "Vector DBs"],
    bullets: [
      "Increased semantic search accuracy by **30%** through development and fine-tuning of NLP models.",
      "Delivered end-to-end AI pipelines for text classification and generation, handling **500k+** requests/month.",
      "Cut inference latency by **20%** on cloud infrastructure via model optimization.",
      "Deployed AI features impacting **millions** of users through cross-functional collaboration.",
      "Expanded training-dataset coverage by **50%** with preprocessing and augmentation pipelines.",
      "Ran evaluation and fine-tuning to maintain **95%** prediction quality.",
      "Led AI coding standards and best practices, mentoring engineers for consistent model deployment."
    ]
  },
  {
    monogram: "aws",
    company: "AWS",
    role: "Software Development Engineer",
    dates: "05/2020 - 05/2021",
    meta: "1 yr",
    tags: ["Python", "Node.js", "REST APIs", "Automation"],
    bullets: [
      "Reduced manual cloud-provisioning workload by **40%** with automated internal tools.",
      "Built backend services in Python and Node.js, improving reliability and maintainability.",
      "Developed scalable APIs supporting **10** cross-team workflows and integrations.",
      "Revamped data pipelines, increasing throughput by **30%** and reducing latency.",
      "Collaborated across teams to deliver robust solutions, improving release speed by **20%**."
    ]
  },
  {
    monogram: "C1",
    company: "Capital One",
    role: "Software Engineer Intern",
    dates: "06/2019 - 08/2019",
    meta: "Summer · 3 mos",
    tags: ["Java", "Python", "QA"],
    bullets: [
      "Redesigned web-based financial software modules using Java and Python, improving usability.",
      "Streamlined data processing, cutting average backend task duration by **20%**.",
      "Improved software quality via thorough code reviews and QA testing.",
      "Modernized cross-team workflows with backend automation improvements."
    ]
  }
];

export const projects = {
  featured: {
    n: "01",
    kicker: "FEATURED",
    cat: "FINTECH / ML",
    title: "Atlas - Real-time risk engine",
    desc:
      "Streaming ML pipeline that scores 1M+ transactions/day for fraud and spend anomalies, with sub-40ms inference and a human-in-the-loop review console.",
    metrics: ["<40ms p99", "1M+ / day", "99.9% uptime"],
    tags: ["Python", "PyTorch", "Kafka", "Redis", "Kubernetes"],
    href: "#"
  },
  cards: [
    {
      n: "02",
      cat: "NLP / RAG",
      title: "Semaphore",
      desc: "Semantic search & RAG platform with fine-tuned embeddings powering enterprise document retrieval.",
      metric: "+30% retrieval accuracy",
      tags: ["Transformers", "Vector DBs", "FastAPI"]
    },
    {
      n: "03",
      cat: "MLOPS",
      title: "Forge",
      desc: "Internal MLOps platform for model CI/CD - training, versioning, canary rollout, and live observability.",
      metric: "40% faster training cycles",
      tags: ["Terraform", "Docker", "MLflow"]
    },
    {
      n: "04",
      cat: "LLM / DOCS",
      title: "Ledger IQ",
      desc: "LLM pipeline extracting structured data from invoices and statements at scale for finance teams.",
      metric: "25% less manual review",
      tags: ["NLP", "Node.js", "PostgreSQL"]
    }
  ]
};

export const skills = [
  {
    n: "01",
    title: "AI/ML & Data Science",
    items: ["Machine Learning", "Deep Learning", "NLP", "Transformers", "Model Deployment", "MLOps", "Data Engineering", "AI Pipelines"]
  },
  {
    n: "02",
    title: "Backend",
    items: ["Java", "Python", "Node.js", "REST APIs", "Microservices", "Serverless", "Spring Boot", "Event-Driven"]
  },
  { n: "03", title: "Cloud & DevOps", items: ["AWS", "Kubernetes", "Docker", "Terraform", "CI/CD", "IaC"] },
  { n: "04", title: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "DynamoDB", "Vector DBs"] },
  { n: "05", title: "Frontend", items: ["React", "Angular", "TypeScript", "Redux", "HTML5", "CSS3", "Responsive"] },
  { n: "06", title: "Testing & Automation", items: ["Unit Testing", "Integration", "SonarQube", "Observability", "Load Testing"] }
];

export const marqueeTokens = [
  "PYTHON",
  "PYTORCH",
  "TENSORFLOW",
  "NLP",
  "TRANSFORMERS",
  "MLOPS",
  "KUBERNETES",
  "DOCKER",
  "TERRAFORM",
  "AWS",
  "VECTOR DBS",
  "FASTAPI",
  "REACT",
  "TYPESCRIPT",
  "OBSERVABILITY"
];

export const focusAreas = [
  { n: "01", title: "Fintech & cloud scale", desc: "Production systems for high-volume financial workflows." },
  { n: "02", title: "NLP & LLM systems", desc: "Search, classification, generation, and extraction pipelines." },
  { n: "03", title: "MLOps & reliability", desc: "Training, deployment, monitoring, and latency discipline." },
  { n: "04", title: "Team leadership", desc: "Mentorship, standards, and cross-functional delivery." }
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#impact", label: "Impact" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" }
];
