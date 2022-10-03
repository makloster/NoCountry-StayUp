import CategoriesDb from "../db/CategoriesDb";
import Category from "./Category";

const Categories = () => (
  <div className="w-full h-[140px] border-b flex justify-center">
    <div className="w-full max-w-[1200px] h-[100%]     flex  justify-center items-center">
      {CategoriesDb.map((cate) => (
        <Category key={cate.id} cate={cate} />
      ))}
    </div>
  </div>
);

export default Categories;
