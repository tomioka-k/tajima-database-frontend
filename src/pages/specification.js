import { useRouter } from "next/router";
import useSWR from "swr";
import { apiUrl } from "../lib/specification";
import Layout from "../components/Layout";
import SpecificationCard from "../components/specification/SpecificationCard";
import { getAllSpecificationsData } from "../lib/specification";
import { useEffect, useState } from "react";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Specification({ specifications }) {
  const router = useRouter();
  const [name, setName] = useState("");
  const { data: specifications_list, mutate } = useSWR(
    `${apiUrl}api/database/specification/?name=${name}`,
    fetcher,
    {
      fallbackData: specifications,
    }
  );

  const handleInputSearch = (e) => {
    setName(e.target.value);
    mutate();
  };
  if (router.isFallback) {
    return <div>...Loading</div>;
  }

  return (
    <Layout title="仕様検索">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap">
          <div className="lg:w-1/4">
            <input
              type="text"
              placeholder="仕様名"
              value={name}
              onChange={handleInputSearch}
            ></input>
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
  return {
    props: { specifications },
  };
}
