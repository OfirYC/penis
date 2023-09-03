import { OpenloginAdapter } from "@web3auth/openlogin-adapter";
import { arbitrumPrivateKeyProvider } from "../providers/arbitrum";

export const openloginAdapter = new OpenloginAdapter({
  adapterSettings: {
    clientId: process.env.NEXT_PUBLIC_WEB3AUTH_CLIENT_ID,
    network: "testnet",
    uxMode: "redirect",
    whiteLabel: {
      name: "Perpie",
      logoLight: "https://web3auth.io/images/w3a-L-Favicon-1.svg",
      logoDark: "https://web3auth.io/images/w3a-D-Favicon-1.svg",
      defaultLanguage: "en",
      dark: false, // whether to enable dark mode. defaultValue: false
    },
    loginConfig: {
      // Add login configs corresponding to the providers on modal
      // Google login
      google: {
        name: "Google Login",
        verifier: process.env.WEB3AUTH_VERIFIER_NAME_GOOGLE as string, // Please create a verifier on the developer dashboard and pass the name here
        typeOfLogin: "google", // Pass on the login provider of the verifier you've created
        clientId: process.env.GOOGLE_CLIENT_ID as string, // Pass on the clientId of the login provider here - Please note this differs from the Web3Auth ClientID. This is the JWT Client ID
      },
    },
    redirectUrl: "https://smooth-uniquely-gecko.ngrok-free.app/signup",
  },
  privateKeyProvider: arbitrumPrivateKeyProvider,
});
