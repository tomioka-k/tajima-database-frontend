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
        <nav className="bg-black w-screen">
          <div className="flex items-center pl-8 h-14">
            <div className="flex space-x-4">
              <Link href="/">
                <Image src="/tajima-logo.png" width={100} height={34.5} />
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="w-full h-6 flex justify-center items-center text-gray-500 text-sm">
        @tajima 2021
      </footer>
    </div>
  );
}
