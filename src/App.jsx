import { Outlet } from "react-router-dom";
import "./App.css";
import CookiesBanner from "./components/CookiesBanner";
import ScrollToTop from "./components/ScrollToTop";

function App() {

  return (
    <div className="App min-h-screen w-full">
      <ScrollToTop />
      <CookiesBanner />
      <Outlet />
    </div>
  );
}

export default App;
