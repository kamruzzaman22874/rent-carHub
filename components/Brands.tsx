"use client"
import { useEffect, useState } from "react";
import { FaCar } from "react-icons/fa";


const Brands = () => {
    const [brands, setBrands] = useState([])

    useEffect(() => {
        fetch("https://rent-car-hub.vercel.app/brands")
            .then(res => res.json())
            .then(data => {
                setBrands(data)
            })
    }, [])


    return (
        <div className="my-10 px-10">
            <div className="mb-8">
                <div className="flex items-center gap-5 justify-center text-red-500 mb-2">
                    <FaCar className="text-xl" />
                    <p className="uppercase text-xl font-bold">POPULAR BRANDS</p>
                </div>
                <h2 className="text-5xl text-center font-inter">Our Top Quality<span className="text-red-600"> Brands</span> </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 my-10">
                {
                    brands?.map(brand => <div key={brand?._id} className="card bg-base-100 shadow rounded-lg bg-[#F9F9F9]">
                        <figure className="px-10 pt-10">
                            <img src={brand?.image} alt="brand car" className="rounded-xl hover:animate-bounce" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title py-3 text-xl text-gray-900 font-bold hover:text-red-600">{brand?.title}</h2>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Brands;