import {
  Client,
  fetchExchange,
  mapExchange,
  cacheExchange,
  SSRExchange,
} from "@urql/next";

import { URQLEndpoint } from ".";

import { toast } from "sonner";

let ssrExchange: SSRExchange;

const ssrExchageStore = {
  get: () => ssrExchange,
  set: (exchange: SSRExchange) => {
    ssrExchange = exchange;
    return ssrExchange;
  },
};

const makeClient = () => {
  const ssr = ssrExchageStore.get();
  if (!ssr) throw new Error("ssr not initialized");

  return new Client({
    url: URQLEndpoint(),
    fetchSubscriptions: true,
    exchanges: [
      cacheExchange,
      ssr,
      mapExchange({
        onError: (error) => {
          error.graphQLErrors.forEach((e) => {
            toast.warning("An error has occurred", {
              description:
                (e.extensions.originalError as { message: string })?.message ??
                e.message,
              dismissible: true,
              closeButton: true,
            });
          });
        },
      }),
      fetchExchange,
    ],
    requestPolicy: "cache-and-network",
    suspense: true,
  });
};

export { makeClient, ssrExchageStore };
