"use client";
import Link from "next/link";
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Linkedin, 
  Instagram, 
  Facebook 
} from "lucide-react";
import Image from "next/image";
import { WHATSAPP_LINK, INSTAGRAM_LINK } from "@/constants/contact";

// Custom X (formerly Twitter) Icon Component
const XIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    aria-hidden="true" 
    className={className} 
    fill="currentColor"
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center font-bold tracking-tighter">
              <Image
                src="/ske_1.png"
                alt="Skellify Logo"
                width={56}
                height={56}
                priority
                className="object-contain shrink-0
                          h-10 w-10
                          sm:h-12 sm:w-12
                          md:h-14 md:w-14
                          lg:h-16 lg:w-16"
              />

              <span
                className="leading-none -ml-1
                          text-lg
                          sm:text-xl
                          md:text-2xl">
                <span className="text-primary">Skell</span>ify.
              </span>
            </Link>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-xs">
              Your partner in digital transformation and technical excellence. We build robust software for global businesses while mentoring the next generation of tech talent through hands-on experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-6">
              Platform
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-slate-500 dark:text-slate-400">
              <li><Link href="/courses" className="hover:text-primary transition-colors">Courses</Link></li>
              <li><Link href="/ojt" className="hover:text-primary transition-colors">OJT Training</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-6">
              Support
            </h4>
            <div className="flex flex-col gap-4 text-sm text-slate-500 dark:text-slate-400">
              <a href="mailto:official.skellify@gmail.com" className="flex items-center gap-3 hover:text-primary transition-colors group">
                <Mail className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" /> 
                official.skellify@gmail.com
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-green-600 transition-colors group">
                <Phone className="w-4 h-4 text-green-500 group-hover:scale-110 transition-transform" /> 
                +91 7070584967
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>Ranchi – 834001,<br /> Jharkhand, India</span>
              </div>
            </div>
          </div>

          {/* Connect Section */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-6">
              Connect With Us
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">Follow us for latest updates and career tips.</p>
            <div className="flex flex-wrap gap-3">
              <Link href={WHATSAPP_LINK} target="_blank" className="p-2.5 bg-green-500/10 text-green-600 rounded-lg hover:bg-green-500 hover:text-white transition-all shadow-sm" aria-label="WhatsApp">
                <MessageCircle className="w-5 h-5" />
              </Link>
              {/* <Link href="#" className="p-2.5 bg-blue-500/10 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all shadow-sm" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </Link> */}
              {/* <Link href={INSTAGRAM_LINK} className="p-2.5 bg-pink-500/10 text-pink-600 rounded-lg hover:bg-pink-500 hover:text-white transition-all shadow-sm" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </Link> */}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-xs text-slate-500">
            © {currentYear} Skellify. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-slate-400">
            {/* <Link href="/privacy" className="hover:text-slate-900 dark:hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-900 dark:hover:text-white transition-colors">Terms of Service</Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;