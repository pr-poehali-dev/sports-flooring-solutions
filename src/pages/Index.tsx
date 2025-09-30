import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Specifications from '@/components/Specifications';
import Benefits from '@/components/Benefits';
import Categories from '@/components/Categories';
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
        <Categories />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;