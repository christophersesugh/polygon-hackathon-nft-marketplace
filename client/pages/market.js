import React from "react";
import { useMoralisQuery, useMoralis } from "react-moralis";
import { useQuery } from "@apollo/client";
import { FiAlertCircle } from "react-icons/fi";
import AppHead from "../components/app-head";
import { MainIndicator } from "../components/loading-indicators";
import NftCard from "../components/nft-card";
import networkMapping from "../constants/networkMapping.json";
import GET_ACTIVE_ITEMS from "../constants/subgraph-queries";

export default function SellNft() {
  const { isWeb3Enabled, chainId } = useMoralis();
  const chainString = chainId ? parseInt(chainId).toString() : "31337";
  const marketplaceAddress = networkMapping[chainString].NftMarketplace[0];

  console.log(marketplaceAddress);
  const {
    loading: isLoading,
    error,
    data: listedItems,
  } = useQuery(GET_ACTIVE_ITEMS);
  return (
    <>
      <AppHead title="NFTCore | NFT Marketplace" />
      <section
        className={`bg-slate-200 ${
          !isWeb3Enabled || isLoading ? "h-screen" : "h-auto"
        } p-8 text-black  flex flex-col justify-start`}
      >
        {!isWeb3Enabled ? (
          <div className=" text-slate-400 flex flex-col items-center justify-center  mt-8 lg:mt-16">
            <h1 className="text-3xl flex items-center">
              {" "}
              <FiAlertCircle className="inline mr-4" />
              Web3 not enabled!
            </h1>
            <h2 className="text-xl mt-4">Connect your crypto wallet.</h2>
          </div>
        ) : (
          <>
            {!isLoading || listedItems ? (
              <h1 className="font-bold text-2xl my-4 self-center">
                Recently Listed Items.
              </h1>
            ) : null}
            {isLoading || !listedItems ? (
              <MainIndicator />
            ) : error ? (
              <h2 className="text-lg text-red-500 max-w-3xl">
                {error.message}
              </h2>
            ) : (
              <div className="mt-4 grid md:grid-cols-2 lg:grid-cols-4 items-center gap-8">
                {listedItems?.activeItems ? (
                  <>
                    {listedItems.activeItems.map((nft) => (
                      <NftCard
                        nft={nft}
                        marketplaceAddress={marketplaceAddress}
                        key={`${nft.nftAddress}${nft.tokenId}`}
                      />
                    ))}
                  </>
                ) : null}
              </div>
            )}
          </>
        )}
      </section>
    </>
  );
}
