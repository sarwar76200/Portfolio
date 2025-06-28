import { Outfit } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// ThemeProvider
import { ThemeProvider } from "@/components/ThemeProvider";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Sarwar A. Minhaj",
  description: "Hello, I'm Sarowar Alam Minhaj, a CS Undergraduate and a passionate software enginner.",
  keywords: ["Sarwar", "Sarowar", "Minhaj",
    "software engineer", "web developer",
    "CS student", "CSE", "NSU", "Hacker cup", "IUPC",
    "Codeforces", "Specialist", "AtCoder", "Leetcode",
    "Algorithms", "Data structure", "Problem solving", "Competitive programming", "CP",
    "Next.js", "React", "ICPC", "Asia West Finalist",
    "Full stack", "Node.js"]

};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link rel="icon" href="/favicon.ico" />
      <body className={`${outfit.className}`}>

        <ThemeProvider attribute="class" defaultTheme="dark">
          <Header />

          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

