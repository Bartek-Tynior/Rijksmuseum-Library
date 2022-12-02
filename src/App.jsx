import DetailsPage from "./views/DetailsPage";
import IndexPage from "./views/IndexPage";
import NotFound from "./views/NotFound"
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <IndexPage/>,
      errorElement: <NotFound />,
    },
    {
        path: "/:objectNumber",
        element: <DetailsPage/>,
        errorElement: <NotFound />,
      }
  ]);

function App() {
    return (
       <RouterProvider router={router}/>
    );
}
  
  export default App