'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Users, Star, MessageCircle } from 'lucide-react';

const mockTopics = [
  {
    id: 1,
    title: 'How to prepare for frontend technical interviews?',
    author: 'John',
    replies: 23,
    views: 156,
    category: 'Interview Experience',
    lastActivity: '2 hours ago'
  },
  {
    id: 2,
    title: 'Sharing backend development learning path',
    author: 'Mike',
    replies: 45,
    views: 289,
    category: 'Learning Resources',
    lastActivity: '5 hours ago'
  },
];

const mockMentors = [
  {
    id: 1,
    name: 'Prof. Wang',
    title: 'Senior Frontend Engineer',
    company: 'Tech Giant',
    rating: 4.9,
    reviews: 128
  },
  {
    id: 2,
    name: 'Prof. Li',
    title: 'Technical Director',
    company: 'StartUp Inc',
    rating: 4.8,
    reviews: 96
  },
];

const mockActiveUsers = [
  {
    id: 1,
    name: 'Sarah Chen',
    points: 2890,
    contributions: 156
  },
  {
    id: 2,
    name: 'David Wang',
    points: 2450,
    contributions: 134
  },
  {
    id: 3,
    name: 'Linda Zhang',
    points: 2100,
    contributions: 98
  }
];

const mockTrendingTopics = [
  {
    id: 1,
    title: 'System Design Interview Tips',
    views: 1256,
    category: 'Interview Experience'
  },
  {
    id: 2,
    title: 'Latest AI Technologies in 2024',
    views: 986,
    category: 'Technical Discussions'
  },
  {
    id: 3,
    title: 'Career Switch to Tech Industry',
    views: 845,
    category: 'Career Experience'
  }
];

const categories = [
  'All Topics',
  'Interview Experience',
  'Learning Resources',
  'Technical Discussions',
  'Job Search',
  'Career Experience'
];

export default function Community() {
  const [selectedCategory, setSelectedCategory] = useState('All Topics');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8 text-[#4A90E2]">Tech Community</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left Category Bar */}
          <div className="md:col-span-3">
            <Card className="p-4 glass-effect hover-scale">
              <h2 className="text-xl font-semibold mb-4">Categories</h2>
              <div className="space-y-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "ghost"}
                    className={`w-full justify-start ${selectedCategory === category ? 'bg-[#4A90E2] hover:bg-[#357ABD]' : ''}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </Card>
          </div>

          {/* Main Content Area */}
          <div className="md:col-span-6">
            <Tabs defaultValue="discussions">
              <TabsList className="mb-4">
                <TabsTrigger value="discussions">Discussions</TabsTrigger>
                <TabsTrigger value="questions">Q&A</TabsTrigger>
                <TabsTrigger value="resources">Resources</TabsTrigger>
              </TabsList>

              <TabsContent value="discussions">
                <Card className="p-6 glass-effect hover-scale">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Latest Discussions</h2>
                    <Button className="bg-[#4A90E2] hover:bg-[#357ABD]">Create Topic</Button>
                  </div>
                  <ScrollArea className="h-[600px]">
                    <div className="space-y-4">
                      {mockTopics.map((topic) => (
                        <Card key={topic.id} className="p-4 glass-effect hover-scale">
                          <h3 className="text-lg font-semibold mb-2">{topic.title}</h3>
                          <div className="flex items-center text-sm text-gray-600 space-x-4">
                            <span>By {topic.author}</span>
                            <span>{topic.replies} replies</span>
                            <span>{topic.views} views</span>
                            <Badge variant="secondary" className="bg-[#4A90E2] bg-opacity-10 text-[#4A90E2]">
                              {topic.category}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-500 mt-2">Last activity: {topic.lastActivity}</p>
                        </Card>
                      ))}
                    </div>
                  </ScrollArea>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Sidebar */}
          <div className="md:col-span-3 space-y-6">
            {/* Active Users */}
            <Card className="p-4 glass-effect hover-scale">
              <div className="flex items-center mb-4">
                <Users className="w-5 h-5 mr-2 text-[#4A90E2]" />
                <h2 className="text-xl font-semibold">Active Users</h2>
              </div>
              <div className="space-y-4">
                {mockActiveUsers.map((user) => (
                  <div key={user.id} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{user.name}</p>
                      <p className="text-sm text-gray-600">{user.contributions} contributions</p>
                    </div>
                    <Badge variant="secondary" className="bg-[#4A90E2] bg-opacity-10 text-[#4A90E2]">
                      {user.points} pts
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>

            {/* Trending Topics */}
            <Card className="p-4 glass-effect hover-scale">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-5 h-5 mr-2 text-[#4A90E2]" />
                <h2 className="text-xl font-semibold">Trending Topics</h2>
              </div>
              <div className="space-y-4">
                {mockTrendingTopics.map((topic) => (
                  <div key={topic.id} className="space-y-2">
                    <p className="font-medium">{topic.title}</p>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <Badge variant="secondary" className="bg-[#4A90E2] bg-opacity-10 text-[#4A90E2]">
                        {topic.category}
                      </Badge>
                      <span>{topic.views} views</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Featured Mentors */}
            <Card className="p-4 glass-effect hover-scale">
              <div className="flex items-center mb-4">
                <Star className="w-5 h-5 mr-2 text-[#4A90E2]" />
                <h2 className="text-xl font-semibold">Featured Mentors</h2>
              </div>
              <div className="space-y-4">
                {mockMentors.map((mentor) => (
                  <div key={mentor.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">{mentor.name}</p>
                      <Badge variant="secondary" className="bg-[#4A90E2] bg-opacity-10 text-[#4A90E2]">
                        {mentor.rating} ★
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">{mentor.title}</p>
                    <p className="text-sm text-gray-600">{mentor.company}</p>
                    <p className="text-sm text-gray-500">{mentor.reviews} reviews</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}