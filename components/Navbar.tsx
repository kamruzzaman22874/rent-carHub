import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w-full  z-10 bg-[#F5F8FF] fixed top-0">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <h2 className="text-2xl font-extrabold">CarHub</h2>
        </Link>
        <ul className="flex p-2 text-xl font-bold">
          <li className="p-2 cursor-pointer">Login</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
