import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { getFetchProduct } from "../../slice/singleProductSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  AddToCart,
  Loading,
  PageHero,
  SingleImage,
  Stars,
} from "../../components";
import { formatPrice } from "../../utils/helpers";
import Link from "next/link";
const ProductItem = () => {
  const router = useRouter();
  const id = router.query.id
  const dispatch = useDispatch();
  const {singleProductLoading, singleProductError } = useSelector(
    (state) => state.product
  );
  const { product } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getFetchProduct(id));
  }, [id]);

  if (singleProductLoading) {
    return <Loading />;
  }

  const {
    name,
    images,
    colors,
    shipping,
    price,
    stock,
    category,
    reviews,
    stars,
    description,
    company,
    id : sku,
  } = product;
  return (
    <div>
      <PageHero title={name} prod="product" />
      <div className="container">
        <Link href="/products">
          <a className="btn btn-main my-10">back to products</a>
        </Link>
        <div className="justify-between md:flex md:space-x-10">
          <div className="w-6/12 mb-5">
            <SingleImage key={sku} images={images} />
          </div>
          <div className="w-6/12">
            <h3 className="text-2xl sm:text-3xl md:text-5xl capitalize font-semibold">
              {name}
            </h3>
            <Stars stars={stars} />
            <h4 className="text-2xl text-main font-semibold">
              {formatPrice(price)}
            </h4>
            <p className="leading-9">{description}</p>

            <ul>
              <li className="flex items-center mb-5 capitalize">
                <span className="w-3/12 text-xl font-semibold">
                  Available :
                </span>
                <span>{stock > 0 ? "In Stock" : "not Available"}</span>
              </li>
              <li className="flex items-center mb-5">
                <span className="w-3/12 text-xl font-semibold capitalize">
                  sku :
                </span>
                <span>{sku}</span>
              </li>
              <li className="flex items-center mb-5">
                <span className="w-3/12 text-xl font-semibold capitalize">
                  brand :
                </span>
                <span>{company}</span>
              </li>
            </ul>

            <div className="w-full bg-line h-[1px] mb-5"></div>
            {/* color */}
            {stock > 0 && <AddToCart key={sku} {...product} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
