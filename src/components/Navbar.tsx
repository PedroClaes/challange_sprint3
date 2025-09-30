import React from "react";
import { useNavigate } from "react-router-dom";

export const Navbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow mb-4">
      <ul className="flex flex-col sm:flex-row justify-center items-center gap-4 p-3">
        {[
          { label: "Início", path: "/" },
          { label: "Integrantes", path: "/integrantes" },
          { label: "FAQ", path: "/faq" },
          { label: "Contato", path: "/contato" },
          { label: "Ajuda", path: "/ajuda" },
        ].map(({ label, path }) => (
          <li key={path}>
            <button
              onClick={() => navigate(path)}
              className="text-blue-600 hover:underline transition-colors duration-200 px-3 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label={`Navegar para ${label}`}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};