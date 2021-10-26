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
      <div className="container max-w-6xl mx-auto">
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
        <div className="pt-8">
          <div className="py-2">
            <h1 className="inline text-5xl">{specification.name}</h1>
            <p className="inline text-2xl px-3">{`- ${specification.method_name} -`}</p>
          </div>
          <p className="text-sm text-gray-500">{`${specification.method.name} - ${specification.method.normalize_name}`}</p>
          <p className="pt-8 text-lg">{specification.description}</p>
        </div>
        {/* basic-infomation */}
        <div className="flex flex-wrap-reverse lg:flex-nowrap content-center items-center gap-3 py-5">
          <div className="w-full lg:w-1/3">
            <table className="table-auto w-full mx-auto border border-collapse text-left whitespace-no-wrap">
              <tbody>
                <tr className="bg-gray-100">
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
                <tr>
                  <th className="px-4 py-3 tracking-wider">断熱</th>
                  <td>
                    <InsulationTag
                      is_insulation={specification.is_insulation}
                    />
                  </td>
                </tr>
                <tr className="bg-gray-100">
                  <th className="px-4 py-3 tracking-wider">貼り方</th>
                  <td>
                    <PasteTag paste={specification.paste} />
                  </td>
                </tr>
                <tr>
                  <th className="px-4 py-3 tracking-wider">歩行</th>
                  <td>
                    <WalkTag walk={specification.walk} />
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
        <div className="pb-10">
          <Heading3 title="工程" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="pb-8">
            <span className="p-2 bg-blue-500 text-gray-100 font-bold rounded-sm">{`${specification.part} - ${specification.name}`}</span>
            <table className="table-auto w-full mx-auto text-left border-2 whitespace-no-wrap">
              <thead>
                <tr>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
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
                      <th className="px-4 py-3 font-bold">{process.order}</th>
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
            <div className="pb-8">
              <span className="p-2 bg-blue-500 text-gray-100 font-bold rounded-sm">{`${specification.sub_process[0].part} - ${specification.sub_process[0].name}`}</span>
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
          <div className="pb-10">
            <Heading3 title="関連資料" />
          </div>
          <div className="flex flex-wrap gap-7 p-3">
            {specification.document &&
              specification.document.map((doc) => (
                <Link href={doc.file} key={doc.category}>
                  <a className="bg-gray-100 text-lg text-gray-800 font-bold hover:bg-blue-400 hover:text-white  p-7 border border-blue-500 border-8 rounded inline-flex items-center">
                    <svg
                      className="fill-current w-4 h-4 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                    </svg>
                    <span>{doc.category}</span>
                  </a>
                </Link>
              ))}
          </div>
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
