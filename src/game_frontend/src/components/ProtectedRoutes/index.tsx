import { Suspense } from "react"
import { useAuth } from "../../hooks/useAuth"

const ProtectedRoutes = ({children} : React.PropsWithChildren)=>{
    const auth = useAuth()
    if(auth?.isAuthenticated.plug || auth?.isAuthenticated.ii) {
        return (
            <Suspense fallback={<p>Loading...</p>}>
                {children}
            </Suspense>
        )
    } else {
        return <p>404</p>
    }
}

export default ProtectedRoutes