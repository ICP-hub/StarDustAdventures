import { ActorSubclass } from "@dfinity/agent"
import { _SERVICE } from "../../../../declarations/StarDustAdventures_backend/StarDustAdventures_backend.did"
import { useQuery } from "react-query"
import api from "."

export const GET_USER = (actor : ActorSubclass<_SERVICE>)=>{
    return useQuery('user', async()=>api.query(()=>actor.whoami()))
}

export const GET_USER_FRIENDS = (actor : ActorSubclass<_SERVICE>)=>{
    return useQuery('user_friends',async()=>api.query(()=>actor.getUserFriends()))
}