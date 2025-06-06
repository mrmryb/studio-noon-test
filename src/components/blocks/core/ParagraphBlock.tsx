import { type ParagraphBlock } from "@/types";
import { HTMLContentSorter } from "@/lib/utils";

export default function ParagraphBlock(block: ParagraphBlock) {
  const { attributes } = block;
  const { content } = attributes;

  return <p>{HTMLContentSorter(content)}</p>;
}
