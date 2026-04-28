import { render } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import type { RouteKey } from "@/config/seo";
import { I18nProvider } from "@/i18n";

import { useSeo } from "./useSeo";

const TestComponent = ({
  routeKey,
  overrides,
}: {
  routeKey: RouteKey;
  overrides?: Parameters<typeof useSeo>[1];
}) => {
  useSeo(routeKey, overrides);
  return <div data-testid="seo-test">SEO Applied</div>;
};

describe("useSeo", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    document.title = "Test Title";
    document.querySelectorAll('meta[name="description"]').forEach((el) => el.remove());
    document.querySelectorAll('meta[property^="og:"]').forEach((el) => el.remove());
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    if (existingCanonical) existingCanonical.remove();
  });

  it("updates document title with home route SEO", () => {
    render(
      <I18nProvider>
        <TestComponent routeKey="home" />
      </I18nProvider>
    );

    expect(document.title).toContain("Leonardo Farias");
  });

  it("updates document title with override", () => {
    render(
      <I18nProvider>
        <TestComponent
          routeKey="home"
          overrides={{
            title: { "pt-BR": "Custom Title", en: "Custom Title" },
          }}
        />
      </I18nProvider>
    );

    expect(document.title).toBe("Custom Title");
  });

  it("updates meta description tag", () => {
    render(
      <I18nProvider>
        <TestComponent routeKey="home" />
      </I18nProvider>
    );

    const meta = document.querySelector('meta[name="description"]');
    expect(meta?.getAttribute("content")).toBeDefined();
  });

  it("updates Open Graph title", () => {
    render(
      <I18nProvider>
        <TestComponent routeKey="home" />
      </I18nProvider>
    );

    const ogTitle = document.querySelector('meta[property="og:title"]');
    expect(ogTitle?.getAttribute("content")).toContain("Leonardo Farias");
  });

  it("updates Open Graph description", () => {
    render(
      <I18nProvider>
        <TestComponent routeKey="home" />
      </I18nProvider>
    );

    const ogDesc = document.querySelector('meta[property="og:description"]');
    expect(ogDesc?.getAttribute("content")).toBeDefined();
  });

  it("updates or creates canonical URL for projects route", () => {
    render(
      <I18nProvider>
        <TestComponent routeKey="projects" />
      </I18nProvider>
    );

    const canonical = document.querySelector('link[rel="canonical"]');
    expect(canonical?.getAttribute("href")).toContain("/projects");
  });

  it("respects description override", () => {
    render(
      <I18nProvider>
        <TestComponent
          routeKey="home"
          overrides={{
            description: { "pt-BR": "Custom description", en: "Custom description" },
          }}
        />
      </I18nProvider>
    );

    const meta = document.querySelector('meta[name="description"]');
    expect(meta?.getAttribute("content")).toBe("Custom description");
  });

  it("works with blog route", () => {
    render(
      <I18nProvider>
        <TestComponent routeKey="blog" />
      </I18nProvider>
    );

    expect(document.title).toContain("Blog");
  });
});

describe("useSeo edge cases", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    document.title = "Test Title";
    document.querySelectorAll('meta[name="description"]').forEach((el) => el.remove());
  });

  it("handles missing meta description tag gracefully", () => {
    document.querySelectorAll('meta[name="description"]').forEach((el) => el.remove());

    expect(() => {
      render(
        <I18nProvider>
          <TestComponent routeKey="home" />
        </I18nProvider>
      );
    }).not.toThrow();
  });

  it("does not throw with valid home route", () => {
    expect(() => {
      render(
        <I18nProvider>
          <TestComponent routeKey="home" />
        </I18nProvider>
      );
    }).not.toThrow();
  });
});
