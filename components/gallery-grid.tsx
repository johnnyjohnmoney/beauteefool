"use client";

import { useState } from "react";
import { GalleryImage } from "@/lib/gallery-data";
import Image from "next/image";
import { ImageLightbox } from "./image-lightbox";

interface GalleryGridProps {
  images: GalleryImage[];
}

export function GalleryGrid({ images }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setTimeout(() => setSelectedImage(null), 300);
  };

  const handleNext = () => {
    if (!selectedImage) return;
    const currentIndex = images.findIndex((img) => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
  };

  const handlePrevious = () => {
    if (!selectedImage) return;
    const currentIndex = images.findIndex((img) => img.id === selectedImage.id);
    const previousIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[previousIndex]);
  };

  if (images.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-neutral-600 dark:text-neutral-400 text-lg">
          No images found in this category.
        </p>
      </div>
    );
  }

  return (
    <>
      {/* Masonry Grid Layout */}
      <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
        {images.map((image) => (
          <div
            key={image.id}
            className="break-inside-avoid mb-4 group cursor-pointer"
            onClick={() => openLightbox(image)}
          >
            <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
              {/* Image */}
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="w-full h-auto object-cover"
                loading="lazy"
                quality={85}
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="text-sm font-medium">{image.description || image.alt}</p>
                  <p className="text-xs text-white/80 mt-1 capitalize">{image.category}</p>
                </div>
              </div>

              {/* Pink gradient border on hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-pink-500 rounded-lg transition-colors duration-300 pointer-events-none" />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <ImageLightbox
          image={selectedImage}
          images={images}
          isOpen={isLightboxOpen}
          onClose={closeLightbox}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      )}
    </>
  );
}
