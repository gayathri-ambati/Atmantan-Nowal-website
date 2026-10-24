import { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowRight, Check, Leaf, MessageCircle, Sprout } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import CTASection from '@/components/CTASection';
import ScrollTree from '@/components/ScrollTree'; // Make sure this path is correct
import { getTherapy } from '@/data/therapies';
import { siteConfig } from '@/data/site';

// Fallback gallery image
const galleryImage = 'https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=800';

export default function TherapyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const therapy = slug ? getTherapy(slug) : undefined;
  
  // State for interactive tabs
  const [activeTab, setActiveTab] = useState(0);

  if (!therapy) return <Navigate to="/therapies" replace />;

  // We create pseudo-tabs using the therapy data so the layout matches the Programmes page
  const tabs = [
    { title: 'The Process', content: therapy.howItWorks, icon: <Sprout size={16} /> },
    { title: 'Key Benefits', content: null, icon: <Leaf size={16} /> },
  ];

  return (
    <>
      <PageHero
        image={therapy.image}
        eyebrow={therapy.category}
        title={therapy.title}
        subtitle={therapy.shortDesc}
        align="left"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Therapies', path: '/therapies' },
          { label: therapy.title },
        ]}
      />

      {/* Main Content Area with Scroll Tree */}
      <div className="relative bg-[#fcfbf8] overflow-hidden">
        
        {/* Scroll Tree */}
        <div className="hidden lg:block absolute inset-y-0 left-0 w-24 xl:w-32 pointer-events-none z-0">
          <ScrollTree className="absolute inset-0 h-full w-full opacity-80" />
        </div>

        {/* Content Container - padded to avoid overlapping the tree */}
        <div className="container-lux relative z-10 py-20 lg:pl-24">
          
          {/* 1. Intro & Interactive Tabs */}
          <section className="max-w-6xl mx-auto">
            <div className="text-center max-w-4xl mx-auto">
              <Reveal>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-forest-900 leading-[1.1] mb-10 text-balance">
                  Discover the Healing Power of {therapy.title}
                </h2>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="space-y-6 text-forest-900/70 text-lg md:text-xl leading-relaxed mb-16">
                  <p>{therapy.longDesc}</p>
                </div>
              </Reveal>
            </div>

            {/* Tabs */}
            <Reveal delay={0.2}>
              <div className="flex flex-col items-center mb-16">
                <p className="flex items-center gap-2 text-xs font-semibold tracking-[0.15em] text-forest-900/50 uppercase mb-6">
                  <Leaf size={14} className="text-sage-dark" />
                  Therapy Insights
                </p>
                
                <div className="flex flex-wrap justify-center gap-3">
                  {tabs.map((tab, index) => {
                    const isActive = activeTab === index;
                    return (
                      <button
                        key={tab.title}
                        onClick={() => setActiveTab(index)}
                        className={`
                          inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300
                          ${isActive 
                            ? 'bg-forest-900 text-ivory shadow-md scale-105' 
                            : 'bg-white text-forest-900/80 border border-forest-900/10 shadow-sm hover:border-gold-400/50 hover:bg-gold-50/30'
                          }
                        `}
                      >
                        {isActive && <span className="text-gold-400">{tab.icon}</span>}
                        {tab.title}
                      </button>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          </section>

          {/* 2. Dynamic Content Container */}
          <section className="max-w-5xl mx-auto py-8">
            <div className="bg-white rounded-[2rem] p-8 md:p-14 lg:p-20 shadow-[0_20px_60px_-15px_rgba(20,40,30,0.05)] border border-forest-900/5 relative overflow-hidden">
              
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="grid md:grid-cols-2 gap-12 md:gap-20 items-center"
                >
                  {/* Left: Dynamic Text Content */}
                  <div>
                    <h3 className="font-serif text-3xl md:text-4xl text-forest-900 mb-6">
                      {tabs[activeTab].title}
                    </h3>
                    
                    {/* Show Process Text */}
                    {activeTab === 0 && (
                      <p className="text-forest-900/70 leading-relaxed mb-8">
                        {therapy.howItWorks}
                      </p>
                    )}

                    {/* Show Benefits List */}
                    {activeTab === 1 && (
                      <div className="space-y-4">
                        <p className="text-forest-900/70 leading-relaxed mb-8">
                          Experience a range of therapeutic benefits designed to restore your body and mind.
                        </p>
                        {therapy.benefits.map((benefit, i) => (
                          <motion.div 
                            key={i} 
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 + (i * 0.05) }}
                            className="flex items-start gap-3"
                          >
                            <Check size={18} className="text-sage-dark shrink-0 mt-0.5" />
                            <span className="text-forest-900/80">{benefit}</span>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Right: Image */}
                  <div className="relative h-full min-h-[300px] md:min-h-[400px]">
                     <img 
                        src={therapy.image || galleryImage} 
                        alt={therapy.title} 
                        className="w-full h-full object-cover rounded-full md:rounded-bl-[8rem] md:rounded-tr-[8rem] shadow-xl"
                     />
                  </div>
                </motion.div>
              </AnimatePresence>

            </div>
          </section>

          {/* 3. Call to Actions */}
          <section className="max-w-4xl mx-auto py-20 mt-10 text-center">
            <Reveal>
              <h3 className="font-serif text-3xl text-forest-900 mb-8">Ready to experience this therapy?</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/plan-your-stay" 
                  className="inline-flex items-center justify-center gap-2 bg-forest-900 text-ivory px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-forest-800 hover:shadow-lg hover:-translate-y-0.5"
                >
                  Enquire About This Therapy
                  <ArrowRight size={18} />
                </Link>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=I%20am%20interested%20in%20${encodeURIComponent(therapy.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-forest-900/20 text-forest-900 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:border-gold-400 hover:bg-gold-50 hover:-translate-y-0.5"
                >
                  <MessageCircle size={18} />
                  Enquire on WhatsApp
                </a>
              </div>
              <div className="mt-8">
                <Link to="/therapies" className="text-sm font-semibold tracking-wider text-gold-600 uppercase hover:text-gold-700 transition-colors">
                  View All Therapies
                </Link>
              </div>
            </Reveal>
          </section>

        </div>
      </div>

      <CTASection
        title="Experience This Therapy During Your Stay"
        subtitle="Our practitioners are ready to guide you through a personalised wellness experience."
        image={therapy.image}
        secondaryLabel="Explore Programmes"
        secondaryLink="/programmes"
      />
    </>
  );
}