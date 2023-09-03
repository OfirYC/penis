import { ADAPTER_EVENTS, CONNECTED_EVENT_DATA } from "@web3auth/base";
import { Web3AuthNoModal } from "@web3auth/no-modal";

export const subscribeAuthEvents = (web3auth: Web3AuthNoModal) => {
  web3auth.on(ADAPTER_EVENTS.CONNECTED, (data: CONNECTED_EVENT_DATA) => {
    alert("Connected To Wallet");
    console.log("connected to wallet", data);
    // web3auth.provider will be available here after user is connected
  });
  web3auth.on(ADAPTER_EVENTS.CONNECTING, () => {
    alert("Connecting...");

    console.log("connecting");
  });
  web3auth.on(ADAPTER_EVENTS.DISCONNECTED, () => {
    alert("Disconnected...");

    console.log("disconnected");
  });
  web3auth.on(ADAPTER_EVENTS.ERRORED, (error) => {
    alert("Web3Auth ERR...");

    console.log("error", error);
  });
};
