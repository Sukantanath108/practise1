import { Fira_Sans, Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const firaSans = Fira_Sans({
  variable: "--font-fira-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata = {
  title: "Sukanta Nath — Mechanical Engineer & AI Researcher",
  description:
    "Portfolio of Sukanta Nath — Mechanical Engineering student building autonomous systems and AI-driven industrial solutions. Mars Rover, Computer Vision, Machine Learning.",
  keywords: [
    "Sukanta Nath",
    "Mechanical Engineering",
    "AI",
    "Machine Learning",
    "Computer Vision",
    "Autonomous Systems",
    "Portfolio",
  ],
  openGraph: {
    title: "Sukanta Nath — Mechanical Engineer & AI Researcher",
    description:
      "Building autonomous systems — from Mars Rovers to Smart Factories.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${firaSans.variable} ${poppins.variable} ${jetbrainsMono.variable} font-body antialiased`}
      >
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
