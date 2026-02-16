import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Clock, Award, Download } from 'lucide-react';
import { Course } from '@/data/courses';

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  const handleDownload = () => {
    if (!course.downloadBrochure) return;
    
    const link = document.createElement('a');
    link.href = course.downloadBrochure.url;
    link.download = course.downloadBrochure.filename;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-none group">
      <div className="relative h-48 overflow-hidden rounded-t-lg">
        <img 
          src={course.image} 
          alt={course.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center space-x-1 text-sm text-secondary">
            <Award className="h-4 w-4" />
            <span className="text-xs">{course.type}</span>
          </div>
        </div>
        <CardTitle className="text-xl">{course.title}</CardTitle>
        <CardDescription className="line-clamp-2">{course.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p className="text-sm font-semibold">Key Features:</p>
          <ul className="text-sm space-y-1">
            {course.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span className="text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Link to={`/course/${course.id}`} className="flex-1">
          <Button className="w-full bg-gradient-primary hover:opacity-90">
            View Details
          </Button>
        </Link>
        {course.downloadBrochure && (
          <Button 
            variant="outline" 
            size="icon"
            onClick={handleDownload}
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            title="Download Brochure (PDF)"
          >
            <Download className="h-4 w-4" />
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
