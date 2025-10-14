"use client";

import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { Sparkles, Clock, Award, Heart } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: <Sparkles className="w-8 h-8 text-pink-500" />,
      title: "Premium Products",
      description: "We use only the finest, organic beauty products for all our treatments",
    },
    {
      icon: <Clock className="w-8 h-8 text-pink-500" />,
      title: "Flexible Hours",
      description: "Open 7 days a week with extended hours to fit your busy schedule",
    },
    {
      icon: <Award className="w-8 h-8 text-pink-500" />,
      title: "Expert Stylists",
      description: "Our certified professionals have years of experience and training",
    },
    {
      icon: <Heart className="w-8 h-8 text-pink-500" />,
      title: "Personalized Care",
      description: "Every treatment is customized to your unique beauty needs",
    },
  ];

  return (
    <div className="py-20 px-4 bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-white mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Experience the difference that true care and expertise make
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <CardContainer key={index} className="inter-var">
              <CardBody className="bg-white dark:bg-black relative group/card border-black/[0.1] dark:border-white/[0.2] w-full h-auto rounded-xl p-6 border hover:shadow-2xl transition-shadow">
                <CardItem
                  translateZ="50"
                  className="mb-4"
                >
                  {feature.icon}
                </CardItem>
                <CardItem
                  translateZ="60"
                  className="text-xl font-bold text-neutral-800 dark:text-white mb-2"
                >
                  {feature.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="70"
                  className="text-neutral-600 dark:text-neutral-300 text-sm"
                >
                  {feature.description}
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </div>
  );
}
