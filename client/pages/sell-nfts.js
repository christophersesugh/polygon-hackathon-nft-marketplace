import React from "react";
import AppHead from "../components/app-head";
import { useMoralis, useWeb3Contract } from "react-moralis";
import { useNotification } from "web3uikit";
import { ethers } from "ethers";
import nftAbi from "../constants/BasicNft.json";
import marketplaceAbi from "../constants/NftMarketplace.json";
import networkMapping from "../constants/networkMapping.json";

export default function SellNfts() {
  const [proceeds, setProceeds] = React.useState("0");
  const { chainId, isWeb3Enabled, account } = useMoralis();
  const { runContractFunction } = useWeb3Contract();
  const dispatch = useNotification();
  const chainString = chainId ? parseInt(chainId).toString() : "31337";
  const marketplaceAddress = networkMapping[chainString].NftMarketplace[0];
  return (
    <>
      <AppHead title="NFTCore | Sell NFTs" />
      <section className="container">sell-nfts</section>;
    </>
  );
}
