import React from "react";
import AppHead from "../components/app-head";
import { useMoralis, useWeb3Contract } from "react-moralis";
import { useNotification, Form } from "web3uikit";
import { ethers } from "ethers";
import nftAbi from "../constants/BasicNft.json";
import marketplaceAbi from "../constants/NftMarketplace.json";
import networkMapping from "../constants/networkMapping.json";
import { handStatus } from "../utils/alert-dispatch-function";

export default function SellNfts() {
  const [proceeds, setProceeds] = React.useState("0");
  const { chainId, isWeb3Enabled, account } = useMoralis();
  const { runContractFunction } = useWeb3Contract();
  const dispatch = useNotification();
  const chainString = chainId ? parseInt(chainId).toString() : "31337";
  const marketplaceAddress = networkMapping[chainString].NftMarketplace[0];

  async function approveAndList(data) {
    console.log("Approving...");
    const nftAddress = data.data[0].inputResult;
    const tokenId = data.data[1].inputResult;
    const price = ethers.utils
      .parseUnits(data.data[2].inputResult, "ether")
      .toString();

    const approveOptions = {
      abi: nftAbi,
      contractAddress: nftAddress,
      functionName: "approve",
      params: {
        to: marketplaceAddress,
        tokenId: tokenId,
      },
    };

    await runContractFunction({
      params: approveOptions,
      onSuccess: (tx) => handleApproveSuccess(tx, nftAddress, tokenId, price),
      onError: (error) =>
        handStatus(
          dispatch,
          "error",
          error.message,
          "An error occured!",
          "topL"
        ),
    });
  }

  async function handleApproveSuccess(tx, nftAddress, tokenId, price) {
    console.log("Ok! Now time to list");
    await tx.wait();
    const listOptions = {
      abi: marketplaceAbi,
      contractAddress: marketplaceAddress,
      functionName: "listItem",
      params: {
        nftAddress: nftAddress,
        tokenId: tokenId,
        price: price,
      },
    };

    await runContractFunction({
      params: listOptions,
      onSuccess: () =>
        handStatus(dispatch, "success", "NFT listed", "NFT listing"),
      onError: (error) =>
        handStatus(
          dispatch,
          "error",
          error.message,
          "An error occured!",
          "topL"
        ),
    });
  }

  async function setupUI() {
    const returnedProceeds = await runContractFunction({
      params: {
        abi: marketplaceAbi,
        contractAddress: marketplaceAddress,
        functionName: "getProceeds",
        params: {
          seller: account,
        },
      },
      onError: (error) =>
        handStatus(
          dispatch,
          "error",
          error.message,
          "An error occured!",
          "topL"
        ),
    });
    if (returnedProceeds) {
      setProceeds(returnedProceeds.toString());
    }
  }

  React.useEffect(() => {
    setupUI();
  }, [proceeds, account, isWeb3Enabled, chainId]);
  return (
    <div className="bg-slate-200 h-screen">
      <AppHead title="NFTCore | Sell NFTs" />
      <div className="flex flex-col justify-center items-center pt-10">
        <Form
          onSubmit={approveAndList}
          data={[
            {
              name: "NFT Address",
              type: "text",
              inputWidth: "50%",
              value: "",
              key: "nftAddress",
            },
            {
              name: "Token ID",
              type: "number",
              value: "",
              key: "tokenId",
            },
            {
              name: "Price (in ETH)",
              type: "number",
              value: "",
              key: "price",
            },
          ]}
          title="Sell your NFT!"
          id="Main Form"
        />
        <div className=" mt-8 bg-slate-600 text-slate-200 rounded p-8">
          <div>
            Withdraw{" "}
            <span className="bg-slate-400 px-2 rounded">{proceeds}</span>{" "}
            proceeds
          </div>
          {proceeds != "0" ? (
            <Button
              onClick={() => {
                runContractFunction({
                  params: {
                    abi: marketplaceAbi,
                    contractAddress: marketplaceAddress,
                    functionName: "withdrawProceeds",
                    params: {},
                  },
                  onError: (error) =>
                    handStatus(
                      dispatch,
                      "error",
                      error.message,
                      "An error occured!",
                      "topL"
                    ),
                  onSuccess: () =>
                    handStatus(
                      dispatch,
                      "success",
                      "NFT listed",
                      "NFT listing"
                    ),
                });
              }}
              text="Withdraw"
              type="button"
            />
          ) : (
            <div>No proceeds detected</div>
          )}
        </div>
      </div>
    </div>
  );
}
