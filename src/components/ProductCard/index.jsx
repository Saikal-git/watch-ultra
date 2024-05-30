import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { Link } from "react-router-dom";
import sale from "../../assets/img/sale-lenta.png";
import { useDispatch } from "react-redux";
const ProductCard = ({ el }) => {
  const dispatch = useDispatch();
  return (
    <div className="w-[400px] h-[680px] bg-white border border-gray-200 rounded-lg shadow relative ">
      {el.price > 3000 ? (
        <img
          src={sale}
          alt="img"
          width={200}
          className="absolute top-[-8px] left-[-8px] z-[2]"
        />
      ) : null}
      <Zoom>
        <img
          className="p-8 rounded-t-lg w-[100%] h-[500px] object-contain"
          src={el.image}
          alt="product image"
        />
      </Zoom>
      <div className="px-5 pb-5">
        <Link
          to={`/productDetails/${el.id}`}
          onClick={() => dispatch({ type: "DETAILS_PRODUCT", payload: el })}
        >
          <h5 className="text-xl font-semibold tracking-tight text-gray-900">
            {el.title}
          </h5>
        </Link>
        <div className="flex items-center mt-2.5 mb-5">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            <div
              className="star"
              style={{
                background: el.rating >= 1 ? "orange" : "gray",
              }}
            ></div>
            <div
              className="star"
              style={{
                background: el.rating >= 2 ? "orange" : "gray",
              }}
            ></div>
            <div
              className="star"
              style={{
                background: el.rating >= 3 ? "orange" : "gray",
              }}
            ></div>
            <div
              className="star"
              style={{
                background: el.rating >= 4 ? "orange" : "gray",
              }}
            ></div>
            <div
              className="star"
              style={{
                background: el.rating >= 5 ? "orange" : "gray",
              }}
            ></div>
          </div>
          <span className="bg-blue-100 text-blue-800 text-xl font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
            {el.rating}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex relative">
            {el.price > 3000 ? (
              <h2 className="text-3xl font-bold  text-red-600 ">
                {el.price - (el.price / 100) * 20} c
              </h2>
            ) : null}
            <h2
              className={`${
                el.price > 3000 ? "text-2xl" : "text-3xl"
              } font-bold text-gray-900 dark:text-white ml-[20px] ${
                el.price > 3000
                  ? "line-through absolute top-[-20px] right-[-90px]"
                  : null
              }`}
            >
              {el.price} c
            </h2>
          </div>
          <a
            href="#"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
