"use client";

import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Card = ({ imgUrl }: { imgUrl: string }) => {
  // Definition for sticky position of the card
  const vertMargin = 10;

  // Ref for container
  const container = useRef(null);

  // State vars
  const [maxScrollY, setMaxScrollY] = useState(Infinity);
  const [dynamicStyles, setDynamicStyles] = useState({
    scale: 1,
    filter: 0,
  });

  // Framer Motion helpers
  const { scrollY } = useScroll({
    target: container,
  });
  const isInView = useInView(container, {
    margin: `0px 0px -${100 - vertMargin}% 0px`,
    once: true,
  });

  // Scroll tracking
  scrollY.on("change", (scrollY) => {
    // animationValue indicates progress after container hits sticky point, going from 1 to 0
    let animationValue = 1;
    if (scrollY > maxScrollY) {
      animationValue = Math.max(0, 1 - (scrollY - maxScrollY) / 10000);
    }

    setDynamicStyles({
      scale: animationValue,
      filter: (1 - animationValue) * 100,
    });
  });

  useEffect(() => {
    if (isInView) {
      setMaxScrollY(scrollY.get());
    }
  }, [isInView]);

  return (
    <motion.div
      ref={container}
      className="sticky w-[90vw] bg-neutral-200 rounded-xl overflow-hidden"
      style={{
        scale: dynamicStyles.scale,
        filter: `blur(${dynamicStyles.filter}px)`,
        height: `${100 - 2 * vertMargin}vh`,
        top: `${vertMargin}vh`,
      }}
    >
      <Image
        src={imgUrl}
        alt={imgUrl}
        fill
        className="object-cover"
        sizes="90vw"
      />
    </motion.div>
  );
};

export default Card;
