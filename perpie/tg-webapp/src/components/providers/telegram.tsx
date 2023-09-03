import { useEffect, useState } from "react";
import { BaseComponentProps } from "../wrappers/types";
import axios from "axios";
import WrappedText from "../wrappers/text";

export function TelegramProvider({ children }: BaseComponentProps) {
  const [isValidHash, setIsHashValid] = useState<boolean>(false);
  //   useEffect(() => {
  //     axios
  //       .post("/api/validate-hash", { hash: window.Telegram.WebApp.initData })
  //       .then((response) => setIsHashValid(response.status === 200));
  //   }, []);

  //   if (!isValidHash)
  //     return (
  //       <div className="w-[100vw] h-[100vh] bg-red-500 flex items-center justify-center">
  //         <WrappedText fontSize={82}>why u here ser</WrappedText>
  //       </div>
  //     );

  return children;
}
