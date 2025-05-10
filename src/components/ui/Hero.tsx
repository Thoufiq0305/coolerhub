
import React from 'react';
import { Button } from "@/components/ui/button";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage: string;
  overlay?: boolean;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  backgroundImage,
  overlay = true
}) => {
  return (
    <div 
      className="relative h-[80vh] min-h-[500px] flex items-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {overlay && (
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      )}
      
      <div className="container-custom relative z-10 text-white">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="heading-xl mb-4">{title}</h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100">{subtitle}</p>
          <Button asChild size="lg" className="btn-primary">
            <a href={ctaLink}>{ctaText}</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
