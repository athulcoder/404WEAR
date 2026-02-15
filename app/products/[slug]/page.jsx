
import { notFound } from "next/navigation"
import { JetBrains_Mono, Source_Code_Pro } from "next/font/google"
import Breadcrumbs from "@/components/Product/Breadcrumbs"
import ProductGallery from "@/components/Product/ProductGallery"
import ProductInfo from "@/components/Product/ProductInfo"
import ReviewsSection from "@/components/Product/ReviewSection"


// --- Font Setup ---
const jetbrains = JetBrains_Mono({ subsets: ["latin"], weight: ["500", "700", "800"], variable: "--font-jetbrains" })
const sourcecode = Source_Code_Pro({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-source" })

// --- 1. SIMULATE BACKEND FETCH ---
async function getProductData(slug) {
  // In a real app: const res = await fetch(`https://api.yoursite.com/products/${slug}`)
  
  // Mock Response
  return {
    product: {
      id: "prod_123",
      sku: "8X-990",
      name: "Cyberpunk Dev Mode Tee",
      description: "High-quality cotton graphic t-shirt designed for long coding sessions.",
      price: 260.00,
      originalPrice: 300.00,
      discountPercentage: 15,
      rating: 4.8,
      reviewCount: 128,
      tags: ["New Arrival", "Limited Edition"],
      sizes: ["S", "M", "L", "XL", "2XL"],
      colors: [
        { name: "Cyan", hexCode: "#0891b2", twClass: "bg-cyan-600" },
        { name: "Dark", hexCode: "#111827", twClass: "bg-gray-900" },
        { name: "White", hexCode: "#e5e7eb", twClass: "bg-gray-200" }
      ],
      images: [
        { id: "img1", url: "/assets/c1.png", altText: "Front view of Cyberpunk Tee" },
        { id: "img2", url: "/assets/c2.png", altText: "Back view" },
        { id: "img3", url: "/shirt.png", altText: "Detail view" },
      ],
      reviews: [
        { id: "r1", userName: "Dev_Guru", rating: 5, comment: "Excellent fit.", date: "2023-08-15", imageUrl: "/shirt.png" },
        { id: "r2", userName: "ReactFan", rating: 4, comment: "Nice print.", date: "2023-08-10" }
      ]
    },
    related: [
       { id: "rel1", name: "System Override Tee", price: 45.00, thumbnailUrl: "/assets/c1.png", slug: "system-override" },
       { id: "rel2", name: "Glitch Mode Hoodie", price: 85.00, thumbnailUrl: "/shirt.png", slug: "glitch-hoodie" },
    ]
  }
}

// --- 2. DYNAMIC METADATA ---
export async function generateMetadata({ params }){
  const data = await getProductData(params.slug)
  if (!data) return {}

  return {
    title: `${data.product.name} | TechWear`,
    description: data.product.description,
    openGraph: {
      images: [data.product.images[0].url],
    },
  }
}

// --- 3. PAGE COMPONENT ---
export default async function ProductPage({ params }) {
  const data = await getProductData(params.slug)
  
  if (!data) return notFound() // Handle 404
  const { product, related } = data

  // JSON-LD for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.images.map(img => img.url),
    description: product.description,
    sku: product.sku,
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    }
  }

  return (
    <div className={`min-h-screen bg-white text-gray-900 ${sourcecode.variable} ${jetbrains.variable} font-source`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <Breadcrumbs productName={product.name} />

      <main className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Gallery - Client Component */}
          <div className="lg:col-span-7 h-fit lg:sticky lg:top-10">
            <ProductGallery images={product.images} />
          </div>
          
          {/* Details - Client Component */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <ProductInfo product={product} />
          </div>
        </div>

        {/* Reviews - Server Component */}
        <ReviewsSection reviews={product.reviews} rating={product.rating} count={product.reviewCount} />
        
        {/* Related - Server Component */}
        {/* <RelatedProducts products={related} /> */}
      </main>
    </div>
  )
}