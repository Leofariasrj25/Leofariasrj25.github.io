import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import ContactInfo from "@/components/ui/ContactInfo";

describe("ContactInfo", () => {
  const defaultProps = {
    nationality: "Brazil",
    location: "Rio de Janeiro, Brazil",
    phone: "+55 (21) 98253-6300",
    email: "test@example.com",
  };

  it("renders nationality", () => {
    render(<ContactInfo {...defaultProps} />);
    expect(screen.getByText("Brazil")).toBeInTheDocument();
  });

  it("renders location", () => {
    render(<ContactInfo {...defaultProps} />);
    expect(screen.getByText("Rio de Janeiro, Brazil")).toBeInTheDocument();
  });

  it("renders phone with link", () => {
    render(<ContactInfo {...defaultProps} />);
    const phoneLink = screen.getByRole("link", { name: defaultProps.phone });
    expect(phoneLink).toHaveAttribute("href", `tel:${defaultProps.phone.replace(/[^\d+]/g, "")}`);
  });

  it("renders email with mailto link", () => {
    render(<ContactInfo {...defaultProps} />);
    const emailLink = screen.getByRole("link", { name: defaultProps.email });
    expect(emailLink).toHaveAttribute("href", `mailto:${defaultProps.email}`);
  });

  it("renders all required fields", () => {
    render(<ContactInfo {...defaultProps} />);

    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(2); // phone and email

    expect(screen.getByText("Brazil")).toBeInTheDocument();
    expect(screen.getByText("Rio de Janeiro, Brazil")).toBeInTheDocument();
  });

  it("renders separators between fields", () => {
    render(<ContactInfo {...defaultProps} />);
    const separators = screen.getAllByText("/");
    expect(separators).toHaveLength(3); // Between each field
  });
});
