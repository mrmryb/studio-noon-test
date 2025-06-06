"use client";

// Components
import Card from "@/components/card";

export default function Cards({
  articles
}: { articles: Array<any> }) {

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {articles.map((article) => {
          return <Card key={article.slug} {...article} />;
        })}
      </div>
    </>
  );
}
