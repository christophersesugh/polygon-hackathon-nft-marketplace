import {
  ItemBought as ItemBoughtEvent,
  ItemCancelled as ItemCancelledEvent,
  ItemListed as ItemListedEvent,
} from "../generated/NftMarketplace/NftMarketplace";
import {
  ItemBought,
  ItemCancelled,
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

  itemBought.blockNumber = event.block.number;
  itemBought.blockTimestamp = event.block.timestamp;
  itemBought.transactionHash = event.transaction.hash;

  itemBought.save();
}

export function handleItemCancelled(event: ItemCancelledEvent): void {
  let entity = new ItemCancelled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.seeller = event.params.seeller;
  entity.nftAddress = event.params.nftAddress;
  entity.tokenId = event.params.tokenId;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleItemListed(event: ItemListedEvent): void {
  let entity = new ItemListed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.seller = event.params.seller;
  entity.nftAddress = event.params.nftAddress;
  entity.tokenId = event.params.tokenId;
  entity.price = event.params.price;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
