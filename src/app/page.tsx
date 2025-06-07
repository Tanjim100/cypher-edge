// import Link from "next/link"
// import { Button } from "@/components/ui/button"

// export default function HomePage() {
//   return (
//     <div className="flex flex-col">
//       {/* Hero Section */}
//       <main className="flex-1 flex flex-col items-center justify-center p-6 md:p-12 text-center">
//         <div className="max-w-3xl mx-auto">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6">Secure Your Digital Experience</h2>
//           <p className="text-lg md:text-xl text-gray-600 mb-8">
//             Join CypherEdge for a seamless, secure, and sophisticated digital experience. We provide cutting-edge
//             solutions for modern challenges.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           <Link href="/home">
//               <Button size="lg" className="bg-black hover:bg-black/90 text-white w-full sm:w-auto">
//                 HomePage
//               </Button>
//             </Link>
//             <Link href="/signup">
//               <Button size="lg" className="bg-black hover:bg-black/90 text-white w-full sm:w-auto">
//                 Sign Up
//               </Button>
//             </Link>
//             <Link href="/signin">
//               <Button size="lg" variant="outline" className="w-full sm:w-auto">
//                 Log In
//               </Button>
//             </Link>
//             <Link href="/products">
//               <Button size="lg" variant="outline" className="w-full sm:w-auto">
//                 Shop
//               </Button>
//             </Link>
//             <Link href="/cart">
//               <Button size="lg" variant="outline" className="w-full sm:w-auto">
//                 View Cart
//               </Button>
//             </Link>
//             <Link href="/admin">
//               <Button size="lg" variant="outline" className="w-full sm:w-auto">
//                 Dashboard
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </main>
//     </div>
//   )
// }

import CallToAction from '@/components/home/CallToAction';
import CommunitySection from '@/components/home/CommunitySection';
import CourseSection from '@/components/home/CourseSection';
import FeatureSection from '@/components/home/FeatureSection';
import HeroSection from '@/components/home/HeroSection';
import ProductSection from '@/components/home/ProductSection';
import React from 'react';

function Page() {
    return (
        <div>
            <HeroSection/>
            <FeatureSection/>
            <ProductSection/>
            <CourseSection/>
            <CommunitySection/>
            <CallToAction/>
        </div>
    );
}

export default Page;