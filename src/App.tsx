import { Outlet } from "react-router";
import "./App.scss";
import Navbar from "./layouts/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
