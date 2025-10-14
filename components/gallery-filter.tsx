"use client";

import { GalleryCategory, categoryLabels } from "@/lib/gallery-data";
import { Button } from "@/components/ui/button";

interface GalleryFilterProps {
  activeCategory: GalleryCategory;
  onCategoryChange: (category: GalleryCategory) => void;
}

export function GalleryFilter({ activeCategory, onCategoryChange }: GalleryFilterProps) {
  const categories: GalleryCategory[] = ['all', 'hair', 'nails', 'makeup', 'spa', 'interior'];

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map((category) => (
        <Button
          key={category}
          onClick={() => onCategoryChange(category)}
          variant={activeCategory === category ? "default" : "outline"}
          className={
            activeCategory === category
              ? "bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white border-none"
              : "border-2 border-pink-500 text-pink-500 hover:bg-pink-50 dark:hover:bg-pink-950 dark:text-pink-400 dark:border-pink-400"
          }
          size="lg"
        >
          {categoryLabels[category]}
        </Button>
      ))}
    </div>
  );
}
