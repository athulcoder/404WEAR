import React from 'react'

const Pagination = () => {
  return (
    <div>
        {/* Pagination */}
      <div className="mt-10 flex items-center justify-between max-w-7xl mx-auto text-sm">

        <button className="px-4 py-2 border rounded-md hover:bg-gray-50">
          ← Previous
        </button>

        <div className="flex gap-2 text-gray-600">
          <span className="px-3 py-1 rounded bg-gray-100">1</span>
          <span className="px-3 py-1 rounded bg-gray-100">2</span>
          <span className="px-3 py-1 rounded bg-gray-100">3</span>
          <span className="px-3 py-1 rounded bg-gray-100">4</span>
        
       
        </div>

        <button className="px-4 py-2 border rounded-md hover:bg-gray-50">
          Next →
        </button>

      </div>
    </div>
  )
}

export default Pagination