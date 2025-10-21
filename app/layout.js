import Header from "@/Components/Header.js";
import Footer from "@/Components/Footer.js";
import "./globals.css";
// import "remixicon/fonts/remixicon.css";
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  title: 'Abhinav Jain',
  description: 'Developed by abnjain',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
