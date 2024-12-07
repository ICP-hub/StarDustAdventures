import { useCallback, useEffect, useState } from "react"
import { GET_USER_FRIENDS } from "../utils/api/query";
import { useAuth } from "./useAuth";
import { Principal } from "@dfinity/principal";

type useFriendType = {
    principal : Principal,
    name : string,
}

const useFriendList = ()=>{
    const auth = useAuth()
    const [friendList, setFriendList] = useState<Array<useFriendType> | undefined>(undefined);
    const {data, isLoading, error, refetch, isRefetching} = GET_USER_FRIENDS(auth?.actors)

    useEffect(()=>{
        if((data as any)?.ok){
            setFriendList((data as any)?.ok)
        }
    },[data])

    const refreshList = useCallback(async()=>{
        try{
            await refetch({
                throwOnError : true
            })
        }catch(err){
            console.error(err)
        }
    },[])

    return {friendList, isLoading, error, isRefetching, refreshList}
}

export default useFriendList