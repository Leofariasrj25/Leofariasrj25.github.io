import { useEffect } from "react";

import type { RouteKey } from "@/config/seo";
import { SEO } from "@/config/seo";
import { useI18n } from "@/i18n";

interface UseSeoOptions {
  title?: Record<string, string>;
  description?: Record<string, string>;
  image?: string;
  url?: string;
  type?: "website" | "article";
}

export const useSeo = (routeKey: RouteKey, overrides?: UseSeoOptions): void => {
  const { locale } = useI18n();

  useEffect(() => {
    const page = SEO[routeKey];
    if (!page) return;

    const seo = {
      title: overrides?.title?.[locale] || page.title[locale],
      description: overrides?.description?.[locale] || page.description[locale],
      url: overrides?.url || page.url,
      image: overrides?.image || page.image,
      type: overrides?.type || page.type || "website",
    };

    document.title = seo.title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", seo.description);
    } else {
      const newMeta = document.createElement("meta");
      newMeta.name = "description";
      newMeta.content = seo.description;
      document.head.appendChild(newMeta);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", seo.title);
    } else {
      const newOgTitle = document.createElement("meta");
      newOgTitle.setAttribute("property", "og:title");
      newOgTitle.content = seo.title;
      document.head.appendChild(newOgTitle);
    }

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute("content", seo.description);
    } else {
      const newOgDesc = document.createElement("meta");
      newOgDesc.setAttribute("property", "og:description");
      newOgDesc.content = seo.description;
      document.head.appendChild(newOgDesc);
    }

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute("content", seo.image);
    }

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", seo.url);
    } else {
      const newCanonical = document.createElement("link");
      newCanonical.rel = "canonical";
      newCanonical.href = seo.url;
      document.head.appendChild(newCanonical);
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute("content", seo.url);
    } else {
      const newOgUrl = document.createElement("meta");
      newOgUrl.setAttribute("property", "og:url");
      newOgUrl.content = seo.url;
      document.head.appendChild(newOgUrl);
    }
  }, [routeKey, locale, overrides]);
};
