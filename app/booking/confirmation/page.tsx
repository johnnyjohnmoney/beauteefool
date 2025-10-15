"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { BookingConfirmation } from "@/types/booking";
import { formatDuration, calculateEndTime } from "@/lib/booking-data";
import { formatPhoneNumber } from "@/lib/booking-validation";
import { CheckCircle, Calendar, Clock, User, Mail, Phone, Home, RotateCcw, Printer } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ConfirmationPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const confirmationId = searchParams.get('id');
  
  const [confirmation, setConfirmation] = useState<BookingConfirmation | null>(null);

  useEffect(() => {
    // Load confirmation from local storage
    const saved = localStorage.getItem('booking-confirmation');
    if (saved) {
      try {
        const data = JSON.parse(saved);
        // Convert date string back to Date object
        if (data.bookingData?.selectedDate) {
          data.bookingData.selectedDate = new Date(data.bookingData.selectedDate);
        }
        setConfirmation(data);
      } catch (error) {
        console.error('Failed to load confirmation:', error);
      }
    }

    // If no confirmation found, redirect to booking page
    if (!saved && !confirmationId) {
      router.push('/booking');
    }
  }, [confirmationId, router]);

  const handlePrint = () => {
    window.print();
  };

  const handleNewBooking = () => {
    localStorage.removeItem('booking-confirmation');
    router.push('/booking');
  };

  if (!confirmation) {
    return (
      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center p-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500 mx-auto mb-4" />
          <p className="text-neutral-600 dark:text-neutral-400">Loading confirmation...</p>
        </div>
      </div>
    );
  }

  const { bookingData } = confirmation;
  const estimatedEndTime = bookingData.selectedTime
    ? calculateEndTime(bookingData.selectedTime, bookingData.totalDuration)
    : null;

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 pt-20 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Success Animation */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="w-24 h-24 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center shadow-2xl">
            <CheckCircle className="w-16 h-16 text-white" />
          </div>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-white mb-4">
            Booking Request Received!
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-2">
            Thank you for choosing Beauteefool
          </p>
          <p className="text-neutral-500 dark:text-neutral-400">
            We'll contact you within 24 hours to confirm your appointment
          </p>
        </motion.div>

        {/* Confirmation Number */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-neutral-800 dark:to-neutral-700 border-2 border-pink-200 dark:border-neutral-600 rounded-lg p-6 mb-8 text-center"
        >
          <div className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">
            Confirmation Number
          </div>
          <div className="text-2xl md:text-3xl font-bold text-pink-600 dark:text-pink-400 font-mono tracking-wider">
            {confirmation.confirmationNumber}
          </div>
          <div className="text-xs text-neutral-500 dark:text-neutral-500 mt-2">
            Please save this number for your records
          </div>
        </motion.div>

        {/* Booking Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-6 md:p-8 mb-8 space-y-6"
        >
          <h2 className="text-2xl font-semibold text-neutral-800 dark:text-white mb-4">
            Appointment Details
          </h2>

          {/* Date & Time */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-pink-100 dark:bg-neutral-700 flex items-center justify-center flex-shrink-0">
                <Calendar className="w-5 h-5 text-pink-600 dark:text-pink-400" />
              </div>
              <div>
                <div className="text-sm text-neutral-500 dark:text-neutral-400">Date</div>
                <div className="font-semibold text-neutral-800 dark:text-white">
                  {bookingData.selectedDate?.toLocaleDateString('en-US', {
                    weekday: 'long',
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-pink-100 dark:bg-neutral-700 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-pink-600 dark:text-pink-400" />
              </div>
              <div>
                <div className="text-sm text-neutral-500 dark:text-neutral-400">Time</div>
                <div className="font-semibold text-neutral-800 dark:text-white">
                  {bookingData.selectedTime}
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

          {/* Services */}
          <div>
            <h3 className="font-semibold text-neutral-800 dark:text-white mb-3">
              Services Booked
            </h3>
            <div className="space-y-2">
              {bookingData.selectedServices.map((service) => (
                <div
                  key={service.id}
                  className="flex justify-between items-center p-3 bg-neutral-50 dark:bg-neutral-700 rounded-lg"
                >
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
              <div className="flex justify-between items-center p-3 bg-gradient-to-r from-pink-50 to-rose-50 dark:from-neutral-600 dark:to-neutral-600 rounded-lg border-2 border-pink-200 dark:border-neutral-500">
                <div className="font-semibold text-neutral-800 dark:text-white">Total</div>
                <div className="text-xl font-bold text-pink-600 dark:text-pink-400">
                  ${bookingData.totalPrice}
                </div>
              </div>
            </div>
          </div>

          {/* Customer Info */}
          <div>
            <h3 className="font-semibold text-neutral-800 dark:text-white mb-3">
              Contact Information
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-start gap-3">
                <User className="w-5 h-5 text-pink-500 mt-0.5" />
                <div>
                  <div className="text-sm text-neutral-500 dark:text-neutral-400">Name</div>
                  <div className="font-medium text-neutral-800 dark:text-white">
                    {bookingData.customerInfo?.fullName}
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-pink-500 mt-0.5" />
                <div>
                  <div className="text-sm text-neutral-500 dark:text-neutral-400">Email</div>
                  <div className="font-medium text-neutral-800 dark:text-white break-all">
                    {bookingData.customerInfo?.email}
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-pink-500 mt-0.5" />
                <div>
                  <div className="text-sm text-neutral-500 dark:text-neutral-400">Phone</div>
                  <div className="font-medium text-neutral-800 dark:text-white">
                    {bookingData.customerInfo?.phone && formatPhoneNumber(bookingData.customerInfo.phone)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid md:grid-cols-3 gap-4 mb-8"
        >
          <Button
            variant="outline"
            size="lg"
            onClick={handlePrint}
            className="w-full"
          >
            <Printer className="w-5 h-5 mr-2" />
            Print Confirmation
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={handleNewBooking}
            className="w-full"
          >
            <RotateCcw className="w-5 h-5 mr-2" />
            Book Another
          </Button>
          <Link href="/" className="w-full">
            <Button
              size="lg"
              className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white"
            >
              <Home className="w-5 h-5 mr-2" />
              Return Home
            </Button>
          </Link>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center text-neutral-600 dark:text-neutral-400 text-sm"
        >
          <p className="mb-2">
            Questions about your booking? Contact us at{' '}
            <a href="tel:555-123-4567" className="text-pink-600 hover:text-pink-700 font-medium">
              (555) 123-4567
            </a>
          </p>
          <p>
            or email{' '}
            <a href="mailto:hello@beauteefool.com" className="text-pink-600 hover:text-pink-700 font-medium">
              hello@beauteefool.com
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
