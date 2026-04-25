import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";

import ParticlesToggle from "@/components/ui/ParticlesToggle";

describe("ParticlesToggle", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("renders the toggle button", () => {
    const mockToggle = vi.fn();
    render(<ParticlesToggle enabled={true} onToggle={mockToggle} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("calls onToggle when clicked", async () => {
    const user = userEvent.setup();
    const mockToggle = vi.fn();
    render(<ParticlesToggle enabled={true} onToggle={mockToggle} />);

    const button = screen.getByRole("button");
    await user.click(button);

    expect(mockToggle).toHaveBeenCalledTimes(1);
  });

  it("shows play icon when enabled", () => {
    const mockToggle = vi.fn();
    render(<ParticlesToggle enabled={true} onToggle={mockToggle} />);

    const button = screen.getByRole("button");
    // Should have aria-pressed true when enabled
    expect(button).toHaveAttribute("aria-pressed", "true");
  });

  it("shows crossed icon when disabled", () => {
    const mockToggle = vi.fn();
    render(<ParticlesToggle enabled={false} onToggle={mockToggle} />);

    const button = screen.getByRole("button");
    // Should have aria-pressed false when disabled
    expect(button).toHaveAttribute("aria-pressed", "false");
  });

  it("has correct aria-label when enabled", () => {
    const mockToggle = vi.fn();
    render(<ParticlesToggle enabled={true} onToggle={mockToggle} />);

    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("aria-label", "Turn background effect OFF");
  });

  it("has correct aria-label when disabled", () => {
    const mockToggle = vi.fn();
    render(<ParticlesToggle enabled={false} onToggle={mockToggle} />);

    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("aria-label", "Turn background effect ON");
  });

  it("shows tooltip on hover when enabled", async () => {
    const user = userEvent.setup();
    const mockToggle = vi.fn();
    render(<ParticlesToggle enabled={true} onToggle={mockToggle} />);

    const button = screen.getByRole("button");
    await user.hover(button);

    expect(screen.getByText("Turn effect OFF")).toBeInTheDocument();
  });

  it("shows tooltip on hover when disabled", async () => {
    const user = userEvent.setup();
    const mockToggle = vi.fn();
    render(<ParticlesToggle enabled={false} onToggle={mockToggle} />);

    const button = screen.getByRole("button");
    await user.hover(button);

    expect(screen.getByText("Turn effect ON")).toBeInTheDocument();
  });
});
