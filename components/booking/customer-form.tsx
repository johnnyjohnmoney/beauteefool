"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { CustomerInfo } from "@/types/booking";
import { validateCustomerInfo, formatPhoneNumber } from "@/lib/booking-validation";
import { AlertCircle } from "lucide-react";

interface CustomerFormProps {
  customerInfo: CustomerInfo | null;
  onCustomerInfoChange: (info: CustomerInfo) => void;
  onNext: () => void;
  onBack: () => void;
}

export function CustomerForm({
  customerInfo,
  onCustomerInfoChange,
  onNext,
  onBack,
}: CustomerFormProps) {
  const [formData, setFormData] = useState<CustomerInfo>(
    customerInfo || {
      fullName: '',
      email: '',
      phone: '',
      specialRequests: '',
    }
  );

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleChange = (field: keyof CustomerInfo, value: string) => {
    const newData = { ...formData, [field]: value };
    setFormData(newData);
    onCustomerInfoChange(newData);

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  const handleBlur = (field: keyof CustomerInfo) => {
    setTouched({ ...touched, [field]: true });
    validateField(field);
  };

  const validateField = (field: keyof CustomerInfo) => {
    const result = validateCustomerInfo(formData);
    
    if (!result.success) {
      const fieldError = result.error.errors.find((err) => err.path[0] === field);
      if (fieldError) {
        setErrors({ ...errors, [field]: fieldError.message });
        return false;
      }
    }
    
    setErrors({ ...errors, [field]: '' });
    return true;
  };

  const handleSubmit = () => {
    // Validate all fields
    const result = validateCustomerInfo(formData);
    
    if (!result.success) {
      const newErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as string;
        newErrors[field] = err.message;
      });
      setErrors(newErrors);
      setTouched({
        fullName: true,
        email: true,
        phone: true,
        specialRequests: true,
      });
      return;
    }

    onNext();
  };

  const isValid = Object.values(errors).every((error) => !error) &&
    formData.fullName &&
    formData.email &&
    formData.phone;

  return (
    <div className="max-w-2xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-white mb-2">
          Your Information
        </h2>
        <p className="text-neutral-600 dark:text-neutral-300">
          We'll use this to confirm your appointment
        </p>
      </div>

      {/* Form */}
      <div className="space-y-6 bg-white dark:bg-neutral-800 p-6 md:p-8 rounded-lg shadow-lg">
        {/* Full Name */}
        <div>
          <Label htmlFor="fullName" className="text-neutral-700 dark:text-neutral-300">
            Full Name <span className="text-pink-500">*</span>
          </Label>
          <Input
            id="fullName"
            type="text"
            value={formData.fullName}
            onChange={(e) => handleChange('fullName', e.target.value)}
            onBlur={() => handleBlur('fullName')}
            placeholder="John Doe"
            className={cn(
              "mt-1",
              touched.fullName && errors.fullName && "border-red-500 focus-visible:ring-red-500"
            )}
          />
          {touched.fullName && errors.fullName && (
            <div className="flex items-center gap-1 mt-1 text-red-500 text-sm">
              <AlertCircle className="w-4 h-4" />
              {errors.fullName}
            </div>
          )}
        </div>

        {/* Email */}
        <div>
          <Label htmlFor="email" className="text-neutral-700 dark:text-neutral-300">
            Email Address <span className="text-pink-500">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            onBlur={() => handleBlur('email')}
            placeholder="john@example.com"
            className={cn(
              "mt-1",
              touched.email && errors.email && "border-red-500 focus-visible:ring-red-500"
            )}
          />
          {touched.email && errors.email && (
            <div className="flex items-center gap-1 mt-1 text-red-500 text-sm">
              <AlertCircle className="w-4 h-4" />
              {errors.email}
            </div>
          )}
        </div>

        {/* Phone */}
        <div>
          <Label htmlFor="phone" className="text-neutral-700 dark:text-neutral-300">
            Phone Number <span className="text-pink-500">*</span>
          </Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            onBlur={() => handleBlur('phone')}
            placeholder="(555) 123-4567"
            className={cn(
              "mt-1",
              touched.phone && errors.phone && "border-red-500 focus-visible:ring-red-500"
            )}
          />
          {touched.phone && errors.phone && (
            <div className="flex items-center gap-1 mt-1 text-red-500 text-sm">
              <AlertCircle className="w-4 h-4" />
              {errors.phone}
            </div>
          )}
          {formData.phone && !errors.phone && (
            <div className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
              {formatPhoneNumber(formData.phone)}
            </div>
          )}
        </div>

        {/* Special Requests */}
        <div>
          <Label htmlFor="specialRequests" className="text-neutral-700 dark:text-neutral-300">
            Special Requests <span className="text-neutral-500 text-sm">(Optional)</span>
          </Label>
          <Textarea
            id="specialRequests"
            value={formData.specialRequests || ''}
            onChange={(e) => handleChange('specialRequests', e.target.value)}
            onBlur={() => handleBlur('specialRequests')}
            placeholder="Any allergies, preferences, or special requests?"
            rows={4}
            maxLength={500}
            className={cn(
              "mt-1 resize-none",
              touched.specialRequests && errors.specialRequests && "border-red-500 focus-visible:ring-red-500"
            )}
          />
          <div className="mt-1 text-right text-sm text-neutral-500 dark:text-neutral-400">
            {formData.specialRequests?.length || 0}/500
          </div>
          {touched.specialRequests && errors.specialRequests && (
            <div className="flex items-center gap-1 mt-1 text-red-500 text-sm">
              <AlertCircle className="w-4 h-4" />
              {errors.specialRequests}
            </div>
          )}
        </div>

        {/* Required Fields Note */}
        <div className="text-sm text-neutral-500 dark:text-neutral-400 pt-2 border-t dark:border-neutral-700">
          <span className="text-pink-500">*</span> Required fields
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-8 flex gap-4">
        <Button variant="outline" onClick={onBack} size="lg" className="flex-1">
          Back
        </Button>
        <Button
          onClick={handleSubmit}
          disabled={!isValid}
          size="lg"
          className={cn(
            "flex-1",
            isValid &&
              "bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white"
          )}
        >
          Next: Review Booking
        </Button>
      </div>
    </div>
  );
}
