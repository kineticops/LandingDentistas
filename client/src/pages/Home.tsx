import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import ValueAudit from '@/components/ValueAudit';
import Installation from '@/components/Installation';
import PricingPlans from '@/components/PricingPlans';
import SocialProof from '@/components/SocialProof';
import Testimonials from '@/components/Testimonials';
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
 * 
 * Sales Script Reference: The page structure follows a persuasion framework
 * (see SALES_SCRIPT_REFERENCE.md) but the script itself is not displayed.
 * The copy, hierarchy, and CTA placement are optimized for conversion.
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <StatsBar />
      <ValueAudit />
      <Installation />
      <PricingPlans />
      <SocialProof />
      <Testimonials />
      <FreeTrial />
      <FinalCTA />
      <Footer />
    </div>
  );
}
