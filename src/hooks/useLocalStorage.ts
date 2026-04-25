import { useCallback, useEffect, useState } from "react";

/**
 * Custom hook for persisting state in localStorage.
 *
 * Provides a consistent interface for reading/writing to localStorage
 * with proper SSR safety, error handling, and TypeScript typing.
 *
 * @template T - The type of value being stored
 * @param key - The localStorage key to use
 * @param defaultValue - The default value if nothing is stored or on error
 * @returns Tuple of [storedValue, setValue] similar to useState
 *
 * @example
 * const [theme, setTheme] = useLocalStorage('theme', 'dark');
 * setTheme('light'); // Writes to localStorage
 *
 * @example
 * const [enabled, setEnabled] = useLocalStorage('feature-flag', false);
 * setEnabled(prev => !prev); // Functional update
 */
export function useLocalStorage<T>(
  key: string,
  defaultValue: T
): [T, (value: T | ((prev: T) => T)) => void] {
  const isServer = typeof window === "undefined";

  const getInitialValue = useCallback((): T => {
    if (isServer) {
      return defaultValue;
    }

    try {
      const stored = localStorage.getItem(key);
      if (stored === null) {
        return defaultValue;
      }

      const parsed = JSON.parse(stored);
      return parsed as T;
    } catch {
      return defaultValue;
    }
  }, [key, defaultValue, isServer]);

  const [value, setValue] = useState<T>(getInitialValue);

  const handleSetValue = useCallback(
    (newValue: T | ((prev: T) => T)) => {
      setValue((prev) => {
        const resolvedValue =
          typeof newValue === "function" ? (newValue as (prev: T) => T)(prev) : newValue;

        if (!isServer) {
          try {
            localStorage.setItem(key, JSON.stringify(resolvedValue));
          } catch {
            // Silently fail - value still updates in state
          }
        }

        return resolvedValue;
      });
    },
    [key, isServer]
  );

  useEffect(() => {
    if (isServer) return;

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === key && e.newValue !== null) {
        try {
          const parsed = JSON.parse(e.newValue);
          setValue(parsed as T);
        } catch {
          // Ignore parse errors
        }
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [key, isServer]);

  return [value, handleSetValue];
}

export default useLocalStorage;
