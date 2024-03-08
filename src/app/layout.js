  // Remove this line, it's not directly related to syntax errors

import { Inter } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
 

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "American Web Express",
  description: "American Web Express",
};

export default function RootLayout({ children }) {
 

  return (
    <html lang="en">
      <head>
        {/* Import Inter font styles here for proper CSS loading */}
        <link rel="icon" href="/am.jpg" sizes="192x192"  />
        {inter.styles}
      </head>
      <body className={inter.className}>
        <Navbar
           
        />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
