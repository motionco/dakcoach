import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Noto_Sans_KR, inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import AuthProvider from "@/components/AuthProvider/AuthProvider";

const notoSans = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

export const metadata = {
  title: "닥코치 | 멀티미디어 제작 연구소",
  description: "개인의 성공을 돕기 위해 공간, 시간, 매체의 경계를 초월하는 차세대 멀티미디어 플랫폼을 제공합니다.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={notoSans.className}>
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