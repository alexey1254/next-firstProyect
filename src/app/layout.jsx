import "./globals.css";
import { Inter } from "next/font/google";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My first next App",
  description: "",
  keywords: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation></Navigation>
        {children}
      </body>
    </html>
  );
}
