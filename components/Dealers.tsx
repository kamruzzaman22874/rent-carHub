"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaCar, FaPhoneAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";

const Dealers = () => {

    const [deaclares, setDeaclares] = useState([])

    useEffect(() => {
        fetch("https://car-showcase-server.vercel.app/declare")
            .then(res => res.json())
            .then(data => {
                setDeaclares(data)
            })
    }, [])
    return (
        <div className="px-10 my-20">
            <div className="mb-8">
                <div className="flex items-center gap-5 justify-center text-red-500 mb-2">
                    <FaCar className="text-xl" />
                    <p className="uppercase text-xl font-bold">CAR DEALERS</p>
                </div>
                <h2 className="text-5xl text-center font-inter">Best Dealers In<span className="text-red-600"> Your City</span> </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 bg-white relative">
                {
                    deaclares?.map(declare => <div className="card w-full bg-base-100 shadow-xl rounded-lg p-5">
                        <button className="btn bg-red-600 px-4 py-2 text-white rounded absolute">
                            {declare?.title}
                        </button>
                        <Image className="bg-[#F9F9F9] p-10 rounded-lg w-full" src={declare?.image} width={300} height={50} alt="car" />

                        <div className="card-body space-y-2 py-3">
                            <h2 className="card-title font-bold text-lg">
                                {declare?.name}
                            </h2>
                            <div className="flex items-center gap-2">
                                <CiLocationOn className="text-red-500" />
                                <p>{declare?.location}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaPhoneAlt className="text-red-500" />
                                <p>{declare?.phone}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Dealers;