import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from "./reportWebVitals";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pagesHome";
import ErrorPage from "./pages/ErrorPage";
import Products from "./pages/Products";
import ProductInfo from "./pages/ProductInfo";


import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routes = createBrowserRouter([

  {
  path: "/",
  element: <App />,
  errorElement: <ErrorPage />,
  children: [
    { index: true, element: <Home /> },
    { path: "/about", element: <About />,},
    { path: "/contact", element: <Contact />,},
    ],
  },
    { path: "/products", element: <Products />,},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={routes} />);



reportWebVitals();
