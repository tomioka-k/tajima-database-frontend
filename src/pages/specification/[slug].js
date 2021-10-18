import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/Layout";
import {
  getAllSpecificationIds,
  getSpecificationData,
} from "../../lib/specification";

export default function Specification({ specification }) {
  return (
    <Layout title={`${specification.name} | 防水仕様`}>
      <div className="md:container lg:max-w-4xl w-50 px-50 py-10 mx-auto">
        <div className="flex justify-center">
          <Image src={specification.image} width={640} height={360} />
        </div>
        <div className="py-2">
          <h1 className="text-4xl">{specification.name}</h1>
          <p className="text-gray-500">{specification.method_name}</p>
        </div>
        <br />
        <p>{specification.description}</p>
        <div className="py-10">
          <h2 className="text-2xl">基本情報</h2>
          <hr />
        </div>
        {specification.base && "適用下地："}
        {specification.base &&
          specification.base.map((base) => <p key={base}>{base}</p>)}

        {/* process */}
        <div className="py-10">
          <h2 className="text-2xl">工程</h2>
          <hr />
        </div>
        <div className="flex flex-wrap">
          <div className="w-1/2 mx-auto overflow-auto">
            <table className="table-auto w-full mx-auto text-left whitespace-no-wrap">
              <thead>
                <tr>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                    工程
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    使用材料名
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    使用量
                  </th>
                </tr>
              </thead>
              <tbody>
                {specification.process &&
                  specification.process.map((process) => (
                    <tr key={process.order}>
                      <td className="px-4 py-3">{process.order}</td>
                      <td className="px-4 py-3">{process.material.name}</td>
                      <td className="px-4 py-3">
                        {process.min_quantity}
                        {process.max_quantity
                          ? `～${process.max_quantity}`
                          : ""}
                        {process.unit}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          {/* sub_process */}
          <div className="w-1/2 mx-auto overflow-auto">
            <table className="table-auto w-full mx-auto text-left whitespace-no-wrap">
              <thead>
                <tr>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                    工程
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    使用材料名
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    使用量
                  </th>
                </tr>
              </thead>
              <tbody>
                {specification.sub_process[0] &&
                  specification.sub_process[0].process.map((process) => (
                    <tr key={process.order}>
                      <td className="px-4 py-3">{process.order}</td>
                      <td className="px-4 py-3">{process.material.name}</td>
                      <td className="px-4 py-3">
                        {process.min_quantity}
                        {process.max_quantity
                          ? `～${process.max_quantity}`
                          : ""}
                        {process.unit}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* document */}
        <div>
          <div className="py-10">
            <h2 className="text-2xl">関連資料</h2>
            <hr />
          </div>
          <ul className="list-disc px-4">
            {specification.document &&
              specification.document.map((doc) => (
                <li key={doc.category}>
                  <a className="hover:text-blue-500" href={doc.file}>
                    {doc.category}
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await getAllSpecificationIds();

  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const specification = await getSpecificationData(params.slug);
  return {
    props: {
      specification,
    },
  };
}
