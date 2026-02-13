import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="h-screen">
      <div className="h-[10%] bg-amber-500 text-5xl text-center">
        <Header />
      </div>
      <div className="h-[80%] bg-blue-500 text-5xl text-center flex justify-center items-center">
        <Outlet />
      </div>
      <div className="h-[10%] bg-amber-500 text-5xl text-center">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
