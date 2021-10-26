import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import {
  getAllMethodCategoriesIds,
  getMethodCategoryData,
} from "../../lib/specification";
import { getMethodsData } from "../../lib/specification";
import Layout from "../../components/Layout";
import { Heading2, Heading3 } from "../../components/Heading";
import BreadCrumbs from "../../components/breadcrumbs";
import MethodCard from "../../components/products/MethodCard";

export default function ProductsDetail({ methods, categoryMethod }) {
  const router = useRouter();
  if (!methods[0]) {
    return "Not Found";
  }

  return (
    <div className="">
      <Layout title={`${methods[0].category} | 製品情報`}>
        <div className="max-w-6xl mx-auto">
          <Heading2 title={`${methods[0].category}`} />
          <BreadCrumbs
            lists={[
              { string: "TOP", path: "/" },
              { string: "製品情報", path: "/products" },
              { string: `${methods[0].category}`, path: `${router.asPath}` },
            ]}
          />
          <div className="p-10 flex justify-center">
            <Image src={categoryMethod[0].image} width={720} height={480} />
          </div>
          <Heading3 title="特長" />
          <div className="text-lg leading-loose">
            {categoryMethod[0].description}
          </div>
          <Heading3 title="工法一覧" />
          <div className="flex w-full">
            {methods.map((method) => (
              <MethodCard key={method.slug} method={method} />
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = await getAllMethodCategoriesIds();

  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const methods = await getMethodsData(params.slug);
  const categoryMethod = await getMethodCategoryData(params.slug);
  return {
    props: {
      methods,
      categoryMethod,
    },
  };
}
