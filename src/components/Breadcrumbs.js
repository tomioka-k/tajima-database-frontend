import Link from "next/link";

export default function BreadCrumbs({ lists }) {
  if (!lists) {
    return "";
  }

  const lists_length = lists.length;

  return (
    <>
      <div className="no-underline">
        <nav>
          <ol className="list-reset py-2 flex">
            {lists.map(({ string, path }, index) => (
              <li key={index} className="">
                {lists_length - 1 !== index ? (
                  <>
                    <Link href={path}>
                      <a className="text-gray-400 hover:text-black">{string}</a>
                    </Link>
                    <a className="p-2">{">"}</a>
                  </>
                ) : (
                  <Link href={path}>
                    <a className="text-black font-bold">{string}</a>
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
      <hr />
    </>
  );
}
