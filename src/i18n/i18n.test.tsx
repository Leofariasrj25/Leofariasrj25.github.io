import { act, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { I18nProvider, useI18n } from "@/i18n";

describe("I18nProvider", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("renders with default locale", async () => {
    const TestComponent = () => {
      const { locale } = useI18n();
      return <div data-testid="locale">{locale}</div>;
    };

    render(
      <I18nProvider>
        <TestComponent />
      </I18nProvider>
    );

    expect(screen.getByTestId("locale")).toBeInTheDocument();
  });

  it("allows changing locale", async () => {
    const TestComponent = () => {
      const { locale, setLocale } = useI18n();
      return (
        <button onClick={() => setLocale("en")} data-testid="set-locale">
          {locale}
        </button>
      );
    };

    render(
      <I18nProvider>
        <TestComponent />
      </I18nProvider>
    );

    const button = screen.getByTestId("set-locale");
    const initialLocale = button.textContent;

    await act(async () => {
      button.click();
    });

    expect(button.textContent).not.toBe(initialLocale);
    expect(button.textContent).toBe("en");
  });

  it("provides translations object", () => {
    const TestComponent = () => {
      const { t } = useI18n();
      return (
        <div>
          <span data-testid="hero-name">{t.hero.name}</span>
          <span data-testid="sections-about">{t.sections.about}</span>
        </div>
      );
    };

    render(
      <I18nProvider>
        <TestComponent />
      </I18nProvider>
    );

    expect(screen.getByTestId("hero-name")).toBeInTheDocument();
    expect(screen.getByTestId("sections-about")).toBeInTheDocument();
  });
});
