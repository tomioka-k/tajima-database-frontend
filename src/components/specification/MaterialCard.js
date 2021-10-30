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
    <div className="h-full">
      <span className="bg-blue-500 text-white font-bold p-2">{category}</span>
      <div className="h-full border border-gray-200 shadow-lg overflow-hidden">
        <div className="w-full object-cover object-center p-3">
          <Image
            src={imagePath(material_image)}
            alt={name}
            width={"480"}
            height={"300"}
            objectFit={"contain"}
          />
        </div>
        <div className="p-3">
          <Link href={`/`}>
            <div className="p-1 cursor-pointer">
              <div className="flex flex-wrap">
                <p className="title-font text-xl font-medium text-gray-900">
                  {name}
                </p>
              </div>
              <p className="text-gray-700 text-xs leading-relaxed mb-3">
                {normalize_name}
              </p>
            </div>
          </Link>
          <div className="p-1 h-20">
            <p className="text-gray-700 text-sm leading-relaxed mb-3">
              {description}
            </p>
          </div>
        </div>
        <div className="flex items-end justify-center p-3">
          {material.document.map((doc) => (
            <a
              key={doc.category}
              className="px-4 py-1 mx-1 bg-gray-200 hover:bg-blue-200 text-xs rounded-full flex flex-wrap items-center"
              href={doc.file}
            >
              <svg
                className="fill-current w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              <span>{doc.category}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MaterialCard;
