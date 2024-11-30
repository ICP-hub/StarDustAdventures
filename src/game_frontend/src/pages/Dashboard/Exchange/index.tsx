import { useLoaderData } from "react-router-dom"
import ProgressBar from "../../../components/ui/Progressbar"
import Sidebar from "../../../components/ui/Sidebar"
import { GET_USER_POINTS } from "../../../utils/api/query"
import '../index.css'

const Exchange=()=>{
    const data = useLoaderData()
    console.log(data)
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
            <img src='/assets/images/ufo.svg' alt="ufo" width={50} height={50} loading="lazy"/>
            <h3 className="exchange-points">0.3</h3>
        </section>
        <Sidebar/>
        <section className="click-to-earn" style={{backgroundImage: 'url("/assets/images/firefly.webp")'}}>
        </section>
        </main>
    )
}

export const ExchangeLoader=async(_: any, actors: any)=>{
    if (!actors) {
        return { error: "User is not authenticated." };
    }

    try {
        const { data, error } = await GET_USER_POINTS(actors); // Fetch user data
        return data;
    } catch (error) {
        console.error("Error fetching user data:", error);
        return { error: "Failed to fetch user data." };
    }
}

export default Exchange