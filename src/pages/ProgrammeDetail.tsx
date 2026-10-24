import { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Leaf, Sprout } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import CTASection from '@/components/CTASection';
import ScrollTree from '@/components/ScrollTree'; // <-- Make sure this path is correct
import { getProgramme, programmes } from '@/data/programmes';
import { siteConfig } from '@/data/site';

// Fallback Data for the tabs
const programmeBenefits: Record<string, Record<string, string[]>> = {
  'naturopathy': {
    'Detoxification Programmes': ['Cleanses the lymphatic system', 'Improves nutrient absorption', 'Increases daily energy levels', 'Supports liver function', 'Promotes mental clarity'],
    'Hydrotherapy Treatments': ['Relieves muscle tension', 'Boosts blood circulation', 'Strengthens the immune system', 'Reduces stress and anxiety', 'Speeds up tissue recovery'],
    'Mud Therapy': ['Draws out toxins from the skin', 'Improves skin tone and texture', 'Relieves joint pain and stiffness', 'Cools and soothes inflammation', 'Re-mineralizes the body'],
    'Diet & Lifestyle Counselling': ['Builds sustainable long-term habits', 'Optimizes gut health', 'Stabilizes blood sugar levels', 'Improves sleep quality', 'Enhances overall vitality'],
  },
  'ayurveda': {
    'Abhyanga (Oil Massage)': ['Relieves stress and stiffness', 'Boosts metabolic rate', 'Tones muscles', 'Improves blood circulation', 'Achieves youthful look and increases energy'],
    'Shirodhara': ['Calms the central nervous system', 'Relieves insomnia and anxiety', 'Improves memory and focus', 'Relieves migraines', 'Deeply relaxes the mind'],
    'Kati Basti': ['Relieves lower back pain', 'Improves spinal flexibility', 'Nourishes the spinal discs', 'Reduces inflammation', 'Restores mobility'],
    'Ayurvedic Consultation': ['Identifies your unique dosha', 'Creates a personalised wellness plan', 'Improves digestion', 'Balances hormones', 'Promotes longevity'],
  },
  'default': {
    'Primary Therapy': ['Relieves stress and stiffness', 'Boosts metabolic rate', 'Tones muscles', 'Improves blood circulation', 'Achieves youthful look'],
    'Secondary Therapy': ['Calms the mind', 'Improves flexibility', 'Detoxifies the body', 'Increases energy', 'Promotes overall balance'],
  }
};

const galleryImages = [
  'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=800',
];

export default function ProgrammeDetail() {
  const { slug } = useParams<{ slug: string }>();
  const programme = slug ? getProgramme(slug) : undefined;
  
  const [activeTab, setActiveTab] = useState(0);

  if (!programme) return <Navigate to="/programmes" replace />;

  const otherProgrammes = programmes.filter(p => p.slug !== programme.slug).slice(0, 3);
  const benefitsData = programmeBenefits[programme.slug] || programmeBenefits['default'];
  const activeTherapy = programme.offerings[activeTab] || programme.offerings[0];
  const activeBenefits = benefitsData[activeTherapy?.title] || Object.values(benefitsData)[0];

  return (
    <>
      <PageHero
        image={programme.image}
        eyebrow={`Programme ${programme.number} \u2014 ${programme.eyebrow}`}
        title={programme.title}
        subtitle={programme.shortDesc}
        align="left"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Programmes', path: '/programmes' },
          { label: programme.title },
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
          
          {/* 1. Intro & Interactive Therapies Tabs */}
          <section className="max-w-6xl mx-auto">
            
            {/* Expanded width for the title and text */}
            <div className="text-center max-w-4xl mx-auto">
              <Reveal>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-forest-900 leading-[1.1] mb-10 text-balance">
                  Experience {programme.title} Wonders Amidst Nature
                </h2>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="space-y-6 text-forest-900/70 text-lg md:text-xl leading-relaxed mb-16">
                  <p>{programme.longDesc}</p>
                  <p>{programme.philosophy}</p>
                </div>
              </Reveal>
            </div>

            {/* Working Signature Therapies Tabs */}
            <Reveal delay={0.2}>
              <div className="flex flex-col items-center mb-16">
                <p className="flex items-center gap-2 text-xs font-semibold tracking-[0.15em] text-forest-900/50 uppercase mb-6">
                  <Leaf size={14} className="text-sage-dark" />
                  Signature Therapies
                </p>
                
                <div className="flex flex-wrap justify-center gap-3">
                  {programme.offerings.map((offering, index) => {
                    const isActive = activeTab === index;
                    return (
                      <button
                        key={offering.title}
                        onClick={() => setActiveTab(index)}
                        className={`
                          inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300
                          ${isActive 
                            ? 'bg-forest-900 text-ivory shadow-md scale-105' 
                            : 'bg-white text-forest-900/80 border border-forest-900/10 shadow-sm hover:border-gold-400/50 hover:bg-gold-50/30'
                          }
                        `}
                      >
                        {isActive && <Leaf size={16} className="text-gold-400" />}
                        {offering.title}
                      </button>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          </section>

          {/* 2. Dynamic Benefits Container */}
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
                  {/* Left: Dynamic Benefits Text */}
                  <div>
                    <h3 className="font-serif text-3xl md:text-4xl text-forest-900 mb-6">
                      {activeTherapy?.title || 'Holistic Benefits'}
                    </h3>
                    <p className="text-forest-900/70 leading-relaxed mb-8">
                      {activeTherapy?.description || programme.shortDesc}
                    </p>

                    <div className="space-y-4">
                      <p className="flex items-center gap-2 text-xs font-semibold tracking-[0.15em] text-forest-900/50 uppercase mb-4">
                        <Sprout size={14} className="text-sage-dark" />
                        Benefits
                      </p>
                      {activeBenefits.map((benefit, i) => (
                        <motion.div 
                          key={i} 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + (i * 0.05) }}
                          className="flex items-start gap-3"
                        >
                          <Leaf size={18} className="text-sage-dark shrink-0 mt-0.5" />
                          <span className="text-forest-900/80">{benefit}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Right: Cutout Image */}
                  <div className="relative h-full min-h-[300px] md:min-h-[400px]">
                     <img 
                        src={galleryImages[activeTab % galleryImages.length]} 
                        alt={activeTherapy?.title} 
                        className="w-full h-full object-cover rounded-full md:rounded-bl-[8rem] md:rounded-tr-[8rem] shadow-xl"
                     />
                  </div>
                </motion.div>
              </AnimatePresence>

            </div>
          </section>

          {/* 3. Other Programmes Grid */}
          <section className="max-w-6xl mx-auto py-20 mt-10">
            <Reveal className="text-center mb-16">
              <h2 className="font-serif text-4xl text-forest-900">Other programmes</h2>
            </Reveal>

            <div className="grid md:grid-cols-3 gap-8">
              {otherProgrammes.map((prog) => (
                <Link
                  key={prog.slug}
                  to={`/programmes/${prog.slug}`}
                  className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm border border-forest-900/5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={prog.image}
                      alt={prog.title}
                      className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-forest-900/80 backdrop-blur-sm text-ivory text-xs font-serif px-3 py-1.5 rounded-full">
                      {prog.number}
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col flex-1">
                    <div className="mb-4">
                      <Leaf size={24} className="text-sage-dark/50" />
                    </div>
                    <h3 className="font-serif text-2xl text-forest-900 mb-3">{prog.title}</h3>
                    <p className="text-forest-900/60 text-sm leading-relaxed mb-6 line-clamp-3">
                      {prog.shortDesc}
                    </p>
                    <div className="mt-auto pt-4 flex items-center text-gold-600 text-xs font-semibold tracking-[0.1em] uppercase">
                      Explore <ArrowRight size={14} className="ml-2 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

        </div>
      </div>

      <CTASection
        title="Ready to Begin?"
        subtitle={`Start your ${programme.title} journey at Nowal NatureCare.`}
        image={programme.image}
        secondaryLabel="View All Programmes"
        secondaryLink="/programmes"
      />
    </>
  );
}