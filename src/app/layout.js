import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter, Roboto, Poppins } from "next/font/google";

import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import AuthProvider from "@/components/AuthProvider/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "닥코치",
  description: "닥코치는 목표는 공간, 시간, 매체의 경계를 초월하는 차세대 멀티미디어 플랫폼을 제공하는 것입니다.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className="container">
              <Navbar />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
