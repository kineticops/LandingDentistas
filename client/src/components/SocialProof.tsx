import { useEffect, useRef, useState } from 'react';

export default function SocialProof() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const targetCount = 150;

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && count === 0) {
          // Animate counter
          let current = 0;
          const increment = Math.ceil(targetCount / 30);
          const interval = setInterval(() => {
            current += increment;
            if (current >= targetCount) {
              setCount(targetCount);
              clearInterval(interval);
            } else {
              setCount(current);
            }
          }, 30);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.unobserve(element);
  }, [count]);

  return (
    <section ref={containerRef} className="scroll-reveal py-12 md:py-16 px-4 border-y border-[rgba(255,255,255,0.07)]">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
          <div>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-5xl md:text-6xl font-bold text-[#e82127]">
              +{count}
            </p>
            <p className="text-[#b0b0b5] text-base md:text-lg mt-2">
              clínicas confían en Kinetic Ops
            </p>
          </div>
          <div className="hidden md:block w-px h-16 bg-[rgba(255,255,255,0.07)]"></div>
          <div>
            <p className="text-[#34c759] font-semibold text-lg">
              +2.500 horas recuperadas
            </p>
            <p className="text-[#b0b0b5] text-sm">
              en gestión administrativa
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
