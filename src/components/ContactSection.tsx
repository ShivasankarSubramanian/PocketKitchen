import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-20 md:py-28 bg-secondary/50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <span className="text-primary font-semibold text-sm uppercase tracking-widest">Get in Touch</span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3">
          Contact <span className="text-primary">Us</span>
        </h2>
      </div>

      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <a
          href="tel:8700535811"
          className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/40 transition group"
        >
          <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition">
            <Phone className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-heading font-semibold text-foreground mb-1">Phone</h3>
          <p className="text-muted-foreground text-sm">8700535811</p>
        </a>

        <a
          href="mailto:pockeatkitchen@gmail.com"
          className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/40 transition group"
        >
          <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition">
            <Mail className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-heading font-semibold text-foreground mb-1">Email</h3>
          <p className="text-muted-foreground text-sm break-all">pockeatkitchen@gmail.com</p>
        </a>

        <div className="bg-card border border-border rounded-2xl p-6 text-center group">
          <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center">
            <MapPin className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-heading font-semibold text-foreground mb-1">Location</h3>
          <p className="text-muted-foreground text-sm">Taramani, Chennai</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
        <a
          href="https://wa.me/918700535811"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-3.5 rounded-xl font-semibold hover:bg-accent/90 transition shadow-lg shadow-accent/25"
        >
          <MessageCircle className="w-5 h-5" /> WhatsApp Us
        </a>
        <a
          href="tel:8700535811"
          className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-xl font-semibold hover:bg-primary/90 transition shadow-lg shadow-primary/25"
        >
          <Phone className="w-5 h-5" /> Call Now
        </a>
      </div>
    </div>
  </section>
);

export default ContactSection;
