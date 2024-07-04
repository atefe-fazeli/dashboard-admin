import { useRoutes } from "react-router-dom";
import "./App.css";
import routes from "./routes";
import Navbar from "./pages/navbar/navbar";
import Sidebar from "./pages/sidebar/sidebar";

function App() {
  let router = useRoutes(routes);
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="pagesContainer">{router}</div>
    </div>
  );
}

export default App;
