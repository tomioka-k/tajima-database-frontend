import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";
import BreadCrumbs from "../components/breadcrumbs";
import { Heading2 } from "../components/Heading";
import MethodCategoryImage from "../components/products/MethodCategoryImage";

import { getAllMethodCategoriesData } from "../lib/specification";
import { Container } from "postcss";

export default function Products({ methodCategories }) {
  return (
    <Layout title="製品情報">
      <div className="max-w-6xl mx-auto">
        <Heading2 title="製品情報" />
        <BreadCrumbs
          lists={[
            { string: "TOP", path: "/" },
            { string: "製品情報", path: "/products" },
          ]}
        />
        <div className="flex flex-wrap gap-5 py-8">
          {methodCategories.map((category) => (
            <div key={category.id}>
              <Link href={`/products/${category.slug}`}>
                <div
                  className="w-full md:w-1/3 lg:1/3 bg-gray-100 h-64 hover:opacity-70 items-center"
                  style={{
                    backgroundImage: `url(${category.image})`,
                    width: "360px",
                    backgroundSize: "cover",
                  }}
                >
                  <MethodCategoryImage category={category} />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const methodCategories = await getAllMethodCategoriesData();
  return {
    props: {
      methodCategories,
    },
  };
}
