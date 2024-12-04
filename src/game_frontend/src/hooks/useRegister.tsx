import { useState } from "react";
import { validateName } from "../utils";
import { useAuth } from "./useAuth";
import { CREATE_USER } from "../utils/api/update";
import { redirect, useNavigate } from "react-router-dom";

const useRegister = ()=>{
    const auth = useAuth();
    const navigate = useNavigate();
    const [playerName, setPlayerName] = useState<string>('');
    const {mutateAsync, isLoading,error,reset}  = CREATE_USER(auth?.actors, {user : {name : playerName}, refBy : []})

    const handleSubmit = async(e : React.FormEvent)=>{
        e.preventDefault();
        try {
            if(validateName(playerName) && auth){
                await mutateAsync()
            }
        } catch (err) {
            console.error(err)
        } finally {
            if(!error){
                navigate('/dashboard', {replace : true})
            }
            setPlayerName('')
            reset()
        }
    }

    const onChange = (e : React.ChangeEvent<HTMLInputElement>)=>{
        setPlayerName(e.target.value)
    }

    return {playerName, handleSubmit, onChange, isLoading}
}

export default useRegister