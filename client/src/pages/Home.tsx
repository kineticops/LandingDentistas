import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import ValueAudit from '@/components/ValueAudit';
import Installation from '@/components/Installation';
import PricingPlans from '@/components/PricingPlans';
import SalesScript from '@/components/SalesScript';
import FreeTrial from '@/components/FreeTrial';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

/**
 * Kinetic Ops Landing Page
 * 
 * Design Philosophy: Minimalist, Tesla/Apple-inspired dark mode
 * - Radical visual hierarchy with large numbers and ample whitespace
 * - Premium typography: Plus Jakarta Sans (display), Newsreader (narrative), IBM Plex Mono (technical)
 * - Red accent (#e82127) for critical CTAs and highlights
 * - Scroll reveal animations with fade-up effect
 * - Subtle borders and depth without clutter
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <StatsBar />
      <ValueAudit />
      <Installation />
      <PricingPlans />
      <SalesScript />
      <FreeTrial />
      <FinalCTA />
      <Footer />
    </div>
  );
}
