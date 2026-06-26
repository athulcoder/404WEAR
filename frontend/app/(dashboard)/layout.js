import Navbar from "@/components/Navbar/Navbar";


export const metadata = {
  title: "SudoWear | E-commerce",
  description: "Sudowear ecommerce platform for developers and tech ppl",
};

export default function Layout({ children }) {
  return (
    

        <div className="relative h-screen ">
            <Navbar />

            <div className=" w-full h-screen mt-[60px] bg-white">

            {children}

            </div>
        </div>
     
  );
}
