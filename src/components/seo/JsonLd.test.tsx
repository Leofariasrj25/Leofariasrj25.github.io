import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { JsonLd } from "./JsonLd";

describe("JsonLd", () => {
  it("renders script tag with JSON-LD", () => {
    const { container } = render(
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Person", name: "Test" }} />
    );

    const script = container.querySelector('script[type="application/ld+json"]');
    expect(script).toBeInTheDocument();
  });

  it("contains correct structured data", () => {
    const { container } = render(
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Person", name: "Test" }} />
    );

    const script = container.querySelector('script[type="application/ld+json"]');
    const content = script?.textContent;
    expect(content).toContain('"@context":"https://schema.org"');
    expect(content).toContain('"@type":"Person"');
    expect(content).toContain('"name":"Test"');
  });

  it("renders BlogPosting schema", () => {
    const blogPostData = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: "Test Post",
      datePublished: "2026-01-01",
      author: [{ "@type": "Person", name: "Leonardo Farias" }],
    };

    const { container } = render(<JsonLd data={blogPostData} />);

    const script = container.querySelector('script[type="application/ld+json"]');
    const content = script?.textContent;
    expect(content).toContain("BlogPosting");
    expect(content).toContain("Test Post");
  });

  it("renders BreadcrumbList schema", () => {
    const breadcrumbData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://leofarias.me" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://leofarias.me/blog" },
      ],
    };

    const { container } = render(<JsonLd data={breadcrumbData} />);

    const script = container.querySelector('script[type="application/ld+json"]');
    expect(script).toBeInTheDocument();
  });

  it("renders script tag but not visible content", () => {
    const { container } = render(
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Test" }} />
    );

    expect(container.querySelector('script[type="application/ld+json"]')).toBeInTheDocument();
  });
});
