import MainHeader from "../components/MainHeader";
import { Outlet } from "react-router-dom";

function RootLayout({ children }) {
  return (
    <div>
      <MainHeader />
      <Outlet />
    </div>
  );
}

export default RootLayout;
