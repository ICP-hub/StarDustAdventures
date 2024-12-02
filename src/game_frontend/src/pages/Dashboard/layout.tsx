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
    const { data, error } = GET_USER(actors); // Fetch user data
    return data;
}

export default Layout