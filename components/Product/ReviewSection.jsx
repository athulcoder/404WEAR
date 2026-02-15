import Image from "next/image"
import { Star } from "lucide-react"


export default function ReviewsSection({ reviews, rating, count }) {
  // Filter only reviews that have images for the "User Images" section
  const reviewsWithImages = reviews.filter(r => r.imageUrl);

  return (
    <div id="reviews" className="mt-32 scroll-mt-24">
      <div className="flex items-end justify-between mb-8 border-b border-gray-200 pb-4">
        <h2 className="text-3xl font-bold font-jetbrains">User Reviews</h2>
        <span className="text-[#6a9955] font-mono text-sm hidden md:inline-block">
            // console.log(customer_feedback)
        </span>
      </div>

      <div className="grid md:grid-cols-12 gap-10">
        
        {/* Rating Summary */}
        <div className="md:col-span-4 bg-gray-50 p-8 rounded-3xl h-fit">
            <div className="text-6xl font-extrabold text-cyan-600 mb-2">{rating}</div>
            <div className="flex text-yellow-400 mb-4">
                 {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill={i < Math.floor(rating) ? "currentColor" : "none"} className={i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"} />
                 ))}
            </div>
            <p className="text-gray-500 text-sm mb-6">Based on {count} verified reviews</p>
            
            {/* Dynamic User Images Grid */}
            {reviewsWithImages.length > 0 && (
                <>
                    <h4 className="font-bold text-sm mb-3">Review Images</h4>
                    <div className="grid grid-cols-4 gap-2">
                        {reviewsWithImages.slice(0, 4).map((r) => (
                            <div key={r.id} className="aspect-square bg-gray-200 rounded-lg overflow-hidden relative cursor-pointer hover:opacity-80">
                                <Image src={r.imageUrl} fill className="object-cover" alt="User review" sizes="100px" />
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>

        {/* Dynamic Reviews List */}
        <div className="md:col-span-8 space-y-6">
            {reviews.map((review) => (
                <article key={review.id} className="border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition duration-300">
                    <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                                {review.userName.charAt(0)}
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900">{review.userName}</h4>
                                <div className="flex text-yellow-400 text-xs">
                                     {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={12} fill={i < review.rating ? "currentColor" : "none"} className={i < review.rating ? "text-yellow-400" : "text-gray-300"} />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <time className="text-gray-300 text-xs">{review.date}</time>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{review.comment}</p>
                    
                    {review.imageUrl && (
                         <div className="mt-4 w-24 h-24 relative rounded-lg overflow-hidden border border-gray-200">
                            <Image src={review.imageUrl} fill className="object-cover" alt="Review attachment" sizes="100px" />
                         </div>
                    )}
                </article>
            ))}
        </div>
      </div>
    </div>
  )
}