"use client";

import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-6xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
      >
        Discover Your Natural{" "}
        <Highlight className="text-black dark:text-white">
          Beauty & Radiance
        </Highlight>
        <br />
        <span className="text-lg md:text-2xl lg:text-3xl mt-4 block text-neutral-600 dark:text-neutral-300">
          Where luxury meets self-care
        </span>
      </motion.h1>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="flex gap-4 mt-10 justify-center flex-wrap"
      >
        <Button
          size="lg"
          className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
        >
          Book Appointment
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="text-lg px-8 py-6 rounded-full border-2 border-pink-500 text-pink-500 hover:bg-pink-50 dark:hover:bg-pink-950"
        >
          View Services
        </Button>
      </motion.div>
    </HeroHighlight>
  );
}
