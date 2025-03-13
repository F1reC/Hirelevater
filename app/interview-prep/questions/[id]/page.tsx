'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Brain, Code, ChevronLeft, FileText, MessageSquare, AlertTriangle, CheckCircle2, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const mockAnswer = {
  id: 1,
  question: 'Explain Virtual DOM in React and how it works',
  difficulty: 'Medium',
  category: 'Frontend Development',
  likes: 128,
  answers: 45,
  content: {
    keyPoints: [
      'Virtual DOM is a lightweight copy of the actual DOM in memory',
      'React uses it to improve performance by minimizing direct DOM manipulation',
      'It allows React to batch multiple changes and update the real DOM efficiently'
    ],
    explanation: `The Virtual DOM is a programming concept where an ideal, or "virtual", representation of a UI is kept in memory and synced with the "real" DOM by a library such as ReactDOM. This process is called reconciliation.

When state changes in a React component:
1. React creates a new Virtual DOM tree
2. Compares it with the previous Virtual DOM tree (diffing)
3. Calculates the minimum number of changes needed
4. Updates the real DOM only where necessary

This approach is more efficient than directly manipulating the DOM because:
- DOM operations are expensive
- Virtual DOM operations are much faster
- Batch updates reduce overall DOM manipulation`,
    bestPractices: [
      "Use keys when rendering lists to help React track changes efficiently",
      "Keep components pure and avoid direct DOM manipulation",
      "Use React's state management properly to trigger efficient re-renders",
      "Implement shouldComponentUpdate or React.memo for optimization when needed"
    ],
    commonPitfalls: [
      'Misunderstanding that Virtual DOM is always faster',
      'Unnecessary re-renders due to improper state management',
      'Direct DOM manipulation alongside Virtual DOM',
      'Not using keys or using index as keys in lists'
    ]
  }
};

export default function QuestionDetail() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 text-gray-900">
      <div className="container mx-auto py-8 px-4">
        <div className="mb-6">
          <Button variant="ghost" className="mb-4" asChild>
            <Link href="/interview-prep">
              <ChevronLeft className="w-4 h-4 mr-2" /> Back to Questions
            </Link>
          </Button>
          <h1 className="text-3xl font-bold text-[#4A90E2]">{mockAnswer.question}</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="glass-effect hover-scale mb-6">
              <CardHeader>
                <CardTitle className="text-xl font-semibold flex items-center">
                  <Brain className="w-5 h-5 mr-2" /> Key Points
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {mockAnswer.content.keyPoints.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-1" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-effect hover-scale mb-6">
              <CardHeader>
                <CardTitle className="text-xl font-semibold flex items-center">
                  <FileText className="w-5 h-5 mr-2" /> Detailed Explanation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose max-w-none">
                  <p className="whitespace-pre-wrap text-gray-700">{mockAnswer.content.explanation}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1 space-y-6">
            <Card className="glass-effect hover-scale">
              <CardHeader>
                <CardTitle className="text-xl font-semibold flex items-center">
                  <Lightbulb className="w-5 h-5 mr-2" /> Best Practices
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {mockAnswer.content.bestPractices.map((practice, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{practice}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-effect hover-scale">
              <CardHeader>
                <CardTitle className="text-xl font-semibold flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2" /> Common Pitfalls
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {mockAnswer.content.commonPitfalls.map((pitfall, index) => (
                    <li key={index} className="flex items-start">
                      <AlertTriangle className="w-5 h-5 mr-2 text-yellow-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{pitfall}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}