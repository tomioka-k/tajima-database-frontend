import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Layout({ children, title = "tajima-database" }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <nav className="w-screen border pb-2">
          <div className="flex items-center pl-8 h-14">
            <div className="flex space-x-4">
              <Link href="/">
                <Image src="/tajima-logo-black.png" width={203} height={70} />
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main className="sm:container lg:max-w-8xl w-50 px-50 py-10 mx-auto">
        <div className="grid grid-cols-5 gap-4 px-5">
          <div className="p-3">
            <div className="text-gray-600 text-lg font-bold">
              <ul>
                <li className="pb-3">
                  <Link href="/products">
                    <a className="cursor-pointer hover:text-black">
                      {"> 製品情報"}
                    </a>
                  </Link>
                </li>
                <li className="pb-3">
                  <Link href="/specification-search">
                    <a className="cursor-pointer hover:text-black">
                      {"> 仕様検索"}
                    </a>
                  </Link>
                </li>
                <li className="pb-3">
                  <Link href="/">
                    <a className="cursor-pointer hover:text-black">
                      {"> 材料情報"}
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-4 p-3">{children}</div>
        </div>
      </main>
      <footer className="w-full h-6 flex justify-center items-center text-gray-500 text-sm">
        @tajima 2021
      </footer>
    </div>
  );
}
