import React from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Layout";
import AboutUs from "./Pages/AboutUS/AboutUs";
import Testimonials from "./Pages/AboutUS/Testimonials";
import ServicesPage from "./Pages/Services/ServicesPage";
import BusinessServicess from "./Pages/Services/BusinessServicess";
import SpecialistServices from "./Pages/Services/SpecialistServices";
import IndividualsServicess from "./Pages/Services/IndividualsServicess";
import FinancialPlanning from "./Pages/Services/FinancialPlanning";
import BusinessResources from "./Pages/Resources/BusinessResources";
import MoneyResouces from "./Pages/Resources/MoneyResouces";
import TaxInformation from "./Pages/Resources/TaxInformation";
import TaxStrategies from "./Pages/Resources/TaxStrategies";
import InteractiveTools from "./Pages/Resources/InteractiveTools";
import ResourcesPage from "./Pages/Resources/ResourcesPage";
import NewsPage from "./Pages/News/NewsPage";
import BusinessNews from "./Pages/News/BusinessNews";
import HotTopics from "./Pages/News/HotTopics";
import AccSEND from "./Pages/AccSEND/AccSEND";
import ContactUS from "./Pages/Contact/ContactUS";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Routes location={location} key={location.pathname}>
        {/* <Route path="/" exact element={} /> */}
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/about-us"
          element={
            <Layout>
              <AboutUs />
            </Layout>
          }
        />
        <Route
          path="/about-us/testimonials"
          element={
            <Layout>
              <Testimonials />
            </Layout>
          }
        />
        {/* Services Page */}
        <Route
          path="/services"
          element={
            <Layout>
              <ServicesPage />
            </Layout>
          }
        />
        <Route
          path="/services/services-for-business"
          element={
            <Layout>
              <BusinessServicess />
            </Layout>
          }
        />
        <Route
          path="/services/services-for-individuals"
          element={
            <Layout>
              <IndividualsServicess />
            </Layout>
          }
        />
        <Route
          path="/services/financial-planning"
          element={
            <Layout>
              <FinancialPlanning />
            </Layout>
          }
        />
        <Route
          path="/services/specialist-services"
          element={
            <Layout>
              <SpecialistServices />
            </Layout>
          }
        />
        {/* Resources Page */}
        <Route
          path="/resources"
          element={
            <Layout>
              <ResourcesPage />
            </Layout>
          }
        />
        <Route
          path="/resources/your-business"
          element={
            <Layout>
              <BusinessResources />
            </Layout>
          }
        />
        <Route
          path="/resources/your-money "
          element={
            <Layout>
              <MoneyResouces />
            </Layout>
          }
        />
        <Route
          path="/resources/tax-information"
          element={
            <Layout>
              <TaxInformation />
            </Layout>
          }
        />
        <Route
          path="/resources/tax-strategies"
          element={
            <Layout>
              <TaxStrategies />
            </Layout>
          }
        />
        <Route
          path="/resources/interactive-tools"
          element={
            <Layout>
              <InteractiveTools />
            </Layout>
          }
        />
        {/* News Page */}
        <Route
          path="/news"
          element={
            <Layout>
              <NewsPage />
            </Layout>
          }
        />
        <Route
          path="/news/business-news"
          element={
            <Layout>
              <BusinessNews />
            </Layout>
          }
        />
        <Route
          path="/news/hot-topics"
          element={
            <Layout>
              <HotTopics />
            </Layout>
          }
        />
        {/* AccSEND */}
        <Route
          path="/accSEND"
          element={
            <Layout>
              <AccSEND />
            </Layout>
          }
        />
        <Route
          path="/contact-us"
          element={
            <Layout>
              <ContactUS />

            </Layout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

{
  /* <Route path="/signin" element={<SignIn />} /> */
}
{
  /* <Route path="/signup" element={<SignUp />} /> */
}
