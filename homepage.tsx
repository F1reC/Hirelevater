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
          <div className="text-2xl font-bold text-[#4A90E2]">Hirelevater</div>
          <nav className="hidden md:flex space-x-4">
            <Link href="/career-consulting"><Button variant="ghost">Career Consulting</Button></Link>
            {/* <Link href="/jobs"><Button variant="ghost">Jobs</Button></Link> */}
            <Link href="/interview-prep"><Button variant="ghost">Interview Prep</Button></Link>
           
          </nav>
          <Button className="bg-[#4A90E2] hover:bg-[#357ABD]">Sign In</Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Industry Experts Carousel */}
          <div className="mb-8 overflow-hidden">
            <h2 className="text-2xl font-bold mb-4 text-[#4A90E2]">Industry Experts</h2>
            <div className="flex space-x-6 pb-4 overflow-x-auto scrollbar-hide">
              {[
                {
                  expert: "Dr. Michael Lee",
                  title: "System Design Expert",
                  company: "Former Technical Director at Google",
                  expertise: "Microservices, Cloud Architecture, Scalability",
                  rating: "4.9",
                  students: "2,450",
                  image: "https://i.pravatar.cc/150?img=12"
                },
                {
                  expert: "Dr. Sarah Zhang",
                  title: "Algorithm Specialist",
                  company: "Former Principal Engineer at Amazon",
                  expertise: "Data Structures, Competitive Programming, Optimization",
                  rating: "4.8",
                  students: "3,120",
                  image: "https://i.pravatar.cc/150?img=23"
                },
                {
                  expert: "Prof. Emily Wang",
                  title: "AI & Machine Learning Expert",
                  company: "Former AI Researcher at Microsoft",
                  expertise: "Deep Learning, NLP, Computer Vision",
                  rating: "4.95",
                  students: "1,890",
                  image: "https://i.pravatar.cc/150?img=32"
                },
                {
                  expert: "Kevin Liu",
                  title: "Frontend Development Guru",
                  company: "Former Technical Expert at Alibaba",
                  expertise: "React, TypeScript, UI/UX, Performance",
                  rating: "4.85",
                  students: "2,780",
                  image: "https://i.pravatar.cc/150?img=45"
                }
              ].map((expert, index) => (
                <Card key={index} className="min-w-[300px] glass-effect hover-scale">
                  <CardContent className="p-4">
                    <div className="flex items-center mb-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-3 bg-[#4A90E2] bg-opacity-10 flex items-center justify-center">
                        <img src={expert.image} alt={expert.expert} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{expert.expert}</h3>
                        <p className="text-sm text-gray-600">{expert.company}</p>
                      </div>
                    </div>
                    <h4 className="text-md font-medium mb-2">{expert.title}</h4>
                    <p className="text-xs text-gray-600 mb-2">{expert.expertise}</p>
                    <div className="flex justify-between text-sm text-gray-600 mb-3">
                      <div className="flex items-center">
                        <span className="text-yellow-500 mr-1">★</span>
                        <span>{expert.rating}</span>
                      </div>
                      <span>{expert.students} students</span>
                    </div>
                    <Button className="w-full bg-[#4A90E2] hover:bg-[#357ABD]">
                      View Profile <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Search Bar */}
          {/* <div className="mb-8">
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
          </div> */}

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
          {/* AI Interview Questions */}
          <Card className="mb-8 glass-effect hover-scale">
            <CardHeader>
              <CardTitle className="text-xl font-semibold flex items-center">
                <Brain className="mr-2" /> AI Interview Questions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    title: "Explain Virtual DOM in React and its benefits",
                    difficulty: "Medium",
                    category: "Frontend",
                    likes: 156,
                    answers: 45,
                    tags: ["React", "Performance", "JavaScript"]
                  },
                  {
                    title: "Design a distributed cache system",
                    difficulty: "Hard",
                    category: "System Design",
                    likes: 289,
                    answers: 78,
                    tags: ["Cache", "Distributed Systems", "Scalability"]
                  },
                  {
                    title: "Implement LRU Cache from scratch",
                    difficulty: "Medium",
                    category: "Data Structures",
                    likes: 234,
                    answers: 92,
                    tags: ["Algorithm", "Cache", "Design Pattern"]
                  }
                ].map((question, index) => (
                  <Card key={index} className="glass-effect hover-scale">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <Badge
                          variant="secondary"
                          className={`${question.difficulty === 'Hard' ? 'bg-red-100 text-red-600' : question.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-600' : 'bg-green-100 text-green-600'}`}
                        >
                          {question.difficulty}
                        </Badge>
                        <Badge variant="outline">{question.category}</Badge>
                      </div>
                      <h3 className="font-semibold text-lg mb-3">{question.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {question.tags.map((tag, i) => (
                          <Badge key={i} variant="secondary" className="bg-[#4A90E2] bg-opacity-10 text-[#4A90E2]">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span>{question.likes} likes</span>
                          <span>{question.answers} answers</span>
                        </div>
                        <Button className="bg-[#4A90E2] hover:bg-[#357ABD]">
                          View Details <ChevronRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
          {/* Trending Discussions */}
          
        </div>
      </main>

      {/* Footer */}
      <footer className="glass-effect border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-sm text-gray-500">
          © 2023 Hirelevater. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

