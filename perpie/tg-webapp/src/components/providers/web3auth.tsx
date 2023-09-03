import { useEffect } from "react";
import { BaseComponentProps } from "../wrappers/types";
import { web3auth } from "@/web3auth";

export function Web3AuthProvider({ children }: BaseComponentProps) {
  useEffect(() => {
    (async () => {
      await web3auth.init();
    })();
  }, []);

  return children;
}
