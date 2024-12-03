import { useCallback, useState } from "react";
import { INCREMENT_POINTS } from "../utils/api/update";
import { useAuth } from "./useAuth";

const usePoints = (initialValue : number)=>{
    const auth = useAuth()
    const [points, setPoints] = useState<number>(initialValue);
    const {mutateAsync, data} = INCREMENT_POINTS(auth?.actors)
    
    const incrementPoints = useCallback(async()=>{
        setPoints((val)=>val + 0.001);
        try {
            const result : any = await mutateAsync()
            console.log("Result : ", result)
            if(result.err){
                throw new Error(result.err)
            }
        } catch (err){
            setPoints((val)=>val - 0.001)
            console.error(err)
        } finally {
            console.log(data)
        }

    },[initialValue])

    return {points, incrementPoints, setPoints}
}

export default usePoints