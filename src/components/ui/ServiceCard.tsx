
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon }) => {
  return (
    <div className="service-card group">
      <div className="bg-cooler-50 p-4 rounded-full inline-block mb-4 group-hover:bg-cooler-100 transition-colors">
        <Icon className="h-8 w-8 text-cooler-600" />
      </div>
      <h3 className="heading-md mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
