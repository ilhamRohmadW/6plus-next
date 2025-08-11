import type { Metadata } from "next";
import '@/app/assets/sass/global.sass';
import Header from "@/app/layout/header";
import Footer from "@/app/layout/footer";

export const metadata: Metadata = {
  title: "Home | Enamplus",
  description: "Enamplus is a platform for streaming video content.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" /> */}
      </head>
      <body className="dark:bg-zinc-900">
        <Header />
          <main className="main flex flex-col mb-6 lg:mb-10">
            {children}
          </main>
        <Footer />
        
        {/* <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script> */}
        {/* <script src="https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js"></script> */}
        <script src="/js/global.js" defer></script>
      </body>
    </html>
  );
}
