import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import CTASection from '@/components/CTASection';
import { getArticle, articles } from '@/data/blog';

export default function BlogArticle() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticle(slug) : undefined;

  if (!article) return <Navigate to="/blog" replace />;

  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <>
      <PageHero
        image={article.image}
        eyebrow={article.category}
        title={article.title}
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Blog', path: '/blog' },
          { label: article.title },
        ]}
      />

      <section className="py-20 md:py-32 bg-ivory">
        <div className="container-lux max-w-3xl">
          <Reveal>
            <div className="flex items-center gap-4 text-xs text-charcoal/40 mb-8">
              <span>{article.date}</span>
              <span className="flex items-center gap-1">
                <Clock size={12} />
                {article.readTime}
              </span>
            </div>
          </Reveal>

          <div className="space-y-6">
            {article.content.map((para, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p className="text-charcoal/70 text-lg leading-relaxed">{para}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <Link to="/blog" className="text-link mt-12 inline-flex">
              <ArrowRight size={14} className="rotate-180" />
              Back to All Articles
            </Link>
          </Reveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-20 bg-sage/15">
          <div className="container-lux">
            <Reveal>
              <p className="eyebrow mb-8">Continue Reading</p>
            </Reveal>
            <div className="grid sm:grid-cols-2 gap-8">
              {related.map((rel, i) => (
                <Reveal key={rel.slug} delay={i * 0.1}>
                  <Link to={`/blog/${rel.slug}`} className="group block">
                    <div className="overflow-hidden aspect-[3/2]">
                      <img
                        src={rel.image}
                        alt={rel.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="font-serif text-xl text-forest-700 mt-4 group-hover:text-gold-500 transition-colors">
                      {rel.title}
                    </h3>
                    <p className="text-charcoal/60 text-sm mt-2 line-clamp-2">{rel.excerpt}</p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title="Experience These Principles in Practice"
        subtitle="Visit Nowal NatureCare and immerse yourself in a personalised wellness journey."
        image="https://images.pexels.com/photos/14580738/pexels-photo-14580738.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />
    </>
  );
}
