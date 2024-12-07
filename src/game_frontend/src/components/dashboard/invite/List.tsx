import React from "react"
import useFriendList from "../../../hooks/useFriendList"
import FriendCard from "./FriendCard"
import { isArray } from "../../../utils"

const List = ()=>{
    const {friendList, isRefetching, isLoading} = useFriendList()

    if(isLoading) return <p>Loading...</p>
    if(isRefetching) return <p>Refreshing...</p>
    if(isArray(friendList) && (friendList?.length === 0)) return <p>No friends found</p>
    else
    return (
        <div className="space-y-2 min-h-20">
          {friendList?.map((friend, index) => (
            <React.Fragment key={friend?.principal.toString()}>
              <FriendCard name={friend?.name} />
              {index < friendList.length - 1 && (
                <div className="w-full border-t border-gray-600 my-8" />
              )}
            </React.Fragment>
          ))}
        </div>
    )
}

export default List