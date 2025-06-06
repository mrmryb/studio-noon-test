import { createElement, Fragment } from "react";
import { v4 as uuidv4 } from "uuid";

// Blocks
import { CoreParagraph, CoreHeading } from "./core";
import { type Blocks } from "@/types";

const Components: any = {
  CoreParagraph,
  CoreHeading,
};

export const GutenbergBlock = (block: Blocks) => {
  // Remove the / and camelcase and turn the first letter uppercase
  const name = toCapitalisedCamelCase(block.name as string);

  if (typeof Components[name] !== "undefined") {
    return createElement(Components[name], {
      key: uuidv4(),
      ...block,
    });
  }

  return null;
};

const GutenbergBlocks = ({ blocks }: { blocks?: Blocks[] }) => {
  if (blocks?.length === 0 || !blocks) {
    return null;
  }

  return (
    <>
      {blocks.map((block: Blocks, index: number) => {
        return (
          <Fragment key={`${block.name}-${index}`}>
            {GutenbergBlock(block)}
          </Fragment>
        );
      })}
    </>
  );
};

function toCapitalisedCamelCase(input: string): string {
  if (!input) {
    return "";
  }

  return input
    .replace(/\//g, " ") // Replace slashes with spaces
    .replace(/[-_ ]+./g, (match) =>
      match.charAt(match.length - 1).toUpperCase()
    ) // CamelCase conversion
    .replace(/^[a-z]/, (match) => match.toUpperCase()); // Capitalise first letter
}

export default GutenbergBlocks;
