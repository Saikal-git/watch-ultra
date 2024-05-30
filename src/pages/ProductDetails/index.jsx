import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CountUp from "react-countup";

const ProductDetails = () => {
  //   const [detail, setDetail] = useState([]);
  //   const { id } = useParams();
  //   const { shopProduct } = useSelector((s) => s);
  //   const detailProduct = () => {
  //     let data = shopProduct.find((el) => el.id == id);
  //     setDetail(data);
  //   };
  //   useEffect(() => {
  //     detailProduct();
  //   }, []);
  const { productDetails } = useSelector((s) => s);
  let { image, title, description, price } = productDetails;
  useEffect(() => {
    window.scrollTo(10, 0);
  }, []);
  return (
    <div className="py-[40px]">
      <div className="container">
        <div
          className="flex gap-[50px] rounded-[40px]"
          style={{
            boxShadow: "6px 19px 58px 16px rgba(34, 60, 80, 0.2)",
          }}
        >
          <img src={image} alt="" width={400} />
          <div className="">
            <h1 className="text-[30px] font-medium">{title}</h1>
            <p className="text-[20px]">{description}</p>
            <div className="flex mt-[30px] relative">
              {price > 3000 ? (
                <h2 className="text-3xl font-bold  text-red-600 ">
                  <CountUp
                    start={0}
                    end={price - (price / 100) * 20}
                    duration={0.7}
                    separator=" "
                  ></CountUp>
                  c
                </h2>
              ) : null}
              <h2
                className={`${
                  price > 3000 ? "text-2xl" : "text-3xl"
                } font-bold text-gray-900 dark:text-white ml-[20px] ${
                  price > 3000
                    ? "line-through absolute top-[-20px] right-[100px]"
                    : null
                }`}
              >
                {price} c
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
