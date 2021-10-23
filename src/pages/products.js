import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";
import BreadCrumbs from "../components/breadcrumbs";
import Heading2 from "../components/Heading2";
import MethodCategoryCard from "../components/products/MethodCategoryCard";

import { getAllMethodCategoriesData } from "../lib/specification";

export default function Products({ methodCategories }) {
  return (
    <Layout title="製品情報">
      <div>
        <Heading2 title="製品情報" />
        <BreadCrumbs
          lists={[
            { string: "TOP", path: "/" },
            { string: "製品情報", path: "/products" },
          ]}
        />
        <div className="p-7">
          {methodCategories.map((category) => (
            <>
              <div className="py-2">
                <MethodCategoryCard key={category.id} category={category} />
              </div>
            </>
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
