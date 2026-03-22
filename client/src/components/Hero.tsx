import { useEffect, useRef, useState } from 'react';
import ContactModal from './ContactModal';

export default function Hero() {
  // Design Philosophy: Minimalist, Tesla/Apple-inspired dark mode
  // - Radical hierarchy with large numbers and ample whitespace
  // - Plus Jakarta Sans typography for bold display
  // - Red accent (#e82127) for critical CTAs
  // - Subtle grid background for depth without clutter
  const containerRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.unobserve(element);
  }, []);

  return (
    <section ref={containerRef} className="scroll-reveal min-h-screen flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Subtle background grid effect */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Brand */}
        <div className="mb-16 flex items-center justify-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-[#e82127]"></div>
          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-sm font-semibold tracking-wider text-[#f5f5f5]">KINETIC OPS</span>
        </div>

        {/* Main headline */}
        <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-6xl md:text-7xl font-bold leading-tight mb-6">
          Menos gestión.
          <br />
          Más <span className="gradient-text">ingresos</span>.
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-[#a0a0a5] max-w-3xl mx-auto leading-relaxed mb-12">
          Sistemas de IA que trabajan por su clínica las 24 horas.
          <br />
          Para clínicas que no pueden permitirse perder ni un paciente más.
        </p>

        {/* CTA Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="cta-button text-lg md:text-xl px-8 md:px-12 py-4 md:py-5"
        >
          Agendar llamada gratuita
        </button>

        {/* Contact Modal */}
        <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        {/* Scroll indicator */}
        <div className="mt-20 flex flex-col items-center gap-3 animate-bounce">
          <p className="text-xs uppercase tracking-widest text-[#636366]">Desplázate para explorar</p>
          <svg className="w-5 h-5 text-[#636366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
