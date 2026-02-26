import React from "react";
import { Link } from "react-router-dom";
import { Map, AlertTriangle, Home, ArrowLeft } from "lucide-react";
import { Button, Container } from "../components/ui";
import { siteConfig } from "../config/site";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center">
      <Container>
        <div className="text-center">
          {/* Logo */}
          <Link to="/" className="inline-flex items-center gap-3 mb-8 group">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
              <Map className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-2xl text-slate-900">
              {siteConfig.name}
            </span>
          </Link>

          {/* 404 */}
          <div className="mb-8">
            <h1 className="text-8xl font-extrabold text-slate-200 mb-4">404</h1>
            <div className="flex items-center justify-center gap-2 text-amber-600 mb-4">
              <AlertTriangle className="w-5 h-5" />
              <span className="font-medium">Página não encontrada</span>
            </div>
            <p className="text-slate-600 max-w-md mx-auto">
              A página que você está procurando não existe ou foi movida.
              Verifique o endereço ou volte para a página inicial.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/" size="lg">
              <Home className="w-5 h-5" />
              Ir para o Início
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-5 h-5" />
              Voltar
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
