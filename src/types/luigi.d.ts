import type { LuigiConfig } from "@luigi-project/core";

declare global {
  interface Window {
    Luigi: LuigiConfig;
  }
}

export {};