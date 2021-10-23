import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import { getAllMethodCategoriesIds } from "../../lib/specification";
import { getMethodsData } from "../../lib/specification";
import Layout from "../../components/Layout";
import Heading2 from "../../components/Heading2";
import BreadCrumbs from "../../components/breadcrumbs";

export default function ProductsDetail({ methods }) {
  const router = useRouter();
  if (!methods[0]) {
    return "Not Found";
  }

  return (
    <div>
      <Layout title={`${methods[0].category} | 製品情報`}>
        <Heading2 title={`${methods[0].category}`} />
        <BreadCrumbs
          lists={[
            { string: "TOP", path: "/" },
            { string: "製品情報", path: "/products" },
            { string: `${methods[0].category}`, path: `${router.asPath}` },
          ]}
        />
        {methods.map((method) => (
          <li key={method.slug}>{method.name}</li>
        ))}
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
  return {
    props: {
      methods,
    },
  };
}
