// app/layout.tsx
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Your Name",
  description: "Your professional portfolio website",
  openGraph: {
    title: "Portfolio | Your Name",
    description: "Your professional portfolio website",
    url: "https://yourdomain.com",
    siteName: "Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <nav className="fixed top-0 w-full border-b border-black/10 bg-white/50 backdrop-blur-md">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <span className="text-xl font-bold">Your Name</span>
              <div className="flex space-x-8">
                <a href="#about" className="hover:text-black/60">
                  About
                </a>
                <a href="#projects" className="hover:text-black/60">
                  Projects
                </a>
                <a href="#contact" className="hover:text-black/60">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
