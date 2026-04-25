import "@testing-library/jest-dom/vitest";

import { beforeEach, vi } from "vitest";

beforeEach(() => {
  Object.defineProperty(window, "localStorage", {
    value: {
      getItem: vi.fn(() => null),
      setItem: vi.fn(() => {}),
      removeItem: vi.fn(() => {}),
      clear: vi.fn(() => {}),
    },
    writable: true,
  });

  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });

  Object.defineProperty(document, "documentElement", {
    value: {
      classList: {
        contains: vi.fn(() => false),
        add: vi.fn(() => {}),
        remove: vi.fn(() => {}),
        toggle: vi.fn(() => {}),
      },
      lang: "",
      setAttribute: vi.fn(() => {}),
      getAttribute: vi.fn(() => null),
      removeAttribute: vi.fn(() => {}),
    },
    writable: true,
  });

  Object.defineProperty(navigator, "languages", {
    value: ["pt-BR", "pt"],
    writable: true,
  });
  Object.defineProperty(navigator, "language", {
    value: "pt-BR",
    writable: true,
  });
});
