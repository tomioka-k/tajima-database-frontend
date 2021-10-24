import Link from "next/link";
import Image from "next/image";

export default function MethodCategoryImage({ category }) {
  return (
    <div className="flex flex-row items-end h-full w-full">
      <div className="w-full pb-3 pt-10 px-3 bg-gradient-to-t from-black text-gray-200">
        <h3 className="text-base font-bold leading-5 uppercase">
          {category.name}
        </h3>
      </div>
    </div>
  );
}
