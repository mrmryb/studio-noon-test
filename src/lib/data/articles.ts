import contentFetcher from "@/lib/fetch";

export const getLatestArticlesQuery = `
query LatestArticlesQuery ($after: String, $first: Int) {
    articles(after: $after, first: $first, where: { orderby: { field: DATE, order: DESC } }) {
        nodes {
            id
            slug
            title(format: RENDERED)
            excerpt: excerptPlainText
            featuredImage {
                node {
                    altText
                    sourceUrl
                    title
                }
            }
        }
        pageInfo {
            endCursor
            hasNextPage
            hasPreviousPage
            startCursor
        }
    }
}`;

export const getArticles = async (
  after: string | null = null,
  first: number = 3
) => {
  // Query Variables
  const variables = {
    after,
    first,
  };

  // Query
  const body = JSON.stringify({ query: getLatestArticlesQuery, variables });

  try {
    // Revalidation Tags
    const tags = ["latestArticles", "articles"];

    // Use the default revalidation timing
    const revalidate = undefined;

    // Get the content
    const content = await contentFetcher(body, tags, revalidate);

    if (!content.data.articles) {
      return false;
    }

    return content.data.articles;
  } catch (error) {
    console.error(error);
    return false;
  }
};
