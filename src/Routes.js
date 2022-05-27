import React from "react";
import MyAccountAccountDetails from "pages/MyAccountAccountDetails";
import LoginPage from "pages/LoginPage";
import ContactPage from "pages/ContactPage";
import SearchPage from "pages/SearchPage";
import Checkout from "pages/Checkout";
import Cart from "pages/Cart";
import BlogDetail from "pages/BlogDetail";
import BlogList from "pages/BlogList";
import SingleProductDetails from "pages/SingleProductDetails";
import EmptyCategory from "pages/EmptyCategory";
import CategorieswithHorizontalFilters from "pages/CategorieswithHorizontalFilters";
import CategorieswithLeftSidebarFilters from "pages/CategorieswithLeftSidebarFilters";
import About from "pages/About";
import HomepageV3 from "pages/HomepageV3";
import HomepageV2 from "pages/HomepageV2";
import HomepageV1 from "pages/HomepageV1";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/homepagev1" element={<HomepageV1 />} />
        <Route path="/homepagev2" element={<HomepageV2 />} />
        <Route path="/homepagev3" element={<HomepageV3 />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/categorieswithleftsidebarfilters"
          element={<CategorieswithLeftSidebarFilters />}
        />
        <Route
          path="/categorieswithhorizontalfilters"
          element={<CategorieswithHorizontalFilters />}
        />
        <Route path="/emptycategory" element={<EmptyCategory />} />
        <Route
          path="/singleproductdetails"
          element={<SingleProductDetails />}
        />
        <Route path="/bloglist" element={<BlogList />} />
        <Route path="/blogdetail" element={<BlogDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/searchpage" element={<SearchPage />} />
        <Route path="/contactpage" element={<ContactPage />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route
          path="/myaccountaccountdetails"
          element={<MyAccountAccountDetails />}
        />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
