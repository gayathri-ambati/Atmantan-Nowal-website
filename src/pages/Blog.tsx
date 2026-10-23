import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import CTASection from '@/components/CTASection';
import { articles } from '@/data/blog';

export default function Blog() {
  return (
    <>
      <PageHero
        image="https://images.pexels.com/photos/105028/pexels-photo-105028.jpeg?auto=compress&cs=tinysrgb&w=1920"
        eyebrow="Blog & Wellness Articles"
        title="Insights into Natural Wellbeing"
        subtitle="Explore articles on naturopathy, Ayurveda, yoga, nutrition, and the principles of mindful living."
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Blog' }]}
      />

      <section className="py-20 md:py-32 bg-ivory">
        <div className="container-lux">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, i) => (
              <Reveal key={article.slug} delay={i * 0.08}>
                <Link to={`/blog/${article.slug}`} className="group block">
                  <div className="overflow-hidden aspect-[3/2]">
                    <img
                      src={article.image}
                      alt={article.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-5">
                    <div className="flex items-center gap-3 text-xs text-charcoal/40 mb-2">
                      <span className="text-gold-500 tracking-wider uppercase">{article.category}</span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl text-forest-700 group-hover:text-gold-500 transition-colors leading-tight">
                      {article.title}
                    </h3>
                    <p className="mt-2 text-charcoal/60 text-sm leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                    <p className="mt-3 text-xs text-charcoal/40">{article.date}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Continue Your Wellness Journey"
        subtitle="Put these insights into practice with a personalised stay at Nowal NatureCare."
        image="https://images.pexels.com/photos/9650567/pexels-photo-9650567.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />
    </>
  );
}
