import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import DashboardLayout from "../layouts/DashboardLayout";
import SIgnUp from "../pages/authentication/signUp/SIgnUp";
import SignIn from "../pages/authentication/signIn/SignIn";
import ProtectedRoute from "./protectedRoutes/ProtectedRoute";
import ProductDetails from "../pages/productDetails/ProductDetails";
import AllProducts from "../pages/dashboard/allProducts/AllProducts";
import AddProduct from "../pages/dashboard/addProduct/AddProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch("http://localhost:3000/shoes")
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/shoes/${params.id}`)
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/signup",
        element: <SIgnUp />
      },
      {
        path: "/signin",
        element: <SignIn />
      }
    ]
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <AllProducts />,
        loader: () => fetch("http://localhost:3000/shoes")
      },
      {
        path: "add-product",
        element: <AddProduct />
      }
    ]
  }
]);

export default router;
