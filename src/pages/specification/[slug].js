import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/Layout";
import { Heading2, Heading3 } from "../../components/Heading";
import {
  PasteTag,
  InsulationTag,
  WalkTag,
} from "../../components/specification/Tag";
import {
  getAllSpecificationIds,
  getSpecificationData,
} from "../../lib/specification";
import BreadCrumbs from "../../components/breadcrumbs";

export default function Specification({ specification }) {
  return (
    <Layout title={`${specification.name} | 防水仕様`}>
      <div className="max-w-6xl mx-auto">
        <Heading2 title="仕様一覧" />
        <BreadCrumbs
          lists={[
            { string: "TOP", path: "/" },
            { string: "仕様一覧", path: "/specification" },
            {
              string: `${specification.name}`,
              path: `/specification/${specification.slug}`,
            },
          ]}
        />
        <hr />
        <div className="py-2">
          <div className="py-2">
            <h1 className="inline text-5xl">{specification.name}</h1>
            <p className="inline text-2xl px-3">{`- ${specification.method_name} -`}</p>
          </div>
          <p className="text-sm text-gray-500">{`${specification.method.name} - ${specification.method.normalize_name}`}</p>
          <p className="py-5">{specification.description}</p>
        </div>
        {/* image */}
        <div className="flex flex-reverse content-center items-center gap-3 py-5">
          <div className="w-full lg:w-1/3">
            <table className="table-auto w-full mx-auto border border-collapse text-left whitespace-no-wrap">
              <tbody>
                <tr className="bg-gray-100">
                  <th className="px-4 py-3 tracking-wider">基本情報</th>
                  <td>
                    <div className="inline px-1">
                      <InsulationTag
                        is_insulation={specification.is_insulation}
                      />
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
          </div>
          <div className="w-full lg:w-2/3">
            <div className="flex justify-center">
              {specification.image ? (
                <Image src={specification.image} width={1280} height={720} />
              ) : null}
            </div>
          </div>
        </div>
        {/* process */}
        <Heading3 title="工程" />
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
          <Heading3 title="関連資料" />
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
