import type { Metadata } from "next";
//import localFont from "next/font/local";
import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {

    title: "Youssef Chahbi | Full-Stack Developer & Low-Level Programming Specialist",
    description: "Explore the portfolio of Youssef Chahbi, a skilled software developer and student at 1337 coding school. Youssef specializes in low-level programming with C, C++, Java, JavaScript, React, Next.js, and Tailwind. His expertise shines through challenging projects like libft, philosophers, minishill, minitalk, solong, cub3d, inception, webserv, IRC, and transandence. With a focus on building robust, efficient, and innovative solutions, Youssef bridges the gap between high-performance code and modern web technologies.",
    keywords: "Youssef Chahbi, software developer, 1337 coding school, C developer, C++ developer, Java developer, JavaScript, React, Next.js, Tailwind CSS, low-level programming, libft, philosophers, minishill, minitalk, solong, cub3d, inception, webserv, IRC, transandence, full-stack development, web development, portfolio",
    author: "Youssef Chahbi",
    robots: "index, follow",
    
    "og:title": "Youssef Chahbi | Full-Stack Developer & Low-Level Programming Specialist",
    "og:description": "Discover Youssef Chahbi's portfolio featuring projects like libft, philosophers, minishill, and more. Specializing in C, C++, Java, JavaScript, React, and low-level programming.",
    "og:image": "https://www.ychahbi.live/_next/static/media/ychahbi.5f7cd175.jpeg",
    "og:url": "https://www.ychahbi.live/",
    "og:type": "website",
    "og:locale": "en_US",

    "twitter:card": "summary_large_image",
    "twitter:title": "Youssef Chahbi | Full-Stack Developer & Low-Level Programming Specialist",
    "twitter:description": "Explore Youssef Chahbi's software development journey, specializing in low-level programming and web technologies.",
    "twitter:image": "https://www.ychahbi.live/_next/static/media/ychahbi.5f7cd175.jpeg",
    "twitter:site": "@yourTwitterHandle",

    "og:image:width": "1200",
    "og:image:height": "630",

    "og:site_name": "Youssef Chahbi Portfolio",
};




export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      {/* <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}> */}
      <body className={``}>
        {children}
      </body>
    </html>
  );
}
