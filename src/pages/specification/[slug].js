import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/Layout";
import Heading2 from "../../components/Heading2";
import {
  PasteTag,
  InsulationTag,
  WalkTag,
} from "../../components/specification/Tag";
import {
  getAllSpecificationIds,
  getSpecificationData,
} from "../../lib/specification";

export default function Specification({ specification }) {
  return (
    <Layout title={`${specification.name} | 防水仕様`}>
      <div className="sm:container lg:max-w-4xl w-50 px-50 py-10 mx-auto">
        <h1 className="text-3xl">仕様情報</h1>
        {/* breadcrumb */}
        <div className="text-gray-400 no-underline">
          <nav>
            <ol className="list-reset py-2 flex">
              <li className="px-2">
                <Link href="/">
                  <a className="hover:text-black">トップページ</a>
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
        <hr />
        <div className="py-4">
          <p className="text-md text-black py-2">{`${specification.method.name} - ${specification.method.normalize_name}`}</p>
        </div>
        {/* image */}
        <div className="flex justify-center">
          {specification.image ? (
            <Image src={specification.image} width={1280} height={720} />
          ) : null}
        </div>
        <div className="py-5">
          <h1 className="inline text-4xl">{specification.name}</h1>
          <p className="inline  px-5">{`- ${specification.method_name} -`}</p>
        </div>
        <p>{specification.description}</p>
        {/* basic-infomation */}
        <Heading2 title="基本情報" />
        <table className="table-auto w-full mx-auto text-left border-b-2 whitespace-no-wrap">
          <tbody>
            <tr className="bg-gray-100">
              <th className="px-4 py-3 tracking-wider">基本性能</th>
              <td>
                <div className="inline px-1">
                  <InsulationTag is_insulation={specification.is_insulation} />
                </div>
                <div className="inline px-1">
                  <PasteTag paste={specification.paste} />
                </div>
                <div className="inline px-1">
                  <WalkTag walk={specification.walk} />
                </div>
              </td>
            </tr>
            <tr className="">
              <th className="px-4 py-3 tracking-wider">適用下地</th>
              <td>
                {specification.base && (
                  <ul>
                    {specification.base.map((base) => (
                      <li key={base}>{base}</li>
                    ))}
                  </ul>
                )}
              </td>
            </tr>
            <tr className="bg-gray-100">
              <th className="px-4 py-3 tracking-wider">適正勾配</th>
              <td>{specification.slope ? specification.slope : ""}</td>
            </tr>
            <tr>
              <th className="px-4 py-3 tracking-wider">防水重量目安</th>
              <td>
                {specification.weight ? `${specification.weight}kg/㎡` : ""}
              </td>
            </tr>
            <tr className="bg-gray-100">
              <th className="px-4 py-3 tracking-wider">厚み</th>
              <td>
                {specification.thickness
                  ? `約${specification.thickness}mm`
                  : ""}
              </td>
            </tr>
            <tr>
              <th className="px-4 py-3 tracking-wider">基本耐用年数</th>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="">
            <p className="bg-gray-200 border-2 px-4 py-2">{`${specification.part}：${specification.name}`}</p>
            <table className="table-auto w-full mx-auto text-left border-2 whitespace-no-wrap">
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
          {specification.sub_process[0] ? (
            <div className="">
              <p className="border-2 px-4 py-2">{`${specification.sub_process[0]?.part}：${specification.sub_process[0]?.name}`}</p>
              <table className="table-auto w-full mx-auto text-left border-2 whitespace-no-wrap">
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
          ) : null}
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
