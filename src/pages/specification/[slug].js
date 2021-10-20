import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/Layout";
import Heading2 from "../../components/Heading2";
import {
  getAllSpecificationIds,
  getSpecificationData,
} from "../../lib/specification";

export default function Specification({ specification }) {
  return (
    <Layout title={`${specification.name} | 防水仕様`}>
      <div className="md:container lg:max-w-4xl w-50 px-50 py-10 mx-auto">
        <h1 className="text-3xl">仕様情報</h1>
        {/* breadcrumb */}
        <div className="text-gray-400 no-underline">
          <nav>
            <ol className="list-reset py-2 flex">
              <li className="px-2">
                <Link href="/">
                  <a className="hover:text-black">Home</a>
                </Link>
              </li>
              <li>{">"}</li>
              <li className="px-2 hover:text-black">
                <Link href="/specification">
                  <a>仕様一覧</a>
                </Link>
              </li>
              <li>{">"}</li>
              <li className="px-2">{specification.name}</li>
            </ol>
          </nav>
        </div>
        <hr className="py-4" />
        {/* image */}
        <div className="flex justify-center">
          <Image src={specification.image} width={640} height={360} />
        </div>
        <div className="py-2">
          <h1 className="text-4xl">{specification.name}</h1>
          <p className="text-gray-500">{specification.method_name}</p>
        </div>
        <br />
        <p>{specification.description}</p>
        {/* basic-infomation */}
        <Heading2 title="基本情報" />
        <table className="table-auto w-full mx-auto text-left border-b-2 whitespace-no-wrap">
          <tbody>
            <tr className="bg-gray-100">
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                適用下地
              </th>
              <td>
                {specification.base &&
                  specification.base.map((base) => <p key={base}>{base}</p>)}
              </td>
            </tr>
            <tr>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm rounded-tl rounded-bl">
                適正勾配
              </th>
              <td>{specification.slope ? specification.slope : ""}</td>
            </tr>
            <tr className="bg-gray-100">
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm rounded-tl rounded-bl">
                防水重量目安
              </th>
              <td>
                {specification.weight ? `${specification.weight}kg/㎡` : ""}
              </td>
            </tr>
            <tr>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm rounded-tl rounded-bl">
                厚み
              </th>
              <td>
                {specification.thickness
                  ? `約${specification.thickness}mm`
                  : ""}
              </td>
            </tr>
            <tr className="bg-gray-100">
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm rounded-tl rounded-bl">
                基本耐用年数
              </th>
              <td>
                {specification.service_life
                  ? `${specification.service_life}年`
                  : ""}
              </td>
            </tr>
          </tbody>
        </table>
        {/* process */}
        <Heading2 title="工程" />
        <div className="flex flex-wrap">
          <div className="w-1/2 mx-auto overflow-auto">
            <table className="table-auto w-full mx-auto text-left border-b-2 whitespace-no-wrap">
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
            <table className="table-auto w-full mx-auto text-left border-b-2 whitespace-no-wrap">
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
          <Heading2 title="関連資料" />
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
