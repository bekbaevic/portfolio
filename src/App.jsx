import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Blog from "./pages/Blog";
import Gallery from "./pages/Gallery"
import Projects from "./pages/Projects";
import User from "./pages/User";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
    ],
  },
  {
    path: "user",
    element: <User />,
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <div>
        <Layout />
      </div>
    </RouterProvider>
  );
}

export default App;
