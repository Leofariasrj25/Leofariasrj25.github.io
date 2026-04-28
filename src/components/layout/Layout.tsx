import React from "react";

import { I18nProvider } from "@/i18n";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <I18nProvider>{children}</I18nProvider>;
};

export default Layout;
