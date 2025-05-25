import { Playfair_Display, Raleway } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
});

export const metadata = {
  title: "GalleryX - Virtual Museum Experience",
  description: "Explore art and artifacts from around the world in our virtual museum.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${raleway.variable}`}>
      <body className="min-h-screen bg-white text-black">
        {children}
      </body>
    </html>
  );
}