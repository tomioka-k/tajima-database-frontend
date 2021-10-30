const ProcessTable = ({ part, name, processes }) => {
  return (
    <div className="pb-8">
      <span className="p-2 bg-blue-500 text-gray-100 font-bold rounded-sm">{`${part} - ${name}`}</span>
      <table className="table-auto w-full mx-auto text-left whitespace-no-wrap">
        <thead className="border-2">
          <tr className="border-gray-300">
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
        <tbody className="border-b-2">
          {processes.map((process) => (
            <tr key={process.order} className="border-b">
              <td className="px-4 py-3">{process.order}</td>
              <td className="px-4 py-3">{process.material.name}</td>
              <td className="px-4 py-3">
                {process.min_quantity}
                {process.max_quantity ? `～${process.max_quantity}` : ""}
                {process.unit}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProcessTable;
