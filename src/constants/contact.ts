import {
    Linkedin,
    Instagram,
    Globe,
    Smartphone,
    TestTube2,
    GitBranch,
    Hammer,
    TrendingUp,
    Cpu,
    Rocket,
    GraduationCap,
    BookOpen,
    Layers,
    Briefcase,
    Code2,
    Target,
    Workflow,
    ShieldCheck,
    Users,
    Award,
} from "lucide-react";

export const WHATSAPP_LINK = "https://wa.me/7070584967";
export const CALENDAR_LINK = "https://calendar.app.google/7o1oSUhohvqXucYM6";
export const INSTAGRAM_LINK = "https://www.instagram.com/skellify.official/";

export const navLinks = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "Traning", href: "/training" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
];

export const SOCIAL_LINKS = {
    LINKEDIN: "https://linkedin.com/skellify",
    INSTAGRAM: "https://instagram.com/skellify.official",
};
export const SOCIAL_MEDIA_LIST = [
    {
        label: "LinkedIn",
        href: SOCIAL_LINKS.LINKEDIN,
        logo: Linkedin,
    },
    {
        label: "Instagram",
        href: SOCIAL_LINKS.INSTAGRAM,
        logo: Instagram,
    },
];

export const footerLinks = {
    Company: [
        { label: "About", href: "/about" },
        { label: "Courses", href: "/courses" },
        { label: "Training", href: "/training" },
        { label: "Services", href: "/services" },
        { label: "Contact", href: "/contact" },
    ],
    Resources: [
        { label: "Blog", href: "#" },
        { label: "Learning Resources", href: "#" },
        { label: "Community", href: "#" },
    ],
    Legal: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
    ],
};

export const services = [
    {
        icon: Globe,
        title: "Web Development",
        description:
            "Build scalable web platforms using modern technologies, from responsive frontends to robust backend APIs and infrastructure.",
        color: "#2E2EFF",
        features: [
            "Custom web application development",
            "React, Next.js, and TypeScript",
            "REST and GraphQL APIs",
            "Database design and optimization",
            "Cloud deployment and DevOps",
            "Performance optimization",
        ],
        deliverables: [
            "Source code + documentation",
            "Deployment pipeline",
            "Post-launch support",
        ],
    },
    {
        icon: Smartphone,
        title: "Mobile Development",
        description:
            "Develop cross-platform mobile applications that deliver native-quality experiences across iOS and Android with a single codebase.",
        color: "#F97316",
        features: [
            "React Native development",
            "Cross-platform UI components",
            "Native API integrations",
            "App Store and Play Store deployment",
            "Push notifications and analytics",
            "Offline-first architecture",
        ],
        deliverables: [
            "Production-ready mobile app",
            "App store submission",
            "Maintenance plan",
        ],
    },
    {
        icon: TestTube2,
        title: "Automation Testing",
        description:
            "Implement comprehensive test automation frameworks that improve product reliability and give your team the confidence to ship faster.",
        color: "#2E2EFF",
        features: [
            "End-to-end test automation",
            "Selenium, Playwright, Cypress",
            "API test automation",
            "Mobile test automation",
            "Performance and load testing",
            "CI/CD integration",
        ],
        deliverables: [
            "Test automation framework",
            "Test reports dashboard",
            "Maintenance documentation",
        ],
    },
    {
        icon: GitBranch,
        title: "Quality Engineering",
        description:
            "Design end-to-end testing pipelines and CI/CD automation strategies that embed quality as a practice, not an afterthought.",
        color: "#F97316",
        features: [
            "CI/CD pipeline design",
            "GitHub Actions, Jenkins, GitLab CI",
            "Automated code quality gates",
            "Deployment automation",
            "Monitoring and alerting setup",
            "Engineering process consulting",
        ],
        deliverables: [
            "Full CI/CD pipeline",
            "Quality metrics dashboard",
            "Team training sessions",
        ],
    },
];

export const principles = [
    {
        icon: Hammer,
        title: "Practical Engineering",
        description:
            "We believe the best way to learn engineering is to do engineering. Every program and project is grounded in real-world practice.",
        color: "#1E3A8A",
    },
    {
        icon: TrendingUp,
        title: "Learning by Building",
        description:
            "Passive learning creates passive developers. We create active learners who build, fail fast, iterate, and grow.",
        color: "#F97316",
    },
    {
        icon: Cpu,
        title: "Automation Culture",
        description:
            "Automation is not a feature — it's a mindset. We embed automation thinking into every program and delivery.",
        color: "#1E3A8A",
    },
];

export const problems = [
    {
        icon: BookOpen,
        title: "Theory Without Practice",
        description:
            "Learning environments often focus on theory while real engineering requires hands-on experience with production systems and real-world constraints.",
        color: "primary",
    },
    {
        icon: Layers,
        title: "Limited Project Exposure",
        description:
            "Developers rarely work on real production systems before entering the industry, leaving a critical gap in practical readiness.",
        color: "accent",
    },
    {
        icon: Cpu,
        title: "Automation Skills Gap",
        description:
            "Modern software teams rely on automation, testing pipelines, and engineering discipline — skills rarely taught in traditional programs.",
        color: "primary",
    },
];

export const steps = [
    {
        number: "01",
        title: "Learn Core Concepts",
        description:
            "Master fundamental development concepts through structured, mentor-led learning paths tailored to modern engineering.",
        color: "#1E3A8A",
    },
    {
        number: "02",
        title: "Build Real Projects",
        description:
            "Apply knowledge by building production-quality projects that mirror real-world software engineering challenges.",
        color: "#F97316",
    },
    {
        number: "03",
        title: "Develop Engineering Discipline",
        description:
            "Internalize professional workflows — code reviews, testing culture, agile practices — through repetition and feedback.",
        color: "#1E3A8A",
    },
    {
        number: "04",
        title: "Apply in Production",
        description:
            "Graduate from training into real engineering environments with the confidence and skills to ship immediately.",
        color: "#F97316",
    },
];

export const programs = [
    {
        icon: Code2,
        title: "Foundation Programming",
        level: "Beginner",
        topics: [
            "Programming fundamentals",
            "Git workflows",
            "Problem solving",
        ],
        color: "#1E3A8A",
        duration: "8 Weeks",
    },
    {
        icon: Globe,
        title: "Web Development",
        level: "Intermediate",
        topics: ["Frontend frameworks", "Backend APIs", "Deployment"],
        color: "#F97316",
        duration: "12 Weeks",
        featured: true,
    },
    {
        icon: TestTube2,
        title: "Automation Testing",
        level: "Intermediate",
        topics: [
            "Automation frameworks",
            "CI/CD pipelines",
            "Quality engineering",
        ],
        color: "#1E3A8A",
        duration: "10 Weeks",
    },
    {
        icon: Briefcase,
        title: "Industry Project Experience",
        level: "Advanced",
        topics: [
            "Real project collaboration",
            "Agile workflows",
            "Engineering practices",
        ],
        color: "#F97316",
        duration: "16 Weeks",
    },
];

export const pillars = [
    {
        icon: GraduationCap,
        number: "01",
        title: "Learn",
        description:
            "Structured learning programs focused on modern development practices.",
        highlight: "Learning Programs",
    },
    {
        icon: Hammer,
        number: "02",
        title: "Build",
        description:
            "Hands-on projects designed to simulate real software engineering workflows.",
        highlight: "Project Experience",
    },
    {
        icon: Rocket,
        number: "03",
        title: "Deliver",
        description:
            "Engineering services that help companies build and automate software systems.",
        highlight: "Engineering Services",
    },
];

export const homeServices = [
    {
        icon: Globe,
        title: "Web Development",
        description: "Build scalable web platforms using modern technologies.",
        tags: ["React", "Next.js", "Node.js"],
    },
    {
        icon: Smartphone,
        title: "Mobile Development",
        description: "Develop cross-platform mobile applications.",
        tags: ["React Native", "Flutter"],
    },
    {
        icon: TestTube2,
        title: "Automation Testing",
        description: "Implement automation frameworks and CI pipelines.",
        tags: ["Selenium", "Playwright", "Cypress"],
    },
    {
        icon: GitBranch,
        title: "Quality Engineering",
        description: "Design CI/CD pipelines and testing systems.",
        tags: ["CI/CD", "GitHub Actions", "Jenkins"],
    },
];

export const reasons = [
    {
        icon: Target,
        title: "Industry-focused learning",
        desc: "Curriculum built around what employers actually need.",
    },
    {
        icon: Hammer,
        title: "Hands-on project experience",
        desc: "Learn by building real, production-grade systems.",
    },
    {
        icon: Cpu,
        title: "Automation-first engineering",
        desc: "Every program embeds automation and CI/CD thinking.",
    },
    {
        icon: Workflow,
        title: "Practical development workflows",
        desc: "Git, agile, code review — real team workflows.",
    },
    {
        icon: TrendingUp,
        title: "Continuous improvement culture",
        desc: "Iterative feedback loops baked into every engagement.",
    },
    {
        icon: Users,
        title: "Expert-led instruction",
        desc: "Mentors with real industry and engineering backgrounds.",
    },
    {
        icon: Award,
        title: "Recognized certification",
        desc: "Certificates recognized by industry partners.",
    },
    {
        icon: ShieldCheck,
        title: "ISO 9001:2015 Certified",
        desc: "Quality-assured processes at every level.",
    },
];
