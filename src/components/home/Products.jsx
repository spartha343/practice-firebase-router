import { useLoaderData } from "react-router-dom";
import SingleProduct from "../SingleProduct";

const Products = () => {
  const shoes = useLoaderData();
  return (
    <div>
      <h3 className="text-3xl text-center my-10 font-normal">Our Products</h3>

      <div className="grid grid-cols-3 gap-10">
        {shoes.slice(0, 3).map((shoe) => (
          <SingleProduct key={shoe.id} shoe={shoe} />
        ))}
      </div>
    </div>
  );
};

export default Products;
