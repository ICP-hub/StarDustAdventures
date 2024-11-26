import { QueryClient, QueryClientProvider } from 'react-query';
import AppRoutes  from './Routes';
function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
    <AppRoutes/>
    </QueryClientProvider>
  );
}

export default App;
