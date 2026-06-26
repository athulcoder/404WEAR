import MainContent from '@/components/Shop/MainContent'
import SideNav from '@/components/Shop/SideNav'
import SubNav from '@/components/Shop/SubNav'
import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen bg-[#f9fafb]">

      {/* Mobile Top Nav */}
      <div className="md:hidden">
        <SubNav />
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:grid md:grid-cols-[260px_1fr]">

        {/* Sidebar */}
        <SideNav />

        {/* Main Content */}
        <main className="min-h-screen p-6 bg-[#f9fafb]">
          <MainContent/>
            </main>

      </div>

      {/* Mobile Content */}
      <div className="md:hidden pt-[60px] p-4">
        <MainContent/>
      </div>

    </div>
  
  )
}

export default page