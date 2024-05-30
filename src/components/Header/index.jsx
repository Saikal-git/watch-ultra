import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingBag4Line } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [search1, setSearch1] = useState("");

  const getSearch = (e) => {
    if (e.key === "Enter") {
      dispatch({ type: "SEARCH_PRODUCT", payload: search1 });
      nav(`/search/${search1}`);
      setSearch1("");
    }
  };


  return (
    <div className="py-[30px] sticky top-0 z-10 bg-[#c8c4c46d] backdrop-blur-sm">
      <div className="container">
        <div className="flex items-center justify-between">
          <Link to={"/"} className="text-[40px] font-black">
            ShopVerse
          </Link>
          <div className="">
            <Link to={""} className="text-[25px] mx-[25px]">
              About
            </Link>
            <Link to={"/shop"} className="text-[25px] mx-[25px]">
              Shop
            </Link>
            <Link to={""} className="text-[25px] mx-[25px]">
              Categories
            </Link>
            <Link to={""} className="text-[25px] mx-[25px]">
              Help
            </Link>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex items-center relative">
              <a
                onClick={() => {
                  dispatch({ type: "SEARCH_PRODUCT", payload: search1 });
                  nav(`/search/${search1}`);
                  setSearch1("");
                }}
                className="text-[30px] absolute left-[4px]"
              >
                <IoIosSearch />
              </a>
              <input
                onChange={(e) => setSearch1(e.target.value)}
                value={search1}
                onKeyDown={getSearch}
                type="text"
                className="py-[10px] px-[40px] rounded-[20px] bg-gray-400 placeholder:text-black"
                placeholder="Search for “Phones”"
              />
            </div>
            <a className="text-[35px]">
              <FaRegHeart />
            </a>
            <a className="text-[35px]">
              <RiShoppingBag4Line />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
