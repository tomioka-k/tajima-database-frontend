import React from "react";
import { getAllMethodCategoriesData } from "../../lib/specification";

const SearchInput = ({
  params,
  setParams,
  methodCategories,
  methods,
  bases,
}) => {
  const { name, method, method_category, base, paste, walk, is_insulation } =
    params;

  const handleInputSearch = (e) => {
    setParams({ ...params, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full max-w-xs">
      {/* name */}
      <div className="py-2">
        <label className="block text-gray-700 text-lg font-bold mb-2">
          仕様番号
        </label>
        <input
          name="name"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          value={name}
          onChange={handleInputSearch}
        />
      </div>
      {/* method-category */}
      <div className="py-2">
        <label className="block text-gray-700 text-lg font-bold mb-2">
          工法
        </label>
        <div className="inline-block relative w-full">
          <select
            name="methodCategory"
            onChange={handleInputSearch}
            className="appearance-none w-full px-3 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          >
            <option></option>
            {methodCategories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
      {/* method */}
      <div className="py-2">
        <label className="block text-gray-700 text-lg font-bold mb-2">
          製品
        </label>
        <div className="inline-block relative w-full">
          <select
            name="method"
            onChange={handleInputSearch}
            className="appearance-none w-full px-3 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          >
            <option></option>
            {methods.map((method) => (
              <option key={method.id} value={method.id}>
                {method.name}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
      {/* insulation */}
      <div className="py-2">
        <div className="block">
          <span className="block text-gray-700 text-lg font-bold mb-2">
            断熱材
          </span>
          <div className="mt-2">
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio"
                onChange={() => setParams({ ...params, is_insulation: null })}
                checked={is_insulation === null ? true : false}
              />
              <span className="ml-2">全て</span>
            </label>
          </div>
          <div className="mt-2">
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio"
                onChange={() => setParams({ ...params, is_insulation: true })}
                checked={is_insulation}
              />
              <span className="ml-2">有</span>
            </label>
          </div>
          <div className="mt-2">
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio"
                onChange={() => setParams({ ...params, is_insulation: false })}
                checked={is_insulation === false ? true : false}
              />
              <span className="ml-2">無</span>
            </label>
          </div>
        </div>
      </div>
      {/* bases */}
      <div className="py-2">
        <div className="block">
          <span className="block text-gray-700 text-lg font-bold mb-2">
            下地
          </span>
          <div className="mt-2">
            {bases.map((ba) => (
              <div key={ba.id}>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio"
                    value={ba.id}
                    onChange={() => setParams({ ...params, base: ba.id })}
                    checked={base === ba.id ? true : false}
                  />
                  <span className="ml-2">{ba.name}</span>
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
