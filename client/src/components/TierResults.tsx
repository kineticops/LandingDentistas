import { useEffect, useRef } from 'react';

const tiers = [
  {
    name: 'Inicio',
    result: 'Cada paciente que escribe recibe respuesta al instante. Su clínica nunca duerme.'
  },
  {
    name: 'Crecimiento',
    result: 'Su clínica agenda sola, reduce no-shows y recupera pacientes que llevaban meses sin venir. Los ingresos crecen sin más inversión en captación.'
  },
  {
    name: 'Escala',
    result: 'Eficiencia de cadena, personalización de consulta boutique. Recupera horas para ejercer, formar equipo o abrir una segunda sede.'
  }
];

export default function TierResults() {
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
    <section ref={containerRef} className="scroll-reveal py-12 md:py-16 px-4 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12 md:space-y-16">
          {tiers.map((tier, index) => (
            <div key={index} className="border-l-2 border-[#e82127] pl-6 md:pl-8">
              <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-2xl md:text-3xl font-semibold text-white mb-3">
                {tier.name}
              </h3>
              <p className="text-[#a0a0a5] text-base md:text-lg leading-relaxed max-w-3xl">
                {tier.result}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
