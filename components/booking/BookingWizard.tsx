'use client';

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { AnimatePresence, motion } from 'motion/react';
import {
  Check,
  ChevronLeft,
  ChevronRight,
  Calendar as CalendarIcon,
  Clock,
  User,
  Sparkles,
  AlertCircle,
  Loader2,
  ShieldAlert,
} from 'lucide-react';
import {
  SERVICE_CATEGORIES,
  SERVICES_DATA,
  AVAILABLE_TIME_SLOTS,
  type ServiceCategory,
} from '@/lib/elora-data';
import {
  getServicesByCategory,
  getSpecialistsForCategory,
  validateCustomerInfo,
  canProceedFromStep,
  calculateBookingSummary,
  type BookingState,
} from '@/lib/booking-logic';

const STEP_LABELS = [
  { num: 1, label: 'Category' },
  { num: 2, label: 'Service' },
  { num: 3, label: 'Specialist' },
  { num: 4, label: 'Date' },
  { num: 5, label: 'Time' },
  { num: 6, label: 'Guest Info' },
  { num: 7, label: 'Review' },
  { num: 8, label: 'Confirmed' },
];

const UPCOMING_DEMO_DATES = [
  { value: '2026-11-17', dayName: 'Tue', label: 'Nov 17, 2026' },
  { value: '2026-11-18', dayName: 'Wed', label: 'Nov 18, 2026' },
  { value: '2026-11-19', dayName: 'Thu', label: 'Nov 19, 2026' },
  { value: '2026-11-20', dayName: 'Fri', label: 'Nov 20, 2026' },
  { value: '2026-11-21', dayName: 'Sat', label: 'Nov 21, 2026' },
  { value: '2026-11-22', dayName: 'Sun', label: 'Nov 22, 2026' },
];

export default function BookingWizard() {
  const searchParams = useSearchParams();

  const [state, setState] = useState<BookingState>(() => {
    const qService = searchParams.get('service');
    const qCategory = searchParams.get('category') as ServiceCategory | null;
    const qSpecialist = searchParams.get('specialist');

    if (qService) {
      const matched = SERVICES_DATA.find((s) => s.id === qService || s.slug === qService);
      if (matched) {
        return {
          step: qSpecialist ? 4 : 3,
          category: matched.category,
          serviceId: matched.id,
          specialistId: qSpecialist || null,
          date: '',
          timeSlot: '',
          customer: { fullName: '', phone: '', email: '', notes: '' },
        };
      }
    }

    if (qCategory && SERVICE_CATEGORIES.some((c) => c.id === qCategory)) {
      return {
        step: 2,
        category: qCategory,
        serviceId: null,
        specialistId: qSpecialist || null,
        date: '',
        timeSlot: '',
        customer: { fullName: '', phone: '', email: '', notes: '' },
      };
    }

    return {
      step: 1,
      category: null,
      serviceId: null,
      specialistId: qSpecialist || null,
      date: '',
      timeSlot: '',
      customer: {
        fullName: '',
        phone: '',
        email: '',
        notes: '',
      },
    };
  });

  const [errorMessage, setErrorMessage] = useState<string>('');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNextStep = () => {
    setErrorMessage('');
    setFieldErrors({});

    if (state.step === 6) {
      const validation = validateCustomerInfo(state.customer);
      if (!validation.valid) {
        setFieldErrors(validation.errors as Record<string, string>);
        setErrorMessage('Please review and complete the highlighted guest information fields.');
        return;
      }
    }

    const check = canProceedFromStep(state);
    if (!check.allowed) {
      setErrorMessage(check.message || 'Please complete this step before continuing.');
      return;
    }

    if (state.step < 7) {
      setState((prev) => ({ ...prev, step: prev.step + 1 }));
    }
  };

  const handlePrevStep = () => {
    setErrorMessage('');
    setFieldErrors({});
    if (state.step > 1 && state.step < 8) {
      setState((prev) => ({ ...prev, step: prev.step - 1 }));
    }
  };

  const handleConfirmDemoBooking = () => {
    setErrorMessage('');
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setState((prev) => ({ ...prev, step: 8 }));
    }, 650);
  };

  const handleReset = () => {
    setErrorMessage('');
    setFieldErrors({});
    setState({
      step: 1,
      category: null,
      serviceId: null,
      specialistId: null,
      date: '',
      timeSlot: '',
      customer: {
        fullName: '',
        phone: '',
        email: '',
        notes: '',
      },
    });
  };

  const categoryServices = state.category ? getServicesByCategory(state.category) : [];
  const categorySpecialists = getSpecialistsForCategory(state.category);
  const summary = calculateBookingSummary(state);

  return (
    <div className="space-y-10">
      {/* Progress Bar */}
      <div className="border border-[#171512]/15 bg-[#171512] text-[#F3EDE4] p-5 sm:p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs uppercase tracking-[0.2em] text-[#C7A77B] tabular-nums">
            Step 0{state.step} of 08 · {STEP_LABELS[state.step - 1]?.label}
          </span>
          <span className="text-[11px] uppercase tracking-[0.16em] text-[#F3EDE4]/65">
            Interactive Demo Booking
          </span>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
          {STEP_LABELS.map((item) => {
            const isCompleted = state.step > item.num;
            const isCurrent = state.step === item.num;
            return (
              <button
                key={item.num}
                type="button"
                disabled={item.num >= state.step || state.step === 8}
                onClick={() => {
                  if (item.num < state.step && state.step !== 8) {
                    setErrorMessage('');
                    setState((prev) => ({ ...prev, step: item.num }));
                  }
                }}
                className={`text-left p-2 border transition-colors ${
                  isCurrent
                    ? 'border-[#C7A77B] bg-[#C7A77B]/15 text-[#F3EDE4]'
                    : isCompleted
                    ? 'border-[#C7A77B]/40 bg-[#F3EDE4]/5 text-[#C7A77B] cursor-pointer hover:bg-[#C7A77B]/10'
                    : 'border-[#F3EDE4]/10 text-[#F3EDE4]/40 cursor-default'
                }`}
              >
                <span className="block text-[10px] font-mono tabular-nums">0{item.num}</span>
                <span className="block text-[11px] uppercase tracking-wider truncate mt-0.5">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Validation Error Banner */}
      {errorMessage && (
        <div
          role="alert"
          className="p-4 border border-[#171512] bg-[#171512] text-[#F3EDE4] flex items-center gap-3 text-xs"
        >
          <AlertCircle className="w-4 h-4 text-[#C7A77B] shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Main Wizard Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-8 border border-[#171512]/15 bg-[#F3EDE4] p-6 sm:p-10">
          <AnimatePresence mode="wait">
            {/* STEP 1: CHOOSE SERVICE CATEGORY */}
            {state.step === 1 && (
              <motion.div
                key="step-1"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#C7A77B] font-medium">
                    Step 01 · Select Discipline
                  </p>
                  <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[#171512] mt-1">
                    Choose a Service Category
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {SERVICE_CATEGORIES.map((cat) => {
                    const selected = state.category === cat.id;
                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => {
                          setErrorMessage('');
                          setState((prev) => ({
                            ...prev,
                            category: cat.id,
                            serviceId: prev.category === cat.id ? prev.serviceId : null,
                          }));
                        }}
                        className={`p-6 text-left border transition-all flex flex-col justify-between space-y-3 ${
                          selected
                            ? 'bg-[#171512] text-[#F3EDE4] border-[#171512]'
                            : 'bg-[#F3EDE4] text-[#171512] border-[#171512]/20 hover:border-[#C7A77B]'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-serif-editorial text-2xl">{cat.label}</span>
                          {selected && <Check className="w-4 h-4 text-[#C7A77B]" />}
                        </div>
                        <p
                          className={`text-xs leading-relaxed ${
                            selected ? 'text-[#F3EDE4]/75' : 'text-[#171512]/70'
                          }`}
                        >
                          {cat.tagline}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* STEP 2: SELECT A SERVICE */}
            {state.step === 2 && (
              <motion.div
                key="step-2"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#C7A77B] font-medium">
                    Step 02 · {state.category} Rituals
                  </p>
                  <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[#171512] mt-1">
                    Select Your Preferred Service
                  </h2>
                </div>

                <div className="space-y-3">
                  {categoryServices.map((srv) => {
                    const selected = state.serviceId === srv.id;
                    return (
                      <button
                        key={srv.id}
                        type="button"
                        onClick={() => {
                          setErrorMessage('');
                          setState((prev) => ({ ...prev, serviceId: srv.id }));
                        }}
                        className={`w-full p-5 text-left border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                          selected
                            ? 'bg-[#171512] text-[#F3EDE4] border-[#171512]'
                            : 'bg-[#F3EDE4] text-[#171512] border-[#171512]/20 hover:border-[#C7A77B]'
                        }`}
                      >
                        <div className="space-y-1 max-w-xl">
                          <div className="flex items-center gap-2.5">
                            <span className="font-serif-editorial text-2xl">{srv.name}</span>
                            {selected && <Check className="w-4 h-4 text-[#C7A77B]" />}
                          </div>
                          <p
                            className={`text-xs ${
                              selected ? 'text-[#F3EDE4]/75' : 'text-[#171512]/70'
                            }`}
                          >
                            {srv.shortDescription}
                          </p>
                        </div>

                        <div className="text-left sm:text-right shrink-0">
                          <span className="font-serif-editorial text-2xl text-[#C7A77B] tabular-nums block">
                            ${srv.startingPrice}
                          </span>
                          <span
                            className={`text-[11px] uppercase tracking-wider tabular-nums ${
                              selected ? 'text-[#F3EDE4]/70' : 'text-[#171512]/60'
                            }`}
                          >
                            {srv.durationLabel}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* STEP 3: CHOOSE PREFERRED SPECIALIST */}
            {state.step === 3 && (
              <motion.div
                key="step-3"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#C7A77B] font-medium">
                    Step 03 · Artisan Pairing
                  </p>
                  <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[#171512] mt-1">
                    Choose a Preferred Specialist
                  </h2>
                </div>

                <div className="space-y-4">
                  <button
                    type="button"
                    onClick={() => {
                      setErrorMessage('');
                      setState((prev) => ({ ...prev, specialistId: 'any' }));
                    }}
                    className={`w-full p-5 text-left border transition-all flex items-center justify-between ${
                      state.specialistId === 'any'
                        ? 'bg-[#171512] text-[#F3EDE4] border-[#171512]'
                        : 'bg-[#F3EDE4] text-[#171512] border-[#171512]/20 hover:border-[#C7A77B]'
                    }`}
                  >
                    <div>
                      <p className="font-serif-editorial text-2xl">Any Available Specialist</p>
                      <p
                        className={`text-xs mt-1 ${
                          state.specialistId === 'any'
                            ? 'text-[#F3EDE4]/75'
                            : 'text-[#171512]/70'
                        }`}
                      >
                        Our concierge will pair you with our first available master artisan for your selected time.
                      </p>
                    </div>
                    {state.specialistId === 'any' && (
                      <Check className="w-5 h-5 text-[#C7A77B] shrink-0" />
                    )}
                  </button>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {categorySpecialists.map((sp) => {
                      const selected = state.specialistId === sp.id;
                      return (
                        <button
                          key={sp.id}
                          type="button"
                          onClick={() => {
                            setErrorMessage('');
                            setState((prev) => ({ ...prev, specialistId: sp.id }));
                          }}
                          className={`p-5 text-left border transition-all flex flex-col justify-between space-y-3 ${
                            selected
                              ? 'bg-[#171512] text-[#F3EDE4] border-[#171512]'
                              : 'bg-[#F3EDE4] text-[#171512] border-[#171512]/20 hover:border-[#C7A77B]'
                          }`}
                        >
                          <div className="flex items-start justify-between">
                            <div>
                              <p className="font-serif-editorial text-2xl">{sp.name}</p>
                              <p className="text-xs text-[#C7A77B] uppercase tracking-wider mt-0.5">
                                {sp.role}
                              </p>
                            </div>
                            {selected && <Check className="w-4 h-4 text-[#C7A77B]" />}
                          </div>
                          <p
                            className={`text-xs ${
                              selected ? 'text-[#F3EDE4]/75' : 'text-[#171512]/70'
                            }`}
                          >
                            {sp.specialties.join(' · ')} ({sp.experienceYears} yrs exp)
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 4: SELECT APPOINTMENT DATE */}
            {state.step === 4 && (
              <motion.div
                key="step-4"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#C7A77B] font-medium">
                    Step 04 · Calendar Selection
                  </p>
                  <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[#171512] mt-1">
                    Select Appointment Date
                  </h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-[#171512]/70 mb-3">
                      Quick-Select Available Atelier Dates
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {UPCOMING_DEMO_DATES.map((d) => {
                        const selected = state.date === d.value;
                        return (
                          <button
                            key={d.value}
                            type="button"
                            onClick={() => {
                              setErrorMessage('');
                              setState((prev) => ({ ...prev, date: d.value }));
                            }}
                            className={`p-4 border text-left transition-colors ${
                              selected
                                ? 'bg-[#171512] text-[#F3EDE4] border-[#171512]'
                                : 'bg-[#F3EDE4] text-[#171512] border-[#171512]/20 hover:border-[#C7A77B]'
                            }`}
                          >
                            <span className="text-xs uppercase tracking-widest text-[#C7A77B] block">
                              {d.dayName}
                            </span>
                            <span className="font-serif-editorial text-xl tabular-nums mt-0.5 block">
                              {d.label}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#171512]/10">
                    <label
                      htmlFor="booking-custom-date"
                      className="block text-xs uppercase tracking-[0.16em] text-[#171512]/75 mb-2"
                    >
                      Or Choose Any Custom Date
                    </label>
                    <input
                      id="booking-custom-date"
                      type="date"
                      min="2026-11-14"
                      value={state.date}
                      onChange={(e) => {
                        setErrorMessage('');
                        setState((prev) => ({ ...prev, date: e.target.value }));
                      }}
                      className="w-full sm:w-72 px-4 py-3 border border-[#171512]/30 bg-[#F3EDE4] text-sm text-[#171512] focus:outline-none focus:border-[#C7A77B] tabular-nums"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 5: SELECT AVAILABLE TIME SLOT */}
            {state.step === 5 && (
              <motion.div
                key="step-5"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#C7A77B] font-medium">
                    Step 05 · Time Preference
                  </p>
                  <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[#171512] mt-1">
                    Select Available Time Slot
                  </h2>
                  <p className="text-xs text-[#171512]/70 mt-1">
                    Showing available studio suite times for{' '}
                    <span className="font-medium text-[#171512] tabular-nums">{state.date}</span>
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {AVAILABLE_TIME_SLOTS.map((slot) => {
                    const selected = state.timeSlot === slot;
                    return (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => {
                          setErrorMessage('');
                          setState((prev) => ({ ...prev, timeSlot: slot }));
                        }}
                        className={`py-4 px-4 border text-center transition-colors flex flex-col items-center justify-center gap-1 ${
                          selected
                            ? 'bg-[#171512] text-[#F3EDE4] border-[#171512]'
                            : 'bg-[#F3EDE4] text-[#171512] border-[#171512]/20 hover:border-[#C7A77B]'
                        }`}
                      >
                        <Clock className="w-4 h-4 text-[#C7A77B]" />
                        <span className="font-mono text-xs tracking-wider tabular-nums">
                          {slot}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* STEP 6: CUSTOMER INFORMATION */}
            {state.step === 6 && (
              <motion.div
                key="step-6"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#C7A77B] font-medium">
                    Step 06 · Guest Details
                  </p>
                  <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[#171512] mt-1">
                    Enter Your Contact Information
                  </h2>
                </div>

                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor="guest-full-name"
                      className="block text-xs uppercase tracking-[0.16em] text-[#171512] mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      id="guest-full-name"
                      type="text"
                      value={state.customer.fullName}
                      onChange={(e) =>
                        setState((prev) => ({
                          ...prev,
                          customer: { ...prev.customer, fullName: e.target.value },
                        }))
                      }
                      placeholder="e.g. Camille De la Fontaine"
                      className="w-full px-4 py-3.5 border border-[#171512]/30 bg-transparent text-sm text-[#171512] focus:outline-none focus:border-[#171512]"
                    />
                    {fieldErrors.fullName && (
                      <p className="text-xs text-[#171512] font-medium mt-1">
                        {fieldErrors.fullName}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="guest-phone"
                        className="block text-xs uppercase tracking-[0.16em] text-[#171512] mb-2"
                      >
                        Phone Number *
                      </label>
                      <input
                        id="guest-phone"
                        type="tel"
                        value={state.customer.phone}
                        onChange={(e) =>
                          setState((prev) => ({
                            ...prev,
                            customer: { ...prev.customer, phone: e.target.value },
                          }))
                        }
                        placeholder="+1 (212) 555-0148"
                        className="w-full px-4 py-3.5 border border-[#171512]/30 bg-transparent text-sm text-[#171512] focus:outline-none focus:border-[#171512]"
                      />
                      {fieldErrors.phone && (
                        <p className="text-xs text-[#171512] font-medium mt-1">
                          {fieldErrors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="guest-email"
                        className="block text-xs uppercase tracking-[0.16em] text-[#171512] mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        id="guest-email"
                        type="email"
                        value={state.customer.email}
                        onChange={(e) =>
                          setState((prev) => ({
                            ...prev,
                            customer: { ...prev.customer, email: e.target.value },
                          }))
                        }
                        placeholder="camille@example.com"
                        className="w-full px-4 py-3.5 border border-[#171512]/30 bg-transparent text-sm text-[#171512] focus:outline-none focus:border-[#171512]"
                      />
                      {fieldErrors.email && (
                        <p className="text-xs text-[#171512] font-medium mt-1">
                          {fieldErrors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="guest-notes"
                      className="block text-xs uppercase tracking-[0.16em] text-[#171512] mb-2"
                    >
                      Sensory Preferences or Notes (Optional)
                    </label>
                    <textarea
                      id="guest-notes"
                      rows={3}
                      value={state.customer.notes}
                      onChange={(e) =>
                        setState((prev) => ({
                          ...prev,
                          customer: { ...prev.customer, notes: e.target.value },
                        }))
                      }
                      placeholder="Let us know if you prefer fragrance-free oils, quiet suite ambiance, or bridal consultation details..."
                      className="w-full px-4 py-3 border border-[#171512]/30 bg-transparent text-sm text-[#171512] focus:outline-none focus:border-[#171512]"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 7: REVIEW BOOKING INFORMATION */}
            {state.step === 7 && (
              <motion.div
                key="step-7"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#C7A77B] font-medium">
                    Step 07 · Final Review
                  </p>
                  <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[#171512] mt-1">
                    Review Your Demonstration Reservation
                  </h2>
                </div>

                <div className="border border-[#171512]/20 p-6 space-y-4 bg-[#171512]/[0.02]">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-xs uppercase tracking-wider text-[#171512]/60 block">
                        Selected Ritual
                      </span>
                      <span className="font-serif-editorial text-2xl text-[#171512]">
                        {summary.service?.name}
                      </span>
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-[#171512]/60 block">
                        Specialist
                      </span>
                      <span className="font-medium text-[#171512]">{summary.specialistDisplay}</span>
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-[#171512]/60 block">
                        Date & Time
                      </span>
                      <span className="font-medium text-[#171512] tabular-nums">
                        {state.date} at {state.timeSlot}
                      </span>
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-[#171512]/60 block">
                        Estimated Investment (Demo)
                      </span>
                      <span className="font-serif-editorial text-2xl text-[#171512] tabular-nums">
                        ${summary.estimatedPrice} ({summary.durationMinutes} Min)
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#171512]/15 text-xs space-y-1 text-[#171512]/80">
                    <p>
                      <strong>Guest:</strong> {state.customer.fullName}
                    </p>
                    <p>
                      <strong>Contact:</strong> {state.customer.phone} · {state.customer.email}
                    </p>
                    {state.customer.notes && (
                      <p>
                        <strong>Preferences:</strong> {state.customer.notes}
                      </p>
                    )}
                  </div>
                </div>

                <div className="p-4 border border-[#C7A77B] bg-[#171512] text-[#F3EDE4] text-xs flex items-start gap-3">
                  <ShieldAlert className="w-4 h-4 text-[#C7A77B] shrink-0 mt-0.5" />
                  <p>
                    <strong>Interactive Demo Notice:</strong> Submitting this request demonstrates the complete ÉLORA booking experience. Because this is a live showcase site, no real salon appointment or payment charge is created.
                  </p>
                </div>
              </motion.div>
            )}

            {/* STEP 8: CONFIRMATION SCREEN */}
            {state.step === 8 && (
              <motion.div
                key="step-8"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="space-y-8 py-4"
              >
                <div className="p-8 bg-[#171512] text-[#F3EDE4] border border-[#C7A77B] space-y-6">
                  <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-[#C7A77B]">
                    <Sparkles className="w-4 h-4" />
                    <span>Demonstration Booking Complete</span>
                  </div>

                  <h2 className="font-serif-editorial text-4xl sm:text-5xl text-[#F3EDE4]">
                    Thank You, {state.customer.fullName}.
                  </h2>

                  <p className="text-sm text-[#F3EDE4]/80 leading-relaxed">
                    Your interactive demonstration itinerary has been generated below. In a production deployment connected to a salon CRM, an instant SMS and calendar invitation would now be dispatched to{' '}
                    <span className="text-[#C7A77B]">{state.customer.email}</span>.
                  </p>

                  <div className="p-5 border border-[#C7A77B]/40 bg-[#F3EDE4]/5 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="uppercase tracking-widest text-[#C7A77B] block">
                        Demo Reference Code
                      </span>
                      <span className="font-mono text-base text-[#F3EDE4] tabular-nums mt-0.5 block">
                        {summary.referenceCode}
                      </span>
                    </div>
                    <div>
                      <span className="uppercase tracking-widest text-[#C7A77B] block">
                        Reserved Ritual & Time
                      </span>
                      <span className="text-sm text-[#F3EDE4] mt-0.5 block">
                        {summary.service?.name} · {state.date} ({state.timeSlot})
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-6 py-3.5 bg-[#C7A77B] text-[#171512] text-xs uppercase tracking-[0.18em] font-medium hover:bg-[#F3EDE4] transition-colors"
                    >
                      Book Another Demo Ritual
                    </button>
                    <Link
                      href="/services"
                      className="px-6 py-3.5 border border-[#F3EDE4]/40 text-[#F3EDE4] text-xs uppercase tracking-[0.18em] hover:border-[#C7A77B] hover:text-[#C7A77B] transition-colors"
                    >
                      Explore More Services
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Controls (Steps 1 to 7) */}
          {state.step < 8 && (
            <div className="mt-10 pt-6 border-t border-[#171512]/15 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={handlePrevStep}
                disabled={state.step === 1 || isSubmitting}
                className={`inline-flex items-center gap-2 px-5 py-3 border text-xs uppercase tracking-[0.18em] transition-colors ${
                  state.step === 1
                    ? 'border-[#171512]/10 text-[#171512]/30 cursor-not-allowed'
                    : 'border-[#171512]/30 text-[#171512] hover:bg-[#171512] hover:text-[#F3EDE4]'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous Step</span>
              </button>

              {state.step < 7 ? (
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#171512] text-[#F3EDE4] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#C7A77B] hover:text-[#171512] transition-colors"
                >
                  <span>Continue</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleConfirmDemoBooking}
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#C7A77B] text-[#171512] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#171512] hover:text-[#F3EDE4] transition-colors"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Generating Demo Itinerary...</span>
                    </>
                  ) : (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Confirm Demo Appointment</span>
                    </>
                  )}
                </button>
              )}
            </div>
          )}
        </div>

        {/* Sticky Live Itinerary Sidebar */}
        <aside className="lg:col-span-4 border border-[#171512]/15 bg-[#171512] text-[#F3EDE4] p-7 space-y-6">
          <div className="border-b border-[#F3EDE4]/15 pb-4">
            <p className="text-xs uppercase tracking-[0.2em] text-[#C7A77B]">
              Your Ritual Summary
            </p>
            <h3 className="font-serif-editorial text-2xl mt-1 text-[#F3EDE4]">
              Maison ÉLORA Itinerary
            </h3>
          </div>

          <div className="space-y-4 text-xs">
            <div className="flex justify-between py-2 border-b border-[#F3EDE4]/10">
              <span className="text-[#F3EDE4]/60 uppercase tracking-wider">Category</span>
              <span className="text-[#F3EDE4] font-medium">{state.category || 'Not selected'}</span>
            </div>

            <div className="flex justify-between py-2 border-b border-[#F3EDE4]/10">
              <span className="text-[#F3EDE4]/60 uppercase tracking-wider">Ritual</span>
              <span className="text-[#F3EDE4] font-medium text-right max-w-[180px]">
                {summary.service?.name || 'Not selected'}
              </span>
            </div>

            <div className="flex justify-between py-2 border-b border-[#F3EDE4]/10">
              <span className="text-[#F3EDE4]/60 uppercase tracking-wider">Specialist</span>
              <span className="text-[#F3EDE4] font-medium text-right max-w-[180px]">
                {state.specialistId ? summary.specialistDisplay : 'Not selected'}
              </span>
            </div>

            <div className="flex justify-between py-2 border-b border-[#F3EDE4]/10">
              <span className="text-[#F3EDE4]/60 uppercase tracking-wider">Date & Time</span>
              <span className="text-[#F3EDE4] font-medium tabular-nums">
                {state.date ? `${state.date} ${state.timeSlot}` : 'Not selected'}
              </span>
            </div>

            <div className="flex justify-between items-baseline pt-2">
              <span className="text-[#C7A77B] uppercase tracking-[0.16em]">
                Estimated Investment
              </span>
              <span className="font-serif-editorial text-3xl text-[#C7A77B] tabular-nums">
                ${summary.estimatedPrice}
              </span>
            </div>
          </div>

          <div className="p-4 bg-[#F3EDE4]/5 border border-[#C7A77B]/30 text-[11px] text-[#F3EDE4]/75 leading-relaxed">
            <strong>Demo Environment:</strong> This 8-step reservation interface is a functional frontend showcase. No real appointment is booked with a physical salon.
          </div>
        </aside>
      </div>
    </div>
  );
}
