import React from "react";

const Category = ({ cate }) => {
  return (
    <div className="w-[90px] h-[120px]  ">
      <div className="w-full h-[70px]  flex items-center justify-center">
        <img
          className="w-[70px] h-[70px] cursor-pointer"
          src={`./assets/categories/${cate.id}.svg`}
          alt=""
        />
      </div>
      <div className="w-full h-[50px] flex items-center justify-center text-center">
        <div className="w-[70px] h-[50px]  text-xs flex items-center justify-center text-center cursor-pointer">
          {cate.description}
        </div>
      </div>
    </div>
  );
};

export default Category;
