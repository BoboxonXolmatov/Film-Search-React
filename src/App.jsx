import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About"
import LogIn from "./pages/LogIn"
import LogOut from "./pages/LogOut"
import Card from "./pages/Card";
// import { useGlobalContext } from "./hook/useGlobalContext";


function App() {
  // const data = useGlobalContext()
  // console.log(data);

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Card />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/LogIn",
          element: <LogIn />
        },
        {
          path: "/LogOut",
          element: <LogOut />
        }
      ]
    }
  ])


  return (
    <RouterProvider router={routes} />
  );
}

export default App;
