"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Building2, Users, Briefcase, ChevronRight, Clock, CheckCircle2, XCircle } from "lucide-react"

export default function ReferralsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 text-gray-900">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search for companies or positions..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Referral Opportunities */}
        <Card className="mb-8 glass-effect hover-scale">
          <CardHeader>
            <CardTitle className="text-xl font-semibold flex items-center">
              <Building2 className="mr-2" /> Available Referral Opportunities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  company: "Google",
                  position: "Senior Software Engineer",
                  location: "Mountain View, US",
                  experience: "5+ years",
                  deadline: "2024-02-28",
                  tags: ["Cloud", "Distributed Systems", "Java"]
                },
                {
                  company: "Meta",
                  position: "ML Engineer",
                  location: "London, UK",
                  experience: "3+ years",
                  deadline: "2024-03-15",
                  tags: ["PyTorch", "Deep Learning", "Python"]
                },
                {
                  company: "Microsoft",
                  position: "Product Manager",
                  location: "Seattle, US",
                  experience: "4+ years",
                  deadline: "2024-03-01",
                  tags: ["Product Strategy", "Technical PM", "Agile"]
                }
              ].map((opportunity, index) => (
                <Card key={index} className="glass-effect hover-scale">
                  <CardContent className="p-4">
                    <div className="flex items-center mb-2">
                      <div className="p-2 bg-[#4A90E2] bg-opacity-10 rounded-lg mr-3">
                        <Briefcase className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{opportunity.company}</h3>
                        <p className="text-sm text-gray-600">{opportunity.position}</p>
                      </div>
                    </div>
                    <div className="space-y-2 mt-3">
                      <p className="text-sm text-gray-600">{opportunity.location}</p>
                      <p className="text-sm text-gray-600">Experience: {opportunity.experience}</p>
                      <p className="text-sm text-gray-600">Deadline: {opportunity.deadline}</p>
                      <div className="flex flex-wrap gap-2">
                        {opportunity.tags.map((tag, i) => (
                          <Badge key={i} variant="secondary" className="bg-[#4A90E2] bg-opacity-10 text-[#4A90E2]">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button className="mt-4 w-full bg-[#4A90E2] hover:bg-[#357ABD]">
                      Request Referral <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Application Status */}
        <Card className="mb-8 glass-effect hover-scale">
          <CardHeader>
            <CardTitle className="text-xl font-semibold flex items-center">
              <Clock className="mr-2" /> Application Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  company: "Amazon",
                  position: "Software Development Engineer",
                  status: "Accepted",
                  date: "2024-01-15",
                  icon: <CheckCircle2 className="w-5 h-5 text-green-500" />
                },
                {
                  company: "Apple",
                  position: "iOS Developer",
                  status: "Pending",
                  date: "2024-01-20",
                  icon: <Clock className="w-5 h-5 text-yellow-500" />
                },
                {
                  company: "Netflix",
                  position: "Senior Backend Engineer",
                  status: "Rejected",
                  date: "2024-01-10",
                  icon: <XCircle className="w-5 h-5 text-red-500" />
                }
              ].map((application, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-[#4A90E2] bg-opacity-10 rounded-lg">
                      {application.icon}
                    </div>
                    <div>
                      <h4 className="font-medium">{application.company}</h4>
                      <p className="text-sm text-gray-600">{application.position}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-sm">{application.status}</p>
                    <p className="text-sm text-gray-500">{application.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Referrers Network */}
        <Card className="glass-effect hover-scale">
          <CardHeader>
            <CardTitle className="text-xl font-semibold flex items-center">
              <Users className="mr-2" /> Referrers Network
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  name: "John Smith",
                  position: "Senior Engineer",
                  company: "Google",
                  referrals: 15,
                  rating: 4.8
                },
                {
                  name: "Sarah Johnson",
                  position: "Tech Lead",
                  company: "Microsoft",
                  referrals: 23,
                  rating: 4.9
                },
                {
                  name: "Michael Chen",
                  position: "Engineering Manager",
                  company: "Meta",
                  referrals: 31,
                  rating: 4.7
                }
              ].map((referrer, index) => (
                <Card key={index} className="glass-effect hover-scale">
                  <CardContent className="p-4">
                    <div className="flex items-center mb-3">
                      <div className="p-2 bg-[#4A90E2] bg-opacity-10 rounded-lg mr-3">
                        <Users className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{referrer.name}</h4>
                        <p className="text-sm text-gray-600">{referrer.position}</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600">{referrer.company}</p>
                      <div className="flex justify-between text-sm">
                        <span>{referrer.referrals} successful referrals</span>
                        <span className="text-[#4A90E2]">{referrer.rating} ★</span>
                      </div>
                    </div>
                    <Button className="mt-4 w-full bg-[#4A90E2] hover:bg-[#357ABD]">
                      Contact Referrer
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}