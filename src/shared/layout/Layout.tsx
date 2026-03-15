import React, { type ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Header */}
      <header style={{ backgroundColor: "#282c34", color: "white", padding: "1rem" }}>
        <h1>Mi App</h1>
      </header>

      {/* Main content */}
      <main style={{ flex: 1, padding: "1rem" }}>
        {children}
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: "#f0f0f0", padding: "1rem", textAlign: "center" }}>
        © 2026 Mi App
      </footer>
    </div>
  );
};

export default Layout;
