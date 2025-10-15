"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <div className="relative overflow-hidden">
      <BackgroundGradientAnimation>
        <div className="absolute inset-0 z-10 flex items-center justify-center px-4">
          <div className="max-w-6xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left side - CTA */}
              <div className="text-white space-y-6">
                <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                  Ready to Transform Your Look?
                </h2>
                <p className="text-xl md:text-2xl text-white/90">
                  Book your appointment today and experience luxury beauty care
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-6 h-6" />
                    <span className="text-lg">(555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-6 h-6" />
                    <span className="text-lg">hello@beauteefool.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-6 h-6" />
                    <span className="text-lg">123 Beauty Street, NY 10001</span>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button
                    size="icon"
                    variant="outline"
                    className="bg-white/10 hover:bg-white/20 border-white/30 text-white"
                  >
                    <Instagram className="w-5 h-5" />
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    className="bg-white/10 hover:bg-white/20 border-white/30 text-white"
                  >
                    <Facebook className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Right side - Quick Booking CTA */}
              <Card className="p-8 bg-white/95 dark:bg-black/95 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-white">
                  Ready to Book?
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300 mb-6">
                  Experience our luxury beauty services. Book your appointment online in just a few clicks.
                </p>
                <Link href="/booking" className="block">
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white text-lg py-6"
                  >
                    Book Appointment Now
                  </Button>
                </Link>
                <div className="mt-6 pt-6 border-t dark:border-neutral-700">
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 text-center">
                    Or call us at{' '}
                    <a href="tel:555-123-4567" className="text-pink-600 hover:text-pink-700 font-semibold">
                      (555) 123-4567
                    </a>
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </BackgroundGradientAnimation>
    </div>
  );
}
