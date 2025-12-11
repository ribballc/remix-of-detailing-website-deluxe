import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhyChooseUs from '@/components/WhyChooseUs';
import ServicesOverview from '@/components/ServicesOverview';
import Packages from '@/components/Packages';
import AddOnServices from '@/components/AddOnServices';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <Packages />
      <AddOnServices />
      <Gallery />
      <CTASection />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Index;
