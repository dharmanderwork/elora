'use client';

import React, { useState } from 'react';
import { Check, AlertCircle, Send, Loader2 } from 'lucide-react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Private Consultation Inquiry');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (name.trim().length < 2) {
      newErrors.name = 'Please enter your full name.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (message.trim().length < 10) {
      newErrors.message = 'Please share a brief message (at least 10 characters).';
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  if (submitted) {
    return (
      <div className="p-8 sm:p-10 bg-[#171512] text-[#F3EDE4] border border-[#C7A77B] space-y-5">
        <div className="flex items-center gap-2.5 text-xs uppercase tracking-[0.2em] text-[#C7A77B]">
          <Check className="w-4 h-4" />
          <span>Demonstration Inquiry Received</span>
        </div>
        <h3 className="font-serif-editorial text-3xl text-[#F3EDE4]">
          Thank You, {name}.
        </h3>
        <p className="text-sm text-[#F3EDE4]/80 leading-relaxed">
          Your message regarding <strong>{subject}</strong> has been recorded in this live demonstration interface. In a live salon environment, our Concierge Desk responds within 4 business hours.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setName('');
            setEmail('');
            setPhone('');
            setMessage('');
          }}
          className="px-6 py-3 bg-[#C7A77B] text-[#171512] text-xs uppercase tracking-[0.18em] font-medium hover:bg-[#F3EDE4] transition-colors"
        >
          Send Another Demo Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {Object.keys(errors).length > 0 && (
        <div
          role="alert"
          className="p-4 bg-[#171512] text-[#F3EDE4] border border-[#C7A77B] text-xs flex items-center gap-2.5"
        >
          <AlertCircle className="w-4 h-4 text-[#C7A77B] shrink-0" />
          <span>Please complete the required fields highlighted below.</span>
        </div>
      )}

      <div>
        <label
          htmlFor="contact-name"
          className="block text-xs uppercase tracking-[0.16em] text-[#171512] mb-2"
        >
          Full Name *
        </label>
        <input
          id="contact-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your full name"
          className="w-full px-4 py-3.5 border border-[#171512]/30 bg-transparent text-sm text-[#171512] focus:outline-none focus:border-[#171512]"
        />
        {errors.name && <p className="text-xs text-[#171512] font-medium mt-1">{errors.name}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="contact-email"
            className="block text-xs uppercase tracking-[0.16em] text-[#171512] mb-2"
          >
            Email Address *
          </label>
          <input
            id="contact-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full px-4 py-3.5 border border-[#171512]/30 bg-transparent text-sm text-[#171512] focus:outline-none focus:border-[#171512]"
          />
          {errors.email && (
            <p className="text-xs text-[#171512] font-medium mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="contact-phone"
            className="block text-xs uppercase tracking-[0.16em] text-[#171512] mb-2"
          >
            Phone Number (Optional)
          </label>
          <input
            id="contact-phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+1 (212) 555-0194"
            className="w-full px-4 py-3.5 border border-[#171512]/30 bg-transparent text-sm text-[#171512] focus:outline-none focus:border-[#171512]"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="contact-subject"
          className="block text-xs uppercase tracking-[0.16em] text-[#171512] mb-2"
        >
          Inquiry Topic
        </label>
        <select
          id="contact-subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full px-4 py-3.5 border border-[#171512]/30 bg-[#F3EDE4] text-sm text-[#171512] focus:outline-none focus:border-[#171512]"
        >
          <option value="Private Consultation Inquiry">Private Consultation Inquiry</option>
          <option value="Haute Couture Bridal Suite">Haute Couture Bridal Suite</option>
          <option value="Atelier Privé Membership">Atelier Privé Membership</option>
          <option value="Press & Editorial Collaboration">Press & Editorial Collaboration</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="block text-xs uppercase tracking-[0.16em] text-[#171512] mb-2"
        >
          Your Message *
        </label>
        <textarea
          id="contact-message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us about your desired beauty ritual, event date, or question..."
          className="w-full px-4 py-3 border border-[#171512]/30 bg-transparent text-sm text-[#171512] focus:outline-none focus:border-[#171512]"
        />
        {errors.message && (
          <p className="text-xs text-[#171512] font-medium mt-1">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#171512] text-[#F3EDE4] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#C7A77B] hover:text-[#171512] transition-colors"
      >
        {submitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Dispatching...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4 text-[#C7A77B]" />
            <span>Send Concierge Inquiry</span>
          </>
        )}
      </button>
    </form>
  );
}
