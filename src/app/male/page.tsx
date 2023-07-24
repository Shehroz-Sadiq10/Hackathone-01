import React from 'react'
import Image from 'next/image'

export default function page() {
    return (
        <div>

            <div>
                <main className="body">
                    <div className="mx-20 my-16">
                        <div className="grid grid-cols-3 justify-items-center gap-4 ">
                            {/* first  */}
                            <div className="w-64">
                                <Image
                                    src="/images/male2.png"
                                    alt="Description of the image"
                                    width={300}
                                    height={200}
                                />
                                <p className="text-lg mt-2 font-semibold tracking-wider">
                                    Flex Push Button Bomber
                                </p>
                                <p className="text-lg mt-2 font-normal tracking-wider">Jackets</p>
                                <p className="text-lg mt-2 font-semibold tracking-wider">$225</p>
                            </div>

                            {/* second  */}
                            <div className="w-64">
                                <Image
                                    src="/images/male2.png"
                                    alt="Description of the image"
                                    width={300}
                                    height={200}
                                />
                                <p className="text-lg mt-2 font-semibold tracking-wider">
                                    Reglan Sweatshirt
                                </p>
                                <p className="text-lg mt-2 font-normal tracking-wider">Sweater</p>
                                <p className="text-lg mt-2 font-semibold tracking-wider">$195</p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

        </div>
    )
}
