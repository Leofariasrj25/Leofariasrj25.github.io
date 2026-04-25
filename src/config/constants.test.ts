import { describe, expect, it } from "vitest";

import { DEFAULT_LOCALE, SUPPORTED_LOCALES, TRANSLATIONS } from "@/config/constants";

describe("constants", () => {
  it("exports default locale", () => {
    expect(DEFAULT_LOCALE).toBe("pt-BR");
  });

  it("exports supported locales", () => {
    expect(SUPPORTED_LOCALES.length).toBeGreaterThanOrEqual(2);
    expect(SUPPORTED_LOCALES[0]?.code).toBe("pt-BR");
  });

  it("exports translations for all locales", () => {
    expect(TRANSLATIONS["pt-BR"]).toBeDefined();
    expect(TRANSLATIONS["en"]).toBeDefined();
  });

  it("exports hero for pt-BR", () => {
    const pt = TRANSLATIONS["pt-BR"];
    expect(pt.hero.name).toBeDefined();
    expect(pt.hero.role).toBeDefined();
    expect(pt.hero.location).toBeDefined();
    expect(pt.hero.email).toBeDefined();
    expect(pt.hero.about).toHaveLength(3);
  });

  it("exports seo for all locales", () => {
    expect(TRANSLATIONS["pt-BR"]?.hero?.seo).toBeDefined();
    expect(TRANSLATIONS["en"]?.hero?.seo).toBeDefined();
  });

  it("exports sections for all locales", () => {
    const pt = TRANSLATIONS["pt-BR"];
    expect(pt.sections.about).toBeDefined();
    expect(pt.sections.projects).toBeDefined();
    expect(pt.sections.experience).toBeDefined();
    expect(pt.sections.stack).toBeDefined();
    expect(pt.sections.education).toBeDefined();
    expect(pt.sections.languages).toBeDefined();
  });

  it("exports projects for locales", () => {
    const pt = TRANSLATIONS["pt-BR"];
    expect(pt.projects.length).toBeGreaterThanOrEqual(1);
    expect(pt.projects[0]?.title).toBeDefined();
  });

  it("exports experiences for locales", () => {
    const pt = TRANSLATIONS["pt-BR"];
    expect(pt.experiences.length).toBeGreaterThanOrEqual(1);
    expect(pt.experiences[0]?.company).toBeDefined();
  });

  it("exports skills for all locales", () => {
    const pt = TRANSLATIONS["pt-BR"];
    const en = TRANSLATIONS["en"];
    expect(pt.skills).toBeDefined();
    expect(pt.skills.length).toBeGreaterThan(0);
    expect(en.skills).toBeDefined();
  });

  it("exports education for all locales", () => {
    const pt = TRANSLATIONS["pt-BR"];
    expect(pt.education.institution).toBeDefined();
    expect(pt.education.degree).toBeDefined();
  });

  it("exports footer for all locales", () => {
    const pt = TRANSLATIONS["pt-BR"];
    expect(pt.footer.copyright).toContain("2026");
    expect(pt.footer.role).toBeDefined();
  });
});
