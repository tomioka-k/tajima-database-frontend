import { useRouter } from "next/router";
import useSWR from "swr";
import {
  apiUrl,
  getAllBasesData,
  getAllMethodCategoriesData,
  getAllMethodsData,
} from "../lib/specification";
import Layout from "../components/Layout";
import { Heading2 } from "../components/Heading";
import BreadCrumbs from "../components/breadcrumbs";
import SearchInput from "../components/specification/SearchInput";
import SpecificationCard from "../components/specification/SpecificationCard";
import { getAllSpecificationsData } from "../lib/specification";
import { useEffect, useState } from "react";

const fetcher = (url) => fetch(url).then((res) => res.json());
const initialState = {
  name: "",
  method: "",
  methodCategory: "",
  base: "",
  paste: "",
  walk: "",
  is_insulation: null,
};

export default function SpecificationSearch({
  specifications,
  methodCategories,
  methods,
  bases,
}) {
  const router = useRouter();
  const [params, setParams] = useState(initialState);
  const fetchURL =
    `${apiUrl}api/database/specification/?` +
    new URLSearchParams({
      name: params.name,
      method: params.method,
      method__category: params.methodCategory,
      paste: params.paste,
      walk: params.walk,
      is_insulation: params.is_insulation,
    });

  const { data: specifications_list, mutate } = useSWR(fetchURL, fetcher, {
    fallbackData: "",
  });

  // useEffect(() => {
  //   mutate();
  // }, [params]);

  return (
    <Layout title="仕様検索">
      <div className="">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/5">
            <div className="sticky top-10">
              <div className="text-xl text-white bg-blue-800 p-1">
                絞り込み検索
              </div>
              <div className="m-3">
                <SearchInput
                  params={params}
                  setParams={setParams}
                  methodCategories={methodCategories}
                  methods={methods}
                  bases={bases}
                />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-4/5 pl-5">
            <Heading2 title="製品情報" />
            <BreadCrumbs
              lists={[
                { string: "TOP", path: "/" },
                { string: "製品情報", path: "/products" },
              ]}
            />
            <div className="">sample</div>
            <div className="flex flex-wrap">
              {specifications_list ? (
                specifications_list?.map((specification) => (
                  <div
                    key={specification.id}
                    className="p-4 w-full md:w-1/2 lg:w-1/3"
                  >
                    <SpecificationCard specification={specification} />
                  </div>
                ))
              ) : (
                <div className="flex justify-center w-full">
                  <div className="w-40 h-40 border-4 border-blue-400 border-solid rounded-full animate-spin"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const specifications = await getAllSpecificationsData();
  const methodCategories = await getAllMethodCategoriesData();
  const methods = await getAllMethodsData();
  const bases = await getAllBasesData();
  return {
    props: { specifications, methodCategories, methods, bases },
  };
}
