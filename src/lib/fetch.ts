import { FetchResponse } from "@/types";

export const defaultRevalidate = 3600 * 24 * 1; // 1 days
export const graphqlEndpoint = process.env.GRAPHQL_ENDPOINT;

if (!graphqlEndpoint) {
  throw new Error(
    "No API URL found. Please set the GRAPHQL_ENDPOINT environment variable."
  );
}

interface FetchOptions {
  method: string;
  headers: {
    "Content-Type": string;
  };
  body: string;
  next?: {
    revalidate: number;
    tags?: string[];
  };
  cache?: "no-cache" | "force-cache";
}

export default function contentFetcher(
  body: string,
  revalidateTags: string[] = [],
  revalidate: number = defaultRevalidate,
  headers?: any
): Promise<FetchResponse> {
  return new Promise(async (resolve, reject) => {
    if (!graphqlEndpoint) {
      return reject(new Error("No API URL found"));
    }

    // IF we are in development, we want to make sure we are not caching the data
    if (process.env.NODE_ENV === "development") {
      revalidate = 0; // Ensure no caching in development
    }

    let options: FetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body,
      next: {
        revalidate: revalidate,
        tags: revalidateTags.length > 0 ? revalidateTags : undefined,
      },
    };

    // Does this request have revalidate tags?
    if (revalidateTags.length > 0) {
      if (!options.next) options.next = { revalidate: revalidate };
      options.next.tags = revalidateTags;
    }

    try {
      // Start timing before the request
      const res = await fetch(graphqlEndpoint, options);

      if (!res.ok) {
        console.error(
          `Error fetching data from ${graphqlEndpoint}: ${res.status} ${res.statusText}`
        );

        return reject(new Error("An error occurred while fetching the data."));
      }

      const data = await res.json();
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
}
