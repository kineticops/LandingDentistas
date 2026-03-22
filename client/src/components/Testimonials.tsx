import { useEffect, useRef } from 'react';

const testimonials = [
  {
    quote: '+35% citas confirmadas en 30 días',
    author: 'Dr. Miguel Rodríguez',
    clinic: 'Clínica Dental Rodríguez, Madrid',
    result: 'Recuperó 2.100€ mensuales en citas que antes se perdían'
  },
  {
    quote: 'Recepción liberada de tareas repetitivas',
    author: 'Dra. Carmen López',
    clinic: 'Centro Odontológico López, Barcelona',
    result: 'Su equipo ahora se enfoca en pacientes, no en llamadas'
  },
  {
    quote: '18 pacientes inactivos reactivados en 3 semanas',
    author: 'Dr. Antonio Martínez',
    clinic: 'Clínica Dental Martínez, Valencia',
    result: 'Facturación adicional: 3.600€ sin inversión en marketing'
  }
];

export default function Testimonials() {
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
    <section ref={containerRef} className="scroll-reveal py-12 md:py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 md:mb-24 text-center">
          <p className="eyebrow mb-4">RESULTADOS REALES</p>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-4xl md:text-5xl font-bold leading-tight">
            Clínicas que ya confían en nosotros
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 border border-[rgba(255,255,255,0.07)] rounded-2xl hover:border-[rgba(255,255,255,0.14)] transition-all duration-300 hover:translate-y-[-8px]"
            >
              {/* Quote */}
              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-2xl font-bold text-[#e82127] mb-6">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="mb-4">
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="font-semibold text-white">
                  {testimonial.author}
                </p>
                <p className="text-sm text-[#8e8e93]">
                  {testimonial.clinic}
                </p>
              </div>

              {/* Result */}
              <div className="pt-4 border-t border-[rgba(255,255,255,0.07)]">
                <p className="text-[#34c759] text-sm leading-relaxed">
                  <span className="font-semibold">Resultado:</span> {testimonial.result}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
