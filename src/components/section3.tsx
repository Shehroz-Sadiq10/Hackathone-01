import React from 'react'

export default function section3() {
    return (
        <div>     <main>
            <section className="">
                <div className="">
                    <div className="flex xl:justify-end sm:justify-center pt-0 xl:pb-8 sm:pb-6 mdd:mt-16 sm:mt-7">
                        <h1 className="font-bold sm:text-[20px] mdd:text-[2.75rem] mdd:leading-[55px] sm:leading-10 tracking-[0.03rem] sm:w-[100%] xl:w-[45%]">
                            Unique and Authentic Vintage Designer Jewellery
                        </h1>
                    </div>
                    <div className="grid xl:grid-cols-2 sm:grid-cols-1 pt-0">
                        <div className="grid grid-cols-2 mdd:gap-8 sm:gap-5 justify-center items-center relative">
                            <div className="font-extrabold text-[6.875rem] leading-[110px] absolute opacity-[0.04] xl:w-[80%] sm:hidden xl:inline-block">
                                Different from others
                            </div>
                            <div>
                                <h3 className="font-bold">Using Good Quality Materials</h3>
                                <br />
                                <p className="fs-10">Individuals can enjoy the benefits of comfort, durability, and sustainability in clothing choices.</p>
                            </div>
                            <div>
                                <h3 className="font-bold">100% Handsome Products</h3>
                                <br />
                                <p className="fs-10">Using 100% handsome products elevates the grooming and self-care experience to new heights.</p>
                            </div>
                            <div>
                                <h3 className="font-bold">Modern Fashion Design</h3>
                                <br />
                                <p className="fs-10">Modern fashion design is an ever-evolving realm where creativity meets innovation.</p>
                            </div>
                            <div>
                                <h3 className="font-bold">Discount for Bulk Orders</h3>
                                <br />
                                <p className="fs-10">Discounts for bulk orders provide a compelling incentive for businesses.</p>
                            </div>
                        </div>
                        <div className="base:flex sm:block items-center gap-10 xl:ml-10">
                            <img src="/images/product1.png" alt="" className="mx-auto py-4 w-2/4 rounded-xl" />
                            <div className="flex flex-col gap-8 sm:my-4">
                                <p className="mdd:font-medium mdd:text-base sm:text-lg sm:font-light">
                                    This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is
                                    the actual natural color of the fiber, undyed and 100% traceable.
                                </p>
                                <div className="items-center justify-center">
                                    <button className="flex justify-center gap-2 text-white text-sm w-full mdd:font-bold sm:font-semibold bg-slate-700 py-3 rounded-xl hover:bg-slate-300 hover:text-black hover:shadow-lg hover:shadow-slate-700">
                                        <a href="/allProducts">See All Products</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        </div>
    )
}
