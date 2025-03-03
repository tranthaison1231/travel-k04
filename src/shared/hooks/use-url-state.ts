import { useMemo } from "react";
import { useSearchParams } from "react-router";

export const useUrlState = <T extends Record<string, any>>(defaultValue: T) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const state = useMemo(() => {
    const searchParamsEntries = Array.from(searchParams.entries());
    const state = Object.fromEntries(searchParamsEntries) as T;

    return { ...defaultValue, ...state };
  }, [searchParams]);

  const setState = (updater: Partial<T> | ((old: T) => Partial<T>)) => {
    const oldState = state;
    const newState =
      typeof updater === "function" ? updater(oldState) : updater;

    const searchParamsEntries = Object.entries(newState);
    const newSearchParams = new URLSearchParams(searchParamsEntries);

    setSearchParams(newSearchParams);
  };

  return [state, setState] as const;
};
