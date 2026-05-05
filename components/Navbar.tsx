'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [lang, setLang] = useState<'EN' | 'IT'>('EN');
  return (
    <nav className="sticky top-0 w-full z-50 flex justify-between items-center px-6 md:px-16 py-8 bg-[#fcf9f8]/90 backdrop-blur-xl border-b">
      <span className="text-2xl md:text-3xl font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>Fiera del Mastro</span>
      <div className="hidden md:flex gap-8">
        <a className="text-[#035AA6] font-bold text-[11px] uppercase tracking-[0.2em]" href="#manifesto">Manifesto</a>
        <a className="text-[#1c1b1b] text-[11px] uppercase tracking-[0.2em]" href="#about">About Us</a>
      </div>
      <div className="flex items-center gap-4">
        <button onClick={() => setLang(l => l === 'EN' ? 'IT' : 'EN')} className="text-[11px] uppercase tracking-[0.2em]">{lang}</button>
      </div>
    </nav>
  );
}
