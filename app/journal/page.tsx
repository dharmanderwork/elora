import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';
import LuxuryImage from '@/components/ui/LuxuryImage';
import { JOURNAL_ARTICLES } from '@/lib/elora-data';

export const metadata: Metadata = {
  title: 'The ÉLORA Beauty Journal — Hair Care, Dermal Science & Bridal Inspiration',
  description:
    'Editorial essays and professional beauty advice from ÉLORA Beauty Atelier’s master stylists, dermal facialists, and bridal makeup directors.',
};

export default function JournalPage() {
  const featuredArticle = JOURNAL_ARTICLES.find((a) => a.featured) || JOURNAL_ARTICLES[0];
  const remainingArticles = JOURNAL_ARTICLES.filter((a) => a.id !== featuredArticle.id);

  return (
    <div className="bg-[#F3EDE4] text-[#171512]">
      {/* Page Hero */}
      <section className="bg-[#171512] text-[#F3EDE4] pt-36 pb-20 lg:pt-44 lg:pb-24 border-b border-[#C7A77B]/30">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 space-y-4">
          <p className="text-xs uppercase tracking-[0.26em] text-[#C7A77B]">
            The ÉLORA Edit · Editorial Dispatches
          </p>
          <h1
            className="font-serif-editorial text-5xl sm:text-6xl lg:text-7xl font-normal text-[#F3EDE4]"
            style={{ textWrap: 'balance' }}
          >
            The Beauty & Wellness Journal
          </h1>
          <p className="text-base sm:text-lg text-[#F3EDE4]/80 max-w-2xl leading-relaxed">
            In-depth guides on French balayage longevity, cellular facial sculpting, bridal skin preparation, and seasonal nail architecture written by our master artisans.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 lg:py-28 px-5 sm:px-8 max-w-[1360px] mx-auto space-y-20">
        <article className="grid grid-cols-1 lg:grid-cols-12 border border-[#171512]/15 bg-[#171512] text-[#F3EDE4] overflow-hidden items-stretch">
          <div className="lg:col-span-6 relative min-h-[380px] lg:h-full">
            <LuxuryImage
              src={featuredArticle.coverImage}
              alt={featuredArticle.title}
              priority
              className="object-cover"
            />
          </div>

          <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#C7A77B]">
                <span>Featured Essay</span>
                <span aria-hidden="true">·</span>
                <span>{featuredArticle.category}</span>
                <span aria-hidden="true">·</span>
                <span>{featuredArticle.readingTime}</span>
              </div>

              <Link href={`/journal/${featuredArticle.slug}`} className="block group">
                <h2
                  className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl text-[#F3EDE4] group-hover:text-[#C7A77B] transition-colors leading-tight"
                  style={{ textWrap: 'balance' }}
                >
                  {featuredArticle.title}
                </h2>
              </Link>

              <p className="text-sm sm:text-base text-[#F3EDE4]/80 leading-relaxed">
                {featuredArticle.excerpt}
              </p>
            </div>

            <div className="pt-6 border-t border-[#F3EDE4]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="text-xs text-[#F3EDE4]/70">
                <span>By {featuredArticle.author}</span>
                <span aria-hidden="true"> · </span>
                <span>{featuredArticle.publishedDate}</span>
              </div>

              <Link
                href={`/journal/${featuredArticle.slug}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#C7A77B] text-[#171512] text-xs uppercase tracking-[0.18em] font-medium hover:bg-[#F3EDE4] transition-colors whitespace-nowrap"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Read Full Essay</span>
              </Link>
            </div>
          </div>
        </article>

        {/* All Journal Articles Grid */}
        <div className="space-y-10">
          <div className="border-b border-[#171512]/15 pb-4 flex items-center justify-between">
            <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[#171512]">
              Recent Editorial Dispatches
            </h2>
            <span className="text-xs uppercase tracking-[0.18em] text-[#171512]/60">
              {JOURNAL_ARTICLES.length} Curated Articles
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {remainingArticles.map((article) => (
              <article
                key={article.id}
                className="border border-[#171512]/15 bg-[#F3EDE4] hover:border-[#C7A77B] transition-colors flex flex-col justify-between group"
              >
                <div>
                  <Link
                    href={`/journal/${article.slug}`}
                    className="block relative h-72 w-full overflow-hidden"
                  >
                    <LuxuryImage
                      src={article.coverImage}
                      alt={article.title}
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </Link>

                  <div className="p-8 space-y-3">
                    <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#171512]/65">
                      <span className="text-[#C7A77B] font-medium">{article.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{article.publishedDate}</span>
                      <span aria-hidden="true">·</span>
                      <span>{article.readingTime}</span>
                    </div>

                    <Link href={`/journal/${article.slug}`} className="block">
                      <h3 className="font-serif-editorial text-3xl text-[#171512] group-hover:text-[#C7A77B] transition-colors leading-snug">
                        {article.title}
                      </h3>
                    </Link>

                    <p className="text-sm text-[#171512]/75 leading-relaxed">{article.excerpt}</p>
                  </div>
                </div>

                <div className="px-8 pb-8 pt-4 border-t border-[#171512]/10 flex items-center justify-between">
                  <span className="text-xs text-[#171512]/65">By {article.author}</span>
                  <Link
                    href={`/journal/${article.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] font-medium text-[#171512] hover:text-[#C7A77B] transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
