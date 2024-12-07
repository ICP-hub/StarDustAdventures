import { Outlet } from "react-router-dom";
import Navbar from "../../components/ui/Navbar";
import Sidebar from "../../components/ui/Sidebar";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import "./index.css";
import { GET_USER } from "../../utils/api/query"
const Layout = () => {
  useDocumentTitle("Dashboard | StarDust Adventures");
  return (
    <div
      className="exchange overflow-hide  scrollbar-hide "
      style={{
        backgroundImage: 'url("/assets/images/space-exchange-bg.webp")',
        width: '100vw',           // Full viewport width
        height: '100vh',         // Full viewport height  
      }}
    >
      <Navbar />
      <Sidebar />
      <Outlet />
    </div>
  );
};

export const LayoutLoader=async(_: any, actors: any)=>{
    const { data, error } = GET_USER(actors); // Fetch user data
    return data;
}

export default Layout;
