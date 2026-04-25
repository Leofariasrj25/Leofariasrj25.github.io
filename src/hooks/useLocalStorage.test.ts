import { act, renderHook } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { useLocalStorage } from "./useLocalStorage";

const TEST_KEY = "test-key";
const DEFAULT_VALUE = "default-value";

describe("useLocalStorage", () => {
  beforeEach(() => {
    localStorage.clear();
    vi.restoreAllMocks();
  });

  afterEach(() => {
    localStorage.clear();
    vi.restoreAllMocks();
  });

  describe("initialization", () => {
    it("returns default value when no stored value exists", () => {
      const { result } = renderHook(() => useLocalStorage(TEST_KEY, DEFAULT_VALUE));

      expect(result.current[0]).toBe(DEFAULT_VALUE);
    });

    it("returns default value when JSON is corrupted", () => {
      localStorage.setItem(TEST_KEY, "not valid json");

      const { result } = renderHook(() => useLocalStorage(TEST_KEY, DEFAULT_VALUE));

      expect(result.current[0]).toBe(DEFAULT_VALUE);
    });

    it("returns default value when localStorage throws on read", () => {
      vi.spyOn(localStorage, "getItem").mockImplementation(() => {
        throw new Error("Storage unavailable");
      });

      const { result } = renderHook(() => useLocalStorage(TEST_KEY, DEFAULT_VALUE));

      expect(result.current[0]).toBe(DEFAULT_VALUE);
    });
  });

  describe("setting value", () => {
    it("updates state when setting a new value", () => {
      const { result } = renderHook(() => useLocalStorage(TEST_KEY, DEFAULT_VALUE));

      act(() => {
        result.current[1]("new-value");
      });

      expect(result.current[0]).toBe("new-value");
    });

    it("handles functional updates", () => {
      const { result } = renderHook(() => useLocalStorage(TEST_KEY, 10));

      act(() => {
        result.current[1]((prev) => prev + 5);
      });

      expect(result.current[0]).toBe(15);

      act(() => {
        result.current[1]((prev) => prev * 2);
      });

      expect(result.current[0]).toBe(30);
    });

    it("does not throw when localStorage.setItem fails", () => {
      vi.spyOn(localStorage, "setItem").mockImplementation(() => {
        throw new Error("Quota exceeded");
      });

      const { result } = renderHook(() => useLocalStorage(TEST_KEY, DEFAULT_VALUE));

      expect(() => {
        act(() => {
          result.current[1]("new-value");
        });
      }).not.toThrow();

      expect(result.current[0]).toBe("new-value");
    });

    it("does not throw when localStorage.getItem fails on initial read", () => {
      vi.spyOn(localStorage, "getItem").mockImplementation(() => {
        throw new Error("Storage unavailable");
      });

      const { result } = renderHook(() => useLocalStorage(TEST_KEY, DEFAULT_VALUE));

      expect(result.current[0]).toBe(DEFAULT_VALUE);

      act(() => {
        result.current[1]("new-value");
      });

      expect(result.current[0]).toBe("new-value");
    });
  });

  describe("type safety", () => {
    it("works with string type", () => {
      const { result } = renderHook(() => useLocalStorage<string>("string-key", "default"));

      act(() => {
        result.current[1]("new-string");
      });

      expect(typeof result.current[0]).toBe("string");
    });

    it("works with boolean type", () => {
      const { result } = renderHook(() => useLocalStorage<boolean>("bool-key", false));

      act(() => {
        result.current[1](true);
      });

      expect(typeof result.current[0]).toBe("boolean");
    });

    it("works with number type", () => {
      const { result } = renderHook(() => useLocalStorage<number>("number-key", 0));

      act(() => {
        result.current[1](100);
      });

      expect(typeof result.current[0]).toBe("number");
    });

    it("works with object type", () => {
      const { result } = renderHook(() =>
        useLocalStorage<{ name: string; age: number }>("object-key", {
          name: "default",
          age: 0,
        })
      );

      act(() => {
        result.current[1]({ name: "test", age: 25 });
      });

      expect(result.current[0]).toEqual({ name: "test", age: 25 });
    });
  });

  describe("key isolation", () => {
    it("uses separate state for different keys", () => {
      const { result: result1 } = renderHook(() => useLocalStorage("key-1", "value-1"));
      const { result: result2 } = renderHook(() => useLocalStorage("key-2", "value-2"));

      expect(result1.current[0]).toBe("value-1");
      expect(result2.current[0]).toBe("value-2");

      act(() => {
        result1.current[1]("updated-1");
      });

      expect(result1.current[0]).toBe("updated-1");
      expect(result2.current[0]).toBe("value-2");
    });
  });

  describe("default value types", () => {
    it("handles string default", () => {
      const { result } = renderHook(() => useLocalStorage("key", "default-string"));

      expect(result.current[0]).toBe("default-string");
    });

    it("handles boolean default", () => {
      const { result } = renderHook(() => useLocalStorage("key", true));

      expect(result.current[0]).toBe(true);
    });

    it("handles number default", () => {
      const { result } = renderHook(() => useLocalStorage("key", 0));

      expect(result.current[0]).toBe(0);
    });

    it("handles object default", () => {
      const { result } = renderHook(() => useLocalStorage("key", { nested: { value: true } }));

      expect(result.current[0]).toEqual({ nested: { value: true } });
    });

    it("handles array default", () => {
      const { result } = renderHook(() => useLocalStorage("key", [1, 2, 3]));

      expect(result.current[0]).toEqual([1, 2, 3]);
    });

    it("handles null default", () => {
      const { result } = renderHook(() => useLocalStorage<string | null>("key", null));

      expect(result.current[0]).toBeNull();
    });
  });

  describe("multiple instances", () => {
    it("maintains separate state for different keys", () => {
      const { result: result1 } = renderHook(() => useLocalStorage("key-1", "value-1"));
      const { result: result2 } = renderHook(() => useLocalStorage("key-2", "value-2"));

      expect(result1.current[0]).toBe("value-1");
      expect(result2.current[0]).toBe("value-2");

      act(() => {
        result1.current[1]("updated-1");
      });

      expect(result1.current[0]).toBe("updated-1");
      expect(result2.current[0]).toBe("value-2");
    });
  });
});
