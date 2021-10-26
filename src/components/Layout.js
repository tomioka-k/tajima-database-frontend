import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";

export default function Layout({ children, title = "tajima-database" }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="sm:container px-50 py-10 mx-auto">{children}</main>
      <footer className="w-full h-6 flex justify-center items-center text-gray-500 text-sm">
        @tajima 2021
      </footer>
    </div>
  );
}
