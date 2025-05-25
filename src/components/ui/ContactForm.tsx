
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { toast } from '@/components/ui/use-toast';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };
  
  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    
    if (!formData.service) newErrors.service = 'Please select a service';
    
    return newErrors;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "Your message has been sent. We'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block font-medium mb-1">
          Full Name*
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-cooler-300 focus:border-cooler-300 outline-none transition ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="John Doe"
        />
        {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name}</p>}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block font-medium mb-1">
            Email Address*
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-cooler-300 focus:border-cooler-300 outline-none transition ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="your@email.com"
          />
          {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
        </div>
        
        <div>
          <label htmlFor="phone" className="block font-medium mb-1">
            Phone Number*
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-cooler-300 focus:border-cooler-300 outline-none transition ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Phone Number"
          />
          {errors.phone && <p className="mt-1 text-red-500 text-sm">{errors.phone}</p>}
        </div>
      </div>
      
      <div>
        <label htmlFor="service" className="block font-medium mb-1">
          Service Required*
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className={`w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-cooler-300 focus:border-cooler-300 outline-none transition bg-white ${
            errors.service ? 'border-red-500' : 'border-gray-300'
          }`}
        >
          <option value="">Select a Service</option>
          <option value="ac">AC Service</option>
          <option value="fridge">Refrigerator Service</option>
          <option value="washingMachine">Washing Machine Service</option>
          <option value="waterPurifier">Water Purifier Service</option>
          <option value="microwave">Microwave Oven Service</option>
          <option value="airCooler">Air Cooler Service</option>
          <option value="heater">Heater Service</option>
          <option value="other">Other Appliance</option>
        </select>
        {errors.service && <p className="mt-1 text-red-500 text-sm">{errors.service}</p>}
      </div>
      
      <div>
        <label htmlFor="message" className="block font-medium mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-cooler-300 focus:border-cooler-300 outline-none transition"
          placeholder="Please provide details about your service requirement"
        ></textarea>
      </div>
      
      <Button 
        type="submit" 
        className="btn-primary w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Submit Request'}
      </Button>
    </form>
  );
};

export default ContactForm;
