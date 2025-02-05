"use client";
import { ssrExchange, UrqlProvider } from "@urql/next";
import { FC, ReactNode, useMemo } from "react";
import { makeClient, ssrExchageStore } from "~/config/urql";

const Urql: FC<{ children: ReactNode }> = ({ children }) => {
  const [urqlClient, ssr] = useMemo(() => {
    const ssr = ssrExchageStore.set(ssrExchange());
    return [makeClient(), ssr];
  }, []);

  return (
    <UrqlProvider client={urqlClient} ssr={ssr}>
      {children}
    </UrqlProvider>
  );
};

export default Urql;
