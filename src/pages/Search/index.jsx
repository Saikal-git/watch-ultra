import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";

const Search = () => {
  const { search } = useSelector((s) => s);
  useEffect(() => {
    window.scrollTo(10, 0);
  }, []);
  return (
    <div>
      <div className="container">
        <div className="flex items-start justify-start flex-wrap gap-7 my-[50px]">
          {search?.map((el, idx) => (
            <ProductCard el={el} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
