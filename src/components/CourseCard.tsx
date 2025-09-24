import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Clock, Users, Star, BookOpen } from "lucide-react";

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  studentsCount: number;
  rating: number;
  price: number;
  image: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  category: string;
  progress?: number;
  enrolled?: boolean;
}

export function CourseCard({
  id,
  title,
  description,
  instructor,
  duration,
  studentsCount,
  rating,
  price,
  image,
  level,
  category,
  progress,
  enrolled = false,
}: CourseCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden bg-card border-border">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
            {category}
          </Badge>
        </div>
        <div className="absolute top-3 right-3">
          <Badge 
            variant={level === "Beginner" ? "default" : level === "Intermediate" ? "secondary" : "destructive"}
            className="bg-background/80 backdrop-blur-sm"
          >
            {level}
          </Badge>
        </div>
      </div>

      <CardHeader className="pb-3">
        <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground">by {instructor}</p>
      </CardHeader>

      <CardContent className="pb-4">
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {description}
        </p>

        {enrolled && typeof progress === "number" && (
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-muted-foreground">Progress</span>
              <span className="text-sm font-medium">{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        )}

        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4" />
              <span>{studentsCount.toLocaleString()}</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span>{rating}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-0 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {price === 0 ? (
            <span className="text-lg font-bold text-success">Free</span>
          ) : (
            <span className="text-lg font-bold">${price}</span>
          )}
        </div>
        <div className="flex space-x-2">
          <Link to={`/course/${id}`}>
            <Button variant="outline" size="sm">
              <BookOpen className="w-4 h-4 mr-2" />
              View
            </Button>
          </Link>
          {!enrolled && (
            <Button size="sm" className="bg-gradient-primary">
              Enroll
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}