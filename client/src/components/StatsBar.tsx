import { useEffect, useRef } from 'react';

const stats = [
  {
    number: '73%',
    text: 'de leads se pierden por respuesta lenta'
  },
  {
    number: '15–30%',
    text: 'de citas se pierden por no-shows evitables'
  },
  {
    number: '24/7',
    text: 'su clínica responde sin que usted esté'
  }
];

export default function StatsBar() {
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
    <section ref={containerRef} className="scroll-reveal py-16 md:py-24 px-4 border-t border-b border-[rgba(255,255,255,0.07)]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#e82127] mb-3">
                {stat.number}
              </div>
              <p className="text-[#b0b0b5] text-base md:text-lg leading-relaxed">
                {stat.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
