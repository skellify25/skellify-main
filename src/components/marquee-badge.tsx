"use client";

import { motion } from "motion/react";

interface MarqueeBadgeProps {
  nameList: string[];
  speed?: number; // Duration in seconds for one complete loop
}

const MarqueeBadge = ({ nameList, speed = 20 }: MarqueeBadgeProps) => {
  // Duplicate the list to create seamless loop
  const duplicatedList = [...nameList, ...nameList];

  return (
    <div
      className="mb-10 w-full overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <motion.div
        className="flex gap-6 w-max"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          x: {
            duration: speed,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {duplicatedList.map((name, index) => (
          <span
            key={`${name}-${index}`}
            className="shrink-0 px-2 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-medium whitespace-nowrap"
          >
            {name}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeBadge;
