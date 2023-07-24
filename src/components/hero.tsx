import React from 'react'

export default function hero() {
    return (
        <div>
            <div className="max-w-[1440px] container margin-nav"></div>
            <main className="body">
                <div className="margin">
                    <section>
                        <div className="flex py-10 ml-10">
                            <div>
                                <div className="flex flex-col xl:gap-10 sm:gap-5 content-between ">
                                    <span className="flex bg-[#e1edff] h-10 w-28 rounded-full items-center justify-center text-blue-900 font-bold cursor-default hover:bg-blue-300">
                                        Sale 70%
                                    </span>
                                    <h1 className="font-bold sm:text-2xl xl:text-6xl xl:leading-[55px] sm:leading-9 tracking-wide text-[#212121]">
                                        An Industrial Take On Streetwear
                                    </h1>
                                    <p className="xl:font-bold sm:font-normal text-base text-[#666] xl:w-3/4 sm:w-full text-justify">
                                        Anyone can beat you, but no one can beat your outfit as long as you wear Dine outfits.
                                    </p>
                                    <a
                                        className="xl:p-4 sm:p-2 text-base bg-gray-700 xl:w-1/4 sm:w-full sm:grid sm:justify-items-center sm:items-center rounded-xl hover:shadow-md hover:shadow-gray-700 sm:mt-2 xl:mt-7"
                                        href="/allProducts"
                                    >
                                        <a href="/allproducts">
                                            <button className="flex font-sans font-semibold leading-5 items-center gap-2 text-white">
                                                Start Shopping
                                            </button>
                                        </a>
                                    </a>
                                    <br />
                                    <div className="flex gap-10">
                                        <img src="/images/Featured1.webp" alt="1" width="100" height="100" className="color:transparent" />
                                        <img src="/images/Featured2.webp" alt="2" width="100" height="100" className="color:transparent" />
                                        <img src="/images/Featured3.webp" alt="3" width="100" height="100" className="color:transparent" />
                                        <img src="/images/Featured4.webp" alt="4" width="100" height="100" className="color:transparent" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="sm:hidden xl:flex xl:w-[600px] xl:h-[600px] rounded-[50%] bg-pink-100">
                                    <img
                                        alt=""
                                        loading="lazy"
                                        width="700"
                                        height="200"
                                        decoding="async"
                                        data-nimg="1"
                                        className="mt-[-5%] place-content-center color:transparent;width:650px;height:650px"
                                        srcSet="/_next/image?url=%2Fimages%2Fheader.webp&amp;w=384&amp;q=75 1x, /_next/image?url=%2Fimages%2Fheader.webp&amp;w=640&amp;q=75 2x"
                                        src="/_next/image?url=%2Fimages%2Fheader.webp&amp;w=640&amp;q=75"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}
