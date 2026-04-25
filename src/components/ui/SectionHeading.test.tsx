import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import SectionHeading from "@/components/ui/SectionHeading";

describe("SectionHeading", () => {
  it("renders the title", () => {
    render(<SectionHeading title="My Title" />);
    expect(screen.getByText("My Title")).toBeInTheDocument();
  });

  it("renders as h2 element", () => {
    render(<SectionHeading title="Test" />);
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
  });

  it("applies correct styling classes", () => {
    render(<SectionHeading title="Test" />);
    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toHaveClass("text-xs");
    expect(heading).toHaveClass("font-bold");
    expect(heading).toHaveClass("uppercase");
    expect(heading).toHaveClass("tracking-[0.2em]");
  });

  it("applies border styling", () => {
    render(<SectionHeading title="Test" />);
    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toHaveClass("border-b");
    expect(heading).toHaveClass("border-neutral-200");
  });
});
