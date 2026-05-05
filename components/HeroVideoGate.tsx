'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HeroVideoGate() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!containerRef.current || !videoRef.current) return;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=300%',
        pin: true,
        scrub: 1,
      },
    });
    tl.fromTo(videoRef.current, { currentTime: 0 }, { currentTime: 5, ease: 'none', duration: 1 });
  }, []);

  return (
    <section ref={containerRef} className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden bg-[#fcf9f8]">
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-16">
        <h1 className="text-5xl md:text-[9rem] leading-[0.9] text-[#035AA6] font-semibold tracking-tighter" style={{ fontFamily: "'Playfair Display', serif" }}>
          RAW HANDS.<br />INFINITE VISION.
        </h1>
      </div>
      <div className="absolute bottom-0 right-0 w-[40vw] aspect-[4/3] z-0 overflow-hidden bg-[#2a2a2a]">
        <video ref={videoRef} src="/assets/video/video-background.mp4" className="w-full h-full object-cover" muted playsInline />
      </div>
    </section>
  );
}
