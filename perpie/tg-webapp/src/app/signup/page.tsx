"use client";
import { Button } from "@/components/buttons/reguler";
import WrappedText from "@/components/wrappers/text";
import { login } from "@/web3auth/functions/login";

export default function Home() {
  return (
    <div className="w-[100vw] h-[100vh] bg-custom-bg flex flex-col gap-6 items-center justify-center px-16">
      <div
        className="flex flex-col items-center justify-center "
        onClick={() => {
          //   window.location.replace("https://youtube.com");
        }}
      >
        <WrappedText fontSize={36} fontStyle="bold">
          Welcome To Perpie!
        </WrappedText>
        <WrappedText fontSize={22} fontStyle="">
          Please Sign In With Google
        </WrappedText>
      </div>
      <Button
        onClick={async () => {
          console.log("Window location href", location.href);
          await login();
        }}
      >
        <WrappedText>Sign In</WrappedText>
      </Button>
    </div>
  );
}
