import test from 'node:test';
import assert from 'node:assert/strict';
import {
  getServicesByCategory,
  getSpecialistsForCategory,
  validateCustomerInfo,
  canProceedFromStep,
  calculateBookingSummary,
  type BookingState,
} from './booking-logic';

test('getServicesByCategory filters correctly by category and returns all for All', () => {
  const allServices = getServicesByCategory('All');
  assert.ok(allServices.length >= 20, 'Expected at least 20 luxury services across all categories');

  const hairServices = getServicesByCategory('Hair');
  assert.equal(hairServices.length, 6);
  assert.ok(hairServices.every((s) => s.category === 'Hair'));

  const skinServices = getServicesByCategory('Skin');
  assert.equal(skinServices.length, 5);
  assert.ok(skinServices.every((s) => s.category === 'Skin'));
});

test('getSpecialistsForCategory filters specialists matching the chosen category', () => {
  const hairSpecs = getSpecialistsForCategory('Hair');
  assert.ok(hairSpecs.length >= 2);
  assert.ok(hairSpecs.every((sp) => sp.specialtyCategory === 'Hair'));
});

test('validateCustomerInfo rejects empty or invalid inputs and accepts valid guest info', () => {
  const invalidResult = validateCustomerInfo({
    fullName: 'A',
    phone: '123',
    email: 'invalid-email',
    notes: '',
  });
  assert.equal(invalidResult.valid, false);
  assert.ok(invalidResult.errors.fullName);
  assert.ok(invalidResult.errors.phone);
  assert.ok(invalidResult.errors.email);

  const validResult = validateCustomerInfo({
    fullName: 'Claire Beaumont',
    phone: '+1 (212) 555-0148',
    email: 'claire.beaumont@example.com',
    notes: 'Prefer quiet acoustic suite',
  });
  assert.equal(validResult.valid, true);
  assert.deepEqual(validResult.errors, {});
});

test('canProceedFromStep enforces step-by-step requirements across steps 1 to 7', () => {
  const baseState: BookingState = {
    step: 1,
    category: null,
    serviceId: null,
    specialistId: null,
    date: '',
    timeSlot: '',
    customer: { fullName: '', phone: '', email: '', notes: '' },
  };

  assert.equal(canProceedFromStep(baseState).allowed, false);
  assert.equal(canProceedFromStep({ ...baseState, category: 'Skin' }).allowed, true);

  assert.equal(canProceedFromStep({ ...baseState, step: 2, category: 'Skin' }).allowed, false);
  assert.equal(
    canProceedFromStep({ ...baseState, step: 2, category: 'Skin', serviceId: 'skin-1' }).allowed,
    true
  );

  assert.equal(canProceedFromStep({ ...baseState, step: 5, timeSlot: 'Invalid' }).allowed, false);
  assert.equal(canProceedFromStep({ ...baseState, step: 5, timeSlot: '10:30 AM' }).allowed, true);
});

test('calculateBookingSummary computes accurate price, duration, and demo reference code', () => {
  const summary = calculateBookingSummary({
    step: 7,
    category: 'Skin',
    serviceId: 'skin-1',
    specialistId: 'spec-2',
    date: '2026-11-20',
    timeSlot: '10:30 AM',
    customer: {
      fullName: 'Claire Beaumont',
      phone: '2125550148',
      email: 'claire@example.com',
      notes: '',
    },
  });

  assert.equal(summary.estimatedPrice, 285);
  assert.equal(summary.durationMinutes, 90);
  assert.ok(summary.specialistDisplay.includes('Dr. Soraya Rostami'));
  assert.equal(summary.referenceCode, 'ELORA-DEMO-SKIN1-1120');
});
