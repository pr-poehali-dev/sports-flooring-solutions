import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Specifications from '@/components/Specifications';
import Benefits from '@/components/Benefits';
import Categories from '@/components/Categories';
import About from '@/components/About';
import Projects from '@/components/Projects';
import HowToChoose from '@/components/HowToChoose';
import Certificates from '@/components/Certificates';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Specifications />
        <Benefits />
        <section id="catalog">
          <Categories />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="how-to-choose">
          <HowToChoose />
        </section>
        <section id="certificates">
          <Certificates />
        </section>
        <section id="faq">
          <FAQ />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;