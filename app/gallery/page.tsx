"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { GalleryCategory, getImagesByCategory } from "@/lib/gallery-data";
import { GalleryFilter } from "@/components/gallery-filter";
import { GalleryGrid } from "@/components/gallery-grid";
import { Navigation } from "@/components/navigation";
import { Sparkles } from "lucide-react";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('all');
  const filteredImages = getImagesByCategory(activeCategory);

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900">
      <Navigation />
      
      <div className="pt-16">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-pink-50 to-rose-50 dark:from-neutral-900 dark:to-neutral-800 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <Sparkles className="w-8 h-8 text-pink-500" />
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              Our Gallery
            </h1>
            <Sparkles className="w-8 h-8 text-rose-500" />
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto"
          >
            Explore our portfolio of stunning transformations and discover the artistry
            that awaits you at Beauteefool
          </motion.p>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <GalleryFilter
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </motion.div>

        {/* Image Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <GalleryGrid images={filteredImages} />
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-pink-500 to-rose-500 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Ready to Experience Your Own Transformation?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg mb-8 text-white/90"
          >
            Book your appointment today and let our experts bring out your natural beauty
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              href="/booking"
              className="inline-block bg-white text-pink-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-pink-50 transition-colors shadow-lg hover:shadow-xl"
            >
              Book Now
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-neutral-400">
            © 2025 Beauteefool Beauty Salon. All rights reserved.
          </p>
        </div>
      </footer>
      </div>
    </div>
  );
}
