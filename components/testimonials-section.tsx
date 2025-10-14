"use client";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "The best beauty salon I've ever been to! The staff is incredibly professional and the results are amazing.",
      rating: 5,
    },
    {
      name: "Emily Davis",
      text: "I've been coming here for years. They always know exactly what I need and deliver perfect results every time.",
      rating: 5,
    },
    {
      name: "Jessica Martinez",
      text: "Amazing experience! The atmosphere is so relaxing and the treatments are top-notch. Highly recommend!",
      rating: 5,
    },
  ];

  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-white mb-4">
            What Our Clients Say
          </h2>
          <TextGenerateEffect words="Trusted by thousands of satisfied clients" className="text-lg" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-neutral-100 dark:border-neutral-700"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4 italic">
                "{testimonial.text}"
              </p>
              <p className="text-neutral-800 dark:text-white font-semibold">
                - {testimonial.name}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            Read More Reviews
          </Button>
        </div>
      </div>
    </div>
  );
}
