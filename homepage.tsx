import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Search, Briefcase, Users, FileText, TrendingUp, Code, Database, Brain, ChevronRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function Homepage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 text-gray-900 flex flex-col">
      {/* Header */}
      <header className="glass-effect sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-[#4A90E2]">JobTech AI</div>
          <nav className="hidden md:flex space-x-4">
            <Link href="/jobs"><Button variant="ghost">Jobs</Button></Link>
            <Link href="/interview-prep"><Button variant="ghost">Interview Prep</Button></Link>
            <Link href="/community"><Button variant="ghost">Community</Button></Link>
            <Link href="/referrals"><Button variant="ghost">Referrals</Button></Link>
          </nav>
          <Button className="bg-[#4A90E2] hover:bg-[#357ABD]">Sign In</Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search for jobs, interview questions, or companies..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>

          {/* AI Job Recommendations */}
          <Card className="mb-8 glass-effect hover-scale">
            <CardHeader>
              <CardTitle className="text-xl font-semibold flex items-center">
                <Briefcase className="mr-2" /> AI Job Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    title: "Senior Backend Engineer",
                    company: "ByteDance",
                    location: "Beijing, China",
                    salary: "$150K - $200K",
                    tags: ["Python", "Go", "Microservices"],
                    icon: <Database className="w-5 h-5" />
                  },
                  {
                    title: "AI Research Engineer",
                    company: "OpenAI",
                    location: "San Francisco, US",
                    salary: "$180K - $250K",
                    tags: ["PyTorch", "TensorFlow", "LLM"],
                    icon: <Brain className="w-5 h-5" />
                  },
                  {
                    title: "Full Stack Developer",
                    company: "Tencent",
                    location: "Shenzhen, China",
                    salary: "$120K - $180K",
                    tags: ["React", "Node.js", "TypeScript"],
                    icon: <Code className="w-5 h-5" />
                  }
                ].map((job, index) => (
                  <Card key={index} className="glass-effect hover-scale">
                    <CardContent className="p-4">
                      <div className="flex items-center mb-2">
                        <div className="p-2 bg-[#4A90E2] bg-opacity-10 rounded-lg mr-3">
                          {job.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{job.title}</h3>
                          <p className="text-sm text-gray-600">{job.company}</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm text-gray-600">{job.location}</p>
                        <p className="text-sm font-medium text-[#34D399]">{job.salary}</p>
                        <div className="flex flex-wrap gap-2">
                          {job.tags.map((tag, i) => (
                            <Badge key={i} variant="secondary" className="bg-[#4A90E2] bg-opacity-10 text-[#4A90E2]">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Button className="mt-4 w-full bg-[#4A90E2] hover:bg-[#357ABD]">
                        Apply Now <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Access Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Button className="h-auto py-6 flex flex-col items-center glass-effect hover-scale" variant="outline">
              <FileText className="mb-2" />
              Interview Preparation
            </Button>
            <Button className="h-auto py-6 flex flex-col items-center glass-effect hover-scale" variant="outline">
              <Users className="mb-2" />
              Referrals
            </Button>
            <Button className="h-auto py-6 flex flex-col items-center glass-effect hover-scale" variant="outline">
              <TrendingUp className="mb-2" />
              Experience Sharing
            </Button>
          </div>

          {/* Trending Discussions */}
          <Card className="glass-effect hover-scale">
            <CardHeader>
              <CardTitle className="text-xl font-semibold flex items-center">
                <Users className="mr-2" /> Trending Discussions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {[
                  {
                    title: "How to prepare for system design interviews at FAANG?",
                    replies: 128,
                    views: "2.3K",
                    tag: "Hot"
                  },
                  {
                    title: "Share your experience: Latest ByteDance Algorithm Interview",
                    replies: 85,
                    views: "1.8K",
                    tag: "New"
                  },
                  {
                    title: "Tips for negotiating tech job offers in 2024",
                    replies: 156,
                    views: "3.1K",
                    tag: "Trending"
                  }
                ].map((discussion, index) => (
                  <li key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200 cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <Badge variant="secondary" className="bg-[#4A90E2] bg-opacity-10 text-[#4A90E2]">
                        {discussion.tag}
                      </Badge>
                      <span className="font-medium">{discussion.title}</span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>{discussion.replies} replies</span>
                      <span>{discussion.views} views</span>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="glass-effect border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-sm text-gray-500">
          © 2023 JobTech AI. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

