import React from 'react'

const Reasons = () => {
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
    <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid items-center md:grid-cols-2 md:gap-x-20 gap-y-10">
            <div className="relative pl-16 pr-10 sm:pl-6 md:pl-0 xl:pr-0 md:order-2">
                <img className="absolute top-6 -right-4 xl:-right-12" src="https://cdn.rareblocks.xyz/collection/celebration/images/features/3/dots-pattern.svg" alt="" />

                <div className="relative max-w-xs ml-auto">
                    <div className="overflow-hidden aspect-w-3 aspect-h-4">
                        <img className="object-cover w-full h-full scale-150" src="/images/reasons1.jpg" alt="" />
                    </div>

                    <div className="absolute bottom-0 -left-16">
                        <div className="bg-yellow-300">
                            <div className="py-4 pl-4 pr-10 sm:py-6 sm:pl-8 sm:pr-16">
                                <svg className="w-9 sm:w-14 h-9 sm:h-14" xmlns="http://www.w3.org/2000/svg" fill="#FFF" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                                <span className="block mt-3 text-xl font-bold text-black sm:mt-6 sm:text-4xl lg:text-5xl"> 2,984 </span>
                                <span className="block mt-2 text-sm font-medium leading-snug text-amber-900 sm:text-base"> Customer chat<br />served on July </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="md:order-1">
                <h2 className="text-3xl font-bold leading-tight text-blue-600 sm:text-4xl lg:text-5xl">Your Happiness Is Our Frist Priority.</h2>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  We understand the importance of approaching each work integrally and believe in the power of simple and easy communication. We value the experimentation, the reformation of the message.
                </p>

                <a href="#" title="" className="inline-flex items-center justify-center px-8 py-3 mt-8 text-base font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700" role="button"> Start exploring </a>
            </div>
        </div>
    </div>
</section>
  )
}

export default Reasons