"use client";
import {
  useMotionValueEvent,
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
      ref={containerRef} className="w-full mt-[16px] bg-black my-[10px]"
    >
      <div ref={ref} className="text-left flex flex-col gap-2 relative">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative cursor-pointer rounded-lg py-[4px] px-[8px] hover:shadow-[inset_0_0_0_10em_rgba(255,255,255,0.08)] border-[1px] border-transparent hover:border-slate-600/25 transition-all:ease-out duration-500"
          >
            <div className="flex flex-col gap-y-1">
              <div className="flex flex-row gap-x-2 gap-y-0 items-center">
                <h6 className="font-bold">
                  {item.title}
                </h6>
                <div className="relative left-1">
                  {typeof item.repo === "string" &&
                        <a className="hover:text-teal-600 duration-200 transition-colors ease-out" href={item.repo}>
                          <FaGithub />
                        </a>
                  }
                </div>
              </div>
              <div>
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
            <div className="flex flex-row gap-x-2 gap-y-0 my-2">
              {
                item.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className='inline-flex text-xs px-3 py-1 rounded-full font-medium leading-3 bg-teal-500/30 border-teal-300 border-1 text-teal-300'
                  >
                    {tag}
                  </span>
                ))
              }
            </div>
          </div>
        ))}
        <div
          className="absolute h-[100%] -left-[20px] top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
