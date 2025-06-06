// Data Functions
import { getArticles } from "@/lib/data/articles";

// Components
import Cards from "@/components/cards";
import LoadMoreButton from "@/components/loadmore";
//import { useState } from "react";

export default async function Home() {
  const articles = await getArticles(null, 6);
  //usestate so load more button can work, useclient not allowed in this file, extra component needed
  //const [articlesData, setArticles] = useState(articles);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary-95">
      <div className="max-w-7xl mx-auto px-8 py-20">
        <h1 className="text-5xl text-white mb-2 font-light">Latest Content</h1>
        <p className="w-full lg:w-1/2 text-lg text-white mb-8 font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nisl erat, consectetur nec consequat ut, sagittis eu metus. Quisque euismod, sapien ut finibus posuere, massa augue volutpat nibh, quis elementum elit elit consectetur tellus. Nam turpis velit, imperdiet aliquet enim a, vehicula porttitor mi.
        </p>
        <Cards {...articles} />
        <LoadMoreButton {...articles} /> 
        {
        // setArticles needs to be passed down to LoadMoreButton to update state
        // <LoadMoreButton nodes={articlesData} setArticles={setArticles} />
        }
      </div>
    </div>
  );
}
