import { useLoaderData } from "react-router-dom";
import SingleProductCardDashboard from "../../../components/dashboard/SingleProductCardDashboard";
import { useState } from "react";

const AllProducts = () => {
  const [shoes, setShoes] = useState(useLoaderData());
  const handleDeleteProduct = (id) => {
    setShoes(shoes.filter((shoe) => shoe._id !== id));
  };
  return (
    <div className="mb-10">
      <h2 className="text-2xl text-center my-8">All Products</h2>

      <div className="grid grid-cols-3 gap-8 mx-5">
        {shoes?.map((shoe) => (
          <SingleProductCardDashboard
            key={shoe._id}
            shoe={shoe}
            onDelete={handleDeleteProduct}
          />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
