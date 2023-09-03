import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";

export const arbitrumPrivateKeyProvider = new EthereumPrivateKeyProvider({
  config: {
    /*
      pass the chain config that you want to connect with.
      all chainConfig fields are required.
      */
    chainConfig: {
      chainId: "0xA4B1",
      displayName: "Arbitrum One",
      blockExplorer: "https://arbiscan.io",
      ticker: "ETH",
      tickerName: "Ethereum",
      rpcTarget: "https://arb1.arbitrum.io/rpc",
    },
  },
});
