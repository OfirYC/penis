import { web3auth } from "@/web3auth";
import { WALLET_ADAPTERS, WALLET_ADAPTER_TYPE } from "@web3auth/base";
import { OpenloginLoginParams } from "@web3auth/openlogin-adapter";

export async function login() {
  const web3AuthGoogleProvider = await web3auth.connectTo<OpenloginLoginParams>(
    WALLET_ADAPTERS.OPENLOGIN,
    {
      loginProvider: "google",
      redirectUrl: "https://smooth-uniquely-gecko.ngrok-free.app/signup",
    }
  );

  return web3AuthGoogleProvider;
}
