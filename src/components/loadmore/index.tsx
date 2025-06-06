"use client";

import React from 'react';

import { type PageInfo, Article } from "@/types";

function loadMoreArticles() {
    console.log('Loading more articles...');
}

export default function LoadMoreButton({
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
    <div className="flex justify-center">
        <button onClick={loadMoreArticles} className="load-more mt-8 px-6 py-2 bg-red-400 text-white font-semibold rounded-lg hover:bg-red-500 transition-colors cursor-pointer">
          Load More Articles
        </button>
      </div>
  );
}