import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard";
import { useState, useEffect } from "react";

const ShopProduct = () => {
  const { shopProduct } = useSelector((s) => s);
  console.log(shopProduct, "shop");

  const [sort, setSort] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(shopProduct);
  }, []);

  function sortProduct() {
    if (sort === "cheap") {
      setData(data.sort((a, b) => a.price - b.price));
    } else if (sort === "expensive") {
      setData(data.sort((a, b) => b.price - a.price));
    } else if (sort === "minus") {
      setData(data.sort((a, b) => b.rating - a.rating));
    } else if (sort === "plus") {
      setData(data.sort((a, b) => a.rating - b.rating));
    }
  }

  function handleSort(e) {
    setSort(e.target.value);
    sortProduct();
  }

  return (
    <div className="py-[50px]">
      <div className="container">
        <select
          onChange={(e) => handleSort(e)}
          className="bg-gray-50 border w-[20%] mb-[20px] ml-[950px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="cheap">Cheap</option>
          <option value="expensive">Expensive</option>
          <option value="minus">Rating 1-5</option>
          <option value="plus">Rating 5-1</option>
        </select>
        <div className="flex items-center flex-wrap gap-[30px]">
          {data?.map((el, idx) => (
            <ProductCard el={el} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopProduct;
