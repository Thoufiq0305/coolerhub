import React from "react";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage: string;
  overlay?: boolean;
  whatsappText?: string;
  whatsappLink?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  backgroundImage,
  overlay = true,
  whatsappText,
  whatsappLink,
}) => {
  return (
    <div
      className="relative h-[80vh] min-h-[500px] flex items-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {overlay && (
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      )}

      <div className="container-custom relative z-10 text-white">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="heading-xl mb-4">{title}</h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100">{subtitle}</p>

          <div className="flex flex-wrap gap-4">
            {ctaLink && (
              <Button
                asChild
                size="lg"
                className="btn-primary flex items-center gap-2"
              >
                <a href={ctaLink}>
                  <Phone size={18} />
                  {ctaText}
                </a>
              </Button>
            )}

            {whatsappLink && (
              <Button
                asChild
                size="lg"
                className="flex items-center gap-2 bg-white text-green-600 border border-green-600 hover:bg-green-50"
              >
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={18} />
                  {whatsappText}
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
