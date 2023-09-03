import { CHAIN_NAMESPACES } from "@web3auth/base";
import { Web3AuthNoModal } from "@web3auth/no-modal";
import { openloginAdapter } from "./adapters/openlogin";
import { subscribeAuthEvents } from "./subscribe-to-events";

const web3AuthClientId = process.env.NEXT_PUBLIC_WEB3AUTH_CLIENT_ID;

if (!web3AuthClientId) throw "Web3Auth Client ID ENV Unavailable.";

export const web3auth = new Web3AuthNoModal({
  clientId: web3AuthClientId,
  sessionTime: 86400 * 7,
  chainConfig: {
    chainNamespace: CHAIN_NAMESPACES.EIP155,
    chainId: "0xA4B1",
    displayName: "Arbitrum One",
    blockExplorer: "https://arbiscan.io",
    ticker: "ETH",
    tickerName: "Ethereum",
    rpcTarget: "https://arb1.arbitrum.io/rpc",
  },
  web3AuthNetwork: "testnet",
});

web3auth.configureAdapter(openloginAdapter);
// subscribeAuthEvents(web3auth);
