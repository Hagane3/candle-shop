import { Outlet } from "react-router";
import "./App.scss";
import Footer from "./layouts/Footer/Footer";
import Navbar from "./layouts/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
