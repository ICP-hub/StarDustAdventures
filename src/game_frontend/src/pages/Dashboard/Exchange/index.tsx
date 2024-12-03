import ProgressBar from "../../../components/ui/Progressbar"
import Sidebar from "../../../components/ui/Sidebar"
import '../index.css'
import { useEffect, useState } from "react"
import { bigIntToNumber } from "../../../utils"
import usePoints from "../../../hooks/usePoints"
import { GET_USER_POINTS } from "../../../utils/api/query"
import { useAuth } from "../../../hooks/useAuth"

const Exchange=()=>{
    const auth = useAuth()
    const {data , isLoading} : {data : any, isLoading : boolean} = GET_USER_POINTS(auth?.actors)
    const {points, setPoints, incrementPoints} = usePoints(0)
    // Future 
    /**
     * Batch Update after a set of interval
     */

    useEffect(()=>{
        if(data?.ok){
            const _points = bigIntToNumber(data.ok) * 0.001
            setPoints(_points)
        }
    },[data])

    return(
        <main className="exchange-container">
       {isLoading ? <p>Loading...</p>: (
        <>
        <div className="progressbar-container">
            <ProgressBar/>
        </div>
        <section>
            <img src='/assets/images/ufo.svg' alt="ufo" width={50} height={50} loading="lazy"/>
            <h3 className="exchange-points">{points.toString()}</h3>
        </section>
        <Sidebar/>
        <section
        onClick={incrementPoints}
        className="click-to-earn" style={{backgroundImage: 'url("/assets/images/firefly.webp")'}}>
        </section>
    </>    
    )
        }
        </main>
    )
}
export default Exchange