import { Linkedin, Instagram, Globe, Smartphone, TestTube2, GitBranch } from "lucide-react";

export const WHATSAPP_LINK = "https://wa.me/7070584967";
export const CALENDAR_LINK = "https://calendar.app.google/7o1oSUhohvqXucYM6";
export const INSTAGRAM_LINK = "https://www.instagram.com/skellify.official/";

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
        { label: "Programs", href: "/programs" },
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
