import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import BecomeSupplierPage from "./pages/BecomeSupplierPage.js";
import ProfilePage from "./pages/ProfilePage.js";
import CartPage from "./pages/CartPage.js";
import RootLayout from "./pages/RootLayout.js";
import MensEthinic from "./pages/MensEthinic.js";
import MensWestern from "./pages/MensWestern.js";
import WomensEthinicPage from "./pages/WomensEthinicPage.js";
import WomensWesternPage from "./pages/WomensWesternPage.js";
import { CartContextProvider } from "./store/CartHandleStore.js";
import WishlistPage from "./pages/WishlistPage.js";
import { WishListContextProvider } from "./store/WishListHandleStore.js";
import { CheckoutContextProvider } from "./store/CheckoutHandler.js";
import Login from "./components/Authentication/Login.js";
import Signup from "./components/Authentication/Signup.js";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "becomesupplier",
          element: <BecomeSupplierPage />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Signup />,
        },
        {
          path: "profile",
          element: <ProfilePage />,
        },
        {
          path: "cart",
          element: <CartPage />,
        },
        {
          path: "mensethinic",
          element: <MensEthinic />,
        },
        {
          path: "menswestern",
          element: <MensWestern />,
        },
        {
          path: "womensethinic",
          element: <WomensEthinicPage />,
        },
        {
          path: "womenswestern",
          element: <WomensWesternPage />,
        },
        {
          path: "wishlist",
          element: <WishlistPage />,
        },
      ],
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
