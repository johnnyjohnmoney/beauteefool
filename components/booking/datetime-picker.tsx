"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { TimeSlot } from "@/types/booking";
import { generateTimeSlots } from "@/lib/booking-data";
import { Clock } from "lucide-react";

interface DateTimePickerProps {
  selectedDate: Date | null;
  selectedTime: string | null;
  serviceDuration: number;
  onDateSelect: (date: Date | undefined) => void;
  onTimeSelect: (time: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export function DateTimePicker({
  selectedDate,
  selectedTime,
  serviceDuration,
  onDateSelect,
  onTimeSelect,
  onNext,
  onBack,
}: DateTimePickerProps) {
  const timeSlots: TimeSlot[] = selectedDate
    ? generateTimeSlots(selectedDate, serviceDuration)
    : [];

  const canProceed = selectedDate && selectedTime;

  return (
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-white mb-2">
          Select Date & Time
        </h2>
        <p className="text-neutral-600 dark:text-neutral-300">
          Choose when you'd like to come in
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Calendar */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold text-neutral-800 dark:text-white mb-4">
            Select a Date
          </h3>
          <Calendar
            mode="single"
            selected={selectedDate || undefined}
            onSelect={onDateSelect}
            disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
            className="rounded-lg border border-neutral-200 dark:border-neutral-700 p-4 bg-white dark:bg-neutral-800"
            classNames={{
              day_selected:
                "bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:from-pink-600 hover:to-rose-600",
              day_today: "bg-neutral-100 dark:bg-neutral-700 font-bold",
            }}
          />
        </div>

        {/* Time Slots */}
        <div>
          <h3 className="text-lg font-semibold text-neutral-800 dark:text-white mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5" />
            Select a Time
          </h3>
          
          {selectedDate ? (
            <div className="space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-[400px] overflow-y-auto p-2">
                {timeSlots.map((slot) => (
                  <Button
                    key={slot.time}
                    variant={selectedTime === slot.time ? "default" : "outline"}
                    size="sm"
                    onClick={() => slot.available && onTimeSelect(slot.time)}
                    disabled={!slot.available}
                    className={cn(
                      "transition-all h-auto py-3",
                      selectedTime === slot.time &&
                        "bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white shadow-md",
                      !slot.available &&
                        "opacity-40 cursor-not-allowed",
                      slot.available &&
                        selectedTime !== slot.time &&
                        "hover:border-pink-300 hover:bg-pink-50 dark:hover:bg-neutral-700"
                    )}
                  >
                    {slot.time}
                  </Button>
                ))}
              </div>
              
              {timeSlots.every((slot) => !slot.available) && (
                <div className="text-center p-6 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                  <p className="text-neutral-600 dark:text-neutral-400">
                    No available time slots for this date.
                  </p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-1">
                    Please select another date.
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center p-12 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
              <Clock className="w-12 h-12 mx-auto text-neutral-400 mb-3" />
              <p className="text-neutral-600 dark:text-neutral-400">
                Please select a date first
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Selected Info */}
      {selectedDate && selectedTime && (
        <div className="mt-8 p-4 bg-gradient-to-r from-pink-50 to-rose-50 dark:from-neutral-800 dark:to-neutral-700 rounded-lg border border-pink-200 dark:border-neutral-600">
          <div className="text-center">
            <div className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">
              Your appointment
            </div>
            <div className="text-lg font-semibold text-neutral-800 dark:text-white">
              {selectedDate.toLocaleDateString('en-US', {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}{' '}
              at {selectedTime}
            </div>
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="mt-8 flex gap-4">
        <Button variant="outline" onClick={onBack} size="lg" className="flex-1">
          Back
        </Button>
        <Button
          onClick={onNext}
          disabled={!canProceed}
          size="lg"
          className={cn(
            "flex-1",
            canProceed &&
              "bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white"
          )}
        >
          Next: Your Information
        </Button>
      </div>
    </div>
  );
}
