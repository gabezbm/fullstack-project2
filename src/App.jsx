import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import Members from "./components/Members";
import Videos from "./components/Videos";
import HireUs from "./components/HireUs";
import Auditions from "./components/Auditions";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <AboutUs />
      </>
    ),
  },
  {
    path: "/AboutUs",
    element: (
      <>
        <Navbar />
        <AboutUs />
      </>
    ),
  },
  {
    path: "/Videos",
    element: (
      <>
        <Navbar />
        <Videos />
      </>
    ),
  },
  {
    path: "/Members",
    element: (
      <>
        <Navbar />
        <Members />
      </>
    ),
  },
  {
    path: "/HireUs",
    element: (
      <>
        <Navbar />
        <HireUs />
      </>
    ),
  },
  {
    path: "/Auditions",
    element: (
      <>
        <Navbar />
        <Auditions />
      </>
    ),
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
