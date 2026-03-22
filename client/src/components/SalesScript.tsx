import { useEffect, useRef } from 'react';

const steps = [
  {
    number: '01',
    title: 'Lo que no ve',
    text: 'Su clínica tiene 500 pacientes registrados. ¿Cuántos llevan más de un año sin venir? Cada uno representa entre 150€ y 800€ en tratamientos. No porque no los necesiten. Porque nadie les recordó que existen.'
  },
  {
    number: '02',
    title: 'La hemorragia invisible',
    text: 'Su recepción invierte horas respondiendo las mismas preguntas, confirmando citas y persiguiendo ausencias. Ese tiempo invisible le cuesta más que un salario a jornada completa.'
  },
  {
    number: '03',
    title: 'Cuánto le cuesta',
    text: 'Con un 20% de no-shows y 15 citas diarias, pierde 3 citas al día. A 120€ de media: 360€ diarios. Más de 7.000€ al mes que no entran.'
  },
  {
    number: '04',
    title: 'El cambio',
    text: 'No necesita más marketing. Necesita infraestructura que haga el trabajo mecánico por usted: responder, agendar, confirmar, recordar, reactivar. Automático. Medible. 24/7.'
  },
  {
    number: '05',
    title: 'Quiénes somos',
    text: 'Kinetic Ops instala sistemas con la misma lógica que su equipamiento clínico: se instala una vez, se mantiene periódicamente, produce resultados cada día.'
  },
  {
    number: '06',
    title: 'La propuesta',
    text: '7 días gratis. Vea cuántas citas se agendan solas, cuántos no-shows bajan, cuántos pacientes dormidos responden. Si no convence, desinstalamos. ¿Qué día empezamos?'
  }
];

export default function SalesScript() {
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
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <p className="eyebrow mb-4">SCRIPT DE VENTA</p>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-4xl md:text-5xl font-bold leading-tight">
            Lo que el director de la clínica
            <br />
            necesita escuchar.
          </h2>
        </div>

        {/* Steps */}
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="pb-8 border-b border-[rgba(255,255,255,0.07)] last:border-b-0"
            >
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <span style={{ fontFamily: "'IBM Plex Mono', monospace" }} className="text-2xl font-medium text-[#e82127]">
                    {step.number}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-xl font-semibold mb-3">
                    {step.title}
                  </h3>
                  <p style={{ fontFamily: "'Newsreader', serif" }} className="text-[#b0b0b5] italic leading-relaxed">
                    "{step.text}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
