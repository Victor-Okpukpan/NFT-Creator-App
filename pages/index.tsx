import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import { NextPage } from "next";

const Home: NextPage = () => {
  const address = useAddress();
  console.log(address);

  return (
    <>
      {!address ? (
        <div className="flex items-center justify-center h-screen">
          <ConnectWallet />
        </div>
      ) : (
        <div className="">
          <ConnectWallet />
        </div>
      )}
    </>
  );
};

export default Home;
