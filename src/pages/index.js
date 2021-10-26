import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout title="top">
      <Link href="specification-search/">
        <a>仕様検索</a>
      </Link>
    </Layout>
  );
}
