import Link from "next/link";
import Image from "next/image";
import {
  InsulationTag,
  PasteTag,
  WalkTag,
} from "../../components/specification/Tag";

export default function SpecificationCard({ specification }) {
  const imagePath = (path) => {
    return !path ? "/no_image_logo.png" : path;
  };

  return (
    <div className="border-gray-200 shadow-lg cursor-pointer">
      <Link href={`/specification/${specification.slug}`}>
        <div className="h-full hover:bg-gray-100 hover:shadow-sm hover:border-transparent border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <div className="lg:h-48 md:h-36 w-full object-cover object-center">
            <Image
              src={imagePath(specification.image)}
              alt={specification.name}
              width="1280"
              height="720"
              objectFit={"contain"}
            />
          </div>

          <div className="p-6">
            <div className="flex justify-end text-sm">
              <div className="px-1">
                <InsulationTag is_insulation={specification.is_insulation} />
              </div>
              <div className="px-1">
                <PasteTag paste={specification.paste} />
              </div>
              <div className="px-1">
                <WalkTag walk={specification.walk} />
              </div>
            </div>
            <div className="p-1">
              <div className="flex flex-wrap">
                <p className="title-font text-2xl font-medium text-gray-900">
                  {specification.name}
                </p>
              </div>
              <p className="leading-relaxed mb-3">
                {specification.method_name}
              </p>
            </div>
            <div className="flex items-center flex-wrap">
              <p className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                {specification.method.name}
              </p>
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
