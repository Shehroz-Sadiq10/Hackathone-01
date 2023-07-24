import React from 'react'
import Link from 'next/link'
import { Search } from 'lucide-react'
import { ShoppingCart } from 'lucide-react'

export default function Header() {
    return (
        <div>
            <nav className="flex flex-col lg:flex-row justify-between items-center lg:h-20 py-10 px-5 lg:px-10">
                <div className="flex justify-center lg:justify-start">
                    <a href="/">
                        <img src="/images/Logo.webp" alt="Logo" />
                    </a>
                </div>
                <div className="lg:flex hidden gap-x-6">
                    <Link href="/female">Female</Link>
                    <Link href="/male">Male</Link>
                    <Link href="/kids">Kids</Link>
                    <Link href="/allproducts">All Products</Link>
                </div>
                <div className="lg:w-auto w-full mt-5 lg:mt-0 lg:flex lg:items-center">
                    <div className="flex w-full border bg-white rounded-md">
                        <Search />
                        <input
                            type="text"
                            placeholder="What you are looking for"
                            className="rounded-r outline-none text-gray-600 font-semibold flex-1 px-2"
                        />
                    </div>
                    <div className="bg-slate-200 rounded-full p-2 cursor-pointer ml-4 lg:ml-8">
                        <span className="relative -top-4 -right-0 -left-1 text-white bg-[#f02d34] font-bold h-5 w-5 text-center rounded-full">
                            0
                        </span>
                        <ShoppingCart />
                    </div>
                </div>
                <div className="lg:hidden mt-4 w-full">
                    <nav className="relative z-10">
                        <ul className="flex flex-col items-center gap-y-4">
                            <Link href="/female">Female</Link>
                            <Link href="/male">Male</Link>
                            <Link href="/kids">Kids</Link>
                            <Link href="/allproducts">All Products</Link>
                        </ul>
                    </nav>
                </div>
            </nav>
        </div>
    )
}
