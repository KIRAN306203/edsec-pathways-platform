import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Award, CheckCircle2 } from 'lucide-react';
import { courses } from '@/data/courses';

const CourseDetail = () => {
  const { courseId } = useParams();
  const course = courses.find(c => c.id === courseId);

  if (!course) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Course Not Found</h1>
          <Link to="/courses">
            <Button className="bg-gradient-primary hover:opacity-90">
              Back to Courses
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Course Header */}
            <div className="mb-12">
              <div className="flex items-center space-x-4 mb-4">
                <span className="inline-flex items-center space-x-1 text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                  <Clock className="h-4 w-4" />
                  <span>{course.duration}</span>
                </span>
                <span className="inline-flex items-center space-x-1 text-sm bg-secondary/10 text-secondary px-3 py-1 rounded-full">
                  <Award className="h-4 w-4" />
                  <span>{course.type}</span>
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{course.title}</h1>
              <p className="text-xl text-muted-foreground">{course.description}</p>
            </div>

            {/* Course Description */}
            {course.detailedDescription && (
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">About This Course</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {course.detailedDescription}
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Key Features */}
            <Card className="mb-8">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Certificate Info */}
            <Card className="mb-8 bg-gradient-primary text-primary-foreground">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <Award className="h-8 w-8 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-2">MSME Certified Completion Certificate</h2>
                    <p className="opacity-90">
                      Upon successful completion of this {course.category === 'main' ? 'internship program' : 'course'}, 
                      you will receive an MSME certified completion certificate recognized by industry leaders across India.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="text-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                  Apply Now
                </Button>
              </Link>
              <p className="text-sm text-muted-foreground mt-4">
                Have questions? Contact us for more information
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default CourseDetail;
