import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Fiera del Mastro | Raw Hands. Infinite Vision.",
  description:
    "A curated edit of archaic matter projected into visionary scenography. Radical Luxury from Calabria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#fcf9f8] text-[#1c1b1b] overflow-x-hidden w-full max-w-full leading-[1.6]">
        {children}
        <div id="cursor" className="custom-cursor" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('mousemove', (e) => {
                const cursor = document.getElementById('cursor');
                if (cursor) {
                  cursor.style.left = e.clientX + 'px';
                  cursor.style.top = e.clientY + 'px';
                }
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
