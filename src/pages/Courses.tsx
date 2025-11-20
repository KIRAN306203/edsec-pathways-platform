import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import CourseCard from '@/components/CourseCard';
import { courses } from '@/data/courses';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Courses = () => {
  const mainCourses = courses.filter(c => c.category === 'main');
  const valueAddedCourses = courses.filter(c => c.category === 'value-added');

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="py-16 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Courses</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore our comprehensive range of MSME certified internship programs and value-added courses
            </p>
          </div>

          <Tabs defaultValue="main" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 bg-white/60 backdrop-blur-sm p-1">
              <TabsTrigger value="main" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Internship Programs</TabsTrigger>
              <TabsTrigger value="value-added" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Value Added Courses</TabsTrigger>
            </TabsList>

            <TabsContent value="main" className="space-y-8 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mainCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="value-added" className="space-y-8 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {valueAddedCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Courses;
