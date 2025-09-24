import { useState } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Play, 
  Clock, 
  Users, 
  Star, 
  BookOpen, 
  Download,
  CheckCircle,
  Lock,
  FileText,
  MessageSquare,
  Award,
  ChevronRight
} from "lucide-react";

// Mock course data - in real app this would come from API
const courseData = {
  id: "1",
  title: "Full-Stack Web Development",
  description: "Master React, Node.js, and MongoDB to build modern web applications from scratch. This comprehensive course covers everything from frontend development with React to backend APIs and database management.",
  instructor: {
    name: "John Smith",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    bio: "Senior Full-Stack Developer with 10+ years of experience at Google and Meta. Passionate about teaching and helping developers grow their careers.",
    rating: 4.9,
    students: 15000
  },
  duration: "12 weeks",
  studentsCount: 2540,
  rating: 4.8,
  price: 99,
  image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
  level: "Intermediate",
  category: "Web Development",
  enrolled: true,
  progress: 75,
  totalLessons: 48,
  completedLessons: 36,
  modules: [
    {
      id: 1,
      title: "Introduction to Web Development",
      lessons: [
        { id: 1, title: "What is Full-Stack Development?", duration: "15 min", completed: true, type: "video" },
        { id: 2, title: "Setting up Development Environment", duration: "20 min", completed: true, type: "video" },
        { id: 3, title: "HTML & CSS Fundamentals", duration: "45 min", completed: true, type: "video" },
        { id: 4, title: "Quiz: Web Development Basics", duration: "10 min", completed: true, type: "quiz" }
      ]
    },
    {
      id: 2,
      title: "JavaScript Fundamentals",
      lessons: [
        { id: 5, title: "Variables and Data Types", duration: "30 min", completed: true, type: "video" },
        { id: 6, title: "Functions and Scope", duration: "35 min", completed: true, type: "video" },
        { id: 7, title: "DOM Manipulation", duration: "40 min", completed: true, type: "video" },
        { id: 8, title: "Async JavaScript", duration: "50 min", completed: false, type: "video", current: true }
      ]
    },
    {
      id: 3,
      title: "React Development",
      lessons: [
        { id: 9, title: "Introduction to React", duration: "25 min", completed: false, type: "video" },
        { id: 10, title: "Components and JSX", duration: "30 min", completed: false, type: "video" },
        { id: 11, title: "State and Props", duration: "35 min", completed: false, type: "video" },
        { id: 12, title: "Project: Todo App", duration: "60 min", completed: false, type: "project" }
      ]
    }
  ],
  skills: ["React", "Node.js", "MongoDB", "JavaScript", "HTML/CSS", "RESTful APIs"],
  prerequisites: ["Basic HTML/CSS knowledge", "Basic JavaScript understanding"],
  whatYouWillLearn: [
    "Build modern web applications with React",
    "Create RESTful APIs with Node.js and Express",
    "Work with MongoDB database",
    "Implement user authentication",
    "Deploy applications to production",
    "Follow industry best practices"
  ]
};

export default function Course() {
  const { id } = useParams();
  const [activeLesson, setActiveLesson] = useState(8);

  const currentLesson = courseData.modules
    .flatMap(module => module.lessons)
    .find(lesson => lesson.id === activeLesson);

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-12 px-4 bg-gradient-secondary">
          <div className="mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center space-x-2">
                  <Badge variant="outline">{courseData.category}</Badge>
                  <Badge variant="secondary">{courseData.level}</Badge>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold">{courseData.title}</h1>
                
                <p className="text-lg text-muted-foreground">{courseData.description}</p>
                
                <div className="flex items-center space-x-6 text-sm">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{courseData.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{courseData.studentsCount.toLocaleString()} students</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>{courseData.rating} ({courseData.studentsCount.toLocaleString()} reviews)</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <BookOpen className="w-4 h-4" />
                    <span>{courseData.totalLessons} lessons</span>
                  </div>
                </div>
                
                {courseData.enrolled && (
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Course Progress</span>
                      <span className="text-sm font-medium">{courseData.progress}% complete</span>
                    </div>
                    <Progress value={courseData.progress} className="h-2" />
                  </div>
                )}
              </div>
              
              <div>
                <Card>
                  <CardContent className="p-6">
                    <img
                      src={courseData.image}
                      alt={courseData.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    
                    {courseData.enrolled ? (
                      <div className="space-y-4">
                        <Button className="w-full bg-gradient-primary" size="lg">
                          <Play className="w-5 h-5 mr-2" />
                          Continue Learning
                        </Button>
                        <div className="text-center text-sm text-muted-foreground">
                          Next: {currentLesson?.title}
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="text-center">
                          <span className="text-3xl font-bold">${courseData.price}</span>
                        </div>
                        <Button className="w-full bg-gradient-primary" size="lg">
                          Enroll Now
                        </Button>
                        <p className="text-xs text-center text-muted-foreground">
                          30-day money-back guarantee
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Course Content */}
        <section className="py-12 px-4">
          <div className="mx-auto max-w-7xl">
            <Tabs defaultValue="curriculum" className="space-y-8">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="instructor">Instructor</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="resources">Resources</TabsTrigger>
              </TabsList>

              <TabsContent value="curriculum" className="space-y-6">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h2 className="text-2xl font-bold mb-6">Course Curriculum</h2>
                    <div className="space-y-4">
                      {courseData.modules.map((module) => (
                        <Card key={module.id}>
                          <CardHeader className="pb-3">
                            <CardTitle className="text-lg">
                              Module {module.id}: {module.title}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-2">
                              {module.lessons.map((lesson) => (
                                <div
                                  key={lesson.id}
                                  className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-colors ${
                                    lesson.current
                                      ? "bg-primary/10 border-primary"
                                      : lesson.completed
                                      ? "bg-success/10 border-success/20"
                                      : "hover:bg-accent"
                                  }`}
                                  onClick={() => setActiveLesson(lesson.id)}
                                >
                                  <div className="flex items-center space-x-3">
                                    {lesson.completed ? (
                                      <CheckCircle className="w-5 h-5 text-success" />
                                    ) : lesson.current ? (
                                      <Play className="w-5 h-5 text-primary" />
                                    ) : (
                                      <Lock className="w-5 h-5 text-muted-foreground" />
                                    )}
                                    <div>
                                      <p className="font-medium">{lesson.title}</p>
                                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                        <span>{lesson.type}</span>
                                        <span>•</span>
                                        <span>{lesson.duration}</span>
                                      </div>
                                    </div>
                                  </div>
                                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>What You'll Learn</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          {courseData.whatYouWillLearn.map((item, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>Skills You'll Gain</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {courseData.skills.map((skill) => (
                            <Badge key={skill} variant="outline">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="instructor">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-6">
                      <Avatar className="w-24 h-24">
                        <AvatarImage src={courseData.instructor.avatar} />
                        <AvatarFallback>{courseData.instructor.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2">{courseData.instructor.name}</h3>
                        <div className="flex items-center space-x-4 mb-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span>{courseData.instructor.rating} rating</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="w-4 h-4" />
                            <span>{courseData.instructor.students.toLocaleString()} students</span>
                          </div>
                        </div>
                        <p className="text-muted-foreground">{courseData.instructor.bio}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews">
                <div className="text-center py-16">
                  <MessageSquare className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Student Reviews</h3>
                  <p className="text-muted-foreground">
                    Reviews and ratings from students will appear here.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="resources">
                <div className="space-y-4">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <FileText className="w-5 h-5 text-muted-foreground" />
                          <div>
                            <p className="font-medium">Course Materials</p>
                            <p className="text-sm text-muted-foreground">PDF guides and reference materials</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Award className="w-5 h-5 text-muted-foreground" />
                          <div>
                            <p className="font-medium">Certificate Template</p>
                            <p className="text-sm text-muted-foreground">Available upon course completion</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" disabled>
                          <Lock className="w-4 h-4 mr-2" />
                          Locked
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </div>
    </Layout>
  );
}