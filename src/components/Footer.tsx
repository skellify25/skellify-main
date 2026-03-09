import React from "react"
import Link from "next/link"
import { Linkedin, Github, Twitter, Mail, Phone, MapPin } from "lucide-react"
import { footerLinks } from "@/constants/contact"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-background text-white">
      <div className="container-xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Image
                src="/favicon.ico"
                height={30}
                width={30}
                alt="logo"
              />
              <span className="text-xl font-extrabold tracking-tight">
                <span>SKELL</span>
                <span className="text-accent">IFY</span>
              </span>
            </Link>

            <p className="text-muted text-sm leading-relaxed mb-6 max-w-xs">
              Skellify helps developers gain practical engineering skills while delivering reliable software and automation solutions.
            </p>

            <div className="flex flex-col gap-3">

              <Link
                href="mailto:official.skellify@gmail.com"
                className="flex items-center gap-3 text-sm text-muted hover:text-accent transition-colors"
              >
                <Mail size={15} className="text-accent" />
                official.skellify@gmail.com
              </Link>

              <Link
                href="tel:+917070584967"
                className="flex items-center gap-3 text-sm text-muted hover:text-accent transition-colors"
              >
                <Phone size={15} className="text-accent" />
                +91 7070584967
              </Link>

              <span className="flex items-center gap-3 text-sm text-muted">
                <MapPin size={15} className="text-accent" />
                Ranchi, Jharkhand, 834001
              </span>

            </div>

            {/* Social */}
            {/* <div className="flex items-center gap-3 mt-6">
              {[
                { Icon: Linkedin, href: "#", label: "LinkedIn" },
                { Icon: Github, href: "#", label: "GitHub" },
                { Icon: Twitter, href: "#", label: "Twitter" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div> */}

          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">
                {category}
              </h4>

              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

            </div>
          ))}

        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-xl py-6 flex flex-col sm:flex-row items-center justify-between gap-4">

          <p className="text-muted text-sm">
            © {new Date().getFullYear()} Skellify. All rights reserved.
          </p>

          <p className="text-muted text-sm">
            ISO 9001:2015 Certified
          </p>

        </div>
      </div>
    </footer>
  )
}