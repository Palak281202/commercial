import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import HomePage from './pages/HomePage.js';
// import BecomeSupplierPage from './pages/BecomeSupplierPage.js';
// import ProfilePage from './pages/ProfilePage.js';
// import CartPage from './pages/CartPage.js';
// import RootLayout from './pages/RootLayout.js';
// import MensEthinic from './pages/MensEthinic.js';
// import MensWestern from './pages/MensWestern.js';
// import WomensEthinicPage from './pages/WomensEthinicPage.js';
// import WomensWesternPage from './pages/WomensWesternPage.js';
import { CartContextProvider } from './store/CartHandleStore.js';
// import WishlistPage from './pages/WishlistPage.js';
import { WishListContextProvider } from './store/WishListHandleStore.js';
import { CheckoutContextProvider } from './store/CheckoutHandler.js';
import { Suspense, lazy } from 'react';
import paraClass from './supense.module.css';

function App() {
  const HomePage = lazy(()=>import('./pages/HomePage.js'));
  const BecomeSupplierPage = lazy(()=>import('./pages/BecomeSupplierPage.js'));
  const ProfilePage = lazy(()=>import('./pages/ProfilePage.js'));
  const CartPage = lazy(()=>import('./pages/CartPage.js'));
  const RootLayout = lazy(()=>import('./pages/RootLayout.js'));
  const MensEthinic = lazy(()=>import('./pages/MensEthinic.js'));
  const MensWestern = lazy(()=>import('./pages/MensWestern.js'));
  const WomensEthinicPage = lazy(()=>import('./pages/WomensEthinicPage.js'));
  const WomensWesternPage = lazy(()=>import('./pages/WomensWesternPage.js'));
  const WishlistPage = lazy(()=>import('./pages/WishlistPage.js'));

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Suspense fallback={<p className={paraClass.pload}>Loading...</p>}><RootLayout /></Suspense>,
      children: [
        {
          index: true,
          element: <Suspense fallback={<p className={paraClass.pload}>Loading...</p>}><HomePage /></Suspense>
        },
        {
          path: 'becomesupplier',
          element: <Suspense fallback={<p className={paraClass.pload}>Loading...</p>}><BecomeSupplierPage /></Suspense>
        },
        {
          path: 'profile',
          element: <Suspense fallback={<p className={paraClass.pload}>Loading...</p>}><ProfilePage /></Suspense>
        },
        {
          path: 'cart',
          element: <Suspense fallback={<p className={paraClass.pload}>Loading...</p>}><CartPage /></Suspense>
        },
        {
          path: 'mensethinic',
          element: <Suspense fallback={<p className={paraClass.pload}>Loading...</p>}><MensEthinic /></Suspense>
        },
        {
          path: 'menswestern',
          element: <Suspense fallback={<p className={paraClass.pload}>Loading...</p>}><MensWestern /></Suspense>
        },
        {
          path: 'womensethinic',
          element: <Suspense fallback={<p className={paraClass.pload}>Loading...</p>}><WomensEthinicPage /></Suspense>
        },
        {
          path: 'womenswestern',
          element: <Suspense fallback={<p className={paraClass.pload}>Loading...</p>}><WomensWesternPage /></Suspense>
        },
        {
          path: 'wishlist',
          element: <Suspense fallback={<p className={paraClass.pload}>Loading...</p>}><WishlistPage /></Suspense>
        },
      ]
    },
  ]);
  return (
    <CheckoutContextProvider>
      <WishListContextProvider>
        <CartContextProvider>
          <RouterProvider router={router} />
        </CartContextProvider>
      </WishListContextProvider>
    </CheckoutContextProvider>
  );
}

export default App;
