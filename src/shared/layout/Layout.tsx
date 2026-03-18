import React, { type ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-blue-950">
      {/* Header */}
      <header className="bg-gray-900 text-white font-bold p-4">
        <h1>Mi App</h1>
      </header>

      {/* Main content */}
      <main className="flex-1 p-4 text-amber-50">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-500 text-center p-4">
        © 2026 Mi App
      </footer>
    </div>
  );
};

export default Layout;
