import { Teko, Kalam } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const teko = Teko({ 
  subsets: ["latin"], 
  weight:["300","400","500","600","700"],
  variable: '--font-teko' 

});

const kalam = Kalam({ 
  subsets: ["latin"], 
  weight:["300","400","700"],
  variable: '--font-kalam' 

});

export const metadata = {
  title: "Eduardo Cruz",
  description: "Desenvolvedor de soluções web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body className={`${kalam.variable} ${teko.variable}`}>
        <Header />        
        {children}
      </body>
    </html>
  );
}
