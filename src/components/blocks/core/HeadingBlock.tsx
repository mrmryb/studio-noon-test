import { type HeadingBlock } from "@/types";
import { ElementType } from "react";
import { HTMLContentSorter } from "@/lib/utils";

export default function HeadingBlock(block: HeadingBlock) {
  const level = block.attributes.level ?? 2;
  const Tag = ("h" + level.toString()) as ElementType;

  return <Tag>{HTMLContentSorter(block.attributes.content)}</Tag>;
}
