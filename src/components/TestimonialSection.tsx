"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

interface TestimonialCardProps {
  company: string;
  quote: string;
  authorName: string;
  authorTitle: string;
  avatarSrc: string;
  isHovered: boolean;
  isDimmed: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

const TestimonialCard = ({
  company,
  quote,
  authorName,
  authorTitle,
  avatarSrc,
  isHovered,
  isDimmed,
  onHoverStart,
  onHoverEnd
}: TestimonialCardProps) => {
  return (
    <motion.div
      className="bg-white rounded-2xl border border-slate-100 p-8 flex flex-col h-full relative overflow-hidden will-change-transform"
      animate={{
        scale: isHovered ? 1.05 : isDimmed ? 0.95 : 1,
        opacity: isHovered ? 1 : isDimmed ? 0.4 : 0.8,
        filter: isHovered ? "grayscale(0%)" : isDimmed ? "grayscale(100%) blur(2px)" : "grayscale(40%)",
        boxShadow: isHovered
          ? "0 20px 40px -10px rgba(14, 165, 233, 0.15), 0 10px 20px -5px rgba(0, 0, 0, 0.05)"
          : "0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.02)",
        zIndex: isHovered ? 20 : 10,
      }}
      transition={{
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1]
      }}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
    >
      {/* Left blue accent line (brightens on hover) */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0ea5e9]"
        animate={{ opacity: isHovered ? 1 : 0.5 }}
        transition={{ duration: 0.3 }}
      ></motion.div>

      <div className="mb-6">
        <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">
          {company}
        </span>
      </div>

      <div className="flex-grow flex flex-col mb-8 relative">
        <div className="flex gap-4 items-start">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#f0f9ff] text-[#0ea5e9] flex items-center justify-center font-serif text-3xl font-bold pt-2">
            “
          </div>
          <p className="text-slate-800 text-base leading-relaxed font-medium pt-1">
            {quote}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4 mt-auto">
        <div className="relative w-12 h-12 rounded-full overflow-hidden border border-slate-100">
          <Image
            src={avatarSrc}
            alt={authorName}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="text-sm font-bold text-slate-900">{authorName}</h4>
          <p className="text-xs text-slate-500">{authorTitle}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function TestimonialSection() {
  const testimonials = [
    {
      company: "DRIP CAPITAL",
      quote: "Cintara's AI-native blockchain and AgentiOS align with our vision of digitizing trade finance. The pilot demonstrated how autonomous AI can enhance compliance and transparency across global trade.",
      authorName: "Pushkar Mukewar",
      authorTitle: "Co-Founder & CEO, Drip Capital",
      avatarSrc: "/images/pushkar.png",
    },
    {
      company: "ICAD",
      quote: "Cintara introduced structured, data-driven academic insights while preserving disciplined preparation. It strengthened our ability to guide students with clarity and measurable progress.",
      authorName: "Sarang Upganlawar",
      authorTitle: "Founder & CEO, ICAD",
      avatarSrc: "/images/sarang.png",
    },
    {
      company: "TOWNER",
      quote: "Cintara's append-only DriverLedger introduces a transparent and verifiable layer to our driver onboarding process. It strengthens trust and accountability across our mobility network.",
      authorName: "Rahul D.",
      authorTitle: "Founder & CEO, Towner",
      avatarSrc: "/images/rahul.png",
    }
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-[#f4fbff] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full border border-slate-200 bg-white shadow-sm">
            <span className="text-sm font-medium text-slate-600">Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight">
            Trusted Across Industries
          </h2>
        </div>

        {/* 
          The outer wrapper handles standard mouse exits cleanly,
          resetting the spotlight effect so all cards return to default.
        */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {testimonials.map((testimonial, index) => {
            // Logic for the Spotlight effect:
            // - If nothing is hovered -> Default state (all false)
            // - If THIS card is hovered -> isHovered = true, isDimmed = false
            // - If ANOTHER card is hovered -> isHovered = false, isDimmed = true
            const isHovered = hoveredIndex === index;
            const isDimmed = hoveredIndex !== null && hoveredIndex !== index;

            return (
              <TestimonialCard
                key={index}
                {...testimonial}
                isHovered={isHovered}
                isDimmed={isDimmed}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => {
                  // We let the parent container gracefully handle resetting to null,
                  // or transferring focus to another card seamlessly.
                }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
