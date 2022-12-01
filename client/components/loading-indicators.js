import Image from "next/image";

function MainIndicator() {
  return (
    <div className="w-screen h-screen flex items-start justify-center">
      <Image
        src="/nft-logo.png"
        width={200}
        height={200}
        className="animate-spin"
      />
    </div>
  );
}

function NftIndicator() {
  return (
    <article className="bg-slate-100 rounded-lg animate-pulse">
      <div className="p-2 px-14">
        <div className="flex flex-col items-center">
          <div className="-mt-3 self-start bg-slate-200 h-4 mb-2"></div>
          <div className="italic text-sm bg-slate-200 h-4 w-[60%] mb-2"></div>
          <div className="h-[200px] w-[200px] bg-slate-200"></div>
          <div className="font-bold h-4 bg-slate-200 mt-4 self-end"></div>
        </div>
      </div>
    </article>
  );
}

export { MainIndicator, NftIndicator };
