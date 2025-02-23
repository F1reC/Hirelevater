'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Brain, Code, ChevronRight, FileText, MessageSquare } from 'lucide-react';

const positions = [
  { id: 1, title: 'Frontend Developer', icon: <Code className="w-4 h-4" /> },
  { id: 2, title: 'Backend Developer', icon: <Code className="w-4 h-4" /> },
  { id: 3, title: 'Full Stack Developer', icon: <Code className="w-4 h-4" /> },
  { id: 4, title: 'Algorithm Engineer', icon: <Brain className="w-4 h-4" /> },
];

const mockQuestions = [
  {
    id: 1,
    question: 'Explain Virtual DOM in React and how it works',
    difficulty: 'Medium',
    category: 'Frontend Development',
    likes: 128,
    answers: 45
  },
  {
    id: 2,
    question: 'What is a closure? Please provide examples of its use cases',
    difficulty: 'Easy',
    category: 'Frontend Development',
    likes: 156,
    answers: 62
  },
];

export default function InterviewPrep() {
  const [selectedPosition, setSelectedPosition] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 text-gray-900">
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8 text-[#4A90E2]">Interview Preparation</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-3">
            <Card className="glass-effect hover-scale p-4">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-xl font-semibold flex items-center">
                  <FileText className="mr-2 w-5 h-5" /> Select Position
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Select value={selectedPosition} onValueChange={setSelectedPosition}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Choose target position" />
                  </SelectTrigger>
                  <SelectContent>
                    {positions.map((position) => (
                      <SelectItem key={position.id} value={position.id.toString()}>
                        <div className="flex items-center">
                          {position.icon}
                          <span className="ml-2">{position.title}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-9">
            <Tabs defaultValue="questions" className="glass-effect p-6 rounded-lg">
              <TabsList className="mb-4 bg-white/20">
                <TabsTrigger value="questions">Question Bank</TabsTrigger>
                <TabsTrigger value="practice">Mock Interview</TabsTrigger>
                <TabsTrigger value="feedback">AI Feedback</TabsTrigger>
              </TabsList>

              <TabsContent value="questions">
                <ScrollArea className="h-[600px] pr-4">
                  {mockQuestions.map((q) => (
                    <Card key={q.id} className="mb-6 glass-effect hover-scale">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-lg font-medium flex-grow">{q.question}</h3>
                          <div className="flex gap-2 ml-4">
                            <Badge variant="secondary" className="bg-[#4A90E2] bg-opacity-10 text-[#4A90E2]">
                              {q.difficulty}
                            </Badge>
                            <Badge variant="outline">{q.category}</Badge>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span>{q.likes} likes</span>
                            <span>{q.answers} answers</span>
                          </div>
                          <Button variant="default" size="sm" className="bg-[#4A90E2] hover:bg-[#357ABD]">
                            View Answer <ChevronRight className="w-4 h-4 ml-1" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </ScrollArea>
              </TabsContent>

              <TabsContent value="practice">
                <Card className="glass-effect hover-scale">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <MessageSquare className="w-5 h-5 mr-2" />
                      <h2 className="text-xl font-semibold">Mock Interview Practice</h2>
                    </div>
                    <p className="text-gray-600 mb-6">Get real-time AI feedback on your interview responses and improve your performance</p>
                    <Button 
                      disabled={!selectedPosition}
                      className="bg-[#4A90E2] hover:bg-[#357ABD] w-full justify-center"
                    >
                      Start Mock Interview <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="feedback">
                <Card className="glass-effect hover-scale">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Brain className="w-5 h-5 mr-2" />
                      <h2 className="text-xl font-semibold">AI Interview Feedback</h2>
                    </div>
                    <p className="text-gray-600 mb-4">Receive personalized feedback and improvement suggestions from our AI system</p>
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                      <p className="text-sm text-gray-600">Complete a mock interview to see your detailed performance analysis here</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}