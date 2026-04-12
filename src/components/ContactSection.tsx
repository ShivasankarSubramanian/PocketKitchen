import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <div className="mb-14 text-center">
        <span className="text-sm font-semibold uppercase tracking-widest text-primary">Get in Touch</span>
        <h2 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-5xl">
          Contact <span className="text-primary">Pocket Kitchen</span>
        </h2>
      </div>

      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-5">
        <div className="grid gap-6 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-1">
          <a
            href="tel:8700535811"
            className="group rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary/50"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition group-hover:bg-primary/20">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-1 font-heading text-xl font-semibold text-foreground">Phone</h3>
            <p className="text-sm text-muted-foreground">8700535811</p>
          </a>

          <a
            href="mailto:pocketkitchen@gmail.com"
            className="group rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary/50"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition group-hover:bg-primary/20">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-1 font-heading text-xl font-semibold text-foreground">Email</h3>
            <p className="break-all text-sm text-muted-foreground">pocketkitchen@gmail.com</p>
          </a>

          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-1 font-heading text-xl font-semibold text-foreground">Location</h3>
            <p className="text-sm text-muted-foreground">Taramani, Chennai</p>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border bg-card lg:col-span-3">
          <iframe
            title="Pocket Kitchen location map"
            src="https://www.google.com/maps?q=Taramani,Chennai&output=embed"
            className="h-[380px] w-full md:h-[430px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
        <a
          href="https://wa.me/918700535811"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-xl bg-accent px-8 py-3.5 font-semibold text-accent-foreground shadow-lg shadow-accent/25 transition hover:bg-accent/90"
        >
          <MessageCircle className="h-5 w-5" /> WhatsApp
        </a>
        <a
          href="tel:8700535811"
          className="flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3.5 font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition hover:bg-primary/90"
        >
          <Phone className="h-5 w-5" /> Call Now
        </a>
      </div>
    </div>
  </section>
);

export default ContactSection;
