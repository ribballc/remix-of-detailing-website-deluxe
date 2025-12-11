import { Car, Truck, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Car,
    title: 'Sedans & Coupes',
    description: 'Full interior & exterior detailing packages for cars',
    href: '#sedan-packages',
  },
  {
    icon: Truck,
    title: 'Trucks & SUVs',
    description: 'Comprehensive detailing for larger vehicles',
    href: '#truck-packages',
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-card border-2 border-border p-8 hover:border-primary transition-all duration-300 flex flex-col h-full"
            >
              <div className="absolute top-0 left-0 w-full h-1 gold-gradient transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              
              <div className="flex-1">
                <div className="w-16 h-16 rounded-xl gold-gradient flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
              </div>
              
              <a href={service.href} className="block">
                <Button variant="gold" className="w-full group/btn">
                  View Packages
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
