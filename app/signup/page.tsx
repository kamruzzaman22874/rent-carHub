import SignupForm from "./SignupForm";
import Lottie from "lottie-react"
import signup from "../../public/signup.json"

export const metadata = {
    title: "Signup - Easy Car",
    description: "The best car in the world.",
};

const SignupPage = () => {
    return (
        <div className="hero min-h-screen bg-base-200 px-8 w-full">
            <div className="hero-content flex-col lg:flex-row-reverse justify-center w-full">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="text-center lg:text-left px-10 py-3 space-y-3">
                        <h1 className="text-3xl font-bold">Signup now!</h1>
                        <p className="">Login now with connect us.</p>
                        {/* <Lottie className="md:w-[30rem]" animationData={signup}>
                        </Lottie> */}
                    </div>
                    <SignupForm />
                </div>
            </div>
        </div>
    );
};

export default SignupPage;