import Image from "next/image";
import img from "../public/about-car.png"
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { FaCar, FaLongArrowAltRight } from "react-icons/fa";
const About = () => {
    return (
        <div className="md:flex justify-center items-center gap-10 w-full my-20 px-10">
            <div className="md:w-1/2">
                <Image
                    src={img}
                    alt="car"
                    width={500}
                    height={400}
                />
            </div>
            <div className="md:w-1/2">
                <div className="flex items-center gap-5 text-red-500 mb-2">
                    <FaCar className="text-xl" />
                    <p className="uppercase text-xl font-bold">about us</p>
                </div>
                <div>
                    <p className="text-6xl font-bold">World Largest <span className="text-red-500">Car</span> <br /> <span className="text-red-500">Dealer</span> Marketplace.</p>
                    <p className="py-6 font-semibold">Car Hub is your go-to destination for all things automotive, offering a comprehensive platform that brings together enthusiasts, buyers, and sellers in a vibrant and informative community.</p>
                </div>

                <div>
                    <div className="flex items-center gap-2">
                        <IoIosCheckmarkCircleOutline className="text-red-500" />
                        <p>At vero eos et accusamus et iusto odio.</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <IoIosCheckmarkCircleOutline className="text-red-500" />
                        <p>Established fact that a reader will be distracted.</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <IoIosCheckmarkCircleOutline className="text-red-500" />
                        <p>Sed ut perspiciatis unde omnis iste natus sit.</p>
                    </div>
                </div>
                <button className="btn flex justify-center items-center gap-3 bg-red-700 px-7 hover:bg-slate-950 py-3 rounded text-white mt-10">Discover More <FaLongArrowAltRight /> </button>
            </div>
        </div >
    );
};

export default About;