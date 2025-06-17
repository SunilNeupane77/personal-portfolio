import { Outfit as OutfitFont, Ovo as OvoFont } from "next/font/google";
import "./globals.css";

const outfit = OutfitFont({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: 'swap',
});

const ovo = OvoFont({
  weight: ["400"],
  subsets: ["latin"],
  display: 'swap',
});

export const metadata = {
  title: "Sunil Neupane | Full-Stack Developer",
  description: "Personal Portfolio of Sunil Neupane - Full-Stack Software Developer & Tech Enthusiast",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden bg-gradient-to-br from-white to-gray-100 text-gray-800 dark:from-gray-900 dark:to-gray-800 dark:text-gray-100`}
      >
        {children}
      </body>
    </html>
  );
}
