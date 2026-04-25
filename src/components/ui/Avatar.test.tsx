import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Avatar from "@/components/ui/Avatar";

describe("Avatar", () => {
  it("renders without crashing", () => {
    render(<Avatar name="Leonardo Farias" />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("has correct alt text with name", () => {
    render(<Avatar name="Leonardo Farias" />);
    expect(screen.getByAltText("Leonardo Farias profile")).toBeInTheDocument();
  });

  it("has correct dimensions", () => {
    render(<Avatar name="Test User" />);
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("width", "112");
    expect(img).toHaveAttribute("height", "112");
  });

  it("loads image eagerly for LCP", () => {
    render(<Avatar name="Test" />);
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("loading", "eager");
    expect(img).toHaveAttribute("fetchpriority", "high");
  });

  it("has correct src", () => {
    render(<Avatar name="Test" />);
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", "/avatar.jpg");
  });
});
