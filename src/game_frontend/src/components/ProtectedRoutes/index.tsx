import { Suspense } from "react"
import { useAuth } from "../../hooks/useAuth"
import { Navigate } from "react-router-dom"
import NotFound from "../../pages/Error"

const ProtectedRoutes = ({children} : React.PropsWithChildren) => {
    const auth = useAuth()
    
    if(auth?.isAuthenticated.plug || auth?.isAuthenticated.ii) {
        return (
            <Suspense fallback={<p>Loading...</p>}>
                {children}
            </Suspense>
        )
    } else {
        return <Navigate to="/notfound" replace />
    }
}

export default ProtectedRoutes