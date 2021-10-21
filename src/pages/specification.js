import { useRouter } from "next/router";
import useSWR from "swr";
import {
  apiUrl,
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
}) {
  const router = useRouter();
  const [params, setParams] = useState(initialState);
  const { data: specifications_list, mutate } = useSWR(
    `${apiUrl}api/database/specification/?name=${params.name}&method__category=${params.methodCategory}&method=${params.method}&is_insulation=${params.is_insulation}`,
    fetcher,
    {
      fallbackData: specifications,
    }
  );

  // useEffect(() => {
  //   mutate();
  // }, [params]);

  return (
    <Layout title="仕様検索">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap">
          <div className="lg:w-1/4 bg-gray-200">
            <SearchInput
              params={params}
              setParams={setParams}
              methodCategories={methodCategories}
              methods={methods}
            />
          </div>
          <div className="lg:w-3/4">
            <div className="flex flex-wrap -m-4">
              {specifications_list &&
                specifications_list.map((specification) => (
                  <div key={specification.id} className="p-4 md:w-1/3">
                    <SpecificationCard specification={specification} />
                  </div>
                ))}
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
  return {
    props: { specifications, methodCategories, methods },
  };
}
