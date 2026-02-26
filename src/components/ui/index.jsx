import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Botão primário com gradiente
export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus:ring-blue-500",
    secondary:
      "bg-white text-slate-800 border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 focus:ring-slate-500",
    ghost:
      "text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:ring-slate-500",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm gap-1.5",
    md: "px-6 py-3 text-base gap-2",
    lg: "px-8 py-4 text-lg gap-2.5",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link to={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

// Card genérico
export function Card({ children, className = "", hover = false, ...props }) {
  return (
    <div
      className={`bg-white rounded-2xl border border-slate-200 shadow-sm 
        ${
          hover
            ? "hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            : ""
        }
        ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

// Badge/Tag
export function Badge({ children, color = "slate", className = "" }) {
  const colors = {
    slate: "bg-slate-100 text-slate-700",
    blue: "bg-blue-100 text-blue-700",
    emerald: "bg-emerald-100 text-emerald-700",
    violet: "bg-violet-100 text-violet-700",
    amber: "bg-amber-100 text-amber-700",
    red: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${colors[color]} ${className}`}
    >
      {children}
    </span>
  );
}

// Seção com título
export function Section({ children, className = "" }) {
  return (
    <section className={`py-16 md:py-24 ${className}`}>{children}</section>
  );
}

// Container centralizado
export function Container({ children, className = "" }) {
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

// Título de seção
export function SectionTitle({ eyebrow, title, description, center = false }) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      {eyebrow && (
        <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-2">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
        {title}
      </h2>
      {description && (
        <p
          className={`text-lg text-slate-600 ${
            center ? "max-w-2xl mx-auto" : "max-w-3xl"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

// Link com seta
export function ArrowLink({ children, href, className = "" }) {
  return (
    <Link
      to={href}
      className={`inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 group ${className}`}
    >
      {children}
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </Link>
  );
}

// Skeleton loading
export function Skeleton({ className = "" }) {
  return <div className={`animate-pulse bg-slate-200 rounded ${className}`} />;
}

// Status indicator
export function StatusDot({ status = "available" }) {
  const colors = {
    available: "bg-emerald-500",
    "coming-soon": "bg-amber-500",
    locked: "bg-slate-300",
  };

  return <span className={`w-2 h-2 rounded-full ${colors[status]}`} />;
}
