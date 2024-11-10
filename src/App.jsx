import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <Navigation />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <Contact />,
      },
      {
        path: "/background",
        element: <Contact />,
      },
      {
        path: "/mission",
        element: <Contact />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
