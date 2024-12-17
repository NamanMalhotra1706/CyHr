"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen" id="FAQ">
      <p className="text-5xl font-semibold text-center text-neutral-100 dark:text-white mb-10">
        FAQ's
      </p>
      <Accordion type="single" collapsible className="w-3/4">
        <AccordionItem value="item-1" key="1">
          <AccordionTrigger className="text-white">How do I create my profile on CyHr?</AccordionTrigger>
          <AccordionContent className="text-white">
            Sign up by adding your skills, certifications, work experience, and key projects. Cybersecurity experts can create detailed profiles, while hiring managers can set up company profiles.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-white">How does the job matching feature work?</AccordionTrigger>
          <AccordionContent className="text-white">
            CyHr uses a smart algorithm to match cybersecurity experts with job opportunities based on their skills, experience, and certifications.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-white">Can I communicate directly with hiring managers or experts?</AccordionTrigger>
          <AccordionContent className="text-white">
            No, You can't chat with anyone in app right now, but you can communicate with them through Mail.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-white">What kind of job opportunities can I find on CyHr?</AccordionTrigger>
          <AccordionContent className="text-white">
            Cybersecurity experts can browse job openings in various security roles posted by hiring managers, while hiring managers can find top talent in the cybersecurity field.
          </AccordionContent >
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-white">Is my profile and data secure on CyHr?</AccordionTrigger>
          <AccordionContent className="text-white">
            Yes, CyHr prioritizes security with encrypted profiles and verified credentials to ensure data protection for both experts and hiring managers.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger className="text-white">Can I access CyHr from multiple devices?</AccordionTrigger>
          <AccordionContent className="text-white">
            Yes! CyHr is accessible from iOS devices(lower 18.0 version) , ensuring your profile is synced across devices.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger className="text-white">Does CyHr offer resources for upskilling in cybersecurity?</AccordionTrigger>
          <AccordionContent className="text-white">
            Yes, CyHr has a "Discover" section with curated articles, tutorials, and expert insights to help you stay updated on the latest trends and skills in cybersecurity.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
