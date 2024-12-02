import { useLoaderData } from "react-router-dom"
import ProgressBar from "../../../components/ui/Progressbar"
import Sidebar from "../../../components/ui/Sidebar"
import { GET_USER_POINTS } from "../../../utils/api/query"
import '../index.css'
import { useEffect, useState } from "react"
import { bigIntToNumber } from "../../../utils"
import usePoints from "../../../hooks/usePoints"

const Exchange=()=>{
    const data : any = useLoaderData()
    const {points, setPoints, incrementPoints} = usePoints(0)

    useEffect(()=>{
        if(data.ok){
            const _points = bigIntToNumber(data.ok) * 0.001
            setPoints(_points)
        }
    },[data])

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
            <h3 className="exchange-points">{points.toString()}</h3>
        </section>
        <Sidebar/>
        <section
        onClick={()=>incrementPoints}
        className="click-to-earn" style={{backgroundImage: 'url("/assets/images/firefly.webp")'}}>
        </section>
        </main>
    )
}

export const ExchangeLoader=async(_: any, actors: any)=>{
    if (!actors) {
        return null;
    }
    const { data, error } = GET_USER_POINTS(actors); // Fetch user data
    return data as {ok : Number; err : any};
}

export default Exchange