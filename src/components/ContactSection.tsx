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

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <a
          href="tel:8700535811"
          className="bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
        >
          <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition">
            <Phone className="w-7 h-7 text-primary" />
          </div>
          <h3 className="font-heading font-semibold text-foreground mb-2 text-lg">Phone</h3>
          <p className="text-muted-foreground">8700535811</p>
        </a>

        <a
          href="mailto:pockeatkitchen@gmail.com"
          className="bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
        >
          <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition">
            <Mail className="w-7 h-7 text-primary" />
          </div>
          <h3 className="font-heading font-semibold text-foreground mb-2 text-lg">Email</h3>
          <p className="text-muted-foreground text-sm break-all">pockeatkitchen@gmail.com</p>
        </a>

        <div className="bg-card border border-border rounded-2xl p-8 text-center group">
          <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
            <MapPin className="w-7 h-7 text-primary" />
          </div>
          <h3 className="font-heading font-semibold text-foreground mb-2 text-lg">Location</h3>
          <p className="text-muted-foreground">Taramani, Chennai</p>
        </div>
      </div>

      {/* Google Map */}
      <div className="max-w-4xl mx-auto mb-10 rounded-2xl overflow-hidden border border-border shadow-lg">
        <iframe
          title="Pocket Kitchen Location - Taramani, Chennai"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.747!2d80.2417!3d12.9862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d9f6b8f3e0d%3A0x3c0e0e0e0e0e0e0e!2sTaramani%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
        />
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a
          href="https://wa.me/918700535811"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-3.5 rounded-xl font-semibold hover:bg-accent/90 hover:scale-105 transition-all duration-300 shadow-lg shadow-accent/25"
        >
          <MessageCircle className="w-5 h-5" /> WhatsApp Us
        </a>
        <a
          href="tel:8700535811"
          className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-xl font-semibold hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/25"
        >
          <Phone className="w-5 h-5" /> Call Now
        </a>
      </div>
    </div>
  </section>
);

export default ContactSection;
