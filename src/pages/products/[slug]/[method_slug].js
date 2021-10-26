import { getAllMethodsIds, getMethodData } from "../../../lib/specification";

export default function Method({ method }) {
  return <div>{method.name}</div>;
}

export async function getStaticPaths() {
  const paths = await getAllMethodsIds();

  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const method = await getMethodData(params.method_slug);
  return {
    props: {
      method,
    },
  };
}
