"use client";
import Image from "next/image";
import { ImageSkeleton } from "./skeleton";
import { RefObject, forwardRef, useState } from "react";
import { ImageProps } from "./types";
/**
 * @notice
 * Wrapper image component,
 * for ease of use with skeletons and global styling
 */

const WrappedImage = forwardRef<HTMLDivElement | HTMLElement | null, ImageProps>(
  (
    {
      src,
      alt,
      width = 24,
      height = 24,
      className,
      onClick,
      style,
      wheelable = true,
    }: ImageProps,
    ref
  ) => {
    // State to track whether we fetch the color or not.

    if (!src) return <ImageSkeleton width={width} height={height} />;
    return (
      <>
        <Image
          width={width}
          height={height}
          src={src}
          alt={alt || ""}
          className={
            "select-none text-custom-textColor" + (" " + className || "")
          }
          onClick={() => onClick && onClick()}
          style={style || {}}
          data-wheelable={wheelable}
          // @ts-ignore
          ref={ref}
        />
      </>
    );
  }
);

WrappedImage.displayName = "WrappedImage";

export default WrappedImage;
