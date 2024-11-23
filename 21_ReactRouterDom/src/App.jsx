import { createBrowserRouter, RouterProvider, Link, NavLink } from "react-router-dom";
import { Single } from "./pages/Single";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        Page d'accueil
        <nav>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    ),
  },
  {
    path: "/blog",
    element: (
      <div>
        Blog
        <nav>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    ),
  },
  {
    path: "/blog/:id",
    element: <Single />,
  },
  {
    path: "/contact",
    element: (
      <div>
        Contact
        <nav>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
