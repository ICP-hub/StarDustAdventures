import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Exchange from './pages/Exchange';
import Layout from './pages/Exchange/layout';
export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/dashboard' element={<Layout/>} >
                    <Route path='exchange' element={<Exchange/>} />
                </Route>
            </Routes>
        </Router>
    )
}