"use client";

import Cards from "@/components/cards";
import LoadMoreButton from "@/components/loadmore";

import { useState } from "react";

//usestate so load more button can work, useclient not allowed in this file, extra component needed
//const [articlesData, setArticles] = useState(articles);

// setArticles needs to be passed down to LoadMoreButton to update state
// <LoadMoreButton nodes={articlesData} setArticles={setArticles} />

type ArticleListProps = {
    articles: any[];
    endCursor: string | null;
};

export default function ArticleList({ articles, endCursor }: ArticleListProps) {

    const [articlesData, setArticles] = useState(articles);
    const [loadMoreStartPosition, setloadMoreStartPosition] = useState(endCursor);

    return (
        <>
            <Cards articles={articlesData} />
            <LoadMoreButton setArticles={setArticles} loadMoreStartPosition={loadMoreStartPosition} setloadMoreStartPosition={setloadMoreStartPosition}  />
        </>
    );
}