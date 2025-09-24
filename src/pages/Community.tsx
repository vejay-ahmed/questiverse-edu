import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  MessageSquare, 
  Heart, 
  Reply, 
  Search, 
  Plus, 
  TrendingUp,
  Users,
  Clock,
  BookOpen
} from "lucide-react";

const forumPosts = [
  {
    id: 1,
    title: "Best practices for React state management?",
    author: "Alex Johnson",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    category: "Web Development",
    course: "Full-Stack Web Development",
    content: "I'm working on a complex React application and wondering about the best approaches for state management. Should I use Redux, Context API, or something else?",
    replies: 12,
    likes: 24,
    timeAgo: "2 hours ago",
    tags: ["React", "State Management", "Redux"]
  },
  {
    id: 2,
    title: "Machine Learning project ideas for beginners",
    author: "Sarah Chen",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b900?w=40&h=40&fit=crop&crop=face",
    category: "Data Science",
    course: "Data Science with Python",
    content: "Looking for some beginner-friendly ML project ideas to add to my portfolio. Any suggestions?",
    replies: 8,
    likes: 15,
    timeAgo: "4 hours ago",
    tags: ["Machine Learning", "Python", "Projects"]
  },
  {
    id: 3,
    title: "Mobile app performance optimization tips",
    author: "Mike Rodriguez",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    category: "Mobile Development",
    course: "Mobile App Development",
    content: "My React Native app is running slowly on older devices. What are some effective optimization strategies?",
    replies: 15,
    likes: 31,
    timeAgo: "6 hours ago",
    tags: ["React Native", "Performance", "Mobile"]
  },
  {
    id: 4,
    title: "UI/UX design principles for developers",
    author: "Emma Wilson",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
    category: "Design",
    course: "UI/UX Design Fundamentals",
    content: "As a developer transitioning into design, what are the most important principles I should focus on first?",
    replies: 20,
    likes: 42,
    timeAgo: "1 day ago",
    tags: ["UI/UX", "Design Principles", "Career"]
  }
];

const studyGroups = [
  {
    id: 1,
    name: "React Developers Circle",
    description: "Weekly discussions on React best practices and new features",
    members: 1250,
    category: "Web Development",
    nextMeeting: "Tomorrow 7 PM EST"
  },
  {
    id: 2,
    name: "Data Science Study Group",
    description: "Collaborative learning and project discussions",
    members: 890,
    category: "Data Science",
    nextMeeting: "Friday 6 PM EST"
  },
  {
    id: 3,
    name: "Mobile Dev Meetup",
    description: "Mobile development tips, tricks, and networking",
    members: 650,
    category: "Mobile Development",
    nextMeeting: "Sunday 3 PM EST"
  }
];

const trendingTopics = [
  { name: "React 18", posts: 45 },
  { name: "Machine Learning", posts: 38 },
  { name: "TypeScript", posts: 32 },
  { name: "Mobile Development", posts: 28 },
  { name: "UI/UX Design", posts: 25 }
];

export default function Community() {
  const [newPost, setNewPost] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Layout>
      <div className="min-h-screen py-8 px-4">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Community Forum</h1>
            <p className="text-xl text-muted-foreground">
              Connect with fellow learners, share knowledge, and get help from our community.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <Tabs defaultValue="discussions" className="space-y-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <TabsList>
                    <TabsTrigger value="discussions">Discussions</TabsTrigger>
                    <TabsTrigger value="study-groups">Study Groups</TabsTrigger>
                    <TabsTrigger value="my-posts">My Posts</TabsTrigger>
                  </TabsList>
                  
                  <div className="flex gap-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input
                        placeholder="Search discussions..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 w-64"
                      />
                    </div>
                    <Button className="bg-gradient-primary">
                      <Plus className="w-4 h-4 mr-2" />
                      New Post
                    </Button>
                  </div>
                </div>

                <TabsContent value="discussions" className="space-y-6">
                  {/* New Post Form */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Start a Discussion</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Textarea
                        placeholder="What would you like to discuss?"
                        value={newPost}
                        onChange={(e) => setNewPost(e.target.value)}
                        className="min-h-[100px]"
                      />
                      <div className="flex justify-between items-center">
                        <div className="flex gap-2">
                          <Badge variant="outline">Web Development</Badge>
                          <Button variant="ghost" size="sm">+ Add Tag</Button>
                        </div>
                        <Button>Post Discussion</Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Forum Posts */}
                  <div className="space-y-4">
                    {forumPosts.map((post) => (
                      <Card key={post.id} className="hover:shadow-md transition-shadow">
                        <CardContent className="pt-6">
                          <div className="flex items-start space-x-4">
                            <Avatar>
                              <AvatarImage src={post.avatar} />
                              <AvatarFallback>{post.author[0]}</AvatarFallback>
                            </Avatar>
                            
                            <div className="flex-1 space-y-3">
                              <div className="flex items-start justify-between">
                                <div>
                                  <h3 className="font-semibold text-lg hover:text-primary cursor-pointer">
                                    {post.title}
                                  </h3>
                                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                    <span>by {post.author}</span>
                                    <span>•</span>
                                    <span>{post.timeAgo}</span>
                                    <span>•</span>
                                    <Badge variant="outline" className="text-xs">
                                      {post.category}
                                    </Badge>
                                  </div>
                                </div>
                              </div>
                              
                              <p className="text-muted-foreground">{post.content}</p>
                              
                              <div className="flex items-center justify-between">
                                <div className="flex space-x-4">
                                  <Button variant="ghost" size="sm">
                                    <MessageSquare className="w-4 h-4 mr-2" />
                                    {post.replies} replies
                                  </Button>
                                  <Button variant="ghost" size="sm">
                                    <Heart className="w-4 h-4 mr-2" />
                                    {post.likes}
                                  </Button>
                                  <Button variant="ghost" size="sm">
                                    <Reply className="w-4 h-4 mr-2" />
                                    Reply
                                  </Button>
                                </div>
                                
                                <div className="flex gap-1">
                                  {post.tags.map((tag) => (
                                    <Badge key={tag} variant="secondary" className="text-xs">
                                      {tag}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="study-groups" className="space-y-6">
                  <div className="grid gap-6">
                    {studyGroups.map((group) => (
                      <Card key={group.id}>
                        <CardContent className="pt-6">
                          <div className="flex items-start justify-between">
                            <div className="space-y-2">
                              <h3 className="font-semibold text-lg">{group.name}</h3>
                              <p className="text-muted-foreground">{group.description}</p>
                              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                <div className="flex items-center space-x-1">
                                  <Users className="w-4 h-4" />
                                  <span>{group.members.toLocaleString()} members</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Clock className="w-4 h-4" />
                                  <span>{group.nextMeeting}</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Badge variant="outline">{group.category}</Badge>
                              <Button>Join Group</Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="my-posts">
                  <Card>
                    <CardContent className="pt-6 text-center py-16">
                      <MessageSquare className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">No posts yet</h3>
                      <p className="text-muted-foreground mb-4">
                        Start engaging with the community by creating your first post.
                      </p>
                      <Button className="bg-gradient-primary">Create Your First Post</Button>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Trending Topics */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5" />
                    <span>Trending Topics</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {trendingTopics.map((topic, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="font-medium text-sm hover:text-primary cursor-pointer">
                          #{topic.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {topic.posts} posts
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Community Stats */}
              <Card>
                <CardHeader>
                  <CardTitle>Community Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">15,000+</div>
                    <div className="text-sm text-muted-foreground">Active Members</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">2,500+</div>
                    <div className="text-sm text-muted-foreground">Discussions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">98%</div>
                    <div className="text-sm text-muted-foreground">Questions Answered</div>
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
                    Community Guidelines
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Users className="w-4 h-4 mr-2" />
                    Find Study Partners
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Browse Q&A
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}