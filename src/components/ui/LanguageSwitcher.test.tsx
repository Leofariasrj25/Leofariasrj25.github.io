import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";

import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { I18nProvider } from "@/i18n";

const renderWithI18n = (ui: React.ReactElement) => {
  return render(<I18nProvider>{ui}</I18nProvider>);
};

describe("LanguageSwitcher", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("renders the button", () => {
    renderWithI18n(<LanguageSwitcher />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("shows current locale label", () => {
    renderWithI18n(<LanguageSwitcher />);
    expect(screen.getByText(/PT/i)).toBeInTheDocument();
  });

  it("opens dropdown when clicked", async () => {
    const user = userEvent.setup();
    renderWithI18n(<LanguageSwitcher />);

    const button = screen.getByRole("button");
    await user.click(button);

    expect(screen.getByRole("listbox")).toBeInTheDocument();
  });

  it("shows all available locales in dropdown", async () => {
    const user = userEvent.setup();
    renderWithI18n(<LanguageSwitcher />);

    const button = screen.getByRole("button");
    await user.click(button);

    const listbox = screen.getByRole("listbox");
    expect(listbox).toHaveTextContent("PT");
    expect(listbox).toHaveTextContent("EN");
  });

  it("closes dropdown when clicking outside", async () => {
    const user = userEvent.setup();
    renderWithI18n(<LanguageSwitcher />);

    const button = screen.getByRole("button");
    await user.click(button);

    expect(screen.getByRole("listbox")).toBeInTheDocument();

    await user.click(document.body);

    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });

  it("changes locale when option is selected", async () => {
    const user = userEvent.setup();
    renderWithI18n(<LanguageSwitcher />);

    const button = screen.getByRole("button");
    await user.click(button);

    const enOption = screen.getByText("EN");
    await user.click(enOption);

    // Should show EN after selection
    expect(screen.getByRole("button")).toHaveTextContent(/EN/);
  });

  it("has correct accessibility attributes when open", async () => {
    const user = userEvent.setup();
    renderWithI18n(<LanguageSwitcher />);

    const button = screen.getByRole("button");
    await user.click(button);

    expect(button).toHaveAttribute("aria-expanded", "true");
    expect(button).toHaveAttribute("aria-haspopup", "listbox");
  });

  it("highlights active locale in dropdown", async () => {
    const user = userEvent.setup();
    renderWithI18n(<LanguageSwitcher />);

    const button = screen.getByRole("button");
    await user.click(button);

    const options = screen.getAllByRole("option");
    const activeOption = options.find((opt) => opt.getAttribute("aria-selected") === "true");

    expect(activeOption).toBeDefined();
  });

  it("closes dropdown after selection", async () => {
    const user = userEvent.setup();
    renderWithI18n(<LanguageSwitcher />);

    const button = screen.getByRole("button");
    await user.click(button);

    const enOption = screen.getByText("EN");
    await user.click(enOption);

    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });
});
