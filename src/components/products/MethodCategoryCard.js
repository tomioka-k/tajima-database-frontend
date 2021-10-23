import Link from "next/link";
import Image from "next/image";

export default function MethodCategoryCard({ category }) {
  return (
    <Link href={`/products/${category.slug}`}>
      <div className="w-full cursor-pointer hover:bg-gray-100">
        <div className="flex flex-wrap-reverse p-4 rounded-lg">
          <div className="w-full lg:w-2/3 pr-4 bg">
            <p className="text-2xl font-black py-5">{category.name}</p>
            <p className="text-lg font-light mb-5">{category.description}</p>
            <div className="h-full items-end text-gray-300 hover:text-gray-50">
              <button className="p-2 m-2 rounded-lg border bg-blue-600 text-sm font-semibold flex items-center space-x-2">
                <span>詳細</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/3">
            {category.image ? (
              <Image src={category.image} width={640} height={480} />
            ) : (
              "NoImage"
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
