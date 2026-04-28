import React from "react";
import { Link, useLocation } from "react-router-dom";

import { useI18n } from "@/i18n";

const Navigation: React.FC = () => {
  const { t } = useI18n();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinkClass = (path: string) =>
    `px-3 py-2 rounded-lg transition-colors ${
      isActive(path)
        ? "text-orange-600 dark:text-orange-400"
        : "text-neutral-600 dark:text-neutral-300 hover:text-orange-600 dark:hover:text-orange-400"
    }`;

  return (
    <nav className="flex items-center gap-1 text-sm font-bold">
      <Link to="/" className={navLinkClass("/")}>
        {t.nav.home}
      </Link>
      <span className="text-neutral-300 dark:text-neutral-600">/</span>
      <Link to="/projetos" className={navLinkClass("/projetos")}>
        {t.nav.projects}
      </Link>
      <span className="text-neutral-300 dark:text-neutral-600">/</span>
      <Link to="/blog" className={navLinkClass("/blog")}>
        Blog
      </Link>
    </nav>
  );
};

export default Navigation;
