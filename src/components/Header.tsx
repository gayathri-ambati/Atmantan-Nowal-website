// import { useEffect, useState } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { Menu, X, ChevronRight } from 'lucide-react';
// import Logo from './Logo';
// import { navItems, siteConfig } from '@/data/site';

// export default function Header() {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [megaOpen, setMegaOpen] = useState<string | null>(null);
//   const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 60);
//     handleScroll();
//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     setMobileOpen(false);
//     setMegaOpen(null);
//   }, [location.pathname]);

//   useEffect(() => {
//     document.body.style.overflow = mobileOpen ? 'hidden' : '';
//     return () => {
//       document.body.style.overflow = '';
//     };
//   }, [mobileOpen]);

//   const isActive = (path: string) =>
//     location.pathname === path ||
//     (path !== '/' && location.pathname.startsWith(path));

//   const isHome = location.pathname === '/';
//   const headerBg = scrolled
//     ? 'bg-ivory/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(38,61,48,0.08)]'
//     : isHome
//       ? 'bg-transparent'
//       : 'bg-forest-700/90 backdrop-blur-sm';
//   const textColor = scrolled ? 'text-forest-700' : isHome ? 'text-ivory' : 'text-ivory';

//   return (
//     <>
//       <header
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBg}`}
//         onMouseLeave={() => setMegaOpen(null)}
//       >
//         <div className="container-lux">
//           <div className={`flex items-center justify-between transition-all duration-500 ${scrolled ? 'h-16' : 'h-20 md:h-24'}`}>
//             <Link to="/" aria-label="Nowal NatureCare home">
//               <Logo variant={scrolled ? 'dark' : 'light'} />
//             </Link>

//             <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
//               {navItems.map((item) => (
//                 <div
//                   key={item.path}
//                   className="relative"
//                   onMouseEnter={() => setMegaOpen(item.mega ? item.label : null)}
//                 >
//                   <Link
//                     to={item.path}
//                     className={`relative px-3 py-2 text-[0.78rem] font-semibold tracking-[0.1em] uppercase transition-colors duration-300 ${textColor} ${
//                       isActive(item.path) ? 'text-gold-400' : ''
//                     } hover:text-gold-400`}
//                   >
//                     {item.label}
//                     {isActive(item.path) && (
//                       <span className="absolute bottom-0 left-3 right-3 h-px bg-gold-400" />
//                     )}
//                   </Link>
//                 </div>
//               ))}
//             </nav>

//             <div className="hidden lg:block">
//               <Link to="/plan-your-stay" className="btn-gold text-[0.72rem] px-6 py-3">
//                 Plan Your Stay
//               </Link>
//             </div>

//             <button
//               className={`lg:hidden p-2 ${textColor}`}
//               onClick={() => setMobileOpen(true)}
//               aria-label="Open navigation menu"
//             >
//               <Menu size={24} />
//             </button>
//           </div>
//         </div>

//         {megaOpen && (
//           <div
//             className="hidden lg:block absolute top-full left-0 right-0 bg-ivory border-t border-forest-700/10 shadow-xl"
//             onMouseEnter={() => setMegaOpen(megaOpen)}
//           >
//             <div className="container-lux py-8">
//               <div className="grid grid-cols-3 gap-6 max-w-4xl">
//                 {navItems.find((n) => n.label === megaOpen)?.mega?.map((sub) => (
//                   <Link
//                     key={sub.path}
//                     to={sub.path}
//                     className="group block p-4 border border-transparent hover:border-gold-400/30 hover:bg-white/60 transition-all duration-300"
//                     onClick={() => setMegaOpen(null)}
//                   >
//                     <div className="flex items-start justify-between gap-2">
//                       <div>
//                         <p className="font-serif text-lg text-forest-700 group-hover:text-gold-500 transition-colors">
//                           {sub.label}
//                         </p>
//                         <p className="text-sm text-charcoal/60 mt-1 leading-relaxed">{sub.desc}</p>
//                       </div>
//                       <ChevronRight size={16} className="text-gold-400 mt-1 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
//                     </div>
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}
//       </header>

//       {mobileOpen && (
//         <div className="lg:hidden fixed inset-0 z-[60] bg-forest-700 overflow-y-auto">
//           <div className="container-lux h-20 flex items-center justify-between">
//             <Logo variant="light" />
//             <button
//               onClick={() => setMobileOpen(false)}
//               aria-label="Close navigation menu"
//               className="text-ivory p-2"
//             >
//               <X size={24} />
//             </button>
//           </div>
//           <nav className="container-lux py-8" aria-label="Mobile navigation">
//             {navItems.map((item) => (
//               <div key={item.path} className="border-b border-ivory/10">
//                 {item.mega ? (
//                   <>
//                     <button
//                       onClick={() =>
//                         setMobileExpanded(mobileExpanded === item.label ? null : item.label)
//                       }
//                       className="w-full flex items-center justify-between py-4 text-ivory text-lg font-serif"
//                     >
//                       {item.label}
//                       <ChevronRight
//                         size={20}
//                         className={`text-gold-400 transition-transform ${
//                           mobileExpanded === item.label ? 'rotate-90' : ''
//                         }`}
//                       />
//                     </button>
//                     {mobileExpanded === item.label && (
//                       <div className="pb-4 space-y-2">
//                         <Link
//                           to={item.path}
//                           className="block py-2 pl-4 text-sage text-sm tracking-wide uppercase"
//                         >
//                           View All
//                         </Link>
//                         {item.mega.map((sub) => (
//                           <Link
//                             key={sub.path}
//                             to={sub.path}
//                             className="block py-2 pl-4 text-ivory/70 text-sm hover:text-gold-400 transition-colors"
//                           >
//                             {sub.label}
//                           </Link>
//                         ))}
//                       </div>
//                     )}
//                   </>
//                 ) : (
//                   <Link
//                     to={item.path}
//                     className="block py-4 text-ivory text-lg font-serif hover:text-gold-400 transition-colors"
//                   >
//                     {item.label}
//                   </Link>
//                 )}
//               </div>
//             ))}
//             <div className="mt-8">
//               <Link to="/plan-your-stay" className="btn-gold w-full" onClick={() => setMobileOpen(false)}>
//                 Plan Your Stay
//               </Link>
//             </div>
//             <div className="mt-8 space-y-3">
//               <a
//                 href={`tel:${siteConfig.phoneRaw}`}
//                 className="block text-ivory/70 text-sm"
//               >
//                 {siteConfig.phone}
//               </a>
//               <a
//                 href={`mailto:${siteConfig.email}`}
//                 className="block text-ivory/70 text-sm"
//               >
//                 {siteConfig.email}
//               </a>
//             </div>
//           </nav>
//         </div>
//       )}
//     </>
//   );
// }




// import { useEffect, useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { 
//   Menu, 
//   X, 
//   ChevronRight, 
//   Home, 
//   Info, 
//   HeartPulse, 
//   Sparkles, 
//   BedDouble, 
//   Compass, 
//   Image as ImageIcon, 
//   Phone 
// } from 'lucide-react';
// import Logo from './Logo';
// import { navItems, siteConfig } from '@/data/site';

// // Map icons to the nav item labels
// const iconMap: Record<string, React.ElementType> = {
//   'Home': Home,
//   'About Nowal': Info,
//   'Wellness Programmes': HeartPulse,
//   'Therapies': Sparkles,
//   'Accommodation': BedDouble,
//   'Experiences': Compass,
//   'Gallery': ImageIcon,
//   'Contact': Phone,
// };

// export default function Header() {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [megaOpen, setMegaOpen] = useState<string | null>(null);
//   const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
//   const location = useLocation();

//   // Close menus on route change
//   useEffect(() => {
//     setMobileOpen(false);
//     setMegaOpen(null);
//   }, [location.pathname]);

//   // Prevent body scroll when mobile menu is open
//   useEffect(() => {
//     document.body.style.overflow = mobileOpen ? 'hidden' : '';
//     return () => {
//       document.body.style.overflow = '';
//     };
//   }, [mobileOpen]);

//   const isActive = (path: string) =>
//     location.pathname === path ||
//     (path !== '/' && location.pathname.startsWith(path));

//   return (
//     <>
//       {/* Header */}
//       <header
//         className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-forest-700/95 backdrop-blur-md shadow-lg border-b border-white/10"
//         onMouseLeave={() => setMegaOpen(null)}
//       >
//         {/* Replaced container-lux with a full-width flex container to prevent the button from being pushed off-screen */}
//         <div className="w-full px-4 lg:px-8 mx-auto">
//           <div className="flex items-center justify-between h-20 md:h-24 gap-4">
            
//             {/* Logo - Shrink-0 prevents it from squishing */}
//             <Link to="/" aria-label="Nowal NatureCare home" className="flex-shrink-0">
//               <Logo variant="light" />
//             </Link>

//             {/* Desktop Navigation - Moved to the right side, items are tightly packed */}
//             <nav className="hidden lg:flex items-center justify-end gap-1 xl:gap-2 flex-1" aria-label="Main navigation">
//               {navItems.map((item) => {
//                 const Icon = iconMap[item.label];
//                 return (
//                   <div
//                     key={item.path}
//                     className="relative"
//                     onMouseEnter={() => setMegaOpen(item.mega ? item.label : null)}
//                   >
//                     <Link
//                       to={item.path}
//                       className={`relative flex items-center gap-1.5 px-2 py-2 text-[0.7rem] xl:text-[0.75rem] font-semibold tracking-[0.05em] uppercase whitespace-nowrap transition-colors duration-300 text-ivory ${
//                         isActive(item.path) ? 'text-gold-400' : ''
//                       } hover:text-gold-400`}
//                     >
//                       {Icon && <Icon size={14} className="shrink-0 xl:w-4 xl:h-4" />}
//                       {item.label}
                      
//                       {isActive(item.path) && (
//                         <span className="absolute bottom-0 left-2 right-2 h-px bg-gold-400" />
//                       )}
//                     </Link>
//                   </div>
//                 );
//               })}
//             </nav>

//             {/* CTA Button - Added flex-shrink-0 and ml-auto to keep it anchored to the right */}
//             <div className="hidden lg:block flex-shrink-0 ml-2">
//               <Link to="/plan-your-stay" className="btn-gold text-[0.7rem] xl:text-[0.75rem] px-4 xl:px-6 py-2.5 xl:py-3 whitespace-nowrap inline-block">
//                 Plan Your Stay
//               </Link>
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               className="lg:hidden p-2 text-ivory ml-auto"
//               onClick={() => setMobileOpen(true)}
//               aria-label="Open navigation menu"
//             >
//               <Menu size={24} />
//             </button>
//           </div>
//         </div>

//         {/* Desktop Mega Menu */}
//         {megaOpen && (
//           <div
//             className="hidden lg:block absolute top-full left-0 right-0 bg-ivory border-t border-forest-700/10 shadow-xl"
//             onMouseEnter={() => setMegaOpen(megaOpen)}
//           >
//             <div className="max-w-7xl mx-auto px-6 py-8">
//               <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
//                 {navItems.find((n) => n.label === megaOpen)?.mega?.map((sub) => (
//                   <Link
//                     key={sub.path}
//                     to={sub.path}
//                     className="group block p-4 border border-transparent hover:border-gold-400/30 hover:bg-white/60 transition-all duration-300"
//                     onClick={() => setMegaOpen(null)}
//                   >
//                     <div className="flex items-start justify-between gap-2">
//                       <div>
//                         <p className="font-serif text-lg text-forest-700 group-hover:text-gold-500 transition-colors">
//                           {sub.label}
//                         </p>
//                         <p className="text-sm text-charcoal/60 mt-1 leading-relaxed">{sub.desc}</p>
//                       </div>
//                       <ChevronRight size={16} className="text-gold-400 mt-1 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
//                     </div>
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}
//       </header>

//       {/* Mobile Navigation Overlay */}
//       {mobileOpen && (
//         <div className="lg:hidden fixed inset-0 z-[60] bg-forest-700 overflow-y-auto">
//           <div className="w-full px-4 h-20 flex items-center justify-between">
//             <Logo variant="light" />
//             <button
//               onClick={() => setMobileOpen(false)}
//               aria-label="Close navigation menu"
//               className="text-ivory p-2"
//             >
//               <X size={24} />
//             </button>
//           </div>
//           <nav className="w-full px-4 py-8" aria-label="Mobile navigation">
//             {navItems.map((item) => {
//               const Icon = iconMap[item.label];
//               return (
//                 <div key={item.path} className="border-b border-ivory/10">
//                   {item.mega ? (
//                     <>
//                       <button
//                         onClick={() =>
//                           setMobileExpanded(mobileExpanded === item.label ? null : item.label)
//                         }
//                         className="w-full flex items-center justify-between py-4 text-ivory text-lg font-serif"
//                       >
//                         <div className="flex items-center gap-3">
//                           {Icon && <Icon size={20} className="text-gold-400" />}
//                           {item.label}
//                         </div>
//                         <ChevronRight
//                           size={20}
//                           className={`text-gold-400 transition-transform ${
//                             mobileExpanded === item.label ? 'rotate-90' : ''
//                           }`}
//                         />
//                       </button>
//                       {mobileExpanded === item.label && (
//                         <div className="pb-4 space-y-2">
//                           <Link
//                             to={item.path}
//                             className="block py-2 pl-10 text-sage text-sm tracking-wide uppercase"
//                           >
//                             View All
//                           </Link>
//                           {item.mega.map((sub) => (
//                             <Link
//                               key={sub.path}
//                               to={sub.path}
//                               className="block py-2 pl-10 text-ivory/70 text-sm hover:text-gold-400 transition-colors"
//                             >
//                               {sub.label}
//                             </Link>
//                           ))}
//                         </div>
//                       )}
//                     </>
//                   ) : (
//                     <Link
//                       to={item.path}
//                       className="flex items-center gap-3 py-4 text-ivory text-lg font-serif hover:text-gold-400 transition-colors"
//                     >
//                       {Icon && <Icon size={20} className="text-gold-400" />}
//                       {item.label}
//                     </Link>
//                   )}
//                 </div>
//               );
//             })}
//             <div className="mt-8">
//               <Link to="/plan-your-stay" className="btn-gold w-full text-center block" onClick={() => setMobileOpen(false)}>
//                 Plan Your Stay
//               </Link>
//             </div>
//             <div className="mt-8 space-y-3 pb-8">
//               <a href={`tel:${siteConfig.phoneRaw}`} className="block text-ivory/70 text-sm">
//                 {siteConfig.phone}
//               </a>
//               <a href={`mailto:${siteConfig.email}`} className="block text-ivory/70 text-sm">
//                 {siteConfig.email}
//               </a>
//             </div>
//           </nav>
//         </div>
//       )}
//     </>
//   );
// }




// import { useEffect, useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import {
//   Menu,
//   X,
//   ChevronRight,
//   ChevronDown,
//   Home,
//   Info,
//   HeartPulse,
//   Sparkles,
//   BedDouble,
//   Compass,
//   Image as ImageIcon,
//   Phone,
// } from 'lucide-react';
// import Logo from './Logo';
// import { navItems, siteConfig } from '@/data/site';

// const iconMap: Record<string, React.ElementType> = {
//   Home: Home,
//   'About Nowal': Info,
//   'Wellness Programmes': HeartPulse,
//   Therapies: Sparkles,
//   Accommodation: BedDouble,
//   Experiences: Compass,
//   Gallery: ImageIcon,
//   Contact: Phone,
// };

// export default function Header() {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [megaOpen, setMegaOpen] = useState<string | null>(null);
//   const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
//   const location = useLocation();

//   useEffect(() => {
//     setMobileOpen(false);
//     setMegaOpen(null);
//   }, [location.pathname]);

//   useEffect(() => {
//     document.body.style.overflow = mobileOpen ? 'hidden' : '';
//     return () => {
//       document.body.style.overflow = '';
//     };
//   }, [mobileOpen]);

//   const isActive = (path: string) =>
//     location.pathname === path ||
//     (path !== '/' && location.pathname.startsWith(path));

//   const activeMega = navItems.find((n) => n.label === megaOpen);

//   return (
//     <>
//       <header
//         className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-forest-700/95 backdrop-blur-md shadow-lg border-b border-white/10"
//         onMouseLeave={() => setMegaOpen(null)}
//       >
//         <div className="w-full px-4 lg:px-8 mx-auto">
//           <div className="flex items-center justify-between h-20 md:h-24 gap-4">
//             <Link to="/" aria-label="Nowal NatureCare home" className="flex-shrink-0">
//               <Logo variant="light" />
//             </Link>

//             <nav
//               className="hidden lg:flex items-center justify-end gap-1 xl:gap-2 flex-1"
//               aria-label="Main navigation"
//             >
//               {navItems.map((item) => {
//                 const Icon = iconMap[item.label];
//                 const hasMega = !!item.mega;
//                 return (
//                   <div
//                     key={item.path}
//                     className="relative"
//                     onMouseEnter={() => setMegaOpen(hasMega ? item.label : null)}
//                   >
//                     <Link
//                       to={item.path}
//                       className={`relative flex items-center gap-1.5 px-2 py-2 text-[0.7rem] xl:text-[0.75rem] font-semibold tracking-[0.05em] uppercase whitespace-nowrap transition-colors duration-300 text-ivory ${
//                         isActive(item.path) ? 'text-gold-400' : ''
//                       } hover:text-gold-400`}
//                     >
//                       {Icon && <Icon size={14} className="shrink-0 xl:w-4 xl:h-4" />}
//                       {item.label}
//                       {hasMega && (
//                         <ChevronDown
//                           size={13}
//                           className={`shrink-0 transition-transform duration-300 ${
//                             megaOpen === item.label ? 'rotate-180' : ''
//                           }`}
//                         />
//                       )}
//                       {isActive(item.path) && (
//                         <span className="absolute bottom-0 left-2 right-2 h-px bg-gold-400" />
//                       )}
//                     </Link>
//                   </div>
//                 );
//               })}
//             </nav>

//             <div className="hidden lg:block flex-shrink-0 ml-2">
//               <Link
//                 to="/plan-your-stay"
//                 className="btn-gold text-[0.7rem] xl:text-[0.75rem] px-4 xl:px-6 py-2.5 xl:py-3 whitespace-nowrap inline-block"
//               >
//                 Plan Your Stay
//               </Link>
//             </div>

//             <button
//               className="lg:hidden p-2 text-ivory ml-auto"
//               onClick={() => setMobileOpen(true)}
//               aria-label="Open navigation menu"
//             >
//               <Menu size={24} />
//             </button>
//           </div>
//         </div>

//         {megaOpen && activeMega && (
//           <div
//             className="hidden lg:block absolute top-full left-0 right-0 bg-ivory border-t border-forest-700/10 shadow-xl"
//             onMouseEnter={() => setMegaOpen(megaOpen)}
//           >
//             <div className="max-w-7xl mx-auto px-6 py-8">
//               {/* Grid adapts to number of items — prevents misalignment */}
//               <div
//                 className={`mx-auto grid gap-6 ${
//                   (activeMega.mega?.length ?? 0) >= 6
//                     ? 'grid-cols-3 max-w-5xl'
//                     : (activeMega.mega?.length ?? 0) === 3
//                     ? 'grid-cols-3 max-w-4xl'
//                     : 'grid-cols-2 max-w-3xl'
//                 }`}
//               >
//                 {activeMega.mega?.map((sub) => (
//                   <Link
//                     key={sub.path}
//                     to={sub.path}
//                     className="group block p-4 border border-transparent hover:border-gold-400/30 hover:bg-white/60 transition-all duration-300"
//                     onClick={() => setMegaOpen(null)}
//                   >
//                     <div className="flex items-start justify-between gap-2">
//                       <div>
//                         <p className="font-serif text-lg text-forest-700 group-hover:text-gold-500 transition-colors">
//                           {sub.label}
//                         </p>
//                         <p className="text-sm text-charcoal/60 mt-1 leading-relaxed">
//                           {sub.desc}
//                         </p>
//                       </div>
//                       <ChevronRight
//                         size={16}
//                         className="text-gold-400 mt-1 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
//                       />
//                     </div>
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}
//       </header>

//       {mobileOpen && (
//         <div className="lg:hidden fixed inset-0 z-[60] bg-forest-700 overflow-y-auto">
//           <div className="w-full px-4 h-20 flex items-center justify-between">
//             <Logo variant="light" />
//             <button
//               onClick={() => setMobileOpen(false)}
//               aria-label="Close navigation menu"
//               className="text-ivory p-2"
//             >
//               <X size={24} />
//             </button>
//           </div>
//           <nav className="w-full px-4 py-8" aria-label="Mobile navigation">
//             {navItems.map((item) => {
//               const Icon = iconMap[item.label];
//               return (
//                 <div key={item.path} className="border-b border-ivory/10">
//                   {item.mega ? (
//                     <>
//                       <button
//                         onClick={() =>
//                           setMobileExpanded(
//                             mobileExpanded === item.label ? null : item.label
//                           )
//                         }
//                         className="w-full flex items-center justify-between py-4 text-ivory text-lg font-serif"
//                       >
//                         <div className="flex items-center gap-3">
//                           {Icon && <Icon size={20} className="text-gold-400" />}
//                           {item.label}
//                         </div>
//                         <ChevronRight
//                           size={20}
//                           className={`text-gold-400 transition-transform ${
//                             mobileExpanded === item.label ? 'rotate-90' : ''
//                           }`}
//                         />
//                       </button>
//                       {mobileExpanded === item.label && (
//                         <div className="pb-4 space-y-2">
//                           <Link
//                             to={item.path}
//                             className="block py-2 pl-10 text-sage text-sm tracking-wide uppercase"
//                           >
//                             View All
//                           </Link>
//                           {item.mega.map((sub) => (
//                             <Link
//                               key={sub.path}
//                               to={sub.path}
//                               className="block py-2 pl-10 text-ivory/70 text-sm hover:text-gold-400 transition-colors"
//                             >
//                               {sub.label}
//                             </Link>
//                           ))}
//                         </div>
//                       )}
//                     </>
//                   ) : (
//                     <Link
//                       to={item.path}
//                       className="flex items-center gap-3 py-4 text-ivory text-lg font-serif hover:text-gold-400 transition-colors"
//                     >
//                       {Icon && <Icon size={20} className="text-gold-400" />}
//                       {item.label}
//                     </Link>
//                   )}
//                 </div>
//               );
//             })}
//             <div className="mt-8">
//               <Link
//                 to="/plan-your-stay"
//                 className="btn-gold w-full text-center block"
//                 onClick={() => setMobileOpen(false)}
//               >
//                 Plan Your Stay
//               </Link>
//             </div>
//             <div className="mt-8 space-y-3 pb-8">
//               <a href={`tel:${siteConfig.phoneRaw}`} className="block text-ivory/70 text-sm">
//                 {siteConfig.phone}
//               </a>
//               <a href={`mailto:${siteConfig.email}`} className="block text-ivory/70 text-sm">
//                 {siteConfig.email}
//               </a>
//             </div>
//           </nav>
//         </div>
//       )}
//     </>
//   );
// }


import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  ChevronRight,
  ChevronDown,
  Home,
  Info,
  HeartPulse,
  Sparkles,
  BedDouble,
  Compass,
  Image as ImageIcon,
  Phone,
  Building,
  BookOpen,
  Users,
  History,
  Activity,
  Flower2,
  Brain,
  Apple,
  Target,
  Stethoscope,
  Waves,
  Droplets,
  HandHeart,
  Leaf,
} from 'lucide-react';
import Logo from './Logo';
import { navItems, siteConfig } from '@/data/site';

// Map icons for the main nav
const iconMap: Record<string, React.ElementType> = {
  Home: Home,
  'About Nowal': Info,
  'Wellness Programmes': HeartPulse,
  Therapies: Sparkles,
  Accommodation: BedDouble,
  Experiences: Compass,
  Gallery: ImageIcon,
  Contact: Phone,
};

// Map specific icons for ALL dropdown items
const subIconMap: Record<string, React.ElementType> = {
  'Our Story': History,
  'Founder & Wellness Team': Users,
  'About Nowal': Info,
  'Naturopathy': Leaf,
  'Ayurveda': Flower2,
  'Yoga & Meditation': Brain,
  'Diet & Nutrition': Apple,
  'Acupuncture': Target,
  'Physiotherapy': Activity,
  'All Therapies': Stethoscope,
  'Mud Therapy': Droplets, 
  'Hydrotherapy': Waves,
  'Massage Therapy': HandHeart,
  'Rooms & Suites': Building,
  'Accommodation Guidelines': BookOpen,
};

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(null);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const isActive = (path: string) =>
    location.pathname === path ||
    (path !== '/' && location.pathname.startsWith(path));

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-forest-700/95 backdrop-blur-md shadow-lg border-b border-white/10"
        onMouseLeave={() => setMegaOpen(null)}
      >
        <div className="w-full px-4 lg:px-8 mx-auto">
          <div className="flex items-center justify-between h-20 md:h-24 gap-4">
            <Link to="/" aria-label="Nowal NatureCare home" className="flex-shrink-0">
              <Logo variant="light" />
            </Link>

            <nav
              className="hidden lg:flex items-center justify-end gap-1 xl:gap-2 flex-1"
              aria-label="Main navigation"
            >
              {navItems.map((item) => {
                const Icon = iconMap[item.label];
                const hasMega = !!item.mega;
                
                const isRightAligned = ['Accommodation', 'Experiences', 'Gallery', 'Contact'].includes(item.label);

                return (
                  <div
                    key={item.path}
                    className="relative"
                    onMouseEnter={() => setMegaOpen(hasMega ? item.label : null)}
                  >
                    <Link
                      to={item.path}
                      className={`relative flex items-center gap-1.5 px-2 py-2 text-[0.7rem] xl:text-[0.75rem] font-semibold tracking-[0.05em] uppercase whitespace-nowrap transition-colors duration-300 text-ivory ${
                        isActive(item.path) ? 'text-gold-400' : ''
                      } hover:text-gold-400`}
                    >
                      {Icon && <Icon size={14} className="shrink-0 xl:w-4 xl:h-4" />}
                      {item.label}
                      {hasMega && (
                        <ChevronDown
                          size={13}
                          className={`shrink-0 transition-transform duration-300 ${
                            megaOpen === item.label ? 'rotate-180' : ''
                          }`}
                        />
                      )}
                      {isActive(item.path) && (
                        <span className="absolute bottom-0 left-2 right-2 h-px bg-gold-400" />
                      )}
                    </Link>

                    {/* --- COMPACT DROPDOWN MENU --- */}
                    {hasMega && megaOpen === item.label && (
                      <div 
                        className={`absolute top-full mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-100 p-2 transition-all duration-200 ease-out origin-top ${
                          isRightAligned ? 'right-0 origin-top-right' : 'left-0 origin-top-left'
                        }`}
                        onMouseEnter={() => setMegaOpen(item.label)}
                      >
                        <div className="px-3 py-2">
                          <span className="text-[0.65rem] font-bold uppercase tracking-wider text-gray-500">
                            {item.label}
                          </span>
                        </div>
                        
                        <div className="flex flex-col gap-1">
                          {item.mega?.map((sub) => {
                            const SubIcon = subIconMap[sub.label] || Leaf;
                            
                            return (
                              <Link
                                key={sub.path}
                                to={sub.path}
                                className="group flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-150"
                                onClick={() => setMegaOpen(null)}
                              >
                                {/* 15370D Color Icon Box */}
                                <div className="flex-shrink-0 w-8 h-8 rounded-md bg-[#15370D]/5 flex items-center justify-center mt-0.5">
                                  <SubIcon size={16} className="text-[#15370D]" strokeWidth={2} />
                                </div>
                                
                                {/* Text Content */}
                                <div className="flex flex-col text-left">
                                  <span className="font-serif text-sm font-medium text-gray-900 group-hover:text-[#15370D]">
                                    {sub.label}
                                  </span>
                                  {sub.desc && (
                                    <span className="text-xs text-gray-500 leading-snug mt-0.5">
                                      {sub.desc}
                                    </span>
                                  )}
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            <div className="hidden lg:block flex-shrink-0 ml-2">
              <Link
                to="/plan-your-stay"
                className="btn-gold text-[0.7rem] xl:text-[0.75rem] px-4 xl:px-6 py-2.5 xl:py-3 whitespace-nowrap inline-block"
              >
                Plan Your Stay
              </Link>
            </div>

            <button
              className="lg:hidden p-2 text-ivory ml-auto"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu remains unchanged */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-[60] bg-forest-700 overflow-y-auto">
          <div className="w-full px-4 h-20 flex items-center justify-between">
            <Logo variant="light" />
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close navigation menu"
              className="text-ivory p-2"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="w-full px-4 py-8" aria-label="Mobile navigation">
            {navItems.map((item) => {
              const Icon = iconMap[item.label];
              return (
                <div key={item.path} className="border-b border-ivory/10">
                  {item.mega ? (
                    <>
                      <button
                        onClick={() =>
                          setMobileExpanded(
                            mobileExpanded === item.label ? null : item.label
                          )
                        }
                        className="w-full flex items-center justify-between py-4 text-ivory text-lg font-serif"
                      >
                        <div className="flex items-center gap-3">
                          {Icon && <Icon size={20} className="text-gold-400" />}
                          {item.label}
                        </div>
                        <ChevronRight
                          size={20}
                          className={`text-gold-400 transition-transform ${
                            mobileExpanded === item.label ? 'rotate-90' : ''
                          }`}
                        />
                      </button>
                      {mobileExpanded === item.label && (
                        <div className="pb-4 space-y-2">
                          <Link
                            to={item.path}
                            className="block py-2 pl-10 text-sage text-sm tracking-wide uppercase"
                          >
                            View All
                          </Link>
                          {item.mega.map((sub) => (
                            <Link
                              key={sub.path}
                              to={sub.path}
                              className="block py-2 pl-10 text-ivory/70 text-sm hover:text-gold-400 transition-colors"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className="flex items-center gap-3 py-4 text-ivory text-lg font-serif hover:text-gold-400 transition-colors"
                    >
                      {Icon && <Icon size={20} className="text-gold-400" />}
                      {item.label}
                    </Link>
                  )}
                </div>
              );
            })}
            <div className="mt-8">
              <Link
                to="/plan-your-stay"
                className="btn-gold w-full text-center block"
                onClick={() => setMobileOpen(false)}
              >
                Plan Your Stay
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}