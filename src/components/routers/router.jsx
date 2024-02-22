import * as React from "react";
import * as ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../../App";
import Home from "../home/Home";
import Services from "../services/Servicepage";
import About from "../about/About";
import Blog from "../blog/Blog";
import Contact from "../contact/contactpage";
import Dashboard from "../admin/dashboard/Dashboard";
import DashboardLayout from "../admin/dashboard/DashboardLayout";

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
import CompanyOverview from "../admin/dashboard/CompanyOverview/CompanyOverview";
import UploadOverview from "../admin/dashboard/CompanyOverview/UploadOverview";
import EditOverview from "../admin/dashboard/CompanyOverview/EditOverview";
import ServiceManage from "../admin/dashboard/service/ServiceManage";
import UploadService from "../admin/dashboard/service/UploadService";
import SlidCarsGallery from "../admin/dashboard/carGallery/SlidCarsGallery";
import UploadCarsGallery from "../admin/dashboard/carGallery/UploadCarsGallery";
import EditGallery from "../admin/dashboard/carGallery/EditGallery";
import Counters from "../admin/dashboard/counter/Counters";
import UploadConters from "../admin/dashboard/counter/UploadConters";
import EditCounter from "../admin/dashboard/counter/EditCounter";
import Testimoni from "../admin/dashboard/testimoni/Testimoni";
import UploadTestimoni from "../admin/dashboard/testimoni/UploadTestimoni";
import EditTestimoni from "../admin/dashboard/testimoni/EditTestimoni";
import Footers from "../admin/dashboard/footers/Footers";
import UploadFooters from "../admin/dashboard/footers/UploadFooters";
import EditFooters from "../admin/dashboard/footers/EditFooters";
import Ourservice from "../admin/dashboard/ourservice/Ourservice";
import UploadOurservice from "../admin/dashboard/ourservice/UploadOurservice";
import EditOurservice from "../admin/dashboard/ourservice/EditOurservice";
import Product from "../admin/dashboard/products/Product";
import UploadProduct from "../admin/dashboard/products/UploadProduct";
import EditProduct from "../admin/dashboard/products/EditProduct";

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
      // {
      //   path: "/admin/dashboard/servicescontent",
      //   element: <Service />,
      // },
      // {
      //   path: "/admin/dashboard/aboutcontent",
      //   element: <Aboute />,
      // },
      // {
      //   path: "/admin/dashboard/blogcontent",
      //   element: <Blogs />,
      // },
      // {
      //   path: "/admin/dashboard/contactcontent",
      //   element: <Contacts />,
      // },
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
        loader: ({ params }) =>
          fetch(`http://localhost:8000/updatebanner/${params.id}`), // Use relative path
      },

      {
        path: "/admin/dashboard/uploadcars",
        element: <Uplodcar />,
      },
      {
        path: "/admin/dashboard/edit-cars/:id",
        element: <EditCars />,
        loader: ({ params }) =>
          fetch(`https://bazra.onrender.com/updatecars/${params.id}`),
      },
      {
        path: "/admin/dashboard/viewdetailcars/:id",
        element: <ViewCars />,
        loader: ({ params }) =>
          fetch(`https://bazra.onrender.com/allcars/${params.id}`),
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
        loader: ({ params }) =>
          fetch(`http://localhost:8000/updatewhoweare/${params.id}`),
      },

      // company overview path
      {
        path: "/admin/dashboard/managecompanyoverview",
        element: <CompanyOverview />,
      },
      {
        path: "/admin/dashboard/uploadoverview",
        element: <UploadOverview />,
      },
      {
        path: "/admin/dashboard/edit-overview/:id",
        element: <EditOverview />,
        loader: ({ params }) =>
          fetch(`http://localhost:8000/bzoverview/${params.id}`),
      },

      //service
      {
        path: "/admin/dashboard/manageservice",
        element: <ServiceManage />,
      },
      {
        path: "/admin/dashboard/uploadservice",
        element: <UploadService />,
      },

      //slider cars in gallery

      {
        path: "/admin/dashboard/cargallery_slider",
        element: <SlidCarsGallery />,
      },
      {
        path: "/admin/dashboard/uploadcargallery_slide",
        element: <UploadCarsGallery />,
      },
      {
        path: "/admin/dashboard/edit-cargallery_slide/:id",
        element: <EditGallery />,
        // loader: ({params})=>fetch(`http://localhost:8000/bzoverview/${params.id}`)
      },

      // counter to manage
      //slider cars in gallery

      {
        path: "/admin/dashboard/counters",
        element: <Counters />,
      },
      {
        path: "/admin/dashboard/uploadcounters",
        element: <UploadConters />,
      },
      {
        path: "/admin/dashboard/edit-counters/:id",
        element: <EditCounter />,
        //  loader: ({params})=>fetch(`../../../data/Data/counter/${params.id}`)
      },


      //testimoni manage

      {
        path: "/admin/dashboard/testimoni",
        element: <Testimoni />,
      },
      {
        path: "/admin/dashboard/uploadtestimoni",
        element: <UploadTestimoni />,
      },
      {
        path: "/admin/dashboard/edit-testimoni/:id",
        element: <EditTestimoni />,
        //  loader: ({params})=>fetch(`../../../data/Data/counter/${params.id}`)
      },

      //footer manager

       //testimoni manage

       {
        path: "/admin/dashboard/footers",
        element: <Footers />,
      },
      {
        path: "/admin/dashboard/uploadfooters",
        element: <UploadFooters />,
      },
      {
        path: "/admin/dashboard/edit-footers/:id",
        element: <EditFooters />,
        //  loader: ({params})=>fetch(`../../../data/Data/counter/${params.id}`)
      },

      //our service description and video
      {
        path: "/admin/dashboard/ourservice",
        element: <Ourservice />,
      },
      {
        path: "/admin/dashboard/uploadourservice",
        element: <UploadOurservice />,
      },
      {
        path: "/admin/dashboard/edit-ourservice/:id",
        element: <EditOurservice />,
        //  loader: ({params})=>fetch(`../../../data/Data/counter/${params.id}`)
      },

      //service product 

      {
        path: "/admin/dashboard/product",
        element: <Product />,
      },
      {
        path: "/admin/dashboard/uploadproduct",
        element: <UploadProduct />,
      },
      {
        path: "/admin/dashboard/edit-product/:id",
        element: <EditProduct />,
        //  loader: ({params})=>fetch(`../../../data/Data/counter/${params.id}`)
      },
    ],
  },
]);

export default router;
