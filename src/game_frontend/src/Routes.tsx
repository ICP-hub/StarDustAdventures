import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './pages/Landing';
import Exchange, { ExchangeLoader } from './pages/Dashboard/Exchange';
import Layout, { LayoutLoader } from './pages/Dashboard/layout';
import Airdrop from './pages/Dashboard/Airdrop';
import InviteFriends from './pages/Dashboard/InviteFriends';
import RewardsList from './pages/Dashboard/RewardsList';
import MineCard from './pages/Dashboard/MineCard';
import { useAuth } from './hooks/useAuth';


export default function AppRoutes() {
    const auth = useAuth()
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Landing />,
        },
        {
            path: '/dashboard',
            element: <Layout />,
            // loader:(args)=>LayoutLoader(args, auth?.actors),
            children: [
                {
                    index: true,
                    element: <Exchange />,
                    loader: (args) => ExchangeLoader(args, auth?.actors)
                },
                {
                    path: 'exchange',
                    element: <Exchange />,
                    loader: (args) => ExchangeLoader(args, auth?.actors)
                },
                {
                    path: 'airdrop',
                    element: <Airdrop />,
                },
                {
                    path: 'friends',
                    element: <InviteFriends />,
                },
                {
                    path: 'gifts',
                    element: <RewardsList />,
                },
                {
                    path: 'mine-cards',
                    element: <MineCard />,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />
}
