import ProgressBar from "../../../components/ui/Progressbar"
import Sidebar from "../../../components/ui/Sidebar"
import '../index.css'

const Exchange=()=>{
    return(
        <main className="exchange-container">
        <div className="progressbar-container">
            <ProgressBar/>
        </div>
        {/* 
        Future Scope :
            Will be a seperate component for exchange points
            Will fetch the data from the backend and display the points or we'll fetch the data in the page and show it then
            Else We'll show a loading spinner till the data is fetched
        */}
        <section>
            <img src='/assets/images/ufo.svg' alt="ufo" width={50} height={50}/>
            <h3 className="exchange-points">0.3</h3>
        </section>
        <Sidebar/>
        </main>
    )
}

export default Exchange