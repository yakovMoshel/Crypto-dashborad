import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './components/templates/main-layout';
import ErrorPage from './pages/errorPage';
import { loader as cryptoDashboardLoader } from './components/molecules/CryptoDashboard';
import CryptoDetail, { loader as cryptoDetailLoader } from './components/molecules/CryptoDetail';
import HomePage from './pages/HomePage';
import AddCryptoPage from './pages/AddCryptoPage';
import addCryptoAction from './services/FormActionCrypto';



const router = createBrowserRouter([{
  path: '/',
  element: <MainLayout />,
  errorElement: <ErrorPage />,
  children: [
    {
      path: '/',
      element: <HomePage />,
      loader: cryptoDashboardLoader
    },
    {
      path: '/coin/:id',
      element: <CryptoDetail />,
      loader: cryptoDetailLoader

    },
    {
      path: '/add',
      element: <AddCryptoPage />,
      action: addCryptoAction,
    }
  ]
}
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
