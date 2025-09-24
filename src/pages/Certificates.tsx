import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Trophy, 
  Download, 
  Share2, 
  Calendar,
  Award,
  BookOpen,
  ExternalLink,
  Star
} from "lucide-react";

const earnedCertificates = [
  {
    id: 1,
    title: "JavaScript Fundamentals",
    issuer: "EduPlatform",
    dateEarned: "November 15, 2024",
    credentialId: "JS-2024-001234",
    course: "JavaScript Fundamentals Course",
    instructor: "John Smith",
    grade: "A+",
    skills: ["JavaScript", "ES6+", "DOM Manipulation", "Async Programming"],
    verificationUrl: "https://verify.eduplatform.com/JS-2024-001234"
  },
  {
    id: 2,
    title: "React Development",
    issuer: "EduPlatform",
    dateEarned: "October 28, 2024",
    credentialId: "RC-2024-005678",
    course: "Full-Stack Web Development",
    instructor: "Sarah Johnson",
    grade: "A",
    skills: ["React", "JSX", "State Management", "Component Architecture"],
    verificationUrl: "https://verify.eduplatform.com/RC-2024-005678"
  }
];

const inProgressCertificates = [
  {
    id: 1,
    title: "Full-Stack Web Development",
    progress: 75,
    totalLessons: 48,
    completedLessons: 36,
    estimatedCompletion: "January 15, 2025",
    requirements: [
      { name: "Complete all lessons", completed: 36, total: 48 },
      { name: "Submit final project", completed: false },
      { name: "Pass final exam (80%+)", completed: false }
    ]
  },
  {
    id: 2,
    title: "Data Science with Python",
    progress: 45,
    totalLessons: 60,
    completedLessons: 27,
    estimatedCompletion: "February 20, 2025",
    requirements: [
      { name: "Complete all lessons", completed: 27, total: 60 },
      { name: "Complete 3 projects", completed: 1, total: 3 },
      { name: "Pass final exam (80%+)", completed: false }
    ]
  }
];

const availableCertificates = [
  {
    title: "Mobile App Development",
    description: "Learn to build native mobile applications with React Native",
    duration: "10 weeks",
    difficulty: "Advanced",
    enrolled: false
  },
  {
    title: "UI/UX Design Fundamentals",
    description: "Master the principles of user interface and user experience design",
    duration: "8 weeks",
    difficulty: "Beginner",
    enrolled: false
  }
];

export default function Certificates() {
  return (
    <Layout>
      <div className="min-h-screen py-8 px-4">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">My Certificates</h1>
            <p className="text-xl text-muted-foreground">
              Track your achievements and showcase your verified skills.
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold">{earnedCertificates.length}</p>
                    <p className="text-sm text-muted-foreground">Certificates Earned</p>
                  </div>
                  <Trophy className="w-8 h-8 text-warning" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold">{inProgressCertificates.length}</p>
                    <p className="text-sm text-muted-foreground">In Progress</p>
                  </div>
                  <BookOpen className="w-8 h-8 text-info" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold">{availableCertificates.length}</p>
                    <p className="text-sm text-muted-foreground">Available</p>
                  </div>
                  <Award className="w-8 h-8 text-success" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Earned Certificates */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Trophy className="w-6 h-6 mr-2 text-warning" />
              Earned Certificates
            </h2>
            
            {earnedCertificates.length > 0 ? (
              <div className="grid lg:grid-cols-2 gap-6">
                {earnedCertificates.map((cert) => (
                  <Card key={cert.id} className="border-2 border-warning/20 bg-gradient-to-br from-warning/5 to-transparent">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                            <Award className="w-6 h-6 text-primary-foreground" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{cert.title}</CardTitle>
                            <p className="text-sm text-muted-foreground">
                              Issued by {cert.issuer}
                            </p>
                          </div>
                        </div>
                        <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
                          <Star className="w-3 h-3 mr-1" />
                          {cert.grade}
                        </Badge>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Date Earned</p>
                          <p className="font-medium">{cert.dateEarned}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Credential ID</p>
                          <p className="font-mono text-xs">{cert.credentialId}</p>
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">Skills Verified</p>
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill) => (
                            <Badge key={skill} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t">
                        <div className="flex space-x-2">
                          <Button size="sm" className="bg-gradient-primary">
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </Button>
                          <Button size="sm" variant="outline">
                            <Share2 className="w-4 h-4 mr-2" />
                            Share
                          </Button>
                        </div>
                        <Button size="sm" variant="ghost">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Verify
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="text-center py-16">
                  <Trophy className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No certificates yet</h3>
                  <p className="text-muted-foreground mb-4">
                    Complete your first course to earn your first certificate!
                  </p>
                  <Button className="bg-gradient-primary">Browse Courses</Button>
                </CardContent>
              </Card>
            )}
          </section>

          {/* In Progress */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <BookOpen className="w-6 h-6 mr-2 text-info" />
              Certificates in Progress
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-6">
              {inProgressCertificates.map((cert) => (
                <Card key={cert.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>{cert.title}</CardTitle>
                      <Badge variant="outline" className="text-info border-info/50">
                        {cert.progress}% Complete
                      </Badge>
                    </div>
                    <Progress value={cert.progress} className="mt-2" />
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Progress</p>
                        <p className="font-medium">{cert.completedLessons} of {cert.totalLessons} lessons</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Est. Completion</p>
                        <p className="font-medium">{cert.estimatedCompletion}</p>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium mb-3">Requirements</p>
                      <div className="space-y-2">
                        {cert.requirements.map((req, index) => (
                          <div key={index} className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">{req.name}</span>
                            <div className="flex items-center space-x-2">
                              {typeof req.completed === 'boolean' ? (
                                <Badge variant={req.completed ? "default" : "secondary"} className="text-xs">
                                  {req.completed ? "✓" : "Pending"}
                                </Badge>
                              ) : (
                                <span className="text-xs">
                                  {req.completed}/{req.total}
                                </span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Button className="w-full" variant="outline">
                      Continue Learning
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Available Certificates */}
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Award className="w-6 h-6 mr-2 text-success" />
              Available Certificates
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-6">
              {availableCertificates.map((cert, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{cert.title}</h3>
                        <p className="text-muted-foreground text-sm">{cert.description}</p>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4 text-muted-foreground" />
                          <span>{cert.duration}</span>
                        </div>
                        <Badge 
                          variant={
                            cert.difficulty === "Beginner" ? "default" :
                            cert.difficulty === "Intermediate" ? "secondary" :
                            "destructive"
                          }
                        >
                          {cert.difficulty}
                        </Badge>
                      </div>
                      
                      <Button className="w-full bg-gradient-primary">
                        Enroll Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}