"use client"

import { FaCar } from "react-icons/fa";
import Image from "next/image";
import { useEffect, useState } from "react";
const Category = () => {
    const [categories, setCategories] = useState([])


    useEffect(() => {
        fetch("http://localhost:8000/category")
            .then(res => res.json())
            .then(data => {
                setCategories(data)
            })
    })

    return (
        <div className="px-10  bg-[#F9F9F9] h-full p-10">
            <div className="mb-8">
                <div className="flex items-center gap-5 justify-center text-red-500 mb-2">
                    <FaCar className="text-xl" />
                    <p className="uppercase text-xl font-bold">CAR CATEGORY</p>
                </div>
                <h2 className="text-5xl text-center font-inter">Car By Body<span className="text-red-600"> Types</span> </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-10">
                {
                    categories?.map(category => <div key={category._id} className="card bg-base-100 shadow-md rounded-lg bg-white">
                        <figure className="px-10 pt-10 hover:animate-spin">
                            <Image className="w-full" src={category?.image} width={300} height={100} alt="car" />
                        </figure>
                        <div className="card-body items-center text-center mb-2">
                            <h2 className="card-title text-xl md:text-md py-3 text-gray-900 font-bold hover:text-red-600">
                                {category?.title}</h2>
                        </div>
                    </div>)
                }
            </div>
        </div >
    );
};

export default Category;