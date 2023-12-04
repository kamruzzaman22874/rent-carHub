"use client"
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { FcGoogle } from "react-icons/fc"
import useAuth from "@/hooks/useAuth";
import toast from 'react-hot-toast';
import createJWT from '@/utils/createJWT';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

const LoginForm = () => {

    const { googleSignIn, signIn } = useAuth()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const search = useSearchParams();
    const from = search.get("redirectUrl") || "/";
    const { replace } = useRouter()

    const onSubmit = async (data) => {
        const { email, password } = data;
        const toastId = toast.loading("Loading...");
        try {
            const user = await signIn(email, password);
            await createJWT({ email })
            toast.dismiss(toastId);
            toast.success("User signed in successfully");
            replace(from)
        } catch (error) {
            toast.dismiss(toastId);
            toast.error(error.message || "User not sign in");
        }
    };

    const handleGoogleSignIn = async () => {
        const toastId = toast.loading("Loading...");
        try {
            const user = await googleSignIn()
            await createJWT({ email: user.email })
            toast.dismiss(toastId);
            toast.success("User signed in successfully");
            replace(from)
        } catch (error) {
            toast.dismiss(toastId);
            toast.error(error.message || "User not sign in");
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md mx-auto  p-10">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        {...register('email', { required: 'Email is required' })}
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                    />
                    {errors.email && <span className="text-red-500">Please enter a valid email adderess</span>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        type="password"
                        {...register('password', { required: 'Password is required' })}
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                    />
                    {errors.password && <span className="text-red-500">{errors.password.message}</span>}
                </div>

                <div className="mb-4">
                    <Link href="/" className="text-sm text-blue-500 hover:text-blue-700">
                        Forgot Password?
                    </Link>
                </div>

                <div>
                    <button type="submit" className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Submit
                    </button>
                </div>
                <p className='mt-3 text-center'>
                    Dont&apos;t have an account?
                    <Link href="/signup" className='text-blue-500 underline ml-1'>Signup</Link>
                </p>
                <div className='divider mt-5'>OR</div>
                <button onClick={handleGoogleSignIn} type='button' className='btn btn-primary w-full mx-auto bg-blue-500 border-0 '
                >
                    <FcGoogle className="text-2xl mr-3" />
                    Google
                </button>
            </form>
        </div>
    );
};

export default LoginForm;