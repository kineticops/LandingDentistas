import { useEffect, useRef } from 'react';

export default function FinalCTA() {
  const containerRef = useRef<HTMLDivElement>(null);

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
    <section ref={containerRef} className="scroll-reveal py-20 md:py-32 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Mientras otros gestionan,
          <br />
          usted <span className="text-[#e82127]">lidera</span>.
        </h2>

        <p className="text-lg md:text-xl text-[#b0b0b5] max-w-2xl mx-auto mb-12">
          15 minutos. Sin compromiso. Solo una conversación estratégica sobre lo que necesita su clínica.
        </p>

        <button className="cta-button text-lg md:text-xl px-8 md:px-12 py-4 md:py-5 mb-6">
          Agendar llamada gratuita
        </button>

        <p className="text-xs uppercase tracking-widest text-[#636366]">
          Sin coste · Sin compromiso · 15 minutos
        </p>
      </div>
    </section>
  );
}
