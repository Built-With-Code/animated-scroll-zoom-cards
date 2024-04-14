"use client";

import Image from "next/image";

const Card = ({ imgUrl }: { imgUrl: string }) => {
  return (
    <div className="relative h-[80vh] w-[90vw] bg-neutral-200 rounded-xl overflow-hidden">
      <Image
        src={imgUrl}
        alt={imgUrl}
        fill
        className="object-cover"
        sizes="90vw"
      />
    </div>
  );
};

export default Card;
