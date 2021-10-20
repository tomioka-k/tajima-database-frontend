import Layout from "../components/Layout";
import SpecificationCard from "../components/specification/SpecificationCard";
import { getAllSpecificationsData } from "../lib/specification";

export default function Specification({ specifications }) {
  return (
    <Layout title="仕様検索">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap">
          <div className="lg:w-1/4">search column</div>
          <div className="lg:w-3/4">
            <div className="flex flex-wrap -m-4">
              {specifications &&
                specifications.map((specification) => (
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
