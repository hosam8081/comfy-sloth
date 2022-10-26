import React from "react";
import {BsFillGridFill} from 'react-icons/bs'
import {FaBars} from 'react-icons/fa'
import { useDispatch, useSelector } from "react-redux";
import { setGridList, setGridView, setSort } from "../slice/productsSlice";
const Sort = () => {
  const {sort, filteredProducts} = useSelector(state => state.products)
  let dispatch = useDispatch()
  return (
    <div className="flex flex-wrap">
      <div className="mb-5">
        <button onClick={() => dispatch(setGridView())}>
          <BsFillGridFill />
        </button>
        <button className="mx-5" onClick={() => dispatch(setGridList())}>
          <FaBars />
        </button>
      </div>
      <div className="md:mx-5 mb-5">
        <span>{filteredProducts.length} Products Found</span>
      </div>
      <div className="flex-1 mx-5 self-center mb-5">
        <hr className="" />
      </div>
      <form>
        <label className="md:mx-5 mb-5">Sort By</label>
        <select name="" id="" className="px-3 py-1" onChange={(e) => dispatch(setSort(e.target.value))} value={sort}>
          <option value="price (lowest)">price (lowest)</option>
          <option value="price (highest)">price (highest)</option>
          <option value="name (A - Z)">name (A - Z)</option>
          <option value="name (Z - A)">name (Z - A)</option>
        </select>
      </form>
    </div>
  );
};

export default Sort;
