import { Check, Flame, Zap, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Package {
  icon: typeof Flame;
  badge?: string;
  title: string;
  price: string;
  time: string;
  features: string[];
  popular?: boolean;
}

interface PackagesSectionProps {
  id: string;
  title: string;
  subtitle: string;
  packages: Package[];
}

const PackagesSection = ({ id, title, subtitle, packages }: PackagesSectionProps) => {
  return (
    <section id={id} className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold tracking-[0.2em] uppercase mb-4">
            {subtitle}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gold-gradient-text">{title}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-card rounded-xl border ${pkg.popular ? 'border-primary' : 'border-border'} overflow-hidden hover:border-primary/50 transition-all duration-300 card-shine`}
            >
              {pkg.badge && (
                <div className="absolute top-4 right-4">
                  <span className="gold-gradient text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                    {pkg.badge}
                  </span>
                </div>
              )}
              
              <div className="p-8">
                <div className="w-12 h-12 rounded-lg gold-gradient flex items-center justify-center mb-6">
                  <pkg.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-foreground">{pkg.title}</h3>
                
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-black gold-gradient-text">{pkg.price}</span>
                </div>
                
                <p className="text-muted-foreground text-sm mb-6">Time: {pkg.time}</p>
                
                <div className="border-t border-border pt-6 mb-6">
                  <p className="text-sm font-semibold text-foreground mb-4">Includes:</p>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <a href="#contact">
                  <Button variant={pkg.popular ? 'gold' : 'goldOutline'} className="w-full">
                    Book Now
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

// Sedan/Coupe Packages
export const SedanPackages = () => {
  const packages: Package[] = [
    {
      icon: Flame,
      badge: 'TOP SELLER',
      title: 'Full Thorough Deluxe Interior',
      price: 'Starting at $95',
      time: '1 hr 30 mins',
      features: [
        'Vacuum',
        'Blow out crevices',
        'Shampoo seats & floor mats',
        'Steamer (kills germs)',
        'Plastic conditioner',
        'Cupholder cleaning',
        'Vent cleaning',
        'Leather conditioner',
        'Trunk cleaning',
      ],
      popular: true,
    },
    {
      icon: Zap,
      badge: '2nd Best Seller',
      title: 'Rapid Deluxe Interior',
      price: 'Starting at $65',
      time: '40 mins',
      features: [
        'Vacuum',
        'Seats & door cleaning',
        'Vent cleaning',
        'Cupholder cleaning',
        'Console & dashboard cleaning',
      ],
    },
    {
      icon: Sparkles,
      title: 'Deluxe Express Wash',
      price: 'Starting at $60',
      time: '35 mins',
      features: [
        'Hand wash & dry',
        'Ceramic wax',
        'Door jambs',
        'Bug & tar removal',
        'Tire shine (gloss effect)',
      ],
    },
  ];

  return (
    <PackagesSection
      id="sedan-packages"
      title="Sedans & Coupes"
      subtitle="Interior & Exterior Packages"
      packages={packages}
    />
  );
};

// Truck/SUV Packages
export const TruckPackages = () => {
  const packages: Package[] = [
    {
      icon: Flame,
      badge: 'TOP SELLER',
      title: 'Full Thorough Deluxe Interior',
      price: 'Starting at $120',
      time: '1 hr 30 mins',
      features: [
        'Vacuum',
        'Blow out crevices',
        'Shampoo seats & floor mats',
        'Steamer (kills germs)',
        'Plastic conditioner',
        'Cupholder cleaning',
        'Vent cleaning',
        'Leather conditioner',
      ],
      popular: true,
    },
    {
      icon: Zap,
      badge: '2nd Best Seller',
      title: 'Rapid Deluxe Interior',
      price: '$105',
      time: '40 mins',
      features: [
        'Vacuum',
        'Seat & door cleaning',
        'Vent cleaning',
        'Cupholder cleaning',
        'Console & dashboard cleaning',
      ],
    },
    {
      icon: Sparkles,
      title: 'Deluxe Express Wash',
      price: 'Starting at $70',
      time: '35 mins',
      features: [
        'Hand wash & dry',
        'Ceramic wax',
        'Bug & tar removal',
        'Tire shine (gloss effect)',
        'Door jambs',
      ],
    },
  ];

  return (
    <PackagesSection
      id="truck-packages"
      title="Trucks & SUVs"
      subtitle="Interior & Exterior Packages"
      packages={packages}
    />
  );
};
