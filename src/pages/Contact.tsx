import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, ChevronDown, ArrowRight, Plane, Car, Navigation } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { siteConfig } from '@/data/site';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', source: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const contactInfo = {
    phone: '+91 83473 13333',
    whatsapp: '+91 83473 13333',
    email: 'info@nimba.in',
    address: 'Mehsana, Gujarat',
    fullAddress: 'Baliyasan, Nr. Mccain Foods, Ahmedabad – Mehsana Expressway, Mehsana – 382 732 Gujarat'
  };

  return (
    <div className="bg-[#f8f9f7] relative overflow-hidden min-h-screen text-[#2a3b32] font-sans">
      
      {/* --- NEW HERO SECTION (Matching Image 1) --- */}
      <section className="relative bg-[#5f7b6e] text-white overflow-hidden py-20 lg:py-32">
        
        {/* Decorative Tree Branch (Left Side) */}
        <div className="absolute left-0 top-0 bottom-0 w-24 pointer-events-none z-10 hidden lg:block">
          <svg width="100%" height="100%" viewBox="0 0 100 800" preserveAspectRatio="none" className="opacity-90">
            <path d="M30,0 Q50,200 20,400 Q-10,600 40,800" fill="none" stroke="#8B5A2B" strokeWidth="10" strokeLinecap="round"/>
            {/* Leaves */}
            <path d="M25,100 Q40,90 45,105 Q30,115 25,100" fill="#4ade80" />
            <path d="M22,300 Q5,290 10,310 Q25,320 22,300" fill="#4ade80" />
            <path d="M35,500 Q55,490 60,510 Q40,520 35,500" fill="#4ade80" />
            <path d="M25,700 Q5,690 10,710 Q25,720 25,700" fill="#4ade80" />
          </svg>
        </div>

        <div className="container-lux max-w-7xl mx-auto px-6 lg:px-12 relative z-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="max-w-xl">
              <Reveal>
                <p className="text-xs tracking-[0.2em] font-medium uppercase text-white/80 mb-6">
                  Take a first step towards health
                </p>
                <h1 className="text-6xl md:text-7xl lg:text-[5.5rem] font-serif leading-[1.05] mb-6">
                  Let's talk <br />
                  about <br />
                  <span className="italic font-light">your health.</span>
                </h1>
                <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-12 max-w-md">
                  Tell us what you are looking for and our team will guide you to the right programme.
                </p>

                {/* Circular "Write to us" Button */}
                <a href="#contact-form" className="inline-flex items-center gap-4 group">
                  <div className="w-16 h-[1px] bg-white/50"></div>
                  <div className="w-32 h-32 rounded-full border border-white/50 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <span className="text-sm font-medium tracking-wide">Write to us</span>
                  </div>
                </a>
              </Reveal>
            </div>

            {/* Right Content - Image Collage */}
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] hidden md:block">
              
              {/* Large Orange Shape Background */}
              <div className="absolute right-0 bottom-0 w-[80%] h-[90%] bg-[#eeb978] rounded-tl-[250px] rounded-bl-[150px] rounded-br-[250px] z-0"></div>

              {/* Main Center Image (Yoga) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[65%] z-10 shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Yoga meditation" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Top Right Image (Building) */}
              <div className="absolute top-0 right-0 w-[35%] h-[35%] z-20 shadow-lg">
                 <img 
                  src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Nimba Building" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom Left Image (Massage) */}
              <div className="absolute bottom-10 left-0 w-[35%] h-[40%] z-20 shadow-lg">
                 <img 
                  src="https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Ayurvedic Massage" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative Circle Lines */}
              <div className="absolute -bottom-10 -right-10 w-[90%] h-[90%] border border-white/20 rounded-full z-0 pointer-events-none"></div>
            </div>
          </div>
        </div>

        {/* Floating WhatsApp Button (Matching Image 1) */}
        <a 
          href={`https://wa.me/${contactInfo.whatsapp.replace(/\s/g, '')}`} 
          target="_blank" 
          rel="noreferrer"
          className="absolute bottom-8 right-8 z-50 bg-[#25D366] hover:bg-[#20b858] text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-lg transition-colors font-medium text-sm md:text-base"
        >
          <MessageCircle size={20} fill="white" className="text-[#25D366]" />
          Message us now
        </a>
      </section>
      {/* --- END HERO SECTION --- */}


      {/* --- CONTACT & FORM SECTION (Matching Image 2) --- */}
      <div id="contact-form" className="relative z-10 py-20 lg:py-32">
        
        {/* Decorative Tree Branch for this section */}
        <div className="absolute left-0 top-0 bottom-0 w-24 pointer-events-none z-0 hidden lg:block opacity-40">
          <svg width="100%" height="100%" viewBox="0 0 100 1000" preserveAspectRatio="none">
            <path d="M30,0 Q50,200 20,400 Q-10,600 40,800 Q60,900 30,1000" fill="none" stroke="#8B5A2B" strokeWidth="12" strokeLinecap="round"/>
            <path d="M25,150 Q40,140 45,155 Q30,165 25,150" fill="#4ade80" />
            <path d="M22,350 Q5,340 10,360 Q25,370 22,350" fill="#4ade80" />
            <path d="M35,550 Q55,540 60,560 Q40,570 35,550" fill="#4ade80" />
          </svg>
        </div>

        <div className="container-lux max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
            
            {/* Left Side: Contact Info */}
            <div className="pt-10">
              <Reveal>
                <h2 className="text-5xl md:text-6xl font-serif text-[#1e3a2f] mb-6">
                  Call, write or <span className="italic text-[#b08d57]">visit.</span>
                </h2>
                <p className="text-gray-600 text-lg mb-12 max-w-md leading-relaxed">
                  Whichever suits you. A few words about what you are looking for is enough, and our team will get back to you.
                </p>
              </Reveal>

              <div className="space-y-0">
                {[
                  { icon: Phone, label: 'CALL', value: contactInfo.phone, href: `tel:${contactInfo.phone}` },
                  { icon: MessageCircle, label: 'WHATSAPP', value: contactInfo.whatsapp, href: `https://wa.me/${contactInfo.whatsapp.replace(/\s/g, '')}` },
                  { icon: Mail, label: 'EMAIL', value: contactInfo.email, href: `mailto:${contactInfo.email}` },
                  { icon: MapPin, label: 'VISIT', value: contactInfo.address, href: '#map-section' },
                ].map((item, idx) => (
                  <Reveal key={item.label} delay={idx * 0.1}>
                    <a 
                      href={item.href}
                      className="group flex items-center justify-between py-6 border-b border-gray-200/60 hover:border-[#b08d57] transition-colors"
                    >
                      <div className="flex items-center gap-6">
                        <item.icon size={20} className="text-gray-400 group-hover:text-[#b08d57] transition-colors" strokeWidth={1.5} />
                        <span className="text-xs tracking-widest text-gray-500 w-24">{item.label}</span>
                        <span className="text-xl font-serif text-[#1e3a2f] group-hover:text-[#b08d57] transition-colors">{item.value}</span>
                      </div>
                      <ArrowRight size={18} className="text-[#b08d57] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </a>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Right Side: Contact Form */}
            <div className="bg-white p-8 md:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100 relative">
              <Reveal delay={0.2}>
                <p className="text-xs tracking-widest text-[#b08d57] uppercase mb-4">Write to us</p>
                <h2 className="text-4xl font-serif text-[#1e3a2f] mb-8">Send us a message</h2>
                
                {sent ? (
                  <div className="py-20 text-center">
                    <h3 className="text-2xl font-serif text-[#1e3a2f] mb-2">Message Sent</h3>
                    <p className="text-gray-500">Thank you for reaching out. We'll be in touch soon.</p>
                    <button onClick={() => setSent(false)} className="mt-6 text-[#b08d57] hover:underline text-sm">
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">Name *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 focus:border-[#b08d57] outline-none transition-colors text-gray-800"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">Phone *</label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 focus:border-[#b08d57] outline-none transition-colors text-gray-800"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 focus:border-[#b08d57] outline-none transition-colors text-gray-800"
                      />
                    </div>
                    <div className="relative">
                      <label className="block text-sm text-gray-700 mb-2">How you heard about Nimba</label>
                      <select
                        value={form.source}
                        onChange={(e) => setForm({ ...form, source: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 focus:border-[#b08d57] outline-none transition-colors text-gray-800 appearance-none bg-white"
                      >
                        <option value="" disabled>How you heard about Nimba</option>
                        <option value="google">Google Search</option>
                        <option value="social">Social Media</option>
                        <option value="friend">Friend / Family</option>
                        <option value="other">Other</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-[42px] text-gray-400 pointer-events-none" size={20} />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">Comment or Message</label>
                      <textarea
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 focus:border-[#b08d57] outline-none transition-colors text-gray-800 resize-none"
                      />
                    </div>
                    
                    <button type="submit" className="bg-[#1e3a2f] text-white px-8 py-3 rounded hover:bg-[#b08d57] transition-colors w-full md:w-auto font-medium">
                      Send Message
                    </button>
                  </form>
                )}
              </Reveal>
            </div>
          </div>
        </div>
      </div>


      {/* --- MAP & DIRECTIONS SECTION (Matching Image 3) --- */}
      <div id="map-section" className="relative z-10 pb-24 container-lux max-w-7xl mx-auto px-6 lg:px-12 pt-16 border-t border-gray-200">
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <h2 className="text-5xl font-serif text-[#1e3a2f]">
              How to reach <span className="italic text-[#b08d57]">Nimba</span>
            </h2>
            <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm tracking-widest uppercase text-[#1e3a2f] hover:text-[#b08d57] transition-colors mt-6 md:mt-0 pb-2 border-b border-[#1e3a2f] hover:border-[#b08d57]">
              Get Directions <Navigation size={14} />
            </a>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map Embed */}
          <Reveal delay={0.1}>
            <div className="w-full h-[400px] md:h-[500px] bg-gray-200 relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14655.51286106006!2d72.370000!3d23.600000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDM2JzAwLjAiTiA3MsKwMjInMDAuMCJF!5e0!3m2!1sen!2sin!4v1610000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="Nimba Location"
              ></iframe>
            </div>
          </Reveal>

          {/* Directions Text */}
          <Reveal delay={0.2}>
            <div className="pl-0 lg:pl-8">
              <h3 className="text-2xl font-serif text-[#1e3a2f] leading-snug mb-8">
                {contactInfo.fullAddress}
              </h3>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <span className="text-[#b08d57] font-serif text-xl">01</span>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Plane size={18} className="text-gray-400" />
                      <h4 className="text-lg font-serif text-[#1e3a2f]">by Air</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      Ahmedabad Airport is the nearest airport to Nimba. The distance is 58 km and you can easily hire a private taxi and or pre-book the taxi service from the centre.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 border-t border-gray-200 pt-8">
                  <span className="text-[#b08d57] font-serif text-xl">02</span>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Car size={18} className="text-gray-400" />
                      <h4 className="text-lg font-serif text-[#1e3a2f]">by Road</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      Nimba is located on the Ahmedabad-Mehsana Expressway. The visitor will have to travel approximately 60 km from Ahmedabad city as it is located before Mehsana. It is advisable to use proper navigation to reach Nimba by road.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}