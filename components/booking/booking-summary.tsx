"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BookingData } from "@/types/booking";
import { getServicesByIds, formatDuration, calculateEndTime } from "@/lib/booking-data";
import { formatPhoneNumber } from "@/lib/booking-validation";
import { Calendar, Clock, User, Mail, Phone, MessageSquare, Edit2, CheckCircle } from "lucide-react";

interface BookingSummaryProps {
  bookingData: BookingData;
  onEditStep: (step: number) => void;
  onConfirm: () => void;
  onBack: () => void;
  isSubmitting?: boolean;
}

export function BookingSummary({
  bookingData,
  onEditStep,
  onConfirm,
  onBack,
  isSubmitting = false,
}: BookingSummaryProps) {
  const services = getServicesByIds(bookingData.selectedServices.map((s) => s.id));
  const { selectedDate, selectedTime, customerInfo, totalPrice, totalDuration } = bookingData;

  const estimatedEndTime = selectedTime ? calculateEndTime(selectedTime, totalDuration) : null;

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-white mb-2">
          Review Your Booking
        </h2>
        <p className="text-neutral-600 dark:text-neutral-300">
          Please review your appointment details before confirming
        </p>
      </div>

      <div className="space-y-6">
        {/* Services Section */}
        <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-lg overflow-hidden">
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-pink-50 to-rose-50 dark:from-neutral-700 dark:to-neutral-600 border-b dark:border-neutral-600">
            <h3 className="font-semibold text-neutral-800 dark:text-white flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-pink-500" />
              Selected Services
            </h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onEditStep(1)}
              className="text-pink-600 hover:text-pink-700 hover:bg-pink-100 dark:hover:bg-neutral-600"
            >
              <Edit2 className="w-4 h-4 mr-1" />
              Edit
            </Button>
          </div>
          <div className="p-4 space-y-3">
            {services.map((service) => (
              <div key={service.id} className="flex justify-between items-start pb-3 border-b last:border-0 dark:border-neutral-700">
                <div>
                  <div className="font-medium text-neutral-800 dark:text-white">
                    {service.name}
                  </div>
                  <div className="text-sm text-neutral-500 dark:text-neutral-400">
                    {formatDuration(service.duration)}
                  </div>
                </div>
                <div className="font-semibold text-neutral-800 dark:text-white">
                  ${service.price}
                </div>
              </div>
            ))}
            <div className="flex justify-between items-center pt-3 border-t-2 dark:border-neutral-600">
              <div>
                <div className="font-semibold text-lg text-neutral-800 dark:text-white">
                  Total
                </div>
                <div className="text-sm text-neutral-500 dark:text-neutral-400">
                  Estimated duration: {formatDuration(totalDuration)}
                </div>
              </div>
              <div className="text-2xl font-bold text-pink-600 dark:text-pink-400">
                ${totalPrice}
              </div>
            </div>
          </div>
        </div>

        {/* Date & Time Section */}
        <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-lg overflow-hidden">
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-pink-50 to-rose-50 dark:from-neutral-700 dark:to-neutral-600 border-b dark:border-neutral-600">
            <h3 className="font-semibold text-neutral-800 dark:text-white flex items-center gap-2">
              <Calendar className="w-5 h-5 text-pink-500" />
              Appointment Time
            </h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onEditStep(2)}
              className="text-pink-600 hover:text-pink-700 hover:bg-pink-100 dark:hover:bg-neutral-600"
            >
              <Edit2 className="w-4 h-4 mr-1" />
              Edit
            </Button>
          </div>
          <div className="p-4 space-y-3">
            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-pink-500 mt-0.5" />
              <div>
                <div className="text-sm text-neutral-500 dark:text-neutral-400">
                  Date
                </div>
                <div className="font-medium text-neutral-800 dark:text-white">
                  {selectedDate?.toLocaleDateString('en-US', {
                    weekday: 'long',
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-pink-500 mt-0.5" />
              <div>
                <div className="text-sm text-neutral-500 dark:text-neutral-400">
                  Time
                </div>
                <div className="font-medium text-neutral-800 dark:text-white">
                  {selectedTime}
                  {estimatedEndTime && (
                    <span className="text-neutral-500 dark:text-neutral-400">
                      {' '}
                      - {estimatedEndTime}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Info Section */}
        <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-lg overflow-hidden">
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-pink-50 to-rose-50 dark:from-neutral-700 dark:to-neutral-600 border-b dark:border-neutral-600">
            <h3 className="font-semibold text-neutral-800 dark:text-white flex items-center gap-2">
              <User className="w-5 h-5 text-pink-500" />
              Your Information
            </h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onEditStep(3)}
              className="text-pink-600 hover:text-pink-700 hover:bg-pink-100 dark:hover:bg-neutral-600"
            >
              <Edit2 className="w-4 h-4 mr-1" />
              Edit
            </Button>
          </div>
          <div className="p-4 space-y-3">
            <div className="flex items-start gap-3">
              <User className="w-5 h-5 text-pink-500 mt-0.5" />
              <div>
                <div className="text-sm text-neutral-500 dark:text-neutral-400">Name</div>
                <div className="font-medium text-neutral-800 dark:text-white">
                  {customerInfo?.fullName}
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-pink-500 mt-0.5" />
              <div>
                <div className="text-sm text-neutral-500 dark:text-neutral-400">Email</div>
                <div className="font-medium text-neutral-800 dark:text-white">
                  {customerInfo?.email}
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-pink-500 mt-0.5" />
              <div>
                <div className="text-sm text-neutral-500 dark:text-neutral-400">Phone</div>
                <div className="font-medium text-neutral-800 dark:text-white">
                  {customerInfo?.phone && formatPhoneNumber(customerInfo.phone)}
                </div>
              </div>
            </div>
            {customerInfo?.specialRequests && (
              <div className="flex items-start gap-3">
                <MessageSquare className="w-5 h-5 text-pink-500 mt-0.5" />
                <div>
                  <div className="text-sm text-neutral-500 dark:text-neutral-400">
                    Special Requests
                  </div>
                  <div className="font-medium text-neutral-800 dark:text-white">
                    {customerInfo.specialRequests}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-pink-50 dark:bg-neutral-700 border border-pink-200 dark:border-neutral-600 rounded-lg p-4">
          <h4 className="font-semibold text-neutral-800 dark:text-white mb-2">
            📝 Please Note
          </h4>
          <ul className="text-sm text-neutral-600 dark:text-neutral-300 space-y-1">
            <li>• We'll contact you within 24 hours to confirm your appointment</li>
            <li>• Please arrive 5-10 minutes before your scheduled time</li>
            <li>• Cancellations should be made at least 24 hours in advance</li>
          </ul>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-8 flex gap-4">
        <Button variant="outline" onClick={onBack} size="lg" className="flex-1" disabled={isSubmitting}>
          Back
        </Button>
        <Button
          onClick={onConfirm}
          disabled={isSubmitting}
          size="lg"
          className={cn(
            "flex-1 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white"
          )}
        >
          {isSubmitting ? 'Processing...' : 'Confirm Booking'}
        </Button>
      </div>
    </div>
  );
}
