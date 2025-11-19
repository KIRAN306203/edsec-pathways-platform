import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Clock, Award } from 'lucide-react';
import { Course } from '@/data/courses';

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title}
          className="w-full h-full object-cover"
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
      <CardFooter>
        <Link to={`/course/${course.id}`} className="w-full">
          <Button className="w-full bg-gradient-primary hover:opacity-90">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
