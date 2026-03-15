import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../shared/layout/Layout";
import Dashboard from "../modules/dashboard/dashboard";
import GetClientsByApi from "../shared/services/Client";
import NewClientPage from "../pages/NewClientPage";
import ClientDetailPage from "../pages/ClientDetailPage";

// Páginas simples
const HomePage = () => <div>Página de inicio</div>;
const AboutPage = () => <div>Acerca de</div>;


const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/dashboard" element={<Dashboard />} />


          {/*clients*/}
          <Route path="/clients" element={<GetClientsByApi />} />
          <Route path="/clients/new" element={<NewClientPage />} />
          <Route path="/clients/:id" element={<ClientDetailPage />} /> 
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRoutes;
