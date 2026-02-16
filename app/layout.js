import Navbar from "@/components/Navbar/Navbar";
import "./globals.css"


export const metadata = {
  title: "SudoWear | E-commerce",
  description: "Sudowear ecommerce platform for developers and tech ppl",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body>

        <div className="relative h-screen ">

            {children}

        </div>
      </body>
    </html>
  );
}
