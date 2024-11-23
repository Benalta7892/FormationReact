import { createBrowserRouter, RouterProvider, NavLink, Outlet, useRouteError, useNavigation } from "react-router-dom";
import { Single } from "./pages/Single";
import { Blog } from "./pages/Blog";
import { Spinner } from "./components/Spinner.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <PageError />,
    children: [
      {
        path: "blog",
        element: (
          <div className="row">
            <aside className="col-3">
              <h2>Sidebar</h2>
            </aside>
            <main className="col-9">
              <Outlet />
            </main>
          </div>
        ),
        children: [
          {
            path: "",
            element: <Blog />,
            loader: async () => {
              const posts = fetch("https://jsonplaceholder.typicode.com/posts?_limit=10").then((r) => r.json());
              return { posts };
            },
          },
          {
            path: ":id",
            element: <Single />,
          },
        ],
      },
      {
        path: "contact",
        element: <div>Contact</div>,
      },
    ],
  },
]);

function PageError() {
  const error = useRouteError();
  console.log(error);

  return (
    <>
      <h1>Une erreur est survenue</h1>
      <p>{error?.message ?? error?.toString()}</p>
    </>
  );
}

function Root() {
  const navigation = useNavigation();
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>
      <div className="container my-4">
        {navigation.state === "loading" && <Spinner />}
        <Outlet />
      </div>
    </>
  );
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
