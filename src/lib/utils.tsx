// Utilities
import ReactHtmlParser from "react-html-parser";
import Link from "next/link";

const apiURL = process.env.GRAPHQL_ENDPOINT ?? "";
const nextURL = process.env.NEXT_PUBLIC_URL ?? "";

export function HTMLContentSorter(content: string) {
  // Remove /graphql from the API URL to get the base URL
  const url = apiURL.replace(/\/graphql$/, "");

  const options = {
    transform: function (node: any) {
      if (node.type === "tag" && node.name === "a") {
        const href = node.attribs.href?.replace(url, nextURL);
        const inner = node.children[0]?.data;

        if (href && inner) {
          return (
            <Link key={href} href={href}>
              {inner}
            </Link>
          );
        }
      }
    },
  };

  return ReactHtmlParser(content, options);
}
