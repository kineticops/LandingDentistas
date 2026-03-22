import { useEffect, useRef, useState } from 'react';
import ContactModal from './ContactModal';

const plans = [
  {
    name: 'Inicio',
    originalPrice: '500€/mes',
    price: '59€/mes',
    savings: '441€/mes',
    dailyCost: '1,97€',
    dailyText: 'al día',
    features: [
      'Recepcionista IA · WhatsApp 24/7',
      'Respuesta automática sobre tratamientos y precios',
      'Cualificación de pacientes entrantes'
    ],
    recommended: false
  },
  {
    name: 'Crecimiento',
    originalPrice: '1.750€/mes',
    price: '249€/mes',
    savings: '1.501€/mes',
    dailyCost: '8,30€',
    dailyText: 'al día',
    features: [
      'Todo lo de Inicio',
      'Reservas automatizadas por WhatsApp',
      'Recordatorios de citas automatizados',
      'Reactivación de pacientes inactivos'
    ],
    recommended: true
  },
  {
    name: 'Escala',
    originalPrice: '2.050€/mes',
    price: '349€/mes',
    savings: '1.701€/mes',
    dailyCost: '11,63€',
    dailyText: 'al día',
    features: [
      'Todo lo de Crecimiento',
      'Asistente personal del propietario',
      'Automatización de tareas y organización interna'
    ],
    recommended: false
  }
];

export default function PricingPlans() {
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
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 md:mb-24 text-center">
          <p className="eyebrow mb-4">PLANES</p>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Inversión mínima.
            <br />
            Impacto máximo.
          </h2>
          <p className="text-lg text-[#a0a0a5] max-w-2xl mx-auto">
            Un sistema que paga su propia inversión en las primeras semanas.
          </p>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl transition-all duration-300 hover:translate-y-[-12px] ${
                plan.recommended
                  ? 'border-2 border-[#e82127] bg-[#0a0a0a]'
                  : 'border border-[rgba(255,255,255,0.07)] bg-[#0a0a0a] hover:border-[rgba(255,255,255,0.14)]'
              }`}
            >
              {/* Recommended badge */}
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="inline-block px-4 py-1 bg-[#e82127] text-white text-xs font-mono font-medium uppercase tracking-wider rounded-full">
                    ⭐ RECOMENDADO
                  </span>
                </div>
              )}

              <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-2xl md:text-3xl font-semibold mb-8">
                {plan.name}
              </h3>

              {/* Pricing */}
              <div className="mb-8 text-center">
                <div className="flex items-baseline justify-center gap-2 mb-3">
                  <span className="text-[#636366] line-through text-sm">
                    {plan.originalPrice}
                  </span>
                </div>
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-5xl md:text-6xl font-bold text-white mb-3">
                  {plan.price}
                </div>
                <div className="savings-pill mb-4 justify-center flex">
                  Ahorro: {plan.savings}
                </div>
                <p className="text-[#8e8e93] text-sm">
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="font-semibold text-[#f5f5f5]">{plan.dailyCost}</span> {plan.dailyText}
                </p>
              </div>

              {/* Features */}
              <div className="mb-8 pb-8 border-b border-[rgba(255,255,255,0.07)]">
                <ul className="space-y-3 text-center">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 justify-center">
                      <span className="text-[#34c759] font-bold mt-0.5">✓</span>
                      <span className="text-[#a0a0a5] text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>



              {/* CTA */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="cta-button w-full"
              >
                Comenzar ahora
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
