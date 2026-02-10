import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import logo from '@/assets/edsec-logo-new.jpg';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Company */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src={logo} alt="Edsec Innovations Logo" className="w-8 h-8 object-contain" />
              <h3 className="text-lg font-bold">Edsec Innovations</h3>
            </div>
            <p className="text-sm opacity-90 mb-4">
              MSME certified training institute empowering students through certified internships and real-world projects. Building careers through hands-on learning and industry mentorship.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/share/1Ckk8LXs8B/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/edsecinnovations?utm_source=qr&igsh=NGg3aGllbTV0bnBr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://x.com/EdsecInnovation" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
                aria-label="X (Twitter)"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a 
                href="http://www.linkedin.com/in/edsec-innovations-848417392" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://youtube.com/@edsecinnovations?si=gp8I6-gbmDJif6yb" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="opacity-90 hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/courses" className="opacity-90 hover:text-secondary transition-colors">
                  Our Courses
                </Link>
              </li>
              <li>
                <Link to="/terms" className="opacity-90 hover:text-secondary transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="opacity-90 hover:text-secondary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Courses */}
          <div>
            <h3 className="text-lg font-bold mb-4">Popular Courses</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/course/data-science" className="opacity-90 hover:text-secondary transition-colors">
                  Data Science
                </Link>
              </li>
              <li>
                <Link to="/course/full-stack" className="opacity-90 hover:text-secondary transition-colors">
                  Full Stack Development
                </Link>
              </li>
              <li>
                <Link to="/course/data-analytics" className="opacity-90 hover:text-secondary transition-colors">
                  Data Analytics
                </Link>
              </li>
              <li>
                <Link to="/course/python-sql" className="opacity-90 hover:text-secondary transition-colors">
                  Python with SQL
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <p className="opacity-90">
                  #84, 2nd floor, Guniagrahara, Annapoorneshwari Layout, Near ATD Provision Store, Lakshmi pura cross, Shivakote Post, Bangalore -89
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <p className="opacity-90">8660132700</p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:edsecinnovations@gmail.com" className="opacity-90 hover:text-secondary transition-colors">
                  edsecinnovations@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-90">
          <p>© 2025 Edsec Innovations. All Rights Reserved by Edsec Innovations.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
