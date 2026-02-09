import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import logo from '@/assets/edsec-logo-new.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Edsec Innovations Logo" className="h-12 w-auto object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
              >
                <Button
                  className={
                    isActive(link.path) 
                      ? 'bg-[hsl(220,85%,20%)] text-white hover:bg-[hsl(220,85%,20%)]/90 shadow-lg' 
                      : 'bg-gradient-primary text-white hover:opacity-90'
                  }
                >
                  {link.name}
                </Button>
              </Link>
            ))}
            <Link to="/internship">
              <Button className={
                isActive('/internship')
                  ? 'bg-[hsl(220,85%,20%)] text-white hover:bg-[hsl(220,85%,20%)]/90 shadow-lg'
                  : 'bg-gradient-primary text-white hover:opacity-90'
              }>
                Internship Programs
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
              >
                <Button
                  className={`w-full ${
                    isActive(link.path)
                      ? 'bg-[hsl(220,85%,20%)] text-white hover:bg-[hsl(220,85%,20%)]/90 shadow-lg'
                      : 'bg-gradient-primary text-white hover:opacity-90'
                  }`}
                >
                  {link.name}
                </Button>
              </Link>
            ))}
            <Link to="/internship" onClick={() => setIsOpen(false)}>
              <Button className={`w-full ${
                isActive('/internship')
                  ? 'bg-[hsl(220,85%,20%)] text-white hover:bg-[hsl(220,85%,20%)]/90 shadow-lg'
                  : 'bg-gradient-primary text-white hover:opacity-90'
              }`}>
                Internship Programs
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
