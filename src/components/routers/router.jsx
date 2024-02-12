import * as React from "react";
import * as ReactDOM from "react-dom";
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import App from "../../App";
import Home from "../home/Home";
import Services from "../services/Servicepage"
import About from "../about/About";
import Blog from "../blog/Blog";
import Contact from "../contact/contactpage";
import Dashboard from "../admin/dashboard/Dashboard"
import DashboardLayout from "../admin/dashboard/DashboardLayout";
import Service from "../admin/dashboard/Service";
import Aboute from "../admin/dashboard/About";
import Contacts from "../admin/dashboard/Contact";
import Blogs from "../admin/dashboard/BlogsTestimony";
import Cars from "../admin/dashboard/Cars";
import EditCars from "../admin/dashboard/EditCars";
import Uplodcar from "../admin/dashboard/Uplodcar";
import ManageCars from "../admin/dashboard/ManageCars";
import ViewCars from "../admin/dashboard/ViewCars";
import Banner from "../admin/dashboard/banner/Banner";
import BannerAdd from "../admin/dashboard/banner/BannerAdd";
import BannerEdit from "../admin/dashboard/banner/BannerEdit";
import WhoWeAre from "../admin/dashboard/who_we_are/WhoWeAew";
import WhoWeAre_Upload from "../admin/dashboard/who_we_are/WhoWeAre_Upload";
import WhoWeAreEdit from "../admin/dashboard/who_we_are/WhoWeAreEdit";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Blog",
        element: <Blog />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/admin/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/admin/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/admin/dashboard/servicescontent",
        element: <Service />,
      },
      {
        path: "/admin/dashboard/aboutcontent",
        element: <Aboute />,
      },
      {
        path: "/admin/dashboard/blogcontent",
        element: <Blogs />,
      },
      {
        path: "/admin/dashboard/contactcontent",
        element: <Contacts />,
      },
      {
        path: "/admin/dashboard/managecars",
        element: <ManageCars />,
      },
      {
        path: "/admin/dashboard/managebanner",
        element: <Banner />,
      },
      {
        path: "/admin/dashboard/uploadbanner",
        element: <BannerAdd />,
      },
      {
        path: "/admin/dashboard/edit-banner/:id",
        element: <BannerEdit />,
        loader: ({ params }) => fetch(`http://localhost:8000/updatebanner/${params.id}`) // Use relative path
      },
      
      {
        path: "/admin/dashboard/uploadcars",
        element: <Uplodcar />,
      },
      {
        path: "/admin/dashboard/edit-cars/:id",
        element: <EditCars />,
        loader: ({params})=>fetch(`https://bazra.onrender.com/updatecars/${params.id}`)
      },
      {
        path: "/admin/dashboard/viewdetailcars/:id",
        element: <ViewCars />,
        loader: ({params})=>fetch(`https://bazra.onrender.com/allcars/${params.id}`)
      },

      {
        path: "/admin/dashboard/managewhoweare",
        element: <WhoWeAre />,
      },

      {
        path: "/admin/dashboard/uploawhoweare",
        element: <WhoWeAre_Upload />,
      },
       {
        path: "/admin/dashboard/edit-whoweare/:id",
        element: <WhoWeAreEdit />,
        loader: ({params})=>fetch(`http://localhost:8000/updatewhoweare/${params.id}`)
      },
    ],
  },
]);


export default router