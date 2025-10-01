import React from "react";
import { Navbar } from "./Navbar";

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow p-6 text-center mb-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-3">ConectaHC</h1>
      <Navbar />
    </header>
  );
};