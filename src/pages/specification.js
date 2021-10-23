import { useRouter } from "next/router";
import useSWR from "swr";
import {
  apiUrl,
  getAllBasesData,
  getAllMethodCategoriesData,
  getAllMethodsData,
} from "../lib/specification";
import Layout from "../components/Layout";
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

export default function Specification({
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
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap">
          <div className="lg:w-1/5">
            <SearchInput
              params={params}
              setParams={setParams}
              methodCategories={methodCategories}
              methods={methods}
              bases={bases}
            />
          </div>
          <div className="lg:w-4/5">
            <div className="flex flex-wrap -m-4">
              {specifications_list ? (
                specifications_list?.map((specification) => (
                  <div key={specification.id} className="p-4 md:w-1/3">
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
