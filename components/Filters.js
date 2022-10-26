import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formatPrice, uniqueValue } from "../utils/helpers";
import { updateFilter, clearfilter } from "../slice/productsSlice";
import { FaCheck } from "react-icons/fa";
const Filters = () => {
  const { products } = useSelector((state) => state.products);
  const { query, maxPrice, minPrice, price, shipping, category, colors } =
    useSelector((state) => state.products.filters);
  const dispatch = useDispatch();
  return (
    <div className="sticky top-0">
      <div>
        <input
          type="text"
          placeholder="search"
          className="px-2 py-2 border mb-2 bg-gray-50 w-full"
          name="query"
          value={query}
          onChange={(e) =>
            dispatch(updateFilter({ name: e.target.name, val: e.target.value }))
          }
        />
        <ul className="py-2">
          <h3 className="text-2xl py-2 font-semibold">Category</h3>
          {uniqueValue(products, "category").map((cate, index) => {
            return (
              <button
                key={index}
                className={`my-1 text-gray-500 cursor-pointer block ${
                  cate == category ? "border-b border-main" : ""
                }`}
                name="category"
                onClick={(e) =>
                  dispatch(updateFilter({ name: e.target.name, val: cate }))
                }
              >
                {cate}
              </button>
            );
          })}
        </ul>
        <ul className="py-2">
          <h3 className="text-2xl py-2 font-semibold">Company</h3>
          <select
            name="company"
            id=""
            className="py-1"
            onChange={(e) =>
              dispatch(
                updateFilter({ name: e.target.name, val: e.target.value })
              )
            }
          >
            {uniqueValue(products, "company").map((comp) => (
              <option key={comp} value={comp}>
                {comp}
              </option>
            ))}
          </select>
        </ul>
        <ul className="py-2">
          <h3 className="text-2xl py-2 font-semibold">Colors</h3>
          <div className="flex items-center">
            {uniqueValue(products, "colors").map((color) => {
              return (
                <button
                  key={color}
                  className={`w-4 h-4 rounded-full ml-1 ${
                    color !== "all" ? "opacity-60 mt-2 mx-1" : "mx-1"
                  } `}
                  style={{ backgroundColor: color }}
                  name="colors"
                  onClick={(e) =>
                    dispatch(updateFilter({ name: e.target.name, val: color }))
                  }
                >
                  {color == "all" && "All"}
                  {color == colors && (
                    <span className="text-white font-noraml text-xs flex justify-center items-center">
                      <FaCheck />
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </ul>
        <ul className="py-2">
          <h3 className="text-2xl py-2 font-semibold">Price</h3>
          <p>{formatPrice(price)}</p>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            onChange={(e) =>
              dispatch(
                updateFilter({
                  name: e.target.name,
                  val: Number(e.target.value),
                })
              )
            }
            value={price}
          />
        </ul>
        <div className="flex justify-between py-2 mb-5">
          <label htmlFor="shipping">free shipping</label>
          <input
            type="checkbox"
            name="shipping"
            value={shipping}
            onChange={(e) =>
              dispatch(
                updateFilter({ name: e.target.name, val: e.target.checked })
              )
            }
          />
        </div>
        <button
          className="btn btn-main"
          onClick={() => dispatch(clearfilter())}
        >
          clear filters
        </button>
      </div>
    </div>
  );
};

export default Filters;
