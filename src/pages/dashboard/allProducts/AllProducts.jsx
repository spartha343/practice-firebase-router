import { useLoaderData } from "react-router-dom";
import SingleProduct from "../../../components/SingleProduct";

const AllProducts = () => {
  const shoes = useLoaderData();
  return (
    <div className="mb-10">
      <h2 className="text-2xl text-center my-8">All Products</h2>

      <div className="grid grid-cols-3 gap-8 mx-5">
        {shoes?.map((shoe) => (
          <SingleProduct key={shoe.id} shoe={shoe} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
