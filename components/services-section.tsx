"use client";

import { FocusCards } from "@/components/ui/focus-cards";

export function ServicesSection() {
  const services = [
    {
      title: "Hair Styling",
      src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
    },
    {
      title: "Spa & Massage",
      src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80",
    },
    {
      title: "Facial Treatments",
      src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
    },
    {
      title: "Nail Care",
      src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80",
    },
    {
      title: "Makeup Artistry",
      src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80",
    },
    {
      title: "Skin Care",
      src: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800&q=80",
    },
  ];

  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-white mb-4">
            Our Premium Services
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Experience world-class beauty treatments tailored to your unique needs
          </p>
        </div>
        <FocusCards cards={services} />
      </div>
    </div>
  );
}
