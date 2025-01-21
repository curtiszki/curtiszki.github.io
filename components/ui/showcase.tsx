"use client";
import {
  useScroll,
  useSpring,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";

interface hrefObject {
  message: string;
  href: string;
};

interface ShowcaseEntry {
  title: string;
  content: React.ReactNode;
  repo?: string;
  href?: hrefObject[];
  tags: string[]
};

const tagColors = ['bg-cyan-500/30'];
const textColors = ['text-cyan-200'];


export const Showcase = ({ data }: { data: ShowcaseEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center']
  });

  const smoothed = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    restDelta: 0.005
  });

  const heightTransform = useTransform(smoothed, [0, 1], [0, height]);
  const opacityTransform = useTransform(smoothed, [0, 0.1], [0, 1]);

  return (
    <div
      ref={containerRef} className="w-full mt-[16px] bg-inherit my-[10px]"
    >
      <div ref={ref} className="text-center md:text-left flex flex-col gap-5 md:gap-2 relative">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative rounded-lg py-[4px] px-[8px] hover:shadow-[inset_0_0_0_10em_rgba(255,255,255,0.08)] border-[1px] border-transparent hover:border-slate-600/25 transition-all:ease-out duration-500"
          >
            <div className="flex flex-col gap-y-1 items-center md:items-start">
              <div className="flex flex-row gap-x-2 items-center">
                <h6 className="text-xl md:text-lg font-bold">
                  {item.title}
                </h6>
                <div className="relative flex flex-row top-[25%] md:left-1 text-xl md:text-base">
                  {typeof item.repo === "string" &&
                        <a className="hover:text-teal-400 duration-200 transition-colors ease-out" href={item.repo}>
                          <FaGithub />
                        </a>
                  }
                </div>
              </div>
              <div className="text-justify md:text-left">
                {item.content}
              </div>
              <div>
                {
                  item.href &&
                  item.href.map((item, idx) => (
                    <div key={idx}
                      className='inline-block'>
                      <a href={item.href}>
                        {item.message}
                      </a>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="flex flex-row flex-wrap gap-x-2 gap-y-0 box-border w-[100%] md:w-full mx-auto md:mx-0">
              {
                item.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className={`inline-flex text-xs px-3 py-1 rounded-full font-medium leading-3 my-1 ${tagColors[idx % tagColors.length]} border-teal-300 border-1 ${textColors[idx%textColors.length]}`}
                  >
                    {tag}
                  </span>
                ))
              }
            </div>
          </div>
        ))}
        <div
          className="absolute h-[100%] -left-[20px] top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-slate-400/30 dark:via-slate-600/30 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] opacity-85 bg-transparent"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-0 top-0  w-[2px] bg-gradient-to-t from-indigo-500 via-cyan-500 to-transparent from-[0%] via-[15%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
