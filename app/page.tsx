import Image from 'next/image';
import Navbar from '@/components/Navbar';
import HeroVideoGate from '@/components/HeroVideoGate';
import SacredCycle from '@/components/SacredCycle';
import ArchivesBento from '@/components/ArchivesBento';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full flex flex-col">
        <HeroVideoGate />
        <section id="manifesto" className="relative bg-[#fcf9f8] py-32 md:py-64 px-6 md:px-16 overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-center">
            <div className="md:col-span-7">
              <h2 className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#A68B03] mb-8 md:mb-16">The Manifesto</h2>
              <p className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tight text-[#1c1b1b]" style={{ fontFamily: "'Playfair Display', serif" }}>
                We defy the serial. We <br className="hidden md:block" />
                <span className="italic text-[#035AA6]">resurrect</span> the archaic.
              </p>
            </div>
            <div className="md:col-span-5 relative mt-12 md:mt-0">
              <div className="aspect-[4/5] bg-[#f6f3f2] overflow-hidden">
                <Image src="/assets/homepage/wedefy.png" alt="We defy the serial" fill className="object-cover object-center" sizes="(max-width: 768px) 100vw, 40vw" />
              </div>
            </div>
          </div>
        </section>
        <SacredCycle />
        <div id="about">
          <section className="editorial-silence px-6 md:px-16 bg-[#f6f3f2]/80 backdrop-blur-sm fade-in-section">
            <div className="editorial-grid max-w-[1600px] mx-auto items-start">
              <div className="col-span-12 md:col-span-5 md:pr-12">
                <span className="text-[#A68B03] text-xs uppercase tracking-widest mb-6 block font-medium">01 / Purpose</span>
                <h3 className="font-semibold text-3xl md:text-4xl lg:text-6xl mb-6 md:mb-10 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>Geographic silence as <br /> radical luxury.</h3>
                <p className="text-[#424751] font-light leading-loose mb-8 text-base md:text-lg">In a hyper-connected world, true rarity is found in the inaccessible.</p>
              </div>
            </div>
          </section>
        </div>
        <div id="archives"><ArchivesBento /></div>
        <footer className="relative bg-[#1c1b1b] text-white pt-24 pb-12 px-6 md:px-16 w-full">
          <div className="max-w-7xl mx-auto flex justify-between items-end">
            <span className="text-lg italic" style={{ fontFamily: "'Playfair Display', serif" }}>Fiera del Mastro</span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-stone-500">© 2024 Fiera del Mastro.</span>
          </div>
        </footer>
      </main>
    </>
  );
}
