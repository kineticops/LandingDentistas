import { useEffect, useRef, useState } from 'react';
import ContactModal from './ContactModal';

export default function FinalCTA() {
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
    <section ref={containerRef} className="scroll-reveal py-12 md:py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Mientras otros gestionan,
          <br />
          usted <span className="text-[#e82127]">lidera</span>.
        </h2>

        <p className="text-lg md:text-xl text-[#a0a0a5] max-w-2xl mx-auto mb-12">
          15 minutos. Sin compromiso. Solo una conversación estratégica sobre lo que necesita su clínica.
        </p>

        <button
          onClick={() => setIsModalOpen(true)}
          className="cta-button text-lg md:text-xl px-8 md:px-12 py-4 md:py-5 mb-6"
        >
          Agendar llamada gratuita
        </button>

        {/* Contact Modal */}
        <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        <p className="text-xs uppercase tracking-widest text-[#636366]">
          Sin coste · Sin compromiso · 15 minutos
        </p>
      </div>
    </section>
  );
}
