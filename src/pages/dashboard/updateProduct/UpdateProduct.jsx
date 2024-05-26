import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const UpdateProduct = () => {
  const shoe = useLoaderData();

  const [title, setTitle] = useState(shoe.title);
  const [description, setDescription] = useState(shoe.description);
  const [brand, setBrand] = useState(shoe.brand);
  const [price, setPrice] = useState(shoe.price);
  const [image_url, setImageUrl] = useState(shoe.image_url);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const id = form.id.value;
    const title = form.title.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const description = form.description.value;
    const image_url = form.image_url.value;
    const data = { id, title, brand, price, description, image_url };

    await fetch(`http://localhost:3000/shoes/${shoe.id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="w-full">
      <h2 className="text-2xl text-center my-8">Update Product</h2>
      <div className="hero min-h-screen px-10 my-10">
        <div className="card shrink-0 w-full max-w-3xl shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                name="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Brand</span>
              </label>
              <input
                name="brand"
                type="text"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                placeholder="Brand"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                name="price"
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Price"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                className="input input-bordered"
                required
              ></textarea>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image URL</span>
              </label>
              <input
                name="image_url"
                type="text"
                value={image_url}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="Image URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">ID</span>
              </label>
              <input
                name="id"
                type="number"
                value={shoe.id}
                placeholder="ID"
                className="input input-bordered"
                readOnly
              />
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Update Product"
                className="btn btn-primary"
              ></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
