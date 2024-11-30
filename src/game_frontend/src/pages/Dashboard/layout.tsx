import { Outlet } from "react-router-dom"
import Navbar from "../../components/ui/Navbar"
import Sidebar from "../../components/ui/Sidebar"
import useDocumentTitle from "../../hooks/useDocumentTitle"
import './index.css'
import { GET_USER } from "../../utils/api/query"
const Layout =()=>{
    useDocumentTitle('Dashboard | StarDust Adventures')
    return(
        <div className="exchange" style={{backgroundImage:'url("/assets/images/space-exchange-bg.webp")'}}>
        <Navbar/>
        <Sidebar/>
        <Outlet/>
        </div>
    )
}

export const LayoutLoader=async(_: any, actors: any)=>{
    if (!actors) {
        return { error: "User is not authenticated." };
    }

    try {
        const { data, error } = await GET_USER(actors); // Fetch user data
        return data;
    } catch (error) {
        console.error("Error fetching user data:", error);
        return { error: "Failed to fetch user data." };
    }
}

export default Layout