import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className=" flex items-center justify-between flex-wrap border p-2">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link href="/">
          <Image src="/tajima-logo-black.png" width={203} height={70} />
        </Link>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link href="/products">
            <a className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-black mr-4">
              製品情報
            </a>
          </Link>
          <Link href="/specification">
            <a className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-black mr-4">
              仕様検索
            </a>
          </Link>
          <Link href="/">
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-black mr-4"
            >
              材料情報
            </a>
          </Link>
        </div>
        <div>
          <a
            href="#"
            className="inline-block text-sm px-4 py-2 leading-none border rounded border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >
            sample
          </a>
        </div>
      </div>
    </nav>
  );
}
