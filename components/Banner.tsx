"use client";
import Image from "next/image";
import { CustomButton } from ".";

const Banner = () => {
    const handleScroll =() =>{

    }
    return (
        <div className="md:flex">
            <div className="flex-1 pt-36 padding-x">
                <h2 className="banner-title">
                    Find,Book, or Rent a car -- Quickly and easily!
                </h2>
                <p className="banner-subtitle">
                    Streamline your car rental experience with our effortless booking proccess
                </p>
                <CustomButton
                title="Explore cars"
                containerStyles="bg-blue-600 px-4 py-2 text-white rounded-full mt-10"
                handleClick = {handleScroll}
                />
            </div>
            <div className="hero__image-container">
                <div className="hero__image">
                    <Image src="/hero.png" alt="car" fill className="object-contain" />
                </div>
                {/* <div className="hero__image-overlay"></div> */}
            </div>
        </div>
    );
};

export default Banner;