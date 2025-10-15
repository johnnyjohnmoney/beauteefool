"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { BookingStep } from "@/types/booking";

interface BookingStepperProps {
  currentStep: BookingStep;
  completedSteps: Set<BookingStep>;
  onStepClick?: (step: BookingStep) => void;
}

const steps = [
  { number: 1 as BookingStep, label: "Services", description: "Choose services" },
  { number: 2 as BookingStep, label: "Date & Time", description: "Pick appointment" },
  { number: 3 as BookingStep, label: "Your Info", description: "Contact details" },
  { number: 4 as BookingStep, label: "Review", description: "Confirm booking" },
];

export function BookingStepper({
  currentStep,
  completedSteps,
  onStepClick,
}: BookingStepperProps) {
  return (
    <div className="w-full py-8">
      {/* Mobile: Vertical stepper */}
      <div className="md:hidden space-y-4">
        {steps.map((step, index) => {
          const isCompleted = completedSteps.has(step.number);
          const isCurrent = currentStep === step.number;
          const isClickable = isCompleted && onStepClick;
          
          return (
            <div key={step.number} className="flex items-start gap-4">
              {/* Step indicator */}
              <div className="flex flex-col items-center">
                <button
                  onClick={() => isClickable && onStepClick(step.number)}
                  disabled={!isClickable}
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-all",
                    isCurrent &&
                      "bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg scale-110",
                    isCompleted &&
                      !isCurrent &&
                      "bg-pink-500 text-white",
                    !isCurrent &&
                      !isCompleted &&
                      "bg-gray-200 dark:bg-neutral-700 text-gray-500 dark:text-neutral-400",
                    isClickable && "cursor-pointer hover:scale-105"
                  )}
                >
                  {isCompleted && !isCurrent ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    step.number
                  )}
                </button>
                
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div
                    className={cn(
                      "w-0.5 h-12 mt-2",
                      isCompleted
                        ? "bg-pink-500"
                        : "bg-gray-200 dark:bg-neutral-700"
                    )}
                  />
                )}
              </div>
              
              {/* Step label */}
              <div className="flex-1 pt-1">
                <div
                  className={cn(
                    "font-semibold transition-colors",
                    isCurrent && "text-pink-600 dark:text-pink-400",
                    isCompleted && !isCurrent && "text-gray-700 dark:text-neutral-300",
                    !isCurrent && !isCompleted && "text-gray-500 dark:text-neutral-500"
                  )}
                >
                  {step.label}
                </div>
                <div className="text-sm text-gray-500 dark:text-neutral-400">
                  {step.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Desktop: Horizontal stepper */}
      <div className="hidden md:block">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          {steps.map((step, index) => {
            const isCompleted = completedSteps.has(step.number);
            const isCurrent = currentStep === step.number;
            const isClickable = isCompleted && onStepClick;
            
            return (
              <div key={step.number} className="flex items-center flex-1">
                {/* Step circle and label */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <button
                    onClick={() => isClickable && onStepClick(step.number)}
                    disabled={!isClickable}
                    className={cn(
                      "w-12 h-12 rounded-full flex items-center justify-center font-semibold text-sm transition-all mb-2",
                      isCurrent &&
                        "bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg scale-110",
                      isCompleted &&
                        !isCurrent &&
                        "bg-pink-500 text-white",
                      !isCurrent &&
                        !isCompleted &&
                        "bg-gray-200 dark:bg-neutral-700 text-gray-500 dark:text-neutral-400",
                      isClickable && "cursor-pointer hover:scale-105"
                    )}
                  >
                    {isCompleted && !isCurrent ? (
                      <Check className="w-6 h-6" />
                    ) : (
                      step.number
                    )}
                  </button>
                  
                  <div className="text-center">
                    <div
                      className={cn(
                        "font-semibold text-sm whitespace-nowrap transition-colors",
                        isCurrent && "text-pink-600 dark:text-pink-400",
                        isCompleted && !isCurrent && "text-gray-700 dark:text-neutral-300",
                        !isCurrent && !isCompleted && "text-gray-500 dark:text-neutral-500"
                      )}
                    >
                      {step.label}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-neutral-400 whitespace-nowrap">
                      {step.description}
                    </div>
                  </div>
                </div>
                
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="flex-1 h-0.5 mx-4 relative">
                    <div
                      className={cn(
                        "absolute inset-0 transition-all",
                        isCompleted
                          ? "bg-pink-500"
                          : "bg-gray-200 dark:bg-neutral-700"
                      )}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
