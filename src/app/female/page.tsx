import React from 'react'
import Image from 'next/image'


export default function page() {
    return (
        <div>

            <div className=" lg:mx-40 my-16">
                <div className="grid sm:grid-cols-1 base:grid-cols-2 normal:grid-cols-3 xl:grid-cols-3  xxl:grid-cols-3 justify-items-center gap-3 ">
                    {/* first  */}
                    <div className="w-4/5">
                        <Image
                            src="/images/product1.png"
                            alt="Description of the image"
                            width={300}
                            height={200}

                        />

                        <p className="text-lg mt-2 font-semibold tracking-wider">
                            Brushed Raglan Sweatshirt
                        </p>
                        <p className="text-lg mt-2 font-normal tracking-wider">Sweater</p>
                        <p className="text-lg mt-2 font-semibold tracking-wider">$195</p>
                    </div>

                    {/* second  */}
                    <div className="w-4/5">
                        <Image
                            src="/images/product2.png"
                            alt="Description of the image"
                            width={300}
                            height={200}

                        />

                        <p className="text-lg mt-2 font-semibold tracking-wider">
                            Cameryn Sash Tie Dress
                        </p>
                        <p className="text-lg mt-2 font-normal tracking-wider">Dress</p>
                        <p className="text-lg mt-2 font-semibold tracking-wider">$545</p>
                    </div>

                    {/* third  */}
                    <div className="w-4/5">
                        <Image
                            src="/images/product3.png"
                            alt="Description of the image"
                            width={300}
                            height={200}

                        />

                        <p className="text-lg mt-2 font-semibold tracking-wider">
                            Flex Sweatshirt
                        </p>
                        <p className="text-lg mt-2 font-normal tracking-wider">Sweater</p>
                        <p className="text-lg mt-2 font-semibold tracking-wider">$175</p>
                    </div>

                    {/* forth  */}
                    <div className="w-4/5">
                        <Image
                            src="/images/header.webp"
                            alt="Description of the image"
                            width={300}
                            height={200}

                        />

                        <p className="text-lg mt-2 font-semibold tracking-wider">
                            Flex Sweatpants
                        </p>
                        <p className="text-lg mt-2 font-normal tracking-wider">Pants</p>
                        <p className="text-lg mt-2 font-semibold tracking-wider">$175</p>
                    </div>
                    {/* fifth  */}
                    <div className="w-4/5">
                        <Image
                            src="/images/Female5.png"
                            alt="Description of the image"
                            width={300}
                            height={200}

                        />

                        <p className="text-lg mt-2 font-semibold tracking-wider">
                            Pink Fleece Sweatpants
                        </p>
                        <p className="text-lg mt-2 font-normal tracking-wider">Pants</p>
                        <p className="text-lg mt-2 font-semibold tracking-wider">$195</p>
                    </div>
                    {/* sixth  */}
                    <div className="w-4/5">
                        <Image
                            src="/images/Female6.png"
                            alt="Description of the image"
                            width={300}
                            height={200}

                        />

                        <p className="text-lg mt-2 font-semibold tracking-wider">
                            Lite Sweatpants
                        </p>
                        <p className="text-lg mt-2 font-normal tracking-wider">Pants</p>
                        <p className="text-lg mt-2 font-semibold tracking-wider">$150</p>
                    </div>
                    {/* seventh  */}
                    <div className="w-4/5">
                        <Image
                            src="/images/Female7.png"
                            alt="Description of the image"
                            width={300}
                            height={200}

                        />

                        <p className="text-lg mt-2 font-semibold tracking-wider">
                            Imperial Alpaca Hoodie
                        </p>
                        <p className="text-lg mt-2 font-normal tracking-wider">Jackets</p>
                        <p className="text-lg mt-2 font-semibold tracking-wider">$525</p>
                    </div>
                    {/* eight  */}
                    <div className="w-4/5">
                        <Image
                            src="/images/Female8.png"
                            alt="Description of the image"
                            width={300}
                            height={200}

                        />

                        <p className="text-lg mt-2 font-semibold tracking-wider">
                            Muscle Tank
                        </p>
                        <p className="text-lg mt-2 font-normal tracking-wider">
                            T Shirts
                        </p>
                        <p className="text-lg mt-2 font-semibold tracking-wider">$75</p>
                    </div>
                    {/* ninth  */}
                    <div className="w-4/5">
                        <Image
                            src="/images/Female9.png"
                            alt="Description of the image"
                            width={300}
                            height={200}

                        />

                        <p className="text-lg mt-2 font-semibold tracking-wider">
                            Brushed Bomber
                        </p>
                        <p className="text-lg mt-2 font-normal tracking-wider">Jackets</p>
                        <p className="text-lg mt-2 font-semibold tracking-wider">$225</p>
                    </div>
                </div>
            </div>

        </div>

    )
}
