import { MessageCircle } from "lucide-react";
import logo from "@/assets/brand-log.jpeg";

const Footer = () => (
  <footer className="bg-card border-t border-border py-14">
    <div className="container mx-auto px-4">
      
      {/* Top Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        
        {/* Left - Brand */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Pockeat Kitchen"
              className="h-12 w-12 rounded-lg object-cover"
            />
            <h3 className="font-heading text-xl font-bold text-primary">
              Pockeat Kitchen
            </h3>
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed">
            Healthy Food at Pockeat Price
          </p>

          <p className="text-muted-foreground text-sm">
            Taramani, Chennai
          </p>
        </div>

        {/* Middle - Links */}
        <div className="flex flex-col gap-3 md:items-center">
          <h4 className="font-heading font-semibold text-foreground">
            Quick Links
          </h4>

          <nav className="flex flex-col gap-2">
            {["Home", "About", "Menu", "Gallery", "Contact"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="text-muted-foreground text-sm hover:text-primary transition"
              >
                {l}
              </a>
            ))}
          </nav>
        </div>

        {/* Right - Contact */}
        <div className="flex flex-col gap-4 md:items-end">
          <h4 className="font-heading font-semibold text-foreground">
            Connect
          </h4>

          <a
            href="https://wa.me/918700535811"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>

          <div className="bg-primary/10 text-primary text-xs font-semibold px-4 py-2 rounded-full">
             🔥 Live on Zomato • Swiggy Coming Soon
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-border mt-10 pt-6 text-center text-muted-foreground text-xs">
        © {new Date().getFullYear()} Pockeat Kitchen. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;