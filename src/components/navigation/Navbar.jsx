import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Map, Menu, X } from "lucide-react";
import { siteConfig } from "../../config/site";
import { Button } from "../ui";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Início", href: "/" },
    { name: "Disciplinas", href: "/#disciplinas" },
    { name: "Sobre", href: "/#sobre" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200/50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300 group-hover:scale-105">
              <Map className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-bold text-xl text-slate-900">
                {siteConfig.name}
              </span>
              <span className="hidden sm:block text-xs text-slate-500 -mt-1">
                {siteConfig.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-blue-600
                  ${
                    location.pathname === link.href
                      ? "text-blue-600"
                      : "text-slate-600"
                  }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button href="/disciplina/arquitetura-organizacao" size="sm">
              Acessar Plataforma
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-slate-700" />
            ) : (
              <Menu className="w-6 h-6 text-slate-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-slate-100">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 px-4">
                <Button
                  href="/disciplina/arquitetura-organizacao"
                  className="w-full"
                >
                  Acessar Plataforma
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
