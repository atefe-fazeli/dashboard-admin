import Home from "./pages/home";
import NewUsers from "./pages/newUsers";
import Products from "./pages/products";
import ProductsDetail from "./pages/productsDetail";
import Users from "./pages/users";

let routes = [
  { path: "/", element: <Home /> },
  { path: "/users", element: <Users /> },
  { path: "/newuser", element: <NewUsers /> },
  { path: "/products", element: <Products /> },
  { path: "/products/:id", element: <ProductsDetail /> },

  
];

export default routes;
