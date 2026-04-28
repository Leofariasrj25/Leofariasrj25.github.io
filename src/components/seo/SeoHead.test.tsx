import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { I18nProvider } from "@/i18n";

import { SeoHead } from "./SeoHead";

describe("SeoHead", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    document.title = "Test Title";
    document.querySelectorAll('meta[name="description"]').forEach((el) => el.remove());
    document.querySelectorAll('meta[property^="og:"]').forEach((el) => el.remove());
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    if (existingCanonical) existingCanonical.remove();
  });

  it("renders without crashing", () => {
    render(
      <I18nProvider>
        <SeoHead routeKey="home" />
      </I18nProvider>
    );

    expect(document.title).toContain("Leonardo Farias");
  });

  it("applies home route SEO", () => {
    render(
      <I18nProvider>
        <SeoHead routeKey="home" />
      </I18nProvider>
    );

    expect(document.title).toContain("Leonardo Farias");
  });

  it("applies projects route SEO", () => {
    render(
      <I18nProvider>
        <SeoHead routeKey="projects" />
      </I18nProvider>
    );

    expect(document.title).toContain("Projetos");
  });

  it("applies blog route SEO", () => {
    render(
      <I18nProvider>
        <SeoHead routeKey="blog" />
      </I18nProvider>
    );

    expect(document.title).toContain("Blog");
  });

  it("accepts title override", () => {
    render(
      <I18nProvider>
        <SeoHead
          routeKey="home"
          titleOverride={{ "pt-BR": "Override Title", en: "Override Title" }}
        />
      </I18nProvider>
    );

    expect(document.title).toBe("Override Title");
  });

  it("accepts description override", () => {
    render(
      <I18nProvider>
        <SeoHead
          routeKey="home"
          descriptionOverride={{ "pt-BR": "Custom Description", en: "Custom Description" }}
        />
      </I18nProvider>
    );

    const meta = document.querySelector('meta[name="description"]');
    expect(meta?.getAttribute("content")).toBe("Custom Description");
  });

  it("renders null (no visible DOM)", () => {
    const { container } = render(
      <I18nProvider>
        <SeoHead routeKey="home" />
      </I18nProvider>
    );

    expect(container.firstChild).toBeNull();
  });
});
