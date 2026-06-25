"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type CourseImageRevealCardProps = {
  src: string;
  alt: string;
  title: string;
  description: string;
  gradientClassName: string;
};

export function CourseImageRevealCard({
  src,
  alt,
  title,
  description,
  gradientClassName,
}: CourseImageRevealCardProps) {
  const cardRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      return;
    }

    const target = cardRef.current;

    if (!target) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.45,
      },
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, [isVisible]);

  return (
    <article className={`rounded-2xl bg-gradient-to-b ${gradientClassName} p-2 text-white md:p-4`} ref={cardRef}>
      <div className="relative overflow-hidden rounded-lg">
        <Image
          src={src}
          alt={alt}
          width={900}
          height={1200}
          className="mb-0 h-72 w-full object-contain md:mb-1 md:h-144 md:object-cover"
        />

        {/*<div
          className={`pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/45 to-transparent transition-opacity duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden="true"
        />*/}

        <div
          className={`pointer-events-none absolute inset-x-0 bottom-0 p-4 text-white bg-black/30 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <h3 className="font-display text-lg leading-snug md:text-xl">{title}</h3>
          <p className="mt-1 text-sm text-slate-100 md:text-base">{description}</p>
        </div>
      </div>
    </article>
  );
}