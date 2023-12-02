import Lottie from "lottie-react";
import loading from "../public/loading.json"

const Loader = () => {
    return (
        <div>
            <Lottie className="md:w-[30rem]  md:-mt-96 rounded" animationData={loading}>

            </Lottie>
        </div>
    );
};

export default Loader;