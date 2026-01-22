"use client";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-slate-200 dark:border-slate-800 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <Link
              href="/"
              className="text-xl font-bold tracking-tighter block mb-2"
            >
              <span className="text-primary">Skell</span>ify.
            </Link>
            <p className="text-sm text-slate-500">
              © {currentYear} Skellify. All rights reserved.
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left space-y-2">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-700 dark:text-slate-300">
              Contact
            </h4>
            <p className="flex items-center justify-center md:justify-start gap-2 text-sm text-slate-500">
              <Phone className="w-4 h-4" /> +91 7070584967
            </p>
            <p className="flex items-center justify-center md:justify-start gap-2 text-sm text-slate-500">
              <Mail className="w-4 h-4" /> skellify25@gmail.com
            </p>
            <p className="flex items-center justify-center md:justify-start gap-2 text-sm text-slate-500">
              <MapPin className="w-4 h-4" /> Ranchi – 834001, Jharkhand, India
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left space-y-2">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-700 dark:text-slate-300">
              Quick Links
            </h4>
            <div className="flex flex-col gap-1 text-sm text-slate-500">
              <Link href="/courses" className="hover:text-primary transition-colors">
                Courses
              </Link>
              <Link href="/ojt" className="hover:text-primary transition-colors">
                OJT
              </Link>
              <Link href="/services" className="hover:text-primary transition-colors">
                Services
              </Link>
              <Link href="/about" className="hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/contact" className="hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
