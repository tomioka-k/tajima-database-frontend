import Head from "next/head";
import Link from "next/link";

export default function Layout({ children, title = "tajima-database" }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <nav className="bg-gray-800 w-screen">
          <div className="flex items-center pl-8 h-14">
            <div className="flex space-x-4">
              <Link href="/">
                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                  Home
                </a>
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
