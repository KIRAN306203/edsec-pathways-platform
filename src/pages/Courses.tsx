import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, BarChart3 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import CourseCard from '@/components/CourseCard';
import { courses } from '@/data/courses';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [durationFilter, setDurationFilter] = useState('all');

  const filterCourses = (category: 'main' | 'value-added') => {
    return courses
      .filter(c => c.category === category)
      .filter(c =>
        c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.features.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()))
      )
      .filter(c => {
        if (durationFilter === 'all') return true;
        if (durationFilter === '1-month') return c.duration.includes('1 Month');
        if (durationFilter === '4-6-months') return c.duration.includes('4-6');
        if (durationFilter === '6-months') return c.duration === '6 Months';
        return true;
      });
  };

  const mainCourses = filterCourses('main');
  const valueAddedCourses = filterCourses('value-added');

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

          {/* Search & Filters */}
          <div className="max-w-3xl mx-auto mb-10 flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search courses by name, skill, or keyword..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select value={durationFilter} onValueChange={setDurationFilter}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Duration" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Durations</SelectItem>
                <SelectItem value="1-month">1 Month</SelectItem>
                <SelectItem value="4-6-months">4-6 Months</SelectItem>
                <SelectItem value="6-months">6 Months</SelectItem>
              </SelectContent>
            </Select>
            <Link to="/compare">
              <Button variant="outline" className="w-full sm:w-auto gap-2">
                <BarChart3 className="h-4 w-4" /> Compare
              </Button>
            </Link>
          </div>

          <Tabs defaultValue="main" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 bg-background/60 backdrop-blur-sm p-1">
              <TabsTrigger value="main" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Internship Programs</TabsTrigger>
              <TabsTrigger value="value-added" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Value Added Courses</TabsTrigger>
            </TabsList>

            <TabsContent value="main" className="space-y-8 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mainCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
              {mainCourses.length === 0 && (
                <p className="text-center text-muted-foreground py-8">No courses found matching your criteria.</p>
              )}
            </TabsContent>

            <TabsContent value="value-added" className="space-y-8 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {valueAddedCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
              {valueAddedCourses.length === 0 && (
                <p className="text-center text-muted-foreground py-8">No courses found matching your criteria.</p>
              )}
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
