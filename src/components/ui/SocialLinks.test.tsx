import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import SocialLinks from "@/components/ui/SocialLinks";

describe("SocialLinks", () => {
  const defaultProps = {
    locale: "pt-BR" as const,
    downloadResumeLabel: "Baixar Currículo",
  };

  it("renders LinkedIn link", () => {
    render(<SocialLinks {...defaultProps} />);
    expect(screen.getByRole("link", { name: /linkedin/i })).toBeInTheDocument();
  });

  it("renders GitHub link", () => {
    render(<SocialLinks {...defaultProps} />);
    expect(screen.getByRole("link", { name: /github/i })).toBeInTheDocument();
  });

  it("renders resume download link", () => {
    render(<SocialLinks {...defaultProps} />);
    expect(screen.getByText("Baixar Currículo")).toBeInTheDocument();
  });

  it("has correct href for LinkedIn", () => {
    render(<SocialLinks {...defaultProps} />);
    const linkedin = screen.getByRole("link", { name: /linkedin/i });
    expect(linkedin).toHaveAttribute("href", "https://linkedin.com/in/leofariasrj25");
  });

  it("has correct href for GitHub", () => {
    render(<SocialLinks {...defaultProps} />);
    const github = screen.getByRole("link", { name: /github/i });
    expect(github).toHaveAttribute("href", "https://github.com/leofariasrj25");
  });

  it("has correct href for resume with locale", () => {
    render(<SocialLinks {...defaultProps} />);
    const resume = screen.getByText("Baixar Currículo").closest("a");
    expect(resume).toHaveAttribute("href", "/resumes/leonardo-farias-santos.pdf");
  });

  it("uses en locale for resume URL when locale is en", () => {
    render(<SocialLinks locale="en" downloadResumeLabel="Download Resume" />);
    const resume = screen.getByText("Download Resume").closest("a");
    expect(resume).toHaveAttribute("href", "/resumes/leonardo-farias-santos.en.pdf");
  });

  it("opens links in new tab", () => {
    render(<SocialLinks {...defaultProps} />);
    const links = screen.getAllByRole("link");
    links.forEach((link) => {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });
  });

  it("has aria-label for resume link in Portuguese", () => {
    render(<SocialLinks {...defaultProps} />);
    const resume = screen.getByText("Baixar Currículo").closest("a");
    expect(resume).toHaveAttribute("aria-label", "Baixar currículo, abre em nova aba");
  });

  it("has aria-label for resume link in English", () => {
    render(<SocialLinks locale="en" downloadResumeLabel="Download Resume" />);
    const resume = screen.getByText("Download Resume").closest("a");
    expect(resume).toHaveAttribute("aria-label", "Download resume, opens in new tab");
  });
});
