import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Landing />} />
            </Routes>
        </Router>
    )
}