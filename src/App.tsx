import { Outlet } from "react-router";
import "./App.scss";
import Footer from "./layouts/Footer/Footer";
import Navbar from "./layouts/Navbar/Navbar";
import { ScrollToTop } from "./utils/ScrollToTop";

function App() {
  return (
    <div className="App">
      <ScrollToTop>
        <Navbar />
        <Outlet />
        <Footer />
      </ScrollToTop>
    </div>
  );
}

export default App;
