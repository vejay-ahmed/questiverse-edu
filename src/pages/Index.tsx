import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "@/components/Layout";
import { CourseCard } from "@/components/CourseCard";
import heroImage from "@/assets/hero-learning.jpg";
import { 
  GraduationCap, 
  Users, 
  BookOpen, 
  Trophy,
  ArrowRight,
  Play,
  CheckCircle,
  Star
} from "lucide-react";

const featuredCourses = [
  {
    id: "1",
    title: "Full-Stack Web Development",
    description: "Master React, Node.js, and MongoDB to build modern web applications from scratch.",
    instructor: "John Smith",
    duration: "12 weeks",
    studentsCount: 2540,
    rating: 4.8,
    price: 99,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=200&fit=crop",
    level: "Intermediate" as const,
    category: "Web Development"
  },
  {
    id: "2",
    title: "Data Science with Python",
    description: "Learn data analysis, machine learning, and visualization with Python and popular libraries.",
    instructor: "Sarah Johnson",
    duration: "16 weeks",
    studentsCount: 1820,
    rating: 4.9,
    price: 129,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop",
    level: "Beginner" as const,
    category: "Data Science"
  },
  {
    id: "3",
    title: "Mobile App Development",
    description: "Build native mobile apps for iOS and Android using React Native and modern development practices.",
    instructor: "Mike Chen",
    duration: "10 weeks",
    studentsCount: 980,
    rating: 4.7,
    price: 0,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=200&fit=crop",
    level: "Advanced" as const,
    category: "Mobile Development"
  }
];

const stats = [
  { icon: Users, label: "Active Students", value: "50,000+" },
  { icon: BookOpen, label: "Courses", value: "500+" },
  { icon: GraduationCap, label: "Instructors", value: "200+" },
  { icon: Trophy, label: "Certificates Issued", value: "25,000+" },
];

const features = [
  {
    icon: Play,
    title: "Interactive Learning",
    description: "Engage with hands-on projects and coding challenges"
  },
  {
    icon: Users,
    title: "Expert Mentors",
    description: "Get guidance from industry professionals"
  },
  {
    icon: CheckCircle,
    title: "Certified Programs",
    description: "Earn recognized certificates upon completion"
  },
  {
    icon: Star,
    title: "Community Support",
    description: "Join a thriving community of learners"
  }
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Students learning together" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transform Your Career with
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                World-Class Education
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Join thousands of learners mastering in-demand skills through our comprehensive 
              online courses designed by industry experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary text-lg px-8">
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Link to="/courses">
                <Button variant="outline" size="lg" className="text-lg px-8">
                  Explore Courses
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg mb-4">
                  <stat.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="text-2xl md:text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Courses
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our most popular courses that have helped thousands of students 
              advance their careers.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/courses">
              <Button variant="outline" size="lg">
                View All Courses <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose EduPlatform?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We provide everything you need to succeed in your learning journey.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg mb-4">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Learning?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join our community of learners and take the first step towards your dream career.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary text-lg px-8">
              Create Account
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              Sign In
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}