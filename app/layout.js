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
            <Navbar />

            <div className=" w-full h-screen mt-[60px] bg-white">

            {children}

            </div>
        </div>
      </body>
    </html>
  );
}
