import { Mail, Clock, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicle: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Booking Request from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0AVehicle: ${formData.vehicle}%0D%0AService: ${formData.service}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.location.href = `mailto:Deluxedetailing012@gmail.com?subject=${subject}&body=${body}`;
    toast({
      title: "Opening email client...",
      description: "Your booking request is ready to send!",
    });
  };

  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold tracking-[0.2em] uppercase mb-4">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gold-gradient-text">Book</span> Your Detail
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your vehicle? Contact us to schedule your appointment
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-card p-8 rounded-xl border border-border">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Contact Information</h3>
              
              <div className="space-y-6">
                <a 
                  href="mailto:Deluxedetailing012@gmail.com"
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg gold-gradient flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email Us</p>
                    <p className="text-sm">Deluxedetailing012@gmail.com</p>
                  </div>
                </a>
                
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="w-12 h-12 rounded-lg gold-gradient flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Business Hours</p>
                    <p className="text-sm">Mon–Sat: 8:00 AM – 8:00 PM</p>
                    <p className="text-sm">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-xl border border-border">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Follow Us</h3>
              <div className="flex gap-4">
                <a 
                  href="https://instagram.com/Deluxedetailing1k" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-secondary hover:gold-gradient flex items-center justify-center transition-all group"
                >
                  <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground" />
                </a>
                <a 
                  href="https://facebook.com/DeluxeeDetailing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-secondary hover:gold-gradient flex items-center justify-center transition-all group"
                >
                  <Facebook className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground" />
                </a>
                <a 
                  href="https://tiktok.com/@Deluxedetailing1k" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-secondary hover:gold-gradient flex items-center justify-center transition-all group"
                >
                  <svg className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-xl border border-border">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Request a Booking</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:border-primary focus:outline-none text-foreground placeholder:text-muted-foreground"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:border-primary focus:outline-none text-foreground placeholder:text-muted-foreground"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:border-primary focus:outline-none text-foreground placeholder:text-muted-foreground"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Vehicle (Year, Make, Model)"
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:border-primary focus:outline-none text-foreground placeholder:text-muted-foreground"
                  value={formData.vehicle}
                  onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                />
              </div>
              <select
                className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:border-primary focus:outline-none text-foreground"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              >
                <option value="">Select a Service</option>
                <option value="Full Thorough Deluxe Interior - Sedan">Full Thorough Deluxe Interior - Sedan ($95)</option>
                <option value="Rapid Deluxe Interior - Sedan">Rapid Deluxe Interior - Sedan ($65)</option>
                <option value="Deluxe Express Wash - Sedan">Deluxe Express Wash - Sedan ($60)</option>
                <option value="Full Thorough Deluxe Interior - Truck/SUV">Full Thorough Deluxe Interior - Truck/SUV ($120)</option>
                <option value="Rapid Deluxe Interior - Truck/SUV">Rapid Deluxe Interior - Truck/SUV ($105)</option>
                <option value="Deluxe Express Wash - Truck/SUV">Deluxe Express Wash - Truck/SUV ($70)</option>
                <option value="Ceramic Coating">Ceramic Coating ($875)</option>
                <option value="Headlight Restoration">Headlight Restoration ($85)</option>
                <option value="Buffing Services">Buffing Services ($140)</option>
                <option value="Other">Other - Please specify in message</option>
              </select>
              <textarea
                placeholder="Additional Details or Questions"
                rows={4}
                className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:border-primary focus:outline-none text-foreground placeholder:text-muted-foreground resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
              <Button type="submit" variant="gold" size="xl" className="w-full">
                Send Booking Request
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
