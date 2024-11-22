import { signal, effect } from "@maverick-js/signals";
import { useSyncExternalStore } from "react";
import { useCallback } from "react";

export const $count = signal(0);

export const increment = () => {
  $count.set($count() + 1);
};

export const useSignalValue = (signal) => {
  const subscribe = useCallback((callback) => effect(() => callback(signal())), []);
  return useSyncExternalStore(subscribe, signal, signal);
};
