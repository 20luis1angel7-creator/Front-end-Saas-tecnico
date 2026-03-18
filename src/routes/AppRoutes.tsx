import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../shared/layout/Layout";
import Dashboard from "../modules/dashboard/dashboard";
import GetClients from "../pages/pagesClients/ClientPage";
import NewClientPage from "../pages/pagesClients/NewClientPage";
import ClientDetailPage from "../pages/pagesClients/ClientDetailPage";
import EditClient from "../pages/pagesClients/EditClientPage";
import PlanPage from "../pages/pagePlans/PlanPage";
import NewPlan from "../pages/pagePlans/NewPlanPage";
import EditPlan from "../pages/pagePlans/EditPlanPage";
import PlanDetailPage from "../pages/pagePlans/PlanDetailPage";
import OrderPage from "../pages/pageOrders/OrderPage";
import NewOrder from "../pages/pageOrders/NewOrderPage";
import EditOrder from "../pages/pageOrders/EditOrderPage";
import OrderDetail from "../pages/pageOrders/OrderDetailPage";
import ExpensePage from "../pages/pageExpense/ExpensePage";
import NewExpense from "../pages/pageExpense/ExpenseNew";
import ExpenseDetail from "../pages/pageExpense/ExpenseDetailPage";
import EditExpense from "../pages/pageExpense/EditExpense";
import MaterialPage from "../pages/PageMaterial/MaterialPage";
import MaterialDetail from "../pages/PageMaterial/MaterialDetailPage";
import NewMaterial from "../pages/PageMaterial/NewMaterialPage";
import EditMaterial from "../pages/PageMaterial/EditMaterialPage";
import InvoiceDetail from "../pages/pageInvoice/InvoiceDetailPage";
import InvoicePage from "../pages/pageInvoice/InvoiceByClientPage";



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

          {/*Plans*/}
          <Route path="/plans" element={<PlanPage />} />
          <Route path="/plans/new" element={<NewPlan />} />
          <Route path="/plans/:id/update" element={<EditPlan />} />
          <Route path="plans/:id" element={<PlanDetailPage />} />

          {/*Orders */}
          <Route path="/orders" element={<OrderPage />} />
          <Route path="/orders/new" element={<NewOrder />} />
          <Route path="/orders/:id/update" element={<EditOrder />} />
          <Route path="/orders/:id" element={<OrderDetail />} />

          {/*Expense */}
          <Route path="expenses/" element={<ExpensePage />} />
          <Route path="expenses/new" element={<NewExpense />} />
          <Route path="expenses/:id/update" element={<EditExpense />} />
          <Route path="expenses/:id" element={<ExpenseDetail />} />

          {/*Materials */}
          <Route path="materials/" element={<MaterialPage />} />
          <Route path="materials/new" element={<NewMaterial />} />
          <Route path="materials/:id/update" element={<EditMaterial />} />
          <Route path="materials/:id" element={<MaterialDetail />} />

          {/*Invoice */}
          <Route path="invoices/clients/:clientId" element={<InvoicePage />} />
          <Route path="Invoices/:invoiceId" element={<InvoiceDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRoutes;
