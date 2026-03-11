"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Calendar, MessageCircle, X } from "lucide-react"

export default function BatchCTA() {
  const [visible, setVisible] = useState(true)

  return (
    <AnimatePresence>
      {visible && (
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35 }}
          className="container-xl py-10"
        >
          <div className="relative overflow-hidden rounded-[20px] border border-border bg-surface shadow-sm">

            {/* close button */}
            <button
              onClick={() => setVisible(false)}
              className="
              absolute right-4 top-4
              p-2
              rounded-full
              hover:bg-primary/10
              text-muted
              hover:text-primary
              transition
              "
            >
              <X size={18} />
            </button>

            {/* accent line */}
            <div className="absolute inset-y-0 left-0 w-1.5 bg-linear-to-b from-primary to-accent" />

            <div className="grid lg:grid-cols-[260px_1fr_auto] gap-8 p-8 lg:p-10 items-center">
              <div className="flex items-center gap-4 lg:block">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-2">
                  <Calendar size={20} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-muted uppercase tracking-wide">
                    Next batch starts
                  </p>

                  <h3 className="font-display text-3xl font-extrabold">
                    06 April
                  </h3>

                  <p className="text-muted">2026</p>
                </div>
              </div>

              <div>
                <span className="section-tag">
                  Free Registration Open
                </span>

                <h2 className="text-2xl lg:text-3xl font-bold leading-tight">
                  Apply now to reserve your seat.
                  <br />
                  <span className="text-gradient">
                    Finalize your enrollment on WhatsApp
                  </span>
                </h2>

                <p className="text-muted mt-3 max-w-160">
                  Submit your application today with
                  <span className="font-semibold text-foreground">
                    {" "}zero upfront payment
                  </span>.
                  Once accepted, you will join the Skellify WhatsApp group where
                  we will share the full details and complete the fee payment
                  process before the batch begins.
                </p>
              </div>

              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
                href="#"
                className="inline-flex items-center gap-3 px-7 py-4 rounded-[10px] bg-primary hover:bg-primary-hover text-white font-semibold transition"
              >
                <MessageCircle size={18} />
                Join Skellify
              </motion.a>

            </div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}