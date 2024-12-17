"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useId } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function TeamSection() {
  return (
    <div className="py-20 lg:py-40 mx-10 lg:mx-20" id="Team">
      <p className="text-5xl font-semibold text-center text-neutral-100 dark:text-white mb-10">
        Meet Our Team
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {grid.map((feature) => (
          <div
            key={feature.title}
            className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-8 rounded-3xl overflow-hidden h-80 shadow-lg flex flex-col justify-between"
          >
            <Grid size={20} />

            {/* Image Section */}
            <img
              src={feature.image}
              alt={`${feature.title}'s profile`}
              className="w-40 h-40 rounded-full mx-auto mb-4 shadow-md border-2 border-gray-300 object-cover"
              onError={(e) => (e.currentTarget.src = "harshit.png")}
            />

            {/* Text Section */}
            <div className="text-center">
              <p className="text-lg font-bold text-neutral-800 dark:text-white relative z-20">
                {feature.title}
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 mt-2 text-base font-normal relative z-20">
                {feature.role}
              </p>
            </div>

            {/* Icon Section */}
            <div className="absolute bottom-4 right-4 flex space-x-4">
              {feature.github && (
                <Link
                  href={feature.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition"
                  aria-label={`${feature.title}'s GitHub`}
                >
                  <FaGithub size={20} />
                </Link>
              )}
              {feature.LinkedIn && (
                <Link
                  href={feature.LinkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-blue-500 transition"
                  aria-label={`${feature.title}'s LinkedIn`}
                >
                  <FaLinkedin size={20} />
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const grid = [
  {
    image: "udhav.jpeg",
    title: "Udhav Wadhawan",
    role: "iOS Developer",
    github: "https://github.com/w-udhav",
    LinkedIn: "https://www.linkedin.com/in/w-udhav/",
  },
  {
    image: "ansh.jpeg",
    title: "Ansh Bhasin",
    role: "iOS Developer",
    github: "https://github.com/ItzAnsh",
    LinkedIn: "https://www.linkedin.com/in/anshbhasin/",
  },
  {
    image: "NamanMalhotra.jpg",
    title: "Naman Malhotra",
    role: "iOS Developer",
    github: "https://github.com/NamanMalhotra1706",
    LinkedIn: "https://www.linkedin.com/in/naman-malhotra-54205423b/",
  },
  {
    image: "pratham.jpeg",
    title: "Pratham Mehta",
    role: "iOS Developer",
    github: "https://github.com/pratham2609",
    LinkedIn: "https://www.linkedin.com/in/prathammehta26/",
  },
  {
    image: "tanishk.jpeg",
    title: "Tanishk Sahni",
    role: "iOS Developer",
    github: "https://github.com/tanishksahni",
    LinkedIn: "https://www.linkedin.com/in/tanishksahni/",
  },
];

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
    const [p, setP] = useState<number[][] | null>(null);    
  const defaultPattern = Array.from({ length: 5 }, () => [
    Math.floor(Math.random() * 4) + 7,
    Math.floor(Math.random() * 6) + 1,
  ]);
  useEffect(() => {
    setP(pattern ?? defaultPattern);
    },[]);

  return (
    <div className="pointer-events-none absolute left-1/2 top-0 -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: any, index: number) => (
            <rect
              strokeWidth="0"
              key={`${patternId}-${x}-${y}-${index}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
