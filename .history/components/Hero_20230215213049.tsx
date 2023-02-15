import React from 'react'
import Image from 'next/image'

const   Hero = () => {
  return (
    <section className="relative pt-48 pb-12 bg-black xl:pt-60 sm:pb-16 lg:pb-32 xl:pb-48 2xl:pb-56">
      <Image
       src="/images/slide-1.jpg"
       objectFit="cover" 
       layout="fill"
       />
     {/* <div className="absolute inset-0">
          <img className="object-cover w-full h-full" src="/images/hero1.png" alt="" />
       </div> */}

  <div className="relative">  
   <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-5xl">
     <div className="w-full lg:w-2/3 xl:w-1/2">
        
         <p className="mt-6 tracking-tighter text-black">
             <span className="font-sans font-normal text-5xl">The NEW FUTURE OF ARCHITECTURE</span><br />
             <span className="font-serif italic font-normal text-6xl">THE BEST DESIGNERS AND PLANNERS</span>
         </p>
         <p className="mt-12 font-sans text-base font-bold text-black text-opacity-70">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu penatibus pellentesque dolor consequat ligula egestas massa gravida. Porttitor venenatis enim praesent.</p>


         <div className="flex items-center mt-5 space-x-3 sm:space-x-4">
             <a
                 href="#"
                 title=""
                 className="inline-flex items-center justify-center px-5 py-2 font-sans text-base font-semibold text-white transition-all duration-200 bg-blue-600 border-2 border-transparent rounded-full  sm:leading-8 sm:text-lg hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-secondary"
                 role="button"
             >
                 BOOK A SCHEDULE
             </a>

             
         </div>
     </div>
    </div>
   </div>
  </section>
  )
}

export default Hero