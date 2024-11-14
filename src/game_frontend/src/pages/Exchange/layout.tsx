import Navbar from "../../components/ui/Navbar"
import ProgressBar from "../../components/ui/Progressbar"
import useDocumentTitle from "../../hooks/useDocumentTitle"
import './index.css'
const Layout =()=>{
    useDocumentTitle('Dashboard | StarDust Adventures')
    return(
        <>
        <Navbar/>
        <div className="progressbar-container">
            <ProgressBar/>
        </div>
        </>
    )
}

export default Layout