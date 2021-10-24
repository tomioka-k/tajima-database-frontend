export function Heading2({ title }) {
  return (
    <>
      <div className="pb-8">
        <h2 className="text-4xl">{title}</h2>
      </div>
    </>
  );
}

export function Heading3({ title }) {
  return (
    <>
      <div className="p-3 my-5 bg-gray-50 border-l-8 border-blue-600">
        <h3 className="text-3xl">{title}</h3>
      </div>
    </>
  );
}
