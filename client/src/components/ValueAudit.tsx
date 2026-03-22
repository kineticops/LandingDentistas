import { useEffect, useRef } from 'react';
import AnimatedCounter from './AnimatedCounter';

const systems = [
  {
    tag: 'CAPTACIÓN',
    tagColor: 'tag-capture',
    name: 'Reservas automatizadas · WhatsApp',
    description: 'El paciente solicita cita por WhatsApp y el sistema la agenda según disponibilidad real. Sin llamadas, sin esperas. Una clínica media pierde 5–10 citas semanales por fricción.',
    value: '450€/mes'
  },
  {
    tag: 'CONVERSIÓN',
    tagColor: 'tag-conversion',
    name: 'Recepcionista IA · WhatsApp 24/7',
    description: 'Atención automática: tratamientos, precios orientativos, preparación previa. Cualifica pacientes antes de consulta. Reduce carga administrativa entre un 50% y un 70%.',
    value: '500€/mes'
  },
  {
    tag: 'CONVERSIÓN',
    tagColor: 'tag-conversion',
    name: 'Recordatorios de citas automatizados',
    description: 'Notificaciones con confirmación interactiva. Reducir los no-shows un 40% puede representar más de 1.500€/mes en facturación recuperada.',
    value: '350€/mes'
  },
  {
    tag: 'RETENCIÓN',
    tagColor: 'tag-retention',
    name: 'Reactivación de pacientes inactivos',
    description: 'Detecta pacientes que llevan meses sin visitar y ejecuta secuencias automáticas. Recuperar un solo paciente puede generar entre 150€ y 800€.',
    value: '450€/mes'
  },
  {
    tag: 'OPERATIVO',
    tagColor: 'tag-operative',
    name: 'Asistente personal del propietario',
    description: 'Automatiza tareas internas. Libera 5–8h semanales. Para un odontólogo cuya hora vale 80–150€, esto equivale a 1.600–4.800€/mes en tiempo recuperado.',
    value: '300€/mes'
  }
];

export default function ValueAudit() {
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
        <div className="mb-16 md:mb-24">
          <p className="eyebrow mb-4">AUDITORÍA DE VALOR</p>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Cada cita perdida cuesta
            <br />
            entre 80€ y 300€.
          </h2>
          <p className="text-lg text-[#b0b0b5] max-w-2xl">
            Cada sistema se valora por su impacto directo en su facturación mensual.
          </p>
        </div>

        {/* Systems list */}
        <div className="space-y-6">
          {systems.map((system, index) => (
            <div
              key={index}
              className="group p-6 md:p-8 border border-[rgba(255,255,255,0.07)] rounded-2xl hover:border-[rgba(255,255,255,0.14)] transition-all duration-300 hover:pl-10 cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <div className="mb-3">
                    <span className={`tag ${system.tagColor}`}>
                      {system.tag}
                    </span>
                  </div>
                  <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-xl md:text-2xl font-semibold mb-3">
                    {system.name}
                  </h3>
                  <p className="text-[#b0b0b5] leading-relaxed">
                    {system.description}
                  </p>
                </div>
                <div className="flex-shrink-0 md:text-right">
                  <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-2xl md:text-3xl font-bold text-[#e82127]">
                    <AnimatedCounter value={parseInt(system.value)} prefix="" suffix="€/mes" />
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
