'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function SacredCycle() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cycles = [
    { id: '01', title: 'Raw Matter', desc: 'The dialogue begins with the material.', image: '/assets/homepage/rawmatter-1.png' },
    { id: '02', title: 'The Gesture', desc: 'Precision and ancestral knowledge.', image: '/assets/homepage/gesture-2.png' },
    { id: '03', title: 'The Opus', desc: 'The final realization beyond time.', image: '/assets/homepage/Opus-3.png' },
  ];

  useGSAP(() => {
    const cards = gsap.utils.toArray('.cycle-card') as HTMLElement[];
    cards.forEach((card, index) => {
      if (index === cards.length - 1) return;
      gsap.to(card, { scale: 0.92, opacity: 0.6, scrollTrigger: { trigger: card, start: 'top top+=15%', endTrigger: cards[index+1], end: 'top top+=20%', scrub: true } });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative py-32 px-6 md:px-16 bg-[#fcf9f8]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-8xl mb-24" style={{ fontFamily: "'Playfair Display', serif" }}>The Sacred Cycle</h2>
        <div className="flex flex-col gap-12 relative w-full pb-24">
          {cycles.map((item, index) => (
            <div key={item.id} className="cycle-card sticky top-[12vh] w-full min-h-[65vh] bg-[#fcf9f8] shadow-sm transform-gpu">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                <div className="md:col-span-5"><span className="text-[15rem] text-[#035AA6]/10" style={{ fontFamily: "'Playfair Display', serif" }}>{item.id}</span></div>
                <div className="md:col-span-7">
                  <h3 className="text-4xl md:text-7xl mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>{item.title}</h3>
                  <p className="text-lg md:text-xl text-[#424751] mb-8">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
