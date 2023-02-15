import React from 'react'

const CTA = () => {
  return (
    <section className="relative py-10 mt-16 overflow-hidden bg-[#C0AC95] sm:py-16 lg:py-24 xl:py-32">
       
      <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
       <div className="text-center md:w-2/3 lg:w-1/2 xl:w-1/3 md:text-left">
           <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Get a Free Appointment Booking</h2>
           <p className="mt-4 text-base text-black">
            We understand the importance of approaching each work integrally and believe in the power of simple and easy communication. We value the experimentation, the reformation of the message.
           </p>

           <form action="#" method="POST" className="mt-8 lg:mt-12">
               <div className="flex flex-col items-center sm:flex-row sm:justify-center">
                   <div className="flex-1 w-full min-w-0 px-4 sm:px-0">
                       <div className="relative text-gray-400 focus-within:text-gray-600">
                           <label htmlFor="email" className="sr-only"></label>
                           <label htmlFor="email" className="sr-only"></label>
                           <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                               <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                               </svg>
                           </div>
                           <input
                               type="email"
                               name="email"
                               id="email"
                               placeholder="Enter email address"
                               className="block w-full py-4 pl-10 pr-4 text-base text-black placeholder-gray-500 transition-all duration-200 border-gray-200 rounded-md sm:rounded-r-none caret-blue-600 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                               required
                           />
                           
                       </div>
                   </div>

                   <button type="submit" className="inline-flex items-center justify-center flex-shrink-0 w-auto px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 bg-blue-700 border border-transparent rounded-md sm:mt-0 sm:rounded-l-none sm:w-auto hover:bg-blue-700 focus:bg-blue-700">
                       Get instant Access
                   </button>
               </div>
           </form>
       </div>
     </div>
    </section>
  )
}

export default CTA