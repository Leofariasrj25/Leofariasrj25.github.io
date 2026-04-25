import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import AboutSection from "@/components/ui/AboutSection";

describe("AboutSection", () => {
  it("renders title", () => {
    render(<AboutSection title="About Me" paragraphs={["Text 1", "Text 2"]} />);
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("About Me");
  });

  it("renders all paragraphs", () => {
    const paragraphs = ["First paragraph", "Second paragraph", "Third paragraph"];
    render(<AboutSection title="About" paragraphs={paragraphs} />);

    paragraphs.forEach((p) => {
      expect(screen.getByText(p)).toBeInTheDocument();
    });
  });

  it("has heading element", () => {
    render(<AboutSection title="Test" paragraphs={["Test"]} />);
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
  });

  it("handles single paragraph", () => {
    render(<AboutSection title="About" paragraphs={["Single paragraph"]} />);
    expect(screen.getByText("Single paragraph")).toBeInTheDocument();
  });

  it("handles empty paragraphs array", () => {
    render(<AboutSection title="About" paragraphs={[]} />);
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
  });
});
