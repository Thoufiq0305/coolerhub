import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-cooler-600 font-heading font-bold text-2xl">
            Cooler<span className="text-cooler-400">Hub</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="font-medium hover:text-cooler-600 transition-colors"
            onClick={() => window.scrollTo(0, 0)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="font-medium hover:text-cooler-600 transition-colors"
            onClick={() => window.scrollTo(0, 0)}
          >
            About Us
          </Link>
          <Link
            to="/services"
            className="font-medium hover:text-cooler-600 transition-colors"
            onClick={() => window.scrollTo(0, 0)}
          >
            Services
          </Link>
          {/* <Link to="/sale" className="font-medium hover:text-cooler-600 transition-colors">Sale</Link> */}
          <Link
            to="/contact"
            className="font-medium hover:text-cooler-600 transition-colors"
            onClick={() => window.scrollTo(0, 0)}
          >
            Contact Us
          </Link>
          <Button className="btn-primary">Get Service Now</Button>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-cooler-600"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg animate-slide-in">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <Link
              to="/"
              className="font-medium hover:text-cooler-600 transition-colors py-2"
              onClick={() => {
                toggleMobileMenu();
                window.scrollTo(0, 0);
              }}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="font-medium hover:text-cooler-600 transition-colors py-2"
              onClick={() => {
                toggleMobileMenu();
                window.scrollTo(0, 0);
              }}
            >
              About Us
            </Link>
            <Link
              to="/services"
              className="font-medium hover:text-cooler-600 transition-colors py-2"
              onClick={() => {
                toggleMobileMenu();
                window.scrollTo(0, 0);
              }}
            >
              Services
            </Link>
            {/* <Link to="/sale" className="font-medium hover:text-cooler-600 transition-colors py-2" onClick={toggleMobileMenu}>Sale</Link> */}
            <Link
              to="/contact"
              className="font-medium hover:text-cooler-600 transition-colors py-2"
              onClick={() => {
                toggleMobileMenu();
                window.scrollTo(0, 0);
              }}
            >
              Contact Us
            </Link>
            <Button className="btn-primary w-full">Get Service Now</Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
