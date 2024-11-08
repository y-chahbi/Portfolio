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


export const metadata: Metadata  = {
    title: "Youssef Chahbi | Full-Stack Developer & Low-Level Programming Specialist",
    description: "Explore the portfolio of Youssef Chahbi, a skilled software developer and student at 1337 coding school. Youssef specializes in low-level programming with C, C++, Java, JavaScript, React, Next.js, and Tailwind. His expertise shines through challenging projects like libft, philosophers, minishill, minitalk, solong, cub3d, inception, webserv, IRC, and transandence. With a focus on building robust, efficient, and innovative solutions, Youssef bridges the gap between high-performance code and modern web technologies.",
    keywords: "Youssef Chahbi, software developer, 1337 coding school, C developer, C++ developer, Java developer, JavaScript, React, Next.js, Tailwind CSS, low-level programming, libft, philosophers, minishill, minitalk, solong, cub3d, inception, webserv, IRC, transandence, full-stack development, web development, portfolio",
    authors: [{ name: 'Youssef' }, { name: 'Chahbi', url: 'https://www.ychahbi.live/' }],
    robots: "index, follow",
    openGraph: {
        title: "Youssef Chahbi | Full-Stack Developer & Low-Level Programming Specialist",
        description: "Discover Youssef Chahbi's portfolio featuring projects like libft, philosophers, minishill, and more. Specializing in C, C++, Java, JavaScript, React, and low-level programming.",
        images: [
            {
                url : "https://www.ychahbi.live/_next/static/media/ychahbi.5f7cd175.jpeg",
                secureUrl : "https://www.ychahbi.live/_next/static/media/ychahbi.5f7cd175.jpeg",
                width: 1200,
                height: 630,
                alt: 'Youssef Chahbi, software developer',
            }
        ],
        url: "https://www.ychahbi.live/",
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: 'summary_large_image',
        site: '@youssef_chahbi', // Replace with your actual Twitter handle
        title: "Youssef Chahbi | Developer Portfolio", 
        description: "Youssef Chahbi, a passionate software developer skilled in C, C++, Java, JavaScript, React, and more. Creator of projects like libft, philosophers, and minitalk.",
        creator: '@youssef_chahbi', // Replace with your actual Twitter handle
        images: { 
            url: `https://www.ychahbi.live/_next/static/media/ychahbi.5f7cd175.jpeg`, // Update this with the actual image URL
            alt: `Preview image for Youssef Chahbi's Developer Portfolio`, 
        },
    }
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
