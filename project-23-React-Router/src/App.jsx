//import the createBrowserRouter function from the react router dom to create router
//import RouterProvider to provide the router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Products from "./pages/Products";
import Error from "./pages/Error";
import Root from "./pages/Root";

//use it and pass an array of objects into it, where each object represents a route

//Now note this in url: https://example.com/products

//First one is the http protocol, Second one is your domain name, and then after then it's your path.
//BASICALLY THE PART AFTER THE DOMAIN IS YOUR PATH
//AND THATS WHAT WE DEFINE IN THE PATH PROPERTY
//PUT THE ELEMENT WHICH WILL BE ACTIVE WHEN THAT PATH WILL BE TRIGGERED
//IT CAN BE ANY JSX CODE IN ELEMENT

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error/>,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/products", element: <Products /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
