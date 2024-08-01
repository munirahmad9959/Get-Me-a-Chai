import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Get me A Chai || Fueling Creativity, One Chai at a Time",
  description: "Get Me A Chai is a platform for creators to receive support and connect with their audience. Whether you're an artist, writer, or content creator, let your fans show their appreciation by treating you to a virtual chai.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-white">
        <SessionWrapper>
          <Navbar />
          <div className="min-h-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-white">
            {children}</div>
          <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}
