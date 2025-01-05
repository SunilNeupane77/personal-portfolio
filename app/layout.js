import { Outfit as OutfitFont, Ovo as OvoFont } from "next/font/google";
import "./globals.css";

const outfit = OutfitFont({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = OvoFont({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Sunil Neupane",
  description: "Personal Portfolio Site: Sunil Neupane",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden `}
      >
        {children}
      </body>
    </html>
  );
}
