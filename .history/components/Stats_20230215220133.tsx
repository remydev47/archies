import React from 'react'
import Image from 'next/image'

const Stats = () => {
  return (
    <section className="py-10 bg-[url('/images/bg_pattern_6.jpg')] sm:py-16 lg:py-24">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
            <h4 className="text-4xl font-medium text-gray-900">Numbers tell the hard works we’ve done in last 10 years</h4>
        </div>

        <div className="grid grid-cols-1 gap-6 px-6 mt-8 sm:px-0 lg:mt-16 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-12">
            <div className="overflow-hidden bg-white border border-gray-200 rounded-lg">
                <div className="px-4 py-6">
                    <div className="flex items-start">
                        <svg className="flex-shrink-0 w-12 h-12 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <div className="ml-4">
                            <h4 className="text-4xl font-bold text-gray-900">10+</h4>
                            <p className="mt-1.5 text-lg font-medium leading-tight text-gray-500">YEARS IN BUSINESS</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="overflow-hidden bg-white border border-gray-200 rounded-lg">
                <div className="px-4 py-6">
                    <div className="flex items-start">
                     <Image
                      src='/images/happy.png'
                      className="h-[50%] w-[50%] align-center"
                      height={120}
                      width={120}
                     />
                        <div className="ml-4">
                            <h4 className="text-4xl font-bold text-gray-900">2,756</h4>
                            <p className="mt-1.5 text-lg font-medium leading-tight text-gray-500">HAPPY CUSTOMERS</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="overflow-hidden bg-white border border-gray-200 rounded-lg">
                <div className="px-4 py-6">
                    <div className="flex items-start">
                    <Image
                      src='/images/permit.png'
                      className="h-[50%] w-[50%] align-center"
                      height={120}
                      width={120}
                     />
                        <div className="ml-4">
                            <h4 className="text-4xl font-bold text-gray-900">674</h4>
                            <p className="mt-1.5 text-lg font-medium leading-tight text-gray-500">BUILDING PERMITS</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="overflow-hidden bg-white border border-gray-200 rounded-lg">
                <div className="px-4 py-6">
                    <div className="flex items-start">
                    <Image
                      src='/images/quality.png'
                      className="h-[50%] w-[50%] align-center"
                      height={120}
                      width={120}
                     />
                        <div className="ml-4">
                            <h4 className="text-4xl font-bold text-gray-900">700</h4>
                            <p className="mt-1.5 text-lg font-medium leading-tight text-gray-500">MODERN DESIGNS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>  
  )
}

export default Stats