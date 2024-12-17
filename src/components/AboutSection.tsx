"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function AboutSection() {
  const data = [
    {
      title: "Key Features",
      content: (
        <div>
          <p className="text-neutral-200 dark:text-neutral-200 text-sm md:text-sm font-normal mb-4">
          CyHr offers powerful features like seamless connections, personalized job matching, and verified credential.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-400 dark:text-neutral-300 text-xs md:text-sm">
              <strong>Seamless Connections:</strong> Effortlessly connect top cybersecurity professionals with hiring managers.
            </div>
            <div className="flex gap-2 items-center text-neutral-400 dark:text-neutral-300 text-xs md:text-sm">
              <strong>Personalized Job Matching:</strong> Smart algorithm matches candidates to roles based on skills and experience.
            </div>
            <div className="flex gap-2 items-center text-neutral-400 dark:text-neutral-300 text-xs md:text-sm">
              <strong>Secure, Verified Credentials:</strong> Trustworthy profiles with verified certifications and credentials.
            </div>
          </div>
          
        </div>
      ),
    },
    {
      title: "How It Works",
      content: (
        <div>
          <p className="text-neutral-200 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Easily create meals based on your preferences:
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-400 dark:text-neutral-300 text-xs md:text-sm">
              <strong>Create Your Profile:</strong> 
               Cybersecurity experts create in-depth profiles to showcase their skills, certifications, and experience.
            </div>
            <div className="flex gap-2 items-center text-neutral-400 dark:text-neutral-300 text-xs md:text-sm">
              <strong>Explore Opportunities:</strong> Experts can browse jobs tailored to their skills or let the smart algorithm suggest roles.
            </div>
            <div className="flex gap-2 items-center text-neutral-400 dark:text-neutral-300 text-xs md:text-sm">
              <strong>Apply or Connect:</strong> Experts apply for jobs or connect with hiring managers.
            </div>
          </div>            
        </div>
      ),
    },
    {
      title: "Why Choose Our App?",
      content: (
        <div>
          <p className="text-neutral-200 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          CyHr is the Best Choice for Cybersecurity Hiring.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-400 dark:text-neutral-300 text-xs md:text-sm">
            CyHr offers an optimized experience for both cybersecurity experts and hiring managers, providing a secure environment with verified credentials and real-time communication. This makes it easier for professionals to find suitable roles and for hiring managers to discover top talent, making CyHr a one-stop platform for all cybersecurity hiring needs.
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full" id="About">
      <Timeline data={data} />
    </div>
  );
}
