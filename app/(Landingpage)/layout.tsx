import NavBar from "@/components/NavBar/NavBar";
import "../globals.css";

export const metadata = {
  title: "itHomeBd",
  description: "A place where you can buy or order your needs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
