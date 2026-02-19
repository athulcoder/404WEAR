import ColorPicker from '@/components/Product/ColorPicker'
import MobileCartActions from '@/components/Product/MobileCartActions'
import ProductDetailsAccordion from '@/components/Product/ProductDetailsAccordion'
import ProductImageGallery from '@/components/Product/ProductImageGallery'
import SizeChart from '@/components/Product/SizeChart'
import TrustBadges from '@/components/Product/TrustBadges'
import { jetbrains, sourcecode } from '@/fonts/fonts'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CgStark } from 'react-icons/cg'
import { CiStar } from 'react-icons/ci'
import { FaStar } from 'react-icons/fa'
import { IoIosArrowForward, IoIosShareAlt, IoMdShare } from 'react-icons/io'

const product = {
    id: 1,
    name: "404 Debug Tee ",
    price: "₹999",
    rating: 4.7,
    desc:"a super developer wear this yellow color and button preimum quality t-shoirt with more stocks ",
    reviews: 124,
    discount:"30%",
    colors:[
  { name: "Black", class: "bg-black", value: "black" },
  { name: "White", class: "bg-white border border-border", value: "white" },
  { name: "Gray", class: "bg-gray-500", value: "gray" },
  { name: "Red", class: "bg-red-600", value: "red" },
],
    img: [
      "/assets/c1.png",
      "/assets/c2.png",
      "/assets/c3.png",
    ],
     mrp:"₹1099"
  }

const ProductPage = () => {
  return (
    <div className='min-xl:px-30 pb-50'>
      
      {/* navigation */}

      <div className='flex gap-1 justify-start items-center w-full p-2 text-md font-light bg-[#ebf5f7] min-md:bg-white'>
        
       <Link href={'/'} className='text-green-700' >Home</Link> <IoIosArrowForward/>
       <Link href={'/shop'} className='text-green-700' >Shop</Link> <IoIosArrowForward/>
       <span className='text-cyan-600 truncate w-[120px] font-bold'>{product.name}</span>

      </div>


    {/* main box */}
    <div className=' flex flex-col justify-center items-center min-md:flex-row min-md:items-start'>
        
        
        
        <ProductImageGallery images={product.img} productName={product.name}/>
        

        {/* Details */}
        <div className='w-full  px-3 flex flex-col items-start'>
          <h1 className={`${jetbrains.className} text-4xl font-bold`}>{product.name}</h1>

          <div className="flex items-center gap-2 text-xs">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          size={19}
                          className={
                            i < Math.round(product.rating)
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }
                        />
                      ))}
                    </div>
          
                    <span
                      className={`${sourcecode.className} text-gray-600  font-semibold text-xl`}
                    >
                      {product.rating} ({product.reviews} reviews)
                    </span>
            </div>

            
           <p className='flex  items-center gap-2 py-2 '>
             <span className='text-4xl font-semibold'>
              {product.price}
            </span>

            <span className='line-through text-lg'>{product.mrp}</span>
             <span className='text-lg font-bold text-cyan-600'>{
                product.discount
              }off
              </span>
            </p>

           
            <p className='text-gray-600 font-sans text-md pb-4'>
              {product.desc}
            </p>


            {/* color picker */}

            <ColorPicker colors={product.colors}/>

         

                <div className='flex gap-2   items-center py-4  w-full'>
                <label htmlFor="size"> Select Size</label>
                <select name="size" id="size" className='border-[1px] border-gray-200 rounded-xl px-3 py-1 '>
                  <option value={'S'}>S</option>
                  <option value={'M'}>M</option>
                  <option value={'L'}>L</option>
                  <option value={'XL'}>XL</option>
                  <option value={'XXL'}>XXL</option>
                  <option value={'3XL'}>3XL</option>
                </select>


                <SizeChart/>    
                </div>


              <div className='flex gap-2   items-center  w-full'>
                  <label htmlFor="quantity"> Quantity</label>
                <select name="quantity" id="quantity" className='border-[1px] border-gray-200 rounded-xl px-3 py-1 '>
                  <option value={'1'}>1</option>
                  <option value={'2'}>2</option>
                  <option value={'3'}>3</option>
                  <option value={'4'}>4</option>
                  <option value={'5'}>5</option>
                </select>
                  
                </div>


                <TrustBadges/>


              {/* action buttons */}
              <MobileCartActions/>


              <ProductDetailsAccordion/>
        </div>
    </div>


    </div>
  )
}

export default ProductPage