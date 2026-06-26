"use client";

const MobileCartActions = () => {
  return (
    <>
      {/* Desktop / Tablet (normal position) */}
      <div className="hidden md:flex gap-3 w-full  mt-2">
        <button className="w-1/2 rounded-lg border border-cyan-500
                           text-cyan-600 py-3 font-medium max-w-[200px]
                           hover:bg-cyan-50 transition">
          Add to Cart
        </button>

        <button className="w-1/2 rounded-lg bg-cyan-500 text-white
                           py-3 font-medium max-w-[200px]
                           hover:bg-cyan-600 transition">
          Buy Now
        </button>
      </div>

      {/* Mobile (floating) */}
      <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden ">
        <div className="flex gap-3 rounded-xl bg-white
                        p-3 shadow-lg border border-gray-200">
          <button className="w-1/2 rounded-lg border border-cyan-500
                             text-cyan-600 py-3 font-medium
                             active:scale-95 transition">
            Add to Cart
          </button>

          <button className="w-1/2 rounded-lg bg-cyan-500 text-white
                             py-3 font-medium
                             active:scale-95 transition">
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileCartActions;
