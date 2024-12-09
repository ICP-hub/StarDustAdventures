import { useCallback, useEffect, useState } from "react"
import { GET_USER_FRIENDS } from "../utils/api/query";
import { useAuth } from "./useAuth";
import { Principal } from "@dfinity/principal";

type useFriendType = Array<[Principal, string]>

const useFriendList = ()=>{
    const auth = useAuth()
    const [friendList, setFriendList] = useState<useFriendType | undefined>(undefined);
    const {data, isLoading, error, refetch, isRefetching} = GET_USER_FRIENDS(auth?.actors)

    useEffect(()=>{
        if((data as any)?.ok){
            setFriendList((data as any)?.ok[0])
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