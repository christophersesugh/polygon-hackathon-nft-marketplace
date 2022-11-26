import React from "react";
import { Modal, Input, useNotification } from "web3uikit";
import { ethers } from "ethers";
import { useWeb3Contract } from "react-moralis";
import marketplaceAbi from "../constants/NftMarketplace.json";

export default function UpdatingListingModal() {
  const [price, setPrice] = React.useState(0);
  const dispatch = useNotification();

  return <div>update-listing-modal</div>;
}
