export const InsulationTag = ({ is_insulation }) => {
  if (is_insulation) {
    return (
      <span className="bg-red-600 font-semibold text-white rounded-lg px-2 py-1">
        断熱
      </span>
    );
  } else {
    return (
      <span className="bg-indigo-700 font-semibold text-white rounded-lg px-2 py-1">
        非断熱
      </span>
    );
  }
};

export const PasteTag = ({ paste }) => {
  switch (paste) {
    case "絶縁":
      return (
        <span className="bg-gray-300 font-semibold rounded-lg px-2 py-1">
          {paste}
        </span>
      );
    case "密着":
      return (
        <span className="bg-white border-2 border-gray-900 font-semibold rounded-lg px-2 py-1">
          {paste}
        </span>
      );
    default:
      return <span>{paste}</span>;
  }
};

export const WalkTag = ({ walk }) => {
  switch (walk) {
    case "歩行":
    case "軽歩行":
      return (
        <span className="bg-white border-2 border-black font-semibold rounded-lg px-2 py-1">
          {walk}
        </span>
      );
    case "非歩行":
      return (
        <span className="bg-blue-500 text-white font-semibold rounded-lg px-2 py-1">
          {walk}
        </span>
      );
    default:
      return <span>{walk}</span>;
  }
};
