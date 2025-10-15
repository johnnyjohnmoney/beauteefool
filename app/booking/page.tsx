"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { BookingStepper } from "@/components/booking/booking-stepper";
import { ServiceSelection } from "@/components/booking/service-selection";
import { DateTimePicker } from "@/components/booking/datetime-picker";
import { CustomerForm } from "@/components/booking/customer-form";
import { BookingSummary } from "@/components/booking/booking-summary";
import { BookingStep, BookingData, CustomerInfo, Service } from "@/types/booking";
import { getServicesByIds, calculateTotalPrice, calculateTotalDuration } from "@/lib/booking-data";
import { motion, AnimatePresence } from "framer-motion";

const BOOKING_STORAGE_KEY = 'beauteefool-booking-draft';

export default function BookingPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<BookingStep>(1);
  const [completedSteps, setCompletedSteps] = useState<Set<BookingStep>>(new Set());
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Booking state
  const [selectedServiceIds, setSelectedServiceIds] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo | null>(null);

  // Load saved booking from local storage
  useEffect(() => {
    const saved = localStorage.getItem(BOOKING_STORAGE_KEY);
    if (saved) {
      try {
        const data = JSON.parse(saved);
        if (data.selectedServiceIds) setSelectedServiceIds(data.selectedServiceIds);
        if (data.selectedDate) setSelectedDate(new Date(data.selectedDate));
        if (data.selectedTime) setSelectedTime(data.selectedTime);
        if (data.customerInfo) setCustomerInfo(data.customerInfo);
        if (data.currentStep) setCurrentStep(data.currentStep);
        if (data.completedSteps) setCompletedSteps(new Set(data.completedSteps));
      } catch (error) {
        console.error('Failed to load booking draft:', error);
      }
    }
  }, []);

  // Auto-save booking to local storage
  useEffect(() => {
    const bookingDraft = {
      selectedServiceIds,
      selectedDate: selectedDate?.toISOString(),
      selectedTime,
      customerInfo,
      currentStep,
      completedSteps: Array.from(completedSteps),
    };
    localStorage.setItem(BOOKING_STORAGE_KEY, JSON.stringify(bookingDraft));
  }, [selectedServiceIds, selectedDate, selectedTime, customerInfo, currentStep, completedSteps]);

  // Calculate totals
  const totalPrice = calculateTotalPrice(selectedServiceIds);
  const totalDuration = calculateTotalDuration(selectedServiceIds);
  const services = getServicesByIds(selectedServiceIds);

  // Build booking data
  const bookingData: BookingData = {
    selectedServices: services,
    selectedDate,
    selectedTime,
    customerInfo,
    totalPrice,
    totalDuration,
  };

  // Service toggle handler
  const handleServiceToggle = (serviceId: string) => {
    setSelectedServiceIds((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  // Navigation handlers
  const handleNext = () => {
    setCompletedSteps((prev) => new Set(prev).add(currentStep));
    setCurrentStep((prev) => Math.min(4, prev + 1) as BookingStep);
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(1, prev - 1) as BookingStep);
  };

  const handleStepClick = (step: BookingStep) => {
    if (completedSteps.has(step) || step < currentStep) {
      setCurrentStep(step);
    }
  };

  // Handle booking confirmation
  const handleConfirm = async () => {
    setIsSubmitting(true);

    // Simulate API call (replace with actual API in Phase 2)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Generate confirmation number
    const confirmationNumber = `BF-${Date.now()}-${Math.random().toString(36).substring(2, 9).toUpperCase()}`;

    // Store booking confirmation
    const confirmation = {
      confirmationNumber,
      bookingData,
      createdAt: new Date().toISOString(),
      status: 'pending',
    };

    localStorage.setItem('booking-confirmation', JSON.stringify(confirmation));

    // Clear draft
    localStorage.removeItem(BOOKING_STORAGE_KEY);

    // Log booking (MVP - replace with API call)
    console.log('Booking submitted:', confirmation);

    // Redirect to confirmation page
    router.push(`/booking/confirmation?id=${confirmationNumber}`);
  };

  // Step components
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <ServiceSelection
            selectedServiceIds={selectedServiceIds}
            onServiceToggle={handleServiceToggle}
            onNext={handleNext}
          />
        );
      case 2:
        return (
          <DateTimePicker
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            serviceDuration={totalDuration}
            onDateSelect={(date) => setSelectedDate(date || null)}
            onTimeSelect={setSelectedTime}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 3:
        return (
          <CustomerForm
            customerInfo={customerInfo}
            onCustomerInfoChange={setCustomerInfo}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 4:
        return (
          <BookingSummary
            bookingData={bookingData}
            onEditStep={(step) => setCurrentStep(step as BookingStep)}
            onConfirm={handleConfirm}
            onBack={handleBack}
            isSubmitting={isSubmitting}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 pt-20 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Stepper */}
        <BookingStepper
          currentStep={currentStep}
          completedSteps={completedSteps}
          onStepClick={handleStepClick}
        />

        {/* Step Content with Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
