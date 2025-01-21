"use client";
import { cn } from "@/lib/utils";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import React from "react";
import * as Constants from "@/constants";

export const HeroHighlight = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    if (!currentTarget) return;
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  return (
    <div
      className={cn(
        "h-full flex items-center justify-center w-full group opacity-100 flex-col bg-[#121115]",
        containerClassName
      )}
      onMouseMove={handleMouseMove}
    >
      <div className={`absolute inset-0 opacity-0 pointer-events-none`} />
      <motion.div
        className={`pointer-events-none bg-dot-thick-teal-600 absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100`}
        style={{
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              220px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              220px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
        }}
      />

      <div className={cn("relative z-20 bg-[#121115]/30 max-w-5xl", className)}>{children}</div>
    </div>
  );
};