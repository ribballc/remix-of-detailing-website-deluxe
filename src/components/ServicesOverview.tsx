import { Car, Truck } from 'lucide-react';

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
            <a
              key={index}
              href={service.href}
              className="group relative overflow-hidden rounded-xl bg-card border border-border p-8 hover:border-primary transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-32 h-32 gold-gradient opacity-10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl gold-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">{service.description}</p>
                <div className="mt-6 text-primary font-semibold flex items-center gap-2">
                  View Packages
                  <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
