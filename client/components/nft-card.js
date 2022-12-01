import React from "react";
import Image from "next/image";
import { ethers } from "ethers";
import { Card, useNotification } from "web3uikit";
import { useWeb3Contract, useMoralis } from "react-moralis";
import nftMarketplaceAbi from "../constants/NftMarketplace.json";
import nftAbi from "../constants/BasicNft.json";
import { truncateString } from "../utils/truncate-string";
import { handStatus } from "../utils/alert-dispatch-function";
import UpdatingListingModal from "./update-listing-modal";
import { NftIndicator } from "./loading-indicators";

export default function NftCard({ nft, marketplaceAddress }) {
  const { isWeb3Enabled, account } = useMoralis();
  const dispatch = useNotification();
  const [showModal, setShowModal] = React.useState(false);

  const [imageUri, setImageUri] = React.useState("");
  const [tokenName, setTokenName] = React.useState("");
  const [tokenDescription, setTokenDescription] = React.useState("");
  const { nftAddress, tokenId, seller, price } = nft;

  const { runContractFunction: getTokenUri } = useWeb3Contract({
    abi: nftAbi,
    contractAddress: nftAddress,
    functionName: "tokenURI",
    params: {
      tokenId: tokenId,
    },
  });

  const { runContractFunction: buyItem } = useWeb3Contract({
    abi: nftMarketplaceAbi,
    contractAddress: marketplaceAddress,
    functionName: "buyItem",
    msgValue: price,
    params: {
      nftAddress: nftAddress,
      tokenId: tokenId,
    },
  });

  async function updateUI() {
    const tokenURI = await getTokenUri();
    console.log("TOKEN_URI", tokenURI);
    if (tokenURI) {
      const requestUrl = tokenURI.replace("ipfs://", "https://ipfs.io/ipfs/");
      const tokenUriResponse = await (await window.fetch(requestUrl)).json();
      console.log(tokenUriResponse);
      const imageUri = tokenUriResponse.image;
      console.log(imageUri);
      const imageUrl = imageUri.replace("ipfs://", "https://ipfs.io/ipfs/");
      setImageUri(imageUrl);
      setTokenName(tokenUriResponse.name);
      setTokenDescription(tokenDescription?.description);
    } else {
      window.alert("This Contract only supports ETH.");
    }
  }

  React.useEffect(() => {
    if (isWeb3Enabled) {
      updateUI();
    }
  }, [isWeb3Enabled]);

  const user = seller === account || seller === undefined;
  const formattedAddress = user ? "You" : truncateString(seller || "", 15);

  const handleCardClick = () => {
    user
      ? setShowModal(true)
      : buyItem({
          onError: (error) =>
            handStatus(
              dispatch,
              "error",
              error.message,
              "An error occured!",
              "topL"
            ),
          onSuccess: () => handStatus(dispatch, "success", "", "Item Bought!"),
        });
  };

  return (
    <>
      <UpdatingListingModal
        isVisible={showModal}
        tokenId={tokenId}
        marketplaceAddress={marketplaceAddress}
        nftAddress={nftAddress}
        onClose={() => setShowModal(false)}
      />
      <article className="flex flex-col justify-center items-center drop-shadow-lg">
        {imageUri ? (
          <Card
            title={tokenName}
            description={tokenDescription}
            onClick={handleCardClick}
            tooltipText={
              user
                ? "Click the card to update Listing"
                : "Click the card to buy NFT"
            }
          >
            <div className="p-2">
              <div className="flex flex-col items-center">
                <div className="-mt-3 self-start">#{tokenId}</div>
                <div className="italic text-sm">
                  Owned by {formattedAddress}
                </div>
                <Image
                  loader={() => imageUri}
                  src={imageUri}
                  height="200"
                  width="200"
                  alt={tokenName}
                />
                <div className="font-bold">
                  {ethers.utils.formatUnits(price, "ether")} ETH
                </div>
              </div>
            </div>
          </Card>
        ) : (
          <NftIndicator />
        )}
      </article>
    </>
  );
}
