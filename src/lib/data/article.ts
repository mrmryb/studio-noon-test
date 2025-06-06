import contentFetcher from "@/lib/fetch";

export const getArticleBySlugQuery = `
query ArticlesQuery($slug: ID!) {
    article(id: $slug, idType: SLUG) {
        id
        slug
        title(format: RENDERED)
        featuredImage {
            node {
                altText
                sourceUrl
                title
            }
        }
        excerpt: excerptPlainText
        editorBlocks {
            name
            ... on CoreParagraph {
                anchor
                attributes {
                    align
                    content
                }
            }
            ... on CoreHeading {
                anchor
                attributes {
                    align
                    content
                    level
                }
            }
        }
    }
}
`;

export const getArticleBySlug = async (
  slug: string | null = null
) => {
  // Query Variables
  const variables = {
    slug,
  };

  // Query
  const body = JSON.stringify({ query: getArticleBySlugQuery, variables });

  try {
    // Revalidation Tags
    const tags = ["articles"];

    // Use the default revalidation timing
    const revalidate = undefined;

    // Get the content
    const content = await contentFetcher(body, tags, revalidate);

    if (!content.data.article) {
      return false;
    }

    return content.data.article;
  } catch (error) {
    console.error(error);
    return false;
  }
};
