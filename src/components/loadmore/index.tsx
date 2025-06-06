"use client";

import React from 'react';
import { type Article } from "@/types";

interface LoadMoreButtonProps {
  setArticles: React.Dispatch<React.SetStateAction<Article[]>>;
  loadMoreStartPosition: string | null;
  setloadMoreStartPosition: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function LoadMoreButton({
  setArticles,
  loadMoreStartPosition,
  setloadMoreStartPosition
}: LoadMoreButtonProps) {

  const loadMoreArticles = async () => {
    try {
      const res = await fetch('/api/articles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ after: loadMoreStartPosition, first: 3 }),
      });
      const data = await res.json();
      if (data.success && data.articles?.nodes) {
        setArticles((prev: Article[]) => [...prev, ...data.articles.nodes]);
        if (!data.articles.pageInfo.hasNextPage) {
          setloadMoreStartPosition(null);
        }
        else {
          setloadMoreStartPosition(data.articles.pageInfo.endCursor);
        }
        console.log('Articles loaded:', data.articles);
      } else {
        console.error('No articles returned:', data);
      }
    } catch (error) {
      console.error('Failed to load more articles:', error);
    }
  };

  return (
    <div className="flex justify-center">
      <button
        onClick={loadMoreArticles}
        className={`load-more mt-8 px-6 py-2 bg-red-400 text-white font-semibold rounded-lg hover:bg-red-500 transition-colors not-disabled:cursor-pointer ${!loadMoreStartPosition ? 'opacity-0' : ''}`}
        disabled={!loadMoreStartPosition}
      >
        Load More Articles
      </button>
    </div>
  );
}