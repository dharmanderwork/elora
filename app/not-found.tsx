import Link from 'next/link';
import { ArrowLeft, Calendar, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="min-h-[82vh] bg-[#171512] text-[#F3EDE4] flex items-center justify-center px-5 py-32">
      <div className="max-w-xl mx-auto text-center space-y-6 border border-[#C7A77B]/30 p-10 sm:p-14 bg-[#171512]">
        <p className="text-xs uppercase tracking-[0.25em] text-[#C7A77B]">
          404 · Suite Not Found
        </p>
        <h1 className="font-serif-editorial text-4xl sm:text-5xl font-normal tracking-wide text-[#F3EDE4]">
          This sanctuary suite does not exist.
        </h1>
        <p className="text-sm text-[#F3EDE4]/75 leading-relaxed">
          The page or ritual you are looking for may have moved within our digital atelier. Allow our concierge to guide you back to our signature experiences.
        </p>
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#C7A77B] text-[#171512] text-xs uppercase tracking-[0.18em] font-medium hover:bg-[#F3EDE4] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Home</span>
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#C7A77B]/50 text-[#F3EDE4] text-xs uppercase tracking-[0.18em] hover:border-[#C7A77B] hover:text-[#C7A77B] transition-colors"
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Explore Services</span>
          </Link>
          <Link
            href="/book"
            className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#F3EDE4]/25 text-[#F3EDE4] text-xs uppercase tracking-[0.18em] hover:border-[#C7A77B] hover:text-[#C7A77B] transition-colors"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Appointment</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
