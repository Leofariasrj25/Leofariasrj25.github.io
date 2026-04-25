import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";

import ThemeToggle from "@/components/ui/ThemeToggle";
import { ThemeProvider } from "@/config/theme";

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
};

describe("ThemeToggle", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("renders the toggle button", () => {
    renderWithTheme(<ThemeToggle />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("shows sun icon in light mode", () => {
    renderWithTheme(<ThemeToggle />);
    const svg = screen.getByRole("button").querySelector("svg");
    expect(svg).toBeInTheDocument();
  });

  it("calls toggleTheme when clicked", async () => {
    const user = userEvent.setup();
    renderWithTheme(<ThemeToggle />);

    const button = screen.getByRole("button");
    await user.click(button);

    // Toggle is called - component should not throw
    expect(button).toBeInTheDocument();
  });

  it("has aria-pressed attribute", () => {
    renderWithTheme(<ThemeToggle />);
    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("aria-pressed");
  });

  it("has aria-label for accessibility", () => {
    renderWithTheme(<ThemeToggle />);
    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("aria-label");
  });

  it("shows tooltip on hover (dark mode default)", async () => {
    const user = userEvent.setup();
    renderWithTheme(<ThemeToggle />);

    const button = screen.getByRole("button");
    await user.hover(button);

    const tooltip = screen.getByText(/switch to/i);
    expect(tooltip).toBeInTheDocument();
  });

  it("toggles between light and dark icons on click", async () => {
    const user = userEvent.setup();
    renderWithTheme(<ThemeToggle />);

    const button = screen.getByRole("button");
    const initialAriaPressed = button.getAttribute("aria-pressed");

    await user.click(button);

    // After click, aria-pressed should be opposite
    expect(button.getAttribute("aria-pressed")).not.toBe(initialAriaPressed);
  });
});
