import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../shared/layout/Layout";
import Dashboard from "../modules/dashboard/dashboard";
import GetClients from "../pages/pagesClients/ClientPage";
import NewClientPage from "../pages/pagesClients/NewClientPage";
import ClientDetailPage from "../pages/pagesClients/ClientDetailPage";
import EditClient from "../pages/pagesClients/EditClientPage";

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
          <Route path="/clients" element={<GetClients />} />
          <Route path="/clients/new" element={<NewClientPage />} />
          <Route path="/clients/:id" element={<ClientDetailPage />} /> 
          <Route path="/clients/:id/edit" element={<EditClient />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRoutes;
