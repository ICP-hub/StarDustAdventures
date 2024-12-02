import { useCallback, useState } from "react";

const usePoints = (initialValue : number)=>{
    const [points, setPoints] = useState<number>(initialValue);
    
    const incrementPoints = useCallback(()=>{
        setPoints((val)=>val + 1);
    },[initialValue])

    return {points, incrementPoints, setPoints}
}

export default usePoints