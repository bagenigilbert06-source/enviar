import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ValueStrip from '@/components/ValueStrip';
import Platform from '@/components/Platform';
import RoleSolutions from '@/components/RoleSolutions';
import HowItWorks from '@/components/HowItWorks';
import WhyEnviar from '@/components/WhyEnviar';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ValueStrip />
      <Platform />
      <RoleSolutions />
      <HowItWorks />
      <WhyEnviar />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
