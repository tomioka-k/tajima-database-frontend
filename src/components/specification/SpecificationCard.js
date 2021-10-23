import Link from "next/link";
import Image from "next/image";

export default function SpecificationCard({ specification }) {
  return (
    <div>
      <Link href={`/specification/${specification.slug}`}>
        <div className="h-full hover:bg-gray-100 hover:shadow-sm hover:border-transparent border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <div className="lg:h-48 md:h-36 w-full object-cover object-center">
            {!specification.image ? (
              ""
            ) : (
              <Image
                src={specification.image}
                alt={specification.name}
                loading="lazy"
                width="720"
                height="401"
              />
            )}
          </div>
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              {specification.method.name}
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              {specification.name}
            </h1>
            <p className="leading-relaxed mb-3">{specification.method_name}</p>
            <div className="flex items-center flex-wrap ">
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                {specification.method.category}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
