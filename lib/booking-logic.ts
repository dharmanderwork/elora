import {
  SERVICES_DATA,
  SPECIALISTS_DATA,
  AVAILABLE_TIME_SLOTS,
  type ServiceCategory,
  type ServiceItem,
  type Specialist,
} from './elora-data';

export interface CustomerInfo {
  fullName: string;
  phone: string;
  email: string;
  notes: string;
}

export interface BookingState {
  step: number;
  category: ServiceCategory | null;
  serviceId: string | null;
  specialistId: string | 'any' | null;
  date: string;
  timeSlot: string;
  customer: CustomerInfo;
}

export interface ValidationResult {
  valid: boolean;
  errors: Partial<Record<keyof CustomerInfo | 'step', string>>;
}

export function getServicesByCategory(category: ServiceCategory | 'All'): ServiceItem[] {
  if (category === 'All') return SERVICES_DATA;
  return SERVICES_DATA.filter((s) => s.category === category);
}

export function getSpecialistsForCategory(category: ServiceCategory | null): Specialist[] {
  if (!category) return SPECIALISTS_DATA;
  return SPECIALISTS_DATA.filter((sp) => sp.specialtyCategory === category);
}

export function validateCustomerInfo(customer: CustomerInfo): ValidationResult {
  const errors: Partial<Record<keyof CustomerInfo, string>> = {};

  const trimmedName = customer.fullName.trim();
  if (!trimmedName || trimmedName.length < 2) {
    errors.fullName = 'Please enter your full name (at least 2 characters).';
  }

  const trimmedPhone = customer.phone.trim();
  const digitsOnly = trimmedPhone.replace(/\D/g, '');
  if (!trimmedPhone || digitsOnly.length < 7) {
    errors.phone = 'Please enter a valid phone number (at least 7 digits).';
  }

  const trimmedEmail = customer.email.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
    errors.email = 'Please enter a valid email address for your demo itinerary.';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export function canProceedFromStep(state: BookingState): { allowed: boolean; message?: string } {
  switch (state.step) {
    case 1:
      return state.category
        ? { allowed: true }
        : { allowed: false, message: 'Please select a service category to continue.' };
    case 2:
      return state.serviceId
        ? { allowed: true }
        : { allowed: false, message: 'Please choose a ritual or treatment.' };
    case 3:
      return state.specialistId
        ? { allowed: true }
        : { allowed: false, message: 'Please select a preferred specialist or Any Available Specialist.' };
    case 4:
      return state.date.trim().length > 0
        ? { allowed: true }
        : { allowed: false, message: 'Please select your preferred appointment date.' };
    case 5:
      return AVAILABLE_TIME_SLOTS.includes(state.timeSlot)
        ? { allowed: true }
        : { allowed: false, message: 'Please select an available time slot.' };
    case 6: {
      const res = validateCustomerInfo(state.customer);
      if (!res.valid) {
        const firstErr = Object.values(res.errors)[0] || 'Please complete your guest details.';
        return { allowed: false, message: firstErr };
      }
      return { allowed: true };
    }
    case 7:
      return { allowed: true };
    default:
      return { allowed: true };
  }
}

export function calculateBookingSummary(state: BookingState) {
  const service = SERVICES_DATA.find((s) => s.id === state.serviceId) || null;
  const specialist =
    state.specialistId === 'any'
      ? null
      : SPECIALISTS_DATA.find((sp) => sp.id === state.specialistId) || null;

  const estimatedPrice = service ? service.startingPrice : 0;
  const durationMinutes = service ? service.durationMinutes : 0;
  const referenceCode = state.serviceId
    ? `ELORA-DEMO-${state.serviceId.toUpperCase().replace(/[^A-Z0-9]/g, '')}-${(state.date || '2026').replace(/\D/g, '').slice(-4)}`
    : 'ELORA-DEMO-0000';

  return {
    service,
    specialist,
    specialistDisplay: specialist ? `${specialist.name} (${specialist.role})` : 'Any Available Master Specialist',
    estimatedPrice,
    durationMinutes,
    referenceCode,
  };
}
