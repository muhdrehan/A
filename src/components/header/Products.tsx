import React from "react";
import { ProductProp } from "../../../type";
import Image from "next/image";
import { HiShoppingCart } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import FormattedPrice from "./FormattedPrice";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/nextSlice";

const Products = ({ productData }: any) => {
  const dispatch = useDispatch();
  return (
    <div className="w-full px-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {productData.map(
        ({
          _id,
          title,
          brand,
          category,
          description,
          image,
          isNew,
          oldPrice,
          Price,
        }: ProductProp) => (
          <div
            key={_id}
            className="w-full bg-white text-black p-4 border border-gray-300 rounded-lg group"
          >
            <div className="w-full h-[340px] relative">
              <Image
                className="w-full h-full object-cover scale-90 hover:scale-100 transition-transform duration-300"
                width={300}
                height={300}
                src={image}
                alt="ProductsImage"
              />
              <div className="w-12 h-24 absolute bottom-10 right-0 border-[1px] border-gray-400 bg-white flex flex-col rounded-md">
                <span className="w-full h-full border-b-[1px] border-b-gray-400  flex items-center justify-center text-xl bg-transparent  hover:bg-amazon_yellow cursor-pointer duration-300 ">
                  <HiShoppingCart />
                </span>
                <span className="w-full h-full border-b-[1px] border-b-gray-400  flex items-center justify-center text-xl bg-transparent  hover:bg-amazon_yellow cursor-pointer duration-300 ">
                  <FaHeart />
                </span>
              </div>
              {/* {isNew && <p> !Save{oldPrice - Price} </p>} */}
            </div>
            <hr />
            <div className="px-4 py-3 flex-col gap-1 ">
              <p className="text-sm text-gray-500 tracking-wide"> {category}</p>
              <p className="text-base font-medium ">{title}</p>
              <p className="flex items-center gap-2">
                <span className="text-sm line-through">
                  <FormattedPrice amount={oldPrice} />
                </span>
                <span className="text-amazon_blue font-semibold">
                  <FormattedPrice amount={Price} />
                </span>
              </p>
              <p className="text-xs text-gray-500 text-justify">
                {description.substring(0, 120)}
              </p>
            </div>
            <button
              onClick={() =>
                dispatch(
                  addToCart({
                    _id: _id,
                    brand: brand,
                    category: category,
                    image: image,
                    Price: Price,
                    description: description,
                    isNew: isNew,
                    oldPrice: oldPrice,
                    title: title,
                    quantity: 1,
                  })
                )
              }
              className="h-10 w-full font-medium bg-amazon_blue text-white rounded-md hover:bg-amazon_yellow hover:text-black duration-300 mt-2:"
            >
              {" "}
              Add to Cart
            </button>
          </div>
        )
      )}
    </div>
  );
};

export default Products;
