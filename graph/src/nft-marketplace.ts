import { Address } from "@graphprotocol/graph-ts";
import {
  ItemBought as ItemBoughtEvent,
  ItemCanceled as ItemCanceledEvent,
  ItemListed as ItemListedEvent,
} from "../generated/NftMarketplace/NftMarketplace";
import {
  ItemBought,
  ItemCanceled,
  ItemListed,
  ActiveItem,
} from "../generated/schema";

export function handleItemBought(event: ItemBoughtEvent): void {
  let itemBought = new ItemBought(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  let activeItem = new ActiveItem(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );

  itemBought.buyer = event.params.buyer;
  itemBought.nftAddress = event.params.nftAddress;
  itemBought.tokenId = event.params.tokenId;
  itemBought.price = event.params.price;
  activeItem.buyer = event.params.buyer;

  itemBought.blockNumber = event.block.number;
  itemBought.blockTimestamp = event.block.timestamp;
  itemBought.transactionHash = event.transaction.hash;

  itemBought.save();
  activeItem.save();
}

export function handleItemCanceled(event: ItemCanceledEvent): void {
  let itemCancelled = new ItemCanceled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  let activeItem = new ActiveItem(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  itemCancelled.seller = event.params.seller;
  itemCancelled.nftAddress = event.params.nftAddress;
  itemCancelled.tokenId = event.params.tokenId;

  activeItem.buyer = Address.fromString(
    "0x000000000000000000000000000000000000dEaD"
  );

  itemCancelled.blockNumber = event.block.number;
  itemCancelled.blockTimestamp = event.block.timestamp;
  itemCancelled.transactionHash = event.transaction.hash;

  itemCancelled.save();
  activeItem.save();
}

export function handleItemListed(event: ItemListedEvent): void {
  let itemListed = new ItemListed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  let activeItem = new ActiveItem(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  itemListed.seller = event.params.seller;
  activeItem.seller = event.params.seller;

  itemListed.nftAddress = event.params.nftAddress;
  activeItem.nftAddress = event.params.nftAddress;

  itemListed.tokenId = event.params.tokenId;
  activeItem.tokenId = event.params.tokenId;

  itemListed.price = event.params.price;
  activeItem.price = event.params.price;

  activeItem.buyer = Address.fromString(
    "0x0000000000000000000000000000000000000000"
  );

  itemListed.blockNumber = event.block.number;
  itemListed.blockTimestamp = event.block.timestamp;
  itemListed.transactionHash = event.transaction.hash;

  itemListed.save();
  activeItem.save();
}
