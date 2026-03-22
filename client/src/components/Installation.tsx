import { useEffect, useRef } from 'react';

export default function Installation() {
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
    <section ref={containerRef} className="scroll-reveal py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="p-8 md:p-12 bg-[#0a0a0a] border border-[rgba(255,255,255,0.07)] rounded-2xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex-1">
              <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-2xl md:text-3xl font-semibold mb-2">
                Instalación única
              </h3>
              <p className="text-[#b0b0b5]">
                Configuración, integraciones, personalización y formación.
              </p>
            </div>
            <div className="flex-shrink-0">
              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-3xl md:text-4xl font-bold text-[#e82127]">
                197€ – 497€
              </p>
              <p className="text-[#8e8e93] text-sm mt-1">pago único</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
