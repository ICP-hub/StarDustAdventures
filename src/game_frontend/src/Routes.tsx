import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Exchange from './pages/Exchange';
export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/exchange' element={<Exchange/>} />
            </Routes>
        </Router>
    )
}