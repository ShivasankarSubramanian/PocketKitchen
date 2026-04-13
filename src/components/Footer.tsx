import { MessageCircle } from "lucide-react";
import logo from "@/assets/brand-log.jpeg";

const Footer = () => (
  <footer className="bg-card border-t border-border py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src={logo} alt="Pocket Kitchen" className="h-10 w-auto rounded-lg" />
            <h3 className="font-heading text-2xl font-bold text-primary">Pocket Kitchen</h3>
          </div>
          <p className="text-muted-foreground text-sm">Healthy Food at Pocket Price</p>
          <p className="text-muted-foreground text-sm mt-2">Taramani, Chennai</p>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-foreground mb-3">Quick Links</h4>
          <nav className="flex flex-col gap-2">
            {["Home", "About", "Menu", "Gallery", "Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="text-muted-foreground text-sm hover:text-primary transition">
                {l}
              </a>
            ))}
          </nav>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-foreground mb-3">Connect</h4>
          <a
            href="https://wa.me/918700535811"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground text-sm hover:text-primary transition"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </a>
          <div className="mt-4 inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1.5 rounded-full">
            🟢 Live on Zomato &nbsp;•&nbsp; Swiggy Coming Soon
          </div>
        </div>
      </div>
      <div className="border-t border-border pt-6 text-center text-muted-foreground text-xs">
        © {new Date().getFullYear()} Pocket Kitchen. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
