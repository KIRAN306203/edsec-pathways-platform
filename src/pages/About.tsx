import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Users, Award, TrendingUp } from 'lucide-react';

const About = () => {
  const goals = [
    {
      icon: Award,
      title: 'Certified Excellence',
      description: 'Providing MSME certified internship opportunities that are recognized across industries'
    },
    {
      icon: Users,
      title: 'Real-World Experience',
      description: 'Offering hands-on project exposure with mentorship from industry experts'
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Building practical skills that accelerate career advancement and job readiness'
    },
    {
      icon: Target,
      title: 'Expanding Horizons',
      description: 'Growing into non-technical programs to serve diverse learning needs'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Edsec Innovations</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Empowering the next generation of tech professionals through certified training and real-world experience
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Edsec Innovations is an MSME-certified startup training institute headquartered in Bengaluru, 
                dedicated to transforming aspiring professionals into industry-ready experts.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We bridge the gap between academic learning and industry requirements through our comprehensive 
                internship programs that combine theoretical knowledge with practical, real-world project experience.
              </p>
            </div>

            {/* Our Goals */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12">Our Mission & Goals</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {goals.map((goal, index) => {
                  const Icon = goal.icon;
                  return (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardContent className="pt-6">
                        <div className="flex items-start space-x-4">
                          <div className="bg-primary/10 p-3 rounded-lg">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold mb-2">{goal.title}</h3>
                            <p className="text-muted-foreground">{goal.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Contact Information */}
            <Card className="bg-muted">
              <CardContent className="pt-6">
                <h2 className="text-3xl font-bold mb-6 text-center">Get In Touch</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold mb-2">Headquarters</h3>
                    <p className="text-muted-foreground">
                      #84, 2nd floor, Guniagrahara, Annapoorneshwari Layout<br />
                      Near ATD Provision Store, Lakshmi pura cross<br />
                      Shivakote Post, Bangalore - 89
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-bold mb-2">Phone</h3>
                    <p className="text-muted-foreground">
                      Main: 8660132700<br />
                      For Details: 9742848595 / 9353743485
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-bold mb-2">Email</h3>
                    <a 
                      href="mailto:edsecinnovations@gmail.com" 
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      edsecinnovations@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;
