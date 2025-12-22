import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import gallery1 from '@/assets/gallery-1.png';
import gallery2 from '@/assets/gallery-2.png';
import gallery3 from '@/assets/gallery-3.png';
import gallery4 from '@/assets/gallery-4.png';

const services = [
  {
    image: gallery1,
    title: 'Mobile Detailing',
    description: 'We come to you for convenient on-site service',
  },
  {
    image: gallery2,
    title: 'Ceramic Coating',
    description: 'Long-lasting protection for your paint',
  },
  {
    image: gallery3,
    title: 'Headlight Restoration',
    description: 'Restore clarity and improve visibility',
  },
  {
    image: gallery4,
    title: 'Buffing Services',
    description: 'Remove scratches and restore shine',
  },
];

const ServicesOverview = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold tracking-[0.2em] uppercase mb-4">
            Welcome to Deluxe Detailing
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gold-gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional auto detailing services tailored to your vehicle type
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl aspect-[3/4] cursor-pointer"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/80 text-sm mb-4">{service.description}</p>
                <a href="#packages">
                  <Button variant="gold" size="sm" className="group/btn">
                    View Packages
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
