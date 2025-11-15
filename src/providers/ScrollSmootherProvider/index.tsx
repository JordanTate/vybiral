'use client';

import React, { useRef } from 'react';
import gsap from 'gsap/dist/gsap';
import ScrollSmoother from 'gsap/dist/ScrollSmoother';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';

export default function ScrollSmootherProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const wrapper = useRef<HTMLDivElement | null>(null);
  const content = useRef<HTMLDivElement | null>(null);
  const smoother = useRef<ScrollSmoother | null>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

      smoother.current = ScrollSmoother.create({
        wrapper: wrapper.current!,
        content: content.current!,
        smooth: 2,
        effects: true,
      });

      return () => {
        smoother.current?.kill();
      };
    },
    { scope: wrapper }
  );

  return (
    <div id='smooth-wrapper' ref={wrapper}>
      <div id='smooth-content' ref={content}>
        {children}
      </div>
    </div>
  );
}
