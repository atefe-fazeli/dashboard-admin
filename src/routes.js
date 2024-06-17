import Analytics from "./pages/analytics";
import Feedback from "./pages/feedback";
import Home from "./pages/home";
import Mail from "./pages/mail";
import Manage from "./pages/manage";
import Massages from "./pages/massages";
import NewUsers from "./pages/newUsers";
import Products from "./pages/products";
import ProductsDetail from "./pages/productsDetail";
import Reports from "./pages/reports";
import Sales from "./pages/sales";
import Transactions from "./pages/transactions";
import Users from "./pages/users";

let routes = [
  { path: "/", element: <Home /> },
  { path: "/users", element: <Users /> },
  { path: "/newuser", element: <NewUsers /> },
  { path: "/products", element: <Products /> },
  { path: "/products/:id", element: <ProductsDetail /> },
  { path: "/analytics", element: <Analytics /> },
  { path: "/feedback", element: <Feedback /> },
  { path: "/mail", element: <Mail /> },
  { path: "/manage", element: <Manage /> },
  { path: "/massages", element: <Massages /> },
  { path: "/reports", element: <Reports /> },
  { path: "/sales", element: <Sales /> },
  { path: "/transactions", element: <Transactions /> },
];

export default routes;
