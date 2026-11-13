import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Calendar, Check } from 'lucide-react';
import LuxuryImage from '@/components/ui/LuxuryImage';
import {
  RevealOnScroll,
  ImageMaskReveal,
} from '@/components/ui/MotionPrimitives';
import { JOURNAL_ARTICLES } from '@/lib/elora-data';

export async function generateStaticParams() {
  return JOURNAL_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = JOURNAL_ARTICLES.find((a) => a.slug === slug);
  if (!article) return { title: 'Article Not Found' };
  return {
    title: `${article.title} — The ÉLORA Journal`,
    description: article.excerpt,
  };
}

export default async function JournalArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = JOURNAL_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = JOURNAL_ARTICLES.filter((a) => a.id !== article.id).slice(0, 2);

  return (
    <div className="bg-[#F3EDE4] text-[#171512]">
      {/* Editorial Header */}
      <section className="bg-[#171512] text-[#F3EDE4] pt-36 pb-20 lg:pt-44 lg:pb-24 border-b border-[#C7A77B]/30">
        <RevealOnScroll className="max-w-4xl mx-auto px-5 sm:px-8 space-y-6">
          <Link
            href="/journal"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C7A77B] hover:text-[#F3EDE4] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to The ÉLORA Journal</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-[#C7A77B]">
            <span>{article.category}</span>
            <span aria-hidden="true">·</span>
            <span>{article.publishedDate}</span>
            <span aria-hidden="true">·</span>
            <span>{article.readingTime}</span>
          </div>

          <h1
            className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-[#F3EDE4] leading-[1.08]"
            style={{ textWrap: 'balance' }}
          >
            {article.title}
          </h1>

          <p className="font-serif-editorial text-xl sm:text-2xl italic text-[#F3EDE4]/85">
            {article.subtitle}
          </p>

          <div className="pt-4 border-t border-[#F3EDE4]/15 flex items-center justify-between text-xs text-[#F3EDE4]/75">
            <span>
              Written by <strong className="text-[#F3EDE4]">{article.author}</strong> (
              {article.authorRole})
            </span>
          </div>
        </RevealOnScroll>
      </section>

      {/* Article Body */}
      <article className="py-16 lg:py-24 px-5 sm:px-8 max-w-4xl mx-auto space-y-12">
        <ImageMaskReveal className="relative h-[360px] sm:h-[480px] w-full border border-[#171512]/15">
          <LuxuryImage
            src={article.coverImage}
            alt={article.title}
            priority
            sizes="(max-width: 1024px) 100vw, 900px"
            className="object-cover"
          />
        </ImageMaskReveal>

        <RevealOnScroll>
          <blockquote className="p-8 sm:p-10 bg-[#171512] text-[#F3EDE4] border border-[#C7A77B]/35">
            <p className="font-serif-editorial text-2xl sm:text-3xl italic leading-snug text-[#F3EDE4]">
              “{article.pullQuote}”
            </p>
          </blockquote>
        </RevealOnScroll>

        <div className="space-y-10">
          {article.sections.map((sec, idx) => (
            <RevealOnScroll key={idx} className="space-y-4">
              <h2 className="font-serif-editorial text-3xl text-[#171512]">{sec.heading}</h2>
              {sec.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-base text-[#171512]/85 leading-relaxed">
                  {p}
                </p>
              ))}
            </RevealOnScroll>
          ))}
        </div>

        {/* Key Takeaways */}
        <RevealOnScroll className="p-8 border border-[#171512]/20 bg-[#171512]/[0.03] space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-[#C7A77B] font-medium">
            Atelier Key Takeaways
          </p>
          <ul className="space-y-3">
            {article.keyTakeaways.map((takeaway, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-[#171512]/85">
                <Check className="w-4 h-4 text-[#C7A77B] shrink-0 mt-0.5" />
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </RevealOnScroll>

        {/* Book CTA */}
        <RevealOnScroll className="p-8 bg-[#171512] text-[#F3EDE4] border border-[#C7A77B]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[#C7A77B]">
              Experience It in Person
            </p>
            <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#F3EDE4] mt-1">
              Reserve a private consultation with {article.author}.
            </h3>
          </div>
          <Link
            href="/book"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#C7A77B] text-[#171512] text-xs uppercase tracking-[0.18em] font-medium hover:bg-[#F3EDE4] transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap shrink-0"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Appointment</span>
          </Link>
        </RevealOnScroll>

        {/* Related Articles */}
        <RevealOnScroll className="pt-12 border-t border-[#171512]/15 space-y-8">
          <h2 className="font-serif-editorial text-3xl text-[#171512]">
            Continue Reading The ÉLORA Edit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedArticles.map((rel) => (
              <Link
                key={rel.id}
                href={`/journal/${rel.slug}`}
                className="group border border-[#171512]/15 p-6 bg-[#F3EDE4] hover:border-[#C7A77B] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.16em] text-[#C7A77B]">
                    {rel.category} · {rel.readingTime}
                  </p>
                  <h3 className="font-serif-editorial text-2xl text-[#171512] group-hover:text-[#C7A77B] transition-colors">
                    {rel.title}
                  </h3>
                  <p className="text-xs text-[#171512]/75 line-clamp-2">{rel.excerpt}</p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.16em] font-medium text-[#171512]">
                  <span>Read Essay</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </RevealOnScroll>
      </article>
    </div>
  );
}
