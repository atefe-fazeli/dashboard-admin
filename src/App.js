import { useRoutes } from "react-router-dom";
import "./App.css";
import routes from "./routes";
import Navbar from "./pages/navbar/navbar";

function App() {
  let router = useRoutes(routes);
  return (
    <div className="App">
      <Navbar />
      {router}
    </div>
  );
}

export default App;
