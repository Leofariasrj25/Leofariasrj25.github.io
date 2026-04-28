import { describe, expect, it } from "vitest";

import type { RouteKey, SeoPageMeta } from "@/config/seo";
import { BASE_URL, generatePageUrl, getSeoForRoute, SEO, SEO_CONFIG } from "@/config/seo";
import type { Locale } from "@/types";

describe("seo config", () => {
  it("exports BASE_URL", () => {
    expect(BASE_URL).toBe("https://leofarias.me");
  });

  it("exports SEO_CONFIG with required pages", () => {
    expect(SEO_CONFIG.default).toBeDefined();
    expect(SEO_CONFIG.projects).toBeDefined();
    expect(SEO_CONFIG.blog).toBeDefined();
  });

  it("SEO_CONFIG.default has all required fields", () => {
    const page = SEO_CONFIG.default;
    expect(page.title).toBeDefined();
    expect(page.description).toBeDefined();
    expect(page.url).toBe(BASE_URL);
    expect(page.image).toContain(BASE_URL);
  });

  it("SEO_CONFIG.default has localized title and description", () => {
    const page = SEO_CONFIG.default;
    expect(page.title["pt-BR"]).toBeDefined();
    expect(page.title.en).toBeDefined();
    expect(page.description["pt-BR"]).toBeDefined();
    expect(page.description.en).toBeDefined();
  });

  it("SEO_CONFIG.projects has localized content", () => {
    const page = SEO_CONFIG.projects;
    expect(page.title["pt-BR"]).toContain("Projetos");
    expect(page.title.en).toContain("Projects");
  });

  it("SEO_CONFIG.blog has localized content", () => {
    const page = SEO_CONFIG.blog;
    expect(page.title["pt-BR"]).toContain("Blog");
    expect(page.title.en).toContain("Blog");
  });
});

describe("SEO object (future-proof)", () => {
  it("exports SEO object with route keys", () => {
    expect(SEO.home).toBeDefined();
    expect(SEO.projects).toBeDefined();
    expect(SEO.blog).toBeDefined();
  });

  it("each SEO entry has localized title and description", () => {
    const home = SEO.home;
    expect(home.title["pt-BR"]).toBeDefined();
    expect(home.title.en).toBeDefined();
    expect(home.description["pt-BR"]).toBeDefined();
    expect(home.description.en).toBeDefined();
  });

  it("each SEO entry has url and image", () => {
    const home = SEO.home;
    expect(home.url).toBe(BASE_URL);
    expect(home.image).toContain(BASE_URL);
  });

  it("SEO.home type is website", () => {
    expect(SEO.home.type).toBe("website");
  });

  it("SEO.projects type is website", () => {
    expect(SEO.projects.type).toBe("website");
  });

  it("SEO.blog type is website", () => {
    expect(SEO.blog.type).toBe("website");
  });
});

describe("getSeoForRoute helper", () => {
  it("returns correct SEO for home route in pt-BR", () => {
    const result = getSeoForRoute("home", "pt-BR");
    expect(result.title).toContain("Leonardo Farias");
    expect(result.description).toBeDefined();
    expect(result.url).toBe(BASE_URL);
    expect(result.image).toContain(BASE_URL);
    expect(result.type).toBe("website");
  });

  it("returns correct SEO for home route in en", () => {
    const result = getSeoForRoute("home", "en");
    expect(result.title).toContain("Leonardo Farias");
    expect(result.description).toBeDefined();
  });

  it("returns correct SEO for projects route", () => {
    const result = getSeoForRoute("projects", "pt-BR");
    expect(result.title).toContain("Projetos");
    expect(result.url).toContain("/projects");
  });

  it("returns correct SEO for blog route", () => {
    const result = getSeoForRoute("blog", "en");
    expect(result.title).toContain("Blog");
    expect(result.url).toContain("/blog");
  });
});

describe("generatePageUrl helper", () => {
  it("returns BASE_URL for root path", () => {
    expect(generatePageUrl("/")).toBe(BASE_URL);
  });

  it("returns BASE_URL for root path with pt-BR locale", () => {
    expect(generatePageUrl("/", "pt-BR")).toBe(BASE_URL);
  });

  it("appends locale param for non-pt-BR locales", () => {
    expect(generatePageUrl("/blog", "en")).toBe("https://leofarias.me/blog?lang=en");
  });

  it("handles paths without leading slash", () => {
    expect(generatePageUrl("projects")).toBe("https://leofarias.me/projects");
  });
});

describe("type exports", () => {
  it("Locale type accepts pt-BR and en", () => {
    const locales: Locale[] = ["pt-BR", "en"];
    expect(locales).toHaveLength(2);
  });

  it("RouteKey type accepts expected values", () => {
    const routes: RouteKey[] = ["home", "projects", "blog"];
    expect(routes).toHaveLength(3);
  });

  it("SeoPageMeta structure is correct", () => {
    const meta: SeoPageMeta = {
      title: { "pt-BR": "Test", en: "Test" },
      description: { "pt-BR": "Desc", en: "Desc" },
      url: "https://test.com",
      image: "https://test.com/img.png",
      type: "website",
    };
    expect(meta.title["pt-BR"]).toBe("Test");
    expect(meta.type).toBe("website");
  });
});
