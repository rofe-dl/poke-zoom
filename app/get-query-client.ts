import { QueryClient } from "@tanstack/react-query";

let browserQueryClient: QueryClient | undefined = undefined;

export function getQueryClient() {
  if (typeof window === "undefined") {
    return new QueryClient();
  } else {
    if (!browserQueryClient) browserQueryClient = new QueryClient();

    return browserQueryClient;
  }
}
