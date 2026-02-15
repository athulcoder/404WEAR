import { ChevronRight } from "lucide-react"
import Link from "next/link"



export default function Breadcrumbs({ productName }) {
  return (
    <nav className="border-b border-gray-100 py-4" aria-label="Breadcrumb">
      <div className="max-w-7xl mx-auto px-6 flex items-center gap-2 text-sm text-gray-500 font-medium">
        {/* Link 1: Home */}
        <Link href="/" className="hover:text-cyan-600 transition-colors">
          Home
        </Link>
        
        <ChevronRight size={14} className="text-gray-400" />
        
        {/* Link 2: Shop / Category (Static for now, can be dynamic too) */}
        <Link href="/shop" className="hover:text-cyan-600 transition-colors">
          Shop
        </Link>
        
        <ChevronRight size={14} className="text-gray-400" />
        
        {/* Current Page: Dynamic Product Name */}
        <span 
          className="text-cyan-600 font-semibold truncate max-w-[150px] md:max-w-md" 
          aria-current="page"
          title={productName} // Tooltip for full name on hover if truncated
        >
          {productName}
        </span>
      </div>
    </nav>
  )
}