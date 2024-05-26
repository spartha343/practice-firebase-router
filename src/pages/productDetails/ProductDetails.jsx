import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const { brand, description, image_url, price, title } = useLoaderData();
  return (
    <div className="w-[90%] md:w-[70%] lg:w-[60%] mx-auto mb-20">
      <h1 className="text-center text-3xl mb-3">{title}</h1>
      <div>
        <img src={image_url} alt={title} className="rounded-lg w-full" />
      </div>
      <h3 className="text-2xl">${price}</h3>
      <h3 className="text-2xl font-medium">{brand}</h3>
      <p className="text-lg font-light">{description}</p>
    </div>
  );
};

export default ProductDetails;
