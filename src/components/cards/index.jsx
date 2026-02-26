import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, CheckCircle, Lock, PlayCircle } from "lucide-react";
import { Card, Badge } from "../ui";

export function CourseCard({ course }) {
  const Icon = course.icon;
  const availableModules = course.modules.filter(
    (m) => m.status === "available"
  ).length;

  return (
    <Card hover className="overflow-hidden group">
      <Link to={`/disciplina/${course.id}`}>
        {/* Header colorido */}
        <div
          className={`h-2 bg-gradient-to-r ${course.colorClasses.gradient}`}
        />

        <div className="p-6">
          {/* Icon and Badge */}
          <div className="flex items-start justify-between mb-4">
            <div
              className={`w-14 h-14 rounded-2xl ${course.colorClasses.bgLight} ${course.colorClasses.text} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
            >
              <Icon className="w-7 h-7" />
            </div>
            <Badge color={course.color}>{siteConfig.semester}</Badge>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
            {course.title}
          </h3>

          {/* Description */}
          <p className="text-slate-600 text-sm mb-4 line-clamp-2">
            {course.description}
          </p>

          {/* Stats */}
          <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
            <span className="flex items-center gap-1">
              <PlayCircle className="w-4 h-4" />
              {course.modules.length} módulos
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              {availableModules} disponíveis
            </span>
          </div>

          {/* CTA */}
          <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:gap-3 gap-2 transition-all">
            Acessar disciplina
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </Card>
  );
}

// Importar siteConfig
import { siteConfig } from "../../config/site";

export function ModuleCard({ module, course, index }) {
  const isLocked = module.status === "locked";
  const isAvailable = module.status === "available";

  const statusConfig = {
    available: {
      badge: "Disponível",
      badgeColor: "emerald",
      icon: CheckCircle,
      iconColor: "text-emerald-500",
    },
    "coming-soon": {
      badge: "Em breve",
      badgeColor: "amber",
      icon: Clock,
      iconColor: "text-amber-500",
    },
    locked: {
      badge: "Bloqueado",
      badgeColor: "slate",
      icon: Lock,
      iconColor: "text-slate-400",
    },
  };

  const status = statusConfig[module.status];
  const StatusIcon = status.icon;

  const content = (
    <Card
      hover={isAvailable}
      className={`overflow-hidden ${isLocked ? "opacity-60" : ""}`}
    >
      <div className="p-6">
        <div className="flex items-start gap-4">
          {/* Number */}
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg shrink-0
            ${
              isAvailable
                ? `${course.colorClasses.bg} text-white`
                : "bg-slate-100 text-slate-400"
            }`}
          >
            {String(index + 1).padStart(2, "0")}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <Badge color={status.badgeColor}>{status.badge}</Badge>
              <span className="text-xs text-slate-400">{module.duration}</span>
            </div>
            <h4 className="font-bold text-slate-900 mb-1">{module.title}</h4>
            <p className="text-sm text-slate-500">{module.description}</p>
          </div>

          {/* Status Icon */}
          <StatusIcon className={`w-5 h-5 shrink-0 ${status.iconColor}`} />
        </div>
      </div>
    </Card>
  );

  if (isAvailable) {
    return (
      <Link to={`/disciplina/${course.id}/modulo/${module.slug}`}>
        {content}
      </Link>
    );
  }

  return content;
}

export function FeatureCard({ icon: IconComponent, title, description }) {
  return (
    <Card className="p-6 text-center">
      <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-4">
        <IconComponent className="w-7 h-7" />
      </div>
      <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600 text-sm">{description}</p>
    </Card>
  );
}
