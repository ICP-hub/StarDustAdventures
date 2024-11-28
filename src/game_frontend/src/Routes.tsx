import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Exchange from './pages/Dashboard/Exchange';
import Layout from './pages/Dashboard/layout';
import Airdrop from './pages/Dashboard/Airdrop';
import InviteFriends from './pages/Dashboard/InviteFriends';
import RewardsList from './pages/Dashboard/RewardsList';
import MineCard from './pages/Dashboard/MineCard';
export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/dashboard' element={<Layout/>} >
                    <Route index element={<Exchange/>} />
                    <Route path='exchange' element={<Exchange/>}/>
                    <Route path='airdrop' element={<Airdrop/>}/>
                    <Route path='friends' element={<InviteFriends/>}/>
                    <Route path='gifts' element={<RewardsList/>}/>
                    <Route path='mine-cards' element={<MineCard/>}/>
                </Route>
            </Routes>
        </Router>
    )
}