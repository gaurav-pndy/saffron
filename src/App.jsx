import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CategoryItems from "./pages/CategoryItems";

function App() {
  // const [count, setCount] = useState(0);
  const router = createBrowserRouter([
    {
      element: <Home />,
      path: "/",
    },
    {
      element: <CategoryItems />,
      path: "/category/:name",
    },
  ]);

  return (
    <>
      <Header />
      <RouterProvider router={router} />

      <Footer />
    </>
  );
}

export default App;
