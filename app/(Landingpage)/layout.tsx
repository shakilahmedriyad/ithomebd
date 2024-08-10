import "../globals.css";
import { Roboto, Raleway } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "itHomeBd | A Home for web3",
  description: "A place where you can buy or order your needs",
  icons: {
    icon: "/favicon-ico.png",
  },
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-roboto",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-raleway",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${raleway.variable} font-Roboto`}>
        <ClerkProvider>
          <NavBar />
          {children}
          <Footer />
        </ClerkProvider>
      </body>
    </html>
  );
}
