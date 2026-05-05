import fs from 'fs';
import path from 'path';
import Image from 'next/image';

export default async function ArchivesBento() {
  const filePath = path.join(process.cwd(), 'public', 'data', 'archives_feed.json');
  let data = [];
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    data = JSON.parse(fileContents);
  } catch (e) { console.error(e); }

  if (!data || data.length === 0) return null;

  return (
    <section className="w-full bg-[#fcf9f8] py-32 md:py-48 text-[#1c1b1b]">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <h2 className="text-5xl md:text-8xl mb-24" style={{ fontFamily: "'Playfair Display', serif" }}>The Archives</h2>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-32">
          {data.map((post) => (
            <article key={post.id} className="col-span-12 md:col-span-5 group">
              <div className="aspect-[4/5] bg-[#e5e2e1] overflow-hidden mb-8 relative">
                <Image src={post.coverImg} alt={post.title} fill className="object-cover" />
              </div>
              <h3 className="text-2xl md:text-4xl" style={{ fontFamily: "'Playfair Display', serif" }}>{post.title}</h3>
              <p className="text-sm opacity-60">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
