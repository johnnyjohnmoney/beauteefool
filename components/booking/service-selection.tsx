"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { Service, ServiceCategory } from "@/types/booking";
import { services, categoryLabels, calculateTotalPrice, calculateTotalDuration, formatDuration } from "@/lib/booking-data";
import { Button } from "@/components/ui/button";

interface ServiceSelectionProps {
  selectedServiceIds: string[];
  onServiceToggle: (serviceId: string) => void;
  onNext: () => void;
}

export function ServiceSelection({
  selectedServiceIds,
  onServiceToggle,
  onNext,
}: ServiceSelectionProps) {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory | 'all'>('all');

  const filteredServices =
    activeCategory === 'all'
      ? services
      : services.filter((s) => s.category === activeCategory);

  const categories: Array<ServiceCategory | 'all'> = ['all', 'hair', 'nails', 'makeup', 'spa', 'facial'];

  const totalPrice = calculateTotalPrice(selectedServiceIds);
  const totalDuration = calculateTotalDuration(selectedServiceIds);
  const canProceed = selectedServiceIds.length > 0;

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-white mb-2">
          Select Your Services
        </h2>
        <p className="text-neutral-600 dark:text-neutral-300">
          Choose one or more services for your appointment
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveCategory(category)}
            className={cn(
              "transition-all",
              activeCategory === category &&
                "bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:from-pink-600 hover:to-rose-600"
            )}
          >
            {category === 'all' ? 'All Services' : categoryLabels[category as ServiceCategory]}
          </Button>
        ))}
      </div>

      {/* Service Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {filteredServices.map((service) => {
          const isSelected = selectedServiceIds.includes(service.id);
          
          return (
            <div
              key={service.id}
              onClick={() => onServiceToggle(service.id)}
              className={cn(
                "relative group cursor-pointer rounded-lg overflow-hidden transition-all duration-300 shadow-md hover:shadow-xl",
                isSelected && "ring-2 ring-pink-500 shadow-lg"
              )}
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.name}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Popular
                  </div>
                )}
                
                {/* Selected Checkmark */}
                {isSelected && (
                  <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center shadow-lg">
                    <Check className="w-5 h-5" />
                  </div>
                )}
                
                {/* Overlay */}
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-t from-black/70 to-black/0 transition-opacity",
                    isSelected && "from-pink-500/30"
                  )}
                />
              </div>

              {/* Service Info */}
              <div className="p-4 bg-white dark:bg-neutral-800">
                <h3 className="font-semibold text-lg text-neutral-800 dark:text-white mb-1">
                  {service.name}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-3 line-clamp-2">
                  {service.description}
                </p>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-neutral-600 dark:text-neutral-400">
                    {formatDuration(service.duration)}
                  </span>
                  <span className="font-semibold text-pink-600 dark:text-pink-400 text-lg">
                    ${service.price}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Summary and Next Button */}
      <div className="sticky bottom-0 bg-white dark:bg-neutral-900 border-t dark:border-neutral-800 p-4 -mx-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            {selectedServiceIds.length > 0 ? (
              <>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">
                  {selectedServiceIds.length} service{selectedServiceIds.length > 1 ? 's' : ''} selected
                </div>
                <div className="text-lg font-semibold text-neutral-800 dark:text-white">
                  ${totalPrice} • {formatDuration(totalDuration)}
                </div>
              </>
            ) : (
              <div className="text-sm text-neutral-600 dark:text-neutral-400">
                Select at least one service to continue
              </div>
            )}
          </div>
          
          <Button
            onClick={onNext}
            disabled={!canProceed}
            size="lg"
            className={cn(
              "w-full md:w-auto",
              canProceed &&
                "bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white"
            )}
          >
            Next: Select Date & Time
          </Button>
        </div>
      </div>
    </div>
  );
}
