import { Footer, Navbar } from "@/components";
import "./globals.css";

export const metadata = {
  title: "Location de voitures",
  description: "découvre les meilleures voitures dans le monde",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
