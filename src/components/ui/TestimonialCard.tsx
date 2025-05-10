
import React from 'react';

interface TestimonialCardProps {
  name: string;
  role: string;
  testimonial: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, testimonial, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
      <div className="flex items-center mb-4">
        <img 
          src={image} 
          alt={name} 
          className="w-14 h-14 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-gray-500 text-sm">{role}</p>
        </div>
      </div>
      <p className="text-gray-600 italic">{testimonial}</p>
    </div>
  );
};

export default TestimonialCard;
