import React, { type ReactNode } from "react";
import { Link } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

const toggleDark = () => {
  document.documentElement.classList.toggle("dark")
}


const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100 dark:bg-gray-900">
      {/* Header */}
      <header className="flex bg-gray-300 text-black font-bold p-4 dark:bg-gray-800 dark:text-white">
        <h1>Mi App</h1>

        <Link to="/clients"
        className="mx-5">
        <button>Clients</button>
        </Link>

        
        <Link to={`/plans`}
        className="mx-5 ">
        <button>Plans</button>
        </Link>
        <Link to="/orders"
        className="mx-5">
        <button>Orders</button>
        </Link>
        <Link to="/expenses"
        className="mx-5">
        <button>Expenses</button>
        </Link>
        <Link to="/materials"
        className="mx-5">
        <button>Materials</button>
        </Link>
        <Link to="/tecnica"
        className="mx-5">
        <button>Tecnical view</button>
        </Link>

        <button 
        onClick={toggleDark} 
        className="bg-gray-700 px-3 py-1 rounded-4xl text-white">
          🌙
        </button>
      </header>

      {/* Main content */}
      <main className="flex-1 p-4 text-amber-50">
        {children}
      </main>
      

      {/* Footer */}
      <footer className="bg-gray-400 text-center text-black p-4 dark:text-white">
        © 2026 Mi App
      </footer>
    </div>
  );
};

export default Layout;
