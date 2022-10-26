import React, { useEffect } from "react";
import { PageHero, Filters, Sort } from "../components";
import { useDispatch, useSelector } from "react-redux";
import {
  getFetchProducts,
  filterProducts,
  setSort,
} from "../slice/productsSlice";
import ListView from "../components/ListView";
import GridView from "../components/GridView";

const Products = () => {
  const dispatch = useDispatch();
  const { filteredProducts, gridView, filters } = useSelector(
    (state) => state.products
  );
  useEffect(() => {
    dispatch(getFetchProducts());
  }, []);
  useEffect(() => {
    dispatch(filterProducts());
  }, [filters]);
  return (
    <div>
      <PageHero title="products" />
      <div className="py-24">
        <div className="container">
          <div className="md:flex justify-between md:space-x-10">
            <div className="md:w-2/12">
              <Filters />
            </div>
            <div className="md:w-10/12">
              <Sort />

              {filteredProducts.length === 0 ? (
                <p className="font-bold">
                  Sorry, no products matched your search.
                </p>
              ) : gridView ? (
                <GridView products={filteredProducts} />
              ) : (
                filteredProducts.map((product) => {
                  return <ListView key={product.id} {...product} />;
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
