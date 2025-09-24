import { useState } from "react";
import { Layout } from "@/components/Layout";
import { CourseCard } from "@/components/CourseCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, Grid3X3, List } from "lucide-react";

const courses = [
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
    description: "Build native mobile apps for iOS and Android using React Native.",
    instructor: "Mike Chen",
    duration: "10 weeks",
    studentsCount: 980,
    rating: 4.7,
    price: 0,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=200&fit=crop",
    level: "Advanced" as const,
    category: "Mobile Development"
  },
  {
    id: "4",
    title: "UI/UX Design Fundamentals",
    description: "Master the principles of user interface and user experience design.",
    instructor: "Emma Wilson",
    duration: "8 weeks",
    studentsCount: 1250,
    rating: 4.6,
    price: 79,
    image: "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?w=400&h=200&fit=crop",
    level: "Beginner" as const,
    category: "Design"
  },
  {
    id: "5",
    title: "Machine Learning Basics",
    description: "Introduction to machine learning algorithms and practical applications.",
    instructor: "David Brown",
    duration: "14 weeks",
    studentsCount: 890,
    rating: 4.8,
    price: 149,
    image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=400&h=200&fit=crop",
    level: "Intermediate" as const,
    category: "Data Science"
  },
  {
    id: "6",
    title: "Cybersecurity Essentials",
    description: "Learn the fundamentals of cybersecurity and ethical hacking.",
    instructor: "Alex Rodriguez",
    duration: "12 weeks",
    studentsCount: 670,
    rating: 4.5,
    price: 119,
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=200&fit=crop",
    level: "Advanced" as const,
    category: "Security"
  }
];

const categories = ["All", "Web Development", "Data Science", "Mobile Development", "Design", "Security"];
const levels = ["All", "Beginner", "Intermediate", "Advanced"];

export default function Courses() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("popular");

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    const matchesLevel = selectedLevel === "All" || course.level === selectedLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "newest":
        return 0; // Would sort by date in real app
      default: // popular
        return b.studentsCount - a.studentsCount;
    }
  });

  return (
    <Layout>
      <div className="min-h-screen py-8 px-4">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Explore Courses</h1>
            <p className="text-xl text-muted-foreground">
              Discover your next learning adventure from our extensive course library.
            </p>
          </div>

          {/* Filters */}
          <div className="mb-8 space-y-4">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search courses, instructors, or topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Level" />
                  </SelectTrigger>
                  <SelectContent>
                    {levels.map(level => (
                      <SelectItem key={level} value={level}>{level}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[160px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex border border-border rounded-md">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className="rounded-r-none"
                  >
                    <Grid3X3 className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className="rounded-l-none"
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Active Filters */}
            <div className="flex flex-wrap gap-2">
              {selectedCategory !== "All" && (
                <Badge variant="secondary" className="px-3 py-1">
                  {selectedCategory}
                  <button
                    onClick={() => setSelectedCategory("All")}
                    className="ml-2 hover:text-destructive"
                  >
                    ×
                  </button>
                </Badge>
              )}
              {selectedLevel !== "All" && (
                <Badge variant="secondary" className="px-3 py-1">
                  {selectedLevel}
                  <button
                    onClick={() => setSelectedLevel("All")}
                    className="ml-2 hover:text-destructive"
                  >
                    ×
                  </button>
                </Badge>
              )}
              {searchTerm && (
                <Badge variant="secondary" className="px-3 py-1">
                  "{searchTerm}"
                  <button
                    onClick={() => setSearchTerm("")}
                    className="ml-2 hover:text-destructive"
                  >
                    ×
                  </button>
                </Badge>
              )}
            </div>
          </div>

          {/* Results */}
          <div className="mb-6">
            <p className="text-muted-foreground">
              Showing {sortedCourses.length} of {courses.length} courses
            </p>
          </div>

          {/* Course Grid */}
          <div className={
            viewMode === "grid" 
              ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6" 
              : "space-y-6"
          }>
            {sortedCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>

          {sortedCourses.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No courses found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
              <Button 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                  setSelectedLevel("All");
                }}
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}