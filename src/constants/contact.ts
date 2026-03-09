import { Linkedin, Instagram } from "lucide-react";

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
