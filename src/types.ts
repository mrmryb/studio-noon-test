export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featuredImage: FeaturedImage;
  editorBlocks?: Blocks[];
}

export interface Articles {
  nodes: Article[];
  pageInfo: PageInfo;
}

export interface FeaturedImage {
  node: {
    sourceUrl: string;
    altText: string;
    title: string;
  };
}

export interface PageInfo {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string;
  endCursor: string;
}

/**
 *  Gutenberg Blocks
 */

export interface Block {
  name: string;
}

export interface ParagraphBlock extends Block {
  name: "core/paragraph";
  attributes: {
    align: string;
    content: string;
  };
}

export interface HeadingBlock extends Block {
  name: "core/heading";
  attributes: {
    align: string;
    content: string;
    level: number;
  };
}

export type Blocks = ParagraphBlock | HeadingBlock;

export type FetchResponse = {
  data: {
    article?: Article;
    articles?: Articles;
  };
  errors?: Array<{
    message: string;
    locations: Array<{ line: number; column: number }>;
  }>;
};
