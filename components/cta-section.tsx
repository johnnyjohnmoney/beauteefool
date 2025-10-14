"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

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

              {/* Right side - Quick Contact Form */}
              <Card className="p-8 bg-white/95 dark:bg-black/95 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-6 text-neutral-800 dark:text-white">
                  Quick Booking
                </h3>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="service">Preferred Service</Label>
                    <Input id="service" placeholder="e.g., Hair Styling" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Any special requests?" className="mt-1" rows={3} />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white"
                  >
                    Book Now
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </BackgroundGradientAnimation>
    </div>
  );
}
