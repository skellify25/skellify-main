import { Linkedin, Instagram, Hammer, TrendingUp, Cpu } from "lucide-react";

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
