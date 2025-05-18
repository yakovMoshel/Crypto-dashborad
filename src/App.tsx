import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './components/templates/main-layout';
import ErrorPage from './pages/errorPage';
import CryptoDetail from './components/molecules/CryptoDetail';
import HomePage from './pages/HomePage';
import AddCryptoPage from './pages/AddCryptoPage';
import addCryptoAction from './components/organisms/FormActionCrypto';


const router = createBrowserRouter([{
  path: '/',
  element: <MainLayout />,
  errorElement: <ErrorPage />,
  children: [
    {
      path: '/',
      element: <HomePage />,

    },
    {
      path: '/coin/:id',
      element: <CryptoDetail />,
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
