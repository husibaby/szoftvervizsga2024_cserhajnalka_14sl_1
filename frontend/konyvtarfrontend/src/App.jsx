import './App.css'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import BookForm from "./pages/BookForm";

function App() {
   const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/create-book", 
          element: <BookForm />
        },       
      ]
    }
   ])

  
  return (
    <RouterProvider router={router} />
  );
}

export default App;
