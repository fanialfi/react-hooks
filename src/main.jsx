import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import LoginPage from "./pages/loginPage";
import { Navigate } from "react-router-dom";
import ProductsPage from "./pages/productsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/dashboard",
    children: [
      {
        path: "products",
        element: <ProductsPage />,
      },
      {
        index: true,
        element: <Navigate to={"/dashboard/products"} replace />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
