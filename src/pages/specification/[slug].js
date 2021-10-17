import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/Layout";
import {
  getAllSpecificationIds,
  getSpecificationData,
} from "../../lib/specification";

export default function Specification({ specification }) {
  return (
    <Layout title={specification.name}>
      <div className="container px-50 py-20 mx-auto">
        <div className="flex justify-center">
          <Image src={specification.image} width={640} height={360} />
        </div>
        <div className="py-2">
          <h1 className="text-4xl">{specification.name}</h1>
          <p className="text-gray-500">{specification.method_name}</p>
        </div>
        {specification.base && "適用下地："}
        {specification.base &&
          specification.base.map((base) => <p key={base}>{base}</p>)}
        <br />
        <p>{specification.description}</p>
        <br />
        {/* koutei */}
        <h1 className="text-3xl py-2">工程</h1>
        <hr />
        <div className="flex flex-wrap">
          <div className="w-1/2 mx-auto overflow-auto">
            <table className="table-auto w-full text-left whitespace-no-wrap">
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
                        {process.unit}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <div className="w-1/2 mx-auto overflow-auto">sample</div>
        </div>
        {/* <div>
          <h1 className="text-3xl py-2">関連資料</h1>
          <hr />
          <ul>
          {specification.document && specification.document.map((doc) => (
              <li key={doc.id}>

              </li>
          ))}
          </ul>
        </div> */}
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
