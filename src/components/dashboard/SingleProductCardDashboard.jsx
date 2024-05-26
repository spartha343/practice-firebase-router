/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const SingleProductCardDashboard = ({ shoe, onDelete }) => {
  const { title, description, id, brand, price, image_url } = shoe;

  const handleDelete = async () => {
    await fetch(`http://localhost:3000/shoes/${id}`, {
      method: "DELETE"
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        onDelete(id);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="card glass">
      <figure className="h-52">
        <img className="h-52 w-full" src={image_url} alt="Shoe !" />
      </figure>
      <div className="card-body p-5">
        <h2 className="card-title">{title}</h2>
        <h3 className="text-lg font-light">{brand}</h3>
        <h3 className="text-base font-semibold">${price}</h3>
        <p className="mb-5">
          {description.length > 100
            ? description.slice(0, 100) + "..."
            : description}
        </p>
        <div className="card-actions justify-end">
          <Link to={`/products/${id}`}>
            <button className="btn btn-sm btn-primary">See Details!</button>
          </Link>
          <Link to={`/dashboard/update-product/${id}`}>
            <button className="btn btn-sm btn-secondary">Update!</button>
          </Link>
          <button onClick={handleDelete} className="btn btn-sm btn-error">
            Delete!
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductCardDashboard;
