'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Users, MessageCircle, Star, Filter, Shield, Eye, EyeOff } from 'lucide-react';
import { Switch } from '@/components/ui/switch';

const mockConsultants = [
  {
    id: 1,
    role: 'Senior Software Engineer',
    company: 'Microsoft',
    experience: '8+ years',
    expertise: ['System Design', 'Microservices', 'Cloud Architecture'],
    rate: '$150/hour',
    rating: 4.9,
    reviews: 128,
    availability: 'Next 3 days',
    anonymous: false
  },
  {
    id: 2,
    role: 'Product Manager',
    company: 'Meta',
    experience: '5+ years',
    expertise: ['Product Strategy', 'User Research', 'Agile'],
    rate: '$120/hour',
    rating: 4.8,
    reviews: 89,
    availability: 'Today',
    anonymous: false
  },
  {
    id: 3,
    role: 'Tech Lead',
    company: 'Google',
    experience: '10+ years',
    expertise: ['Team Leadership', 'Architecture', 'Scaling'],
    rate: '$180/hour',
    rating: 4.95,
    reviews: 156,
    availability: 'Next week',
    anonymous: false
  },
  {
    id: 4,
    role: 'Senior Frontend Engineer',
    company: 'Leading Tech Company',
    experience: '6+ years',
    expertise: ['React', 'TypeScript', 'Web Performance'],
    rate: '$140/hour',
    rating: 4.85,
    reviews: 92,
    availability: 'Tomorrow',
    anonymous: true
  },
  {
    id: 5,
    role: 'Engineering Manager',
    company: 'Apple',
    experience: '12+ years',
    expertise: ['Team Management', 'Technical Leadership', 'Product Development'],
    rate: '$200/hour',
    rating: 4.92,
    reviews: 143,
    availability: 'Next week',
    anonymous: false
  },
  {
    id: 6,
    role: 'Machine Learning Engineer',
    company: 'Amazon',
    experience: '7+ years',
    expertise: ['ML Systems', 'Deep Learning', 'Data Science'],
    rate: '$160/hour',
    rating: 4.88,
    reviews: 115,
    availability: 'This week',
    anonymous: false
  }
];

const filters = [
  { name: 'Position Type', options: ['Technical', 'Product', 'Design', 'Operations', 'Marketing'] },
  { name: 'Company Type', options: ['Big Tech', 'Unicorn', 'Startup', 'MNC'] },
  { name: 'Experience', options: ['< 3 years', '3-5 years', '5-8 years', '8+ years'] },
  { name: 'Price Range', options: ['< $100/hr', '$100-150/hr', '$150-200/hr', '> $200/hr'] }
];

export default function CareerConsulting() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8 text-[#4A90E2]">Career Consulting</h1>
        <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg flex items-center">
          <Shield className="w-5 h-5 text-yellow-600 mr-2" />
          <p className="text-sm text-yellow-700">Our platform strictly monitors information compliance and ensures all consulting content adheres to relevant regulations. We remind consultants and job seekers to comply with company confidentiality agreements and not disclose sensitive information.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left Sidebar - Filters */}
          <div className="md:col-span-3">
            <Card className="glass-effect hover-scale">
              <CardHeader>
                <CardTitle className="text-xl font-semibold flex items-center">
                  <Filter className="w-5 h-5 mr-2" /> Filters
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {filters.map((filter, index) => (
                    <div key={index} className="space-y-2">
                      <h3 className="font-medium">{filter.name}</h3>
                      <div className="flex flex-wrap gap-2">
                        {filter.options.map((option, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="cursor-pointer hover:bg-[#4A90E2] hover:text-white transition-colors"
                          >
                            {option}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="md:col-span-6">
            <Card className="glass-effect hover-scale mb-6">
              <CardContent className="p-6">
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Search for positions, skills, or company types..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-4 pr-4 py-2"
                  />
                </div>
              </CardContent>
            </Card>

            <ScrollArea className="h-[600px]">
              <div className="space-y-4">
                {mockConsultants.map((consultant) => (
                  <Card key={consultant.id} className="glass-effect hover-scale">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-xl font-semibold">{consultant.anonymous ? consultant.role : `${consultant.role} at ${consultant.company}`}</h3>
                            {consultant.anonymous ? (
                              <EyeOff className="w-4 h-4 text-gray-400" title="匿名模式" />
                            ) : (
                              <Eye className="w-4 h-4 text-green-500" title="实名模式" />
                            )}
                          </div>
                          <p className="text-gray-600">{consultant.anonymous ? "Leading Tech Company" : consultant.company}</p>
                          <p className="text-gray-600">{consultant.experience} experience</p>
                        </div>
                        <Badge variant="secondary" className="bg-[#4A90E2] text-white">
                          {consultant.rate}
                        </Badge>
                      </div>

                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {consultant.expertise.map((skill, index) => (
                            <Badge key={index} variant="outline">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-400 mr-1" />
                            <span className="font-medium">{consultant.rating}</span>
                            <span className="text-gray-500 ml-1">({consultant.reviews})</span>
                          </div>
                          <span className="text-gray-600">Available: {consultant.availability}</span>
                        </div>
                        <Button className="bg-[#4A90E2] hover:bg-[#357ABD]">
                          Start Chat <MessageCircle className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </div>

          {/* Right Sidebar - Stats */}
          <div className="md:col-span-3">
            <Card className="glass-effect hover-scale mb-6">
              <CardHeader>
                <CardTitle className="text-xl font-semibold flex items-center">
                  <Users className="w-5 h-5 mr-2" /> Platform Stats
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Online Mentors</span>
                    <Badge variant="secondary" className="bg-[#4A90E2] bg-opacity-10 text-[#4A90E2]">
                      238
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Weekly Matches</span>
                    <Badge variant="secondary" className="bg-[#4A90E2] bg-opacity-10 text-[#4A90E2]">
                      1,890
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Average Rating</span>
                    <Badge variant="secondary" className="bg-[#4A90E2] bg-opacity-10 text-[#4A90E2]">
                      4.85
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect hover-scale">
              <CardHeader>
                <CardTitle className="text-xl font-semibold flex items-center">
                  <Star className="w-5 h-5 mr-2" /> Pricing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border border-[#4A90E2] border-opacity-20 rounded-lg">
                    <h3 className="font-semibold mb-2">Junior Mentor</h3>
                    <p className="text-2xl font-bold text-[#4A90E2] mb-2">$80-120<span className="text-sm text-gray-600">/hour</span></p>
                    <p className="text-sm text-gray-600">3-5 years experience</p>
                  </div>
                  <div className="p-4 border border-[#4A90E2] border-opacity-20 rounded-lg">
                    <h3 className="font-semibold mb-2">Senior Mentor</h3>
                    <p className="text-2xl font-bold text-[#4A90E2] mb-2">$120-180<span className="text-sm text-gray-600">/hour</span></p>
                    <p className="text-sm text-gray-600">5-8 years experience</p>
                  </div>
                  <div className="p-4 border border-[#4A90E2] border-opacity-20 rounded-lg">
                    <h3 className="font-semibold mb-2">Expert Mentor</h3>
                    <p className="text-2xl font-bold text-[#4A90E2] mb-2">$180+<span className="text-sm text-gray-600">/hour</span></p>
                    <p className="text-sm text-gray-600">8+ years experience</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}