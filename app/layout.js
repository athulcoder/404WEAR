import Navbar from "@/components/Navbar";
import "./globals.css"


export const metadata = {
  title: "404Wear | E-commerce",
  description: "404Wear ecommerce app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body>

        <div className="relative h-screen ">
            <Navbar />

            <div className=" w-full h-screen mt-[70px] bg-green-200">

            {children}

            </div>
        </div>
      </body>
    </html>
  );
}
