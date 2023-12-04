"use client"
import { afterLoginNavData, beforeLoginNavData } from "@/data/navData";
import useAuth from "@/hooks/useAuth";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Navbar = () => {

  const { user, logOut } = useAuth()
  const { uid, displayName, photoURL } = user || {};
  const navData = uid ? afterLoginNavData : beforeLoginNavData;
  const handleLogout = async () => {
    try {
      await logOut()
      const res = await fetch("/api/auth/logout", {
        method: "POST",
      });
      const data = await res.json();
      toast.success('Successfully Logout!')
    } catch (error) {
      toast.error('Successfully not Logout!')
    }
  }

  return (
    <div className="navbar bg-slate-900 text-white">
      <div className="navbar-end">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {
              navData?.map(({ path, title }) => (
                <li key={path} className="mx-auto">
                  <Link href={path}>{title}</Link>
                </li>
              ))
            }
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">CAR HUB</a>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1">
          {
            navData?.map(({ path, title }) => (
              <li key={path} className="mx-auto">
                <Link href={path}>{title}</Link>
              </li>
            ))
          }
        </ul>
      </div>
      {
        uid && <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <Image
                alt="user-logo"
                src={photoURL || "https://i.ibb.co/Rzpmy2t/joy.jpg"}
                width={40}
                height={40}
              />
            </div>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-slate-700">
            <li>
              <a className="justify-between">
                {displayName}
              </a>
            </li>
            <li><a>Profile</a></li>
            <li>
              <button onClick={handleLogout} className="btn-warning btn content-center text-white">Logout</button>
            </li>
          </ul>
        </div>
      }
    </div>
    // <header className="w-full  z-10 bg-[#F5F8FF] fixed top-0">
    //   <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
    //     <Link href="/" className="flex justify-center items-center">
    //       <h2 className="text-2xl font-extrabold">CarHub</h2>
    //     </Link>
    //     <ul className="flex p-2 justify-center text-xl font-bold">
    //       <Link href="/"><li className="p-2 cursor-pointer">Home</li></Link>
    //       <Link href="/login"><li className="p-2 cursor-pointer">Login</li></Link>
    //     </ul>
    //   </nav>
    // </header >
  );
};

export default Navbar;
