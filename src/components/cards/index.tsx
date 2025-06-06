"use client";

// Types
import { type PageInfo, Article } from "@/types";

// Components
import Card from "@/components/card";

export default function Cards({
  nodes,
}: {
  nodes?: Article[];
  pageInfo?: PageInfo;
}) {
  // If no nodes are provided or the array is empty, return null
  if (!nodes || nodes.length === 0) {
    return null;
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {nodes.map((article, index) => {
          return <Card key={article.slug} {...article} />;
        })}
      </div>
    </>
  );
}
