import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CourseCard } from "@/components/CourseCard";
import { 
  BookOpen, 
  Trophy, 
  Clock, 
  TrendingUp,
  Play,
  Bell,
  Calendar,
  Users
} from "lucide-react";

const enrolledCourses = [
  {
    id: "1",
    title: "Full-Stack Web Development",
    description: "Master React, Node.js, and MongoDB to build modern web applications.",
    instructor: "John Smith",
    duration: "12 weeks",
    studentsCount: 2540,
    rating: 4.8,
    price: 99,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=200&fit=crop",
    level: "Intermediate" as const,
    category: "Web Development",
    progress: 75,
    enrolled: true
  },
  {
    id: "2",
    title: "Data Science with Python",
    description: "Learn data analysis, machine learning, and visualization with Python.",
    instructor: "Sarah Johnson",
    duration: "16 weeks",
    studentsCount: 1820,
    rating: 4.9,
    price: 129,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop",
    level: "Beginner" as const,
    category: "Data Science",
    progress: 45,
    enrolled: true
  }
];

const stats = [
  {
    title: "Courses in Progress",
    value: "3",
    icon: BookOpen,
    description: "+1 from last month",
    trend: "up"
  },
  {
    title: "Certificates Earned",
    value: "12",
    icon: Trophy,
    description: "+2 this month",
    trend: "up"
  },
  {
    title: "Study Hours",
    value: "127",
    icon: Clock,
    description: "This month",
    trend: "neutral"
  },
  {
    title: "Learning Streak",
    value: "15 days",
    icon: TrendingUp,
    description: "Keep it up!",
    trend: "up"
  }
];

const upcomingAssignments = [
  {
    title: "React Project Submission",
    course: "Full-Stack Web Development",
    dueDate: "Dec 28, 2024",
    priority: "high" as const
  },
  {
    title: "Data Analysis Quiz",
    course: "Data Science with Python",
    dueDate: "Dec 30, 2024",
    priority: "medium" as const
  },
  {
    title: "UI Design Review",
    course: "UI/UX Design Fundamentals",
    dueDate: "Jan 2, 2025",
    priority: "low" as const
  }
];

const recentActivity = [
  {
    type: "lesson",
    title: "Completed: Advanced React Hooks",
    course: "Full-Stack Web Development",
    time: "2 hours ago"
  },
  {
    type: "quiz",
    title: "Scored 95% on JavaScript Quiz",
    course: "Full-Stack Web Development",
    time: "1 day ago"
  },
  {
    type: "discussion",
    title: "Posted in Community Forum",
    course: "Data Science with Python",
    time: "2 days ago"
  }
];

export default function Dashboard() {
  return (
    <Layout>
      <div className="min-h-screen py-8 px-4">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Welcome back, John!</h1>
            <p className="text-xl text-muted-foreground">
              Continue your learning journey and track your progress.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <stat.icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className={`text-xs ${
                    stat.trend === 'up' ? 'text-success' : 
                    stat.trend === 'down' ? 'text-destructive' : 
                    'text-muted-foreground'
                  }`}>
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Continue Learning */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Play className="w-5 h-5" />
                    <span>Continue Learning</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {enrolledCourses.map((course) => (
                      <div key={course.id} className="flex items-center space-x-4 p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-20 h-12 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h3 className="font-medium mb-1">{course.title}</h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            by {course.instructor}
                          </p>
                          <div className="flex items-center space-x-2">
                            <Progress value={course.progress} className="flex-1 h-2" />
                            <span className="text-sm text-muted-foreground">
                              {course.progress}%
                            </span>
                          </div>
                        </div>
                        <Button size="sm">Continue</Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className={`w-2 h-2 rounded-full mt-2 ${
                          activity.type === 'lesson' ? 'bg-success' :
                          activity.type === 'quiz' ? 'bg-warning' :
                          'bg-info'
                        }`} />
                        <div className="flex-1">
                          <p className="font-medium">{activity.title}</p>
                          <p className="text-sm text-muted-foreground">
                            {activity.course} • {activity.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Upcoming Assignments */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5" />
                    <span>Upcoming</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingAssignments.map((assignment, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <p className="font-medium text-sm">{assignment.title}</p>
                            <p className="text-xs text-muted-foreground">
                              {assignment.course}
                            </p>
                          </div>
                          <Badge 
                            variant={
                              assignment.priority === 'high' ? 'destructive' :
                              assignment.priority === 'medium' ? 'default' :
                              'secondary'
                            }
                            className="text-xs"
                          >
                            {assignment.priority}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Due: {assignment.dueDate}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start" variant="outline">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Browse Courses
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Users className="w-4 h-4 mr-2" />
                    Join Discussion
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Trophy className="w-4 h-4 mr-2" />
                    View Certificates
                  </Button>
                </CardContent>
              </Card>

              {/* Notifications */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Bell className="w-5 h-5" />
                    <span>Notifications</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="p-3 bg-info/10 border-l-4 border-info rounded">
                      <p className="font-medium">New lesson available</p>
                      <p className="text-muted-foreground">Advanced React Patterns is now live</p>
                    </div>
                    <div className="p-3 bg-warning/10 border-l-4 border-warning rounded">
                      <p className="font-medium">Assignment due soon</p>
                      <p className="text-muted-foreground">React project due in 2 days</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}