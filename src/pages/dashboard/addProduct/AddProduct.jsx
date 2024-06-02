import Swal from "sweetalert2";

const AddProduct = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const description = form.description.value;
    const image_url = form.image_url.value;
    const data = { title, brand, price, description, image_url };

    Swal.fire({
      title: "Are you sure to add these data?",
      text: "Please ensure you are providing valid data",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, add it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        await fetch("http://localhost:3000/shoes", {
          method: "POST",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(data)
        })
          .then((res) => res.json())
          .then(() => {
            Swal.fire({
              title: "Added Successfully!",
              text: "Your file has been Added.",
              icon: "success"
            });

            form.reset();
          })
          .catch((error) => console.log(error));
      }
    });
  };
  return (
    <div className="w-full">
      <h2 className="text-2xl text-center my-8">Add Product</h2>
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
                id=""
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
                placeholder="Image URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Add Product"
                className="btn btn-primary"
              ></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
