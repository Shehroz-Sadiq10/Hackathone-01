import React from 'react'
import Image from 'next/image'

export default function footer() {
    return (
        <div>
            <div className="max margin">
                <footer className="bg-white">
                    <div className="xl:grid xl:grid-cols-5 ">
                        <div className="col-span-2 flex flex-col xl:space-y-16 sm:space-y-5 sm:w-full xl:w-4/5">
                            <Image src={"/images/Logo.webp"} alt='logo' height={32} width={176} />
                            <p className="xl:font-normal xl:text-base sm:text-sm text-gray-500 w-full">Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>
                            <div className="flex gap-4 sm:pb-5">
                                <div className="py-3 px-3 bg-[#f1f1f1] rounded cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-twitter">
                                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                                    </svg>
                                </div>
                                <div className="py-3 px-3 bg-[#f1f1f1] rounded cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-facebook">
                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                    </svg>
                                </div>
                                <div className="py-3 px-3 bg-[#f1f1f1] rounded cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-linkedin">
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                        <rect width="4" height="12" x="2" y="9"></rect>
                                        <circle cx="4" cy="4" r="2"></circle>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-bold  sm:mt-6 lg:mt-0 text-lg tracking-wide text-gray-600">Company</h3>
                            <ul className="">
                                <li className="xl:mt-6 sm:my-2  font-medium text-base text-gray-600 cursor-pointer">About</li>
                                <li className="xl:mt-6  sm:my-2 font-medium text-base text-gray-600 cursor-pointer">Terms of use</li>
                                <li className="xl:mt-6  sm:my-2 font-medium text-base text-gray-600 cursor-pointer">Privacy policy</li>
                                <li className="xl:mt-6  sm:my-2 font-medium text-base text-gray-600 cursor-pointer">How it works</li>
                                <li className="xl:mt-6  sm:my-2 font-medium text-base text-gray-600 cursor-pointer">Contact us</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold sm:mt-6 lg:mt-0 text-lg tracking-wide text-gray-600">Support</h3>
                            <ul className="xl:mt-4">
                                <li className="xl:mt-6 sm:my-2 font-medium text-base text-gray-600 cursor-pointer">Support Center</li>
                                <li className="xl:mt-6 sm:my-2 font-medium text-base text-gray-600 cursor-pointer">24h Services</li>
                                <li className="xl:mt-6 sm:my-2 font-medium text-base text-gray-600 cursor-pointer">Quick Chat</li>
                            </ul>
                        </div>
                        <div className="sm:hidden xl:inline-block">
                            <h3 className="font-bold  sm:mt-6 lg:mt-0 text-lg tracking-wide text-gray-600">Contact</h3>
                            <ul className="xl:mt-4">
                                <li className="xl:mt-6 sm:my-2 font-medium text-base text-gray-600 cursor-pointer">Whatsapp</li>
                                <li className="xl:mt-6 sm:my-2 font-medium text-base text-gray-600 cursor-pointer">Support 24h</li>
                            </ul>
                        </div>
                    </div>
                    <div className="xl:mt-24  sm:mt-9 border-t border-gray-700 grid lg:grid-cols-3 sm:grid-cols-2  text-center mb-0 ">
                        <p className="font-normal text-base text-gray-700">Copyright © 2022 Dine Market</p>
                        <p className="font-normal text-base text-gray-700">
                            Design by:<span className="font-bold">Al-Buraaq Team of Coders</span>
                        </p>
                        <p className="font-normal text-base text-gray-700 sm:py-4 sm:col-span-2 lg:col-span-1 ">
                            Code by:<span className="font-bold">Shehroz Sadiq</span>
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    )
}
