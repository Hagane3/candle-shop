import { Outlet } from "react-router";
import "./App.scss";
import Footer from "./layouts/Footer/Footer";
import Navbar from "./layouts/Navbar/Navbar";
import { useScrollToTop } from "./hooks/useScrollToTop";

function App() {
  useScrollToTop();

  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
