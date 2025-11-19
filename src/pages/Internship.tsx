import { Calendar, Briefcase, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Internship = () => {
  const internshipPrograms = [
    {
      id: 'value-added',
      duration: '1 Month',
      title: '1-Month Internship',
      subtitle: 'Value Added Course',
      description: 'Intensive program designed for quick skill acquisition and foundational knowledge building',
      icon: Calendar,
      features: [
        'Focused skill development',
        'Certificate upon completion',
        'Basic project work',
        'Industry insights',
      ],
      popular: false,
    },
    {
      id: '4-month',
      duration: '4 Months',
      title: '4-Month Internship',
      subtitle: 'Comprehensive Learning',
      description: 'In-depth program with extensive hands-on projects and mentorship',
      icon: Briefcase,
      features: [
        'Multiple real-world projects',
        'One-on-one mentorship',
        'Industry collaboration',
        'MSME certification',
        'Job placement support',
      ],
      popular: true,
    },
    {
      id: '6-month',
      duration: '6 Months',
      title: '6-Month Internship',
      subtitle: 'Professional Development',
      description: 'Complete professional training with advanced projects and career guidance',
      icon: Award,
      features: [
        'Advanced project portfolio',
        'Dedicated mentor support',
        'Industry networking events',
        'MSME certification',
        'Job placement assistance',
        'Interview preparation',
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Internship Programs
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              MSME-certified internships with hands-on projects and industry mentorship
            </p>
          </div>
        </div>
      </section>

      {/* Internship Duration Selection */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose Your Internship Duration
            </h2>
            <p className="text-muted-foreground text-lg">
              Select the program that best fits your learning goals and schedule
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {internshipPrograms.map((program) => {
              const IconComponent = program.icon;
              return (
                <Card 
                  key={program.id}
                  className={`relative p-8 hover:shadow-lg transition-all ${
                    program.popular ? 'border-2 border-primary' : ''
                  }`}
                >
                  {program.popular && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                        Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="flex flex-col items-center text-center mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{program.subtitle}</p>
                    <p className="text-muted-foreground">{program.description}</p>
                  </div>

                  <div className="space-y-3 mb-6">
                    {program.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0" />
                        <p className="text-sm">{feature}</p>
                      </div>
                    ))}
                  </div>

                  <Link to="/courses" className="block">
                    <Button 
                      className={`w-full ${
                        program.popular 
                          ? 'bg-gradient-primary hover:opacity-90' 
                          : 'bg-secondary hover:bg-secondary/80'
                      }`}
                    >
                      View Courses
                    </Button>
                  </Link>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link to="/contact">
              <Button size="lg" variant="outline">
                Have Questions? Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              What Makes Our Internships Special?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-background p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">MSME Certified</h3>
                <p className="text-muted-foreground">
                  Government-recognized certification that adds value to your resume
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Real Projects</h3>
                <p className="text-muted-foreground">
                  Work on actual industry projects to build your portfolio
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Expert Mentorship</h3>
                <p className="text-muted-foreground">
                  Learn directly from experienced industry professionals
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Career Support</h3>
                <p className="text-muted-foreground">
                  Get guidance for job placement and interview preparation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Internship;
