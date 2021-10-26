import Image from "next/image";
import Link from "next/link";

const MaterialCard = ({ material }) => {
  const {
    slug,
    name,
    category,
    normalize_name,
    description,
    standard,
    material_image,
    document,
  } = material;

  const imagePath = (path) => {
    return !path ? "/no_image_logo.png" : path;
  };

  return (
    <div className="border-gray-200 shadow-lg cursor-pointer">
      <Link href={`/`}>
        <div className="h-full border hover:shadow-sm hover:border-transparent border-gray-100 border-opacity-60 rounded-lg overflow-hidden">
          <div className="lg:h-48 md:h-36 w-full object-cover object-center p-1">
            <Image
              src={imagePath(material_image)}
              alt={name}
              width={"480"}
              height={"300"}
              objectFit={"contain"}
            />
          </div>

          <div className="p-6">
            <div className="p-1">
              <div className="flex flex-wrap">
                <p className="title-font text-2xl font-medium text-gray-900">
                  {name}
                </p>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                {normalize_name}
              </p>
            </div>
            <div className="flex items-center flex-wrap">
              <p className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                {category}
              </p>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                {standard}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MaterialCard;
