import { useEffect, useRef } from 'react';

const benefits = [
  {
    title: 'Instalación completa',
    description: 'No es una demo. Configuramos todo exactamente como funcionará en producción.'
  },
  {
    title: 'Sus datos, no los nuestros',
    description: 'Verá leads respondidos, citas agendadas y ausencias evitadas con sus números reales.'
  },
  {
    title: 'Sin permanencia',
    description: 'Sin contrato. Sin penalización. Si no continúa, desinstalamos y no debe nada.'
  },
  {
    title: 'Impacto en 72h',
    description: 'La mayoría de negocios ven el primer resultado antes de que acaben los 3 primeros días.'
  }
];

export default function FreeTrial() {
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
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 md:mb-24 text-center">
          <p className="eyebrow mb-4">SIN RIESGO</p>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            7 días. 0€.
            <br />
            Resultados reales.
          </h2>
          <p className="text-lg text-[#b0b0b5] max-w-2xl mx-auto">
            Instalamos todo el sistema de su plan. Si en una semana no ve impacto con sus propios datos, desinstalamos sin coste.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 md:p-8 border border-[rgba(255,255,255,0.07)] rounded-2xl hover:border-[rgba(255,255,255,0.14)] transition-all duration-300"
            >
              <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-xl font-semibold mb-3">
                {benefit.title}
              </h3>
              <p className="text-[#b0b0b5] leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Closing statement */}
        <div className="text-center p-8 md:p-12 bg-[#0a0a0a] border border-[rgba(255,255,255,0.07)] rounded-2xl">
          <p className="text-lg text-[#34c759] font-medium">
            El objetivo no es convencerle. Es que vea con sus propios números lo que estaba dejando escapar.
          </p>
        </div>
      </div>
    </section>
  );
}
