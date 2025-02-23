'use client';

import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  tags: string[];
  posted: string;
}

const jobs: Job[] = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    salary: "$120,000 - $180,000",
    type: "Full-time",
    tags: ["React", "TypeScript", "Next.js"],
    posted: "2 days ago"
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "DataFlow Systems",
    location: "Remote",
    salary: "$100,000 - $150,000",
    type: "Full-time",
    tags: ["Python", "Django", "PostgreSQL"],
    posted: "1 week ago"
  },
  {
    id: 3,
    title: "DevOps Engineer",
    company: "Cloud Solutions Inc",
    location: "New York, NY",
    salary: "$130,000 - $170,000",
    type: "Full-time",
    tags: ["AWS", "Docker", "Kubernetes"],
    posted: "3 days ago"
  }
];

export default function JobsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            Discover Your Next Opportunity
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Browse through carefully curated job opportunities from top companies
          </p>
          <div className="flex gap-4">
            <Input
              type="text"
              placeholder="Search jobs by title, company, or keywords"
              className="w-full max-w-2xl backdrop-blur-sm bg-white/50 dark:bg-gray-800/50"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Search
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <Card key={job.id} className="p-6 backdrop-blur-sm bg-white/50 dark:bg-gray-800/50 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{job.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{job.company}</p>
                  </div>
                  <Badge variant="secondary" className="text-sm">
                    {job.type}
                  </Badge>
                </div>
                
                <div className="space-y-2 mb-4 flex-grow">
                  <p className="text-gray-600 dark:text-gray-300 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {job.location}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {job.salary}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="bg-blue-50 dark:bg-blue-900/20">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500 dark:text-gray-400">{job.posted}</span>
                    <Button variant="outline" className="hover:bg-blue-50 dark:hover:bg-blue-900/20">
                      Apply Now
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}