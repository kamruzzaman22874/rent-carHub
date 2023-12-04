"use client"
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { FcGoogle } from "react-icons/fc"
import useAuth from "@/hooks/useAuth";
import toast from 'react-hot-toast';
import createJWT from '@/utils/createJWT';
import { useSearchParams, useRouter } from 'next/navigation';


const SignupForm = () => {
    const router = useRouter();

    // console.log(process.env.NEXT_PUBLIC_IMGBB_API_KEY)

    const { createUser, profileUpdate, googleSignIn } = useAuth()
    const { register, handleSubmit, formState: { errors }, getValues, setValue } = useForm();
    const search = useSearchParams();
    const from = search.get("redirectUrl") || "/";
    const { replace } = useRouter()
    // const uploadImg = async (event) => {
    //     const formData = new FormData();
    //     if (!event.target.files[0]) return;
    //     formData.append("image", event.target.files[0]);
    //     const toastId = toast.loading("Image Loading...");
    //     try {
    //         const res = await fetch(`https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`, {
    //             method: 'POST',
    //             body: formData,
    //         });
    //         if (!res.ok) throw new Error("Failed to upload image")
    //         const data = await res.json()
    //         toast.dismiss(toastId);
    //         toast.success("Image uploaded successfully");
    //         setValue("photo", data.data)

    //     } catch (error) {
    //         toast.error("Image not Uploaded")
    //         toast.dismiss(toastId)
    //     }
    // }
    const onSubmit = async (data, event) => {

        const formData = new FormData();
        console.log(formData)
        formData.append("image", data.image[0]);
        await fetch(`https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imageResponse => {
                console.log(imageResponse)
                alert("success")
            })
        const { name, email, password, photo } = data;
        console.log(data)
        const toastId = toast.loading("Loading...");
        try {
            const user = await createUser(email, password);
            await createJWT({ email })
            await profileUpdate({
                displayName: name,
                photoURL: photo,
            })
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
            const { user } = await googleSignIn()
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
                        Name
                    </label>
                    <input
                        type="text"
                        {...register('name', { required: 'Name is required' })}
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                    />
                    {errors.email && <span className="text-red-500">Please enter a valid email adderess</span>}
                </div>
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
                        id='password'
                        name='password'
                        {...register('password', { required: 'Password is required', minLength: 6 })}
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                    />
                    {errors.password && <span className="text-red-500">{errors.password.message}</span>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Confirm  Password
                    </label>
                    <input
                        type="password"
                        name='confirmPassword'
                        autoComplete='new-password'
                        {...register('confirmPassword', {
                            required: 'Password is required',
                            minLength: 6,
                            validate: (value) => value === getValues("password" || "The password dosn't match")
                        })}
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                    />
                    {errors.confirmPassword && <span className="text-red-500">{errors.confirmPassword.message}</span>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Photo URL
                    </label>
                    <input
                        type="file"
                        {...register('image')}
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                    />
                    {errors.email && <span className="text-red-500">Please enter a valid email adderess</span>}
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
                    Already have an account?
                    <Link href="/login" className='text-blue-500 underline ml-1'>Login</Link>
                </p>
                <div className='divider mt-5'>OR</div>
                <button onClick={handleGoogleSignIn} type='button' className='btn btn-primary w-full mx-auto bg-blue-500 border-0 '
                >
                    <FcGoogle className="text-2xl mr-3" />

                </button>
            </form>
        </div>
    );
};

export default SignupForm;