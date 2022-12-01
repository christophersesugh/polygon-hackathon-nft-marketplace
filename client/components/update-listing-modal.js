import React from "react";
import { ethers } from "ethers";
import { useWeb3Contract } from "react-moralis";
import { Modal, Input, useNotification } from "web3uikit";
import nftMarketplaceAbi from "../constants/NftMarketplace.json";
import { handStatus } from "../utils/alert-dispatch-function";

export default function UpdateListingModal({
  nftAddress,
  tokenId,
  isVisible,
  marketplaceAddress,
  onClose,
}) {
  const [price, setPrice] = React.useState(0);
  const dispatch = useNotification();
  const handleUpdateListingSuccess = () => {
    dispatch({
      type: "success",
      message: "listing updated",
      title: "Listing updated - please refresh (and move blocks)",
      position: "topR",
    });
    onClose && onClose();
    setPrice("0");
  };

  const { runContractFunction: updateListing } = useWeb3Contract({
    abi: nftMarketplaceAbi,
    contractAddress: marketplaceAddress,
    functionName: "updateListing",
    params: {
      nftAddress: nftAddress,
      tokenId: tokenId,
      newPrice: ethers.utils.parseEther(price || "0"),
    },
  });

  return (
    <Modal
      isVisible={isVisible}
      onCancel={onClose}
      onCloseButtonPressed={onClose}
      onOk={() => {
        updateListing({
          onError: (error) =>
            handStatus(
              dispatch,
              "error",
              error.message,
              "An error occured!",
              "topL"
            ),
          onSuccess: () => handleUpdateListingSuccess(),
        });
      }}
    >
      <Input
        label="Update listing price in L1 Currency (ETH)"
        name="New listing price"
        type="number"
        onChange={(event) => {
          setPrice(event.target.value);
        }}
      />
    </Modal>
  );
}
