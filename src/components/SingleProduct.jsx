/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const SingleProduct = ({ shoe }) => {
  const { title, description, id, brand, price, image_url } = shoe;
  return (
    <div className="card glass">
      <figure className="h-52">
        <img className="h-52 w-full" src={image_url} alt="Shoe !" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h3 className="text-lg font-light">{brand}</h3>
        <h3 className="text-base font-semibold">${price}</h3>
        <p>
          {description.length > 100
            ? description.slice(0, 100) + "..."
            : description}
        </p>
        <div className="card-actions justify-end">
          <Link to={`/products/${id}`}>
            <button className="btn btn-primary">See Details!</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
