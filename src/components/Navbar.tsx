import { useState, useEffect } from "react";
import { Menu, X, Phone, ShoppingBag } from "lucide-react";
import logo from "@/assets/brand-log.jpeg";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <a href="#home" className="flex items-center gap-2">
          <img src={logo} alt="Pockeat Kitchen" className="h-16 md:h-16 w-auto rounded-lg" />
          {/* <span className="font-heading text-lg md:text-xl font-bold text-primary hidden sm:inline">
            Pockeat Kitchen
          </span> */}
        </a>

        <div className="hidden md:flex items-center gap-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <div className="flex items-center gap-3 ml-4 pl-4 border-l border-border">
            <a
              href="https://zomato.onelink.me/xqzv/62frd30f"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-orange-500 via-orange-500 to-orange-600 text-white px-6 py-3 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-orange-500/60 hover:scale-110 transition-all duration-300 shadow-md active:scale-95"
            >
              <ShoppingBag className="w-4 h-4" /> Order Now
            </a>
            <a
              href="tel:8700535811"
              className="flex items-center gap-2 bg-transparent border-2 border-foreground/20 text-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:border-foreground/40 hover:bg-foreground/5 transition-all duration-300"
            >
              <Phone className="w-4 h-4" /> Call
            </a>
          </div>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background/98 backdrop-blur-md border-t border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-foreground/80 hover:text-primary py-2 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://zomato.onelink.me/xqzv/62frd30f"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 via-orange-500 to-orange-600 text-white px-4 py-3 rounded-full font-semibold w-full shadow-md hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 active:scale-95"
            >
              <ShoppingBag className="w-4 h-4" /> Order Now
            </a>
            <a
              href="tel:8700535811"
              className="flex items-center justify-center gap-2 bg-transparent border-2 border-foreground/20 text-foreground px-4 py-3 rounded-full font-semibold w-full hover:border-foreground/40 hover:bg-foreground/5 transition-all duration-300"
            >
              <Phone className="w-4 h-4" /> Call
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
