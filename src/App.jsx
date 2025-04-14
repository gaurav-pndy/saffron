// App.jsx
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CategoryItems from "./pages/CategoryItems";

const Layout = () => (
  <>
    <Header />
    <Outlet /> {/* This renders the current route's component */}
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    element: <Layout />, // Common layout
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu/:name",
        element: <CategoryItems />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
