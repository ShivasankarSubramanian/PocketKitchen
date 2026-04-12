import { MessageCircle, Phone } from "lucide-react";

const FloatingButtons = () => (
  <>
    <a
      href="https://wa.me/918700535811"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-accent text-accent-foreground p-4 rounded-full shadow-2xl shadow-accent/30 hover:scale-110 transition-transform animate-float"
      aria-label="WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
    <a
      href="tel:8700535811"
      className="fixed bottom-6 left-6 z-50 bg-primary text-primary-foreground p-4 rounded-full shadow-2xl shadow-primary/30 hover:scale-110 transition-transform md:hidden"
      aria-label="Call"
    >
      <Phone className="w-6 h-6" />
    </a>
  </>
);

export default FloatingButtons;
