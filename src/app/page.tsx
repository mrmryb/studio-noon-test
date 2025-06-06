// Data Functions
import { getArticles } from "@/lib/data/articles";

// Components
import ArticleList from "@/components/articlelist";

export default async function Home() {
  const articles = await getArticles(null, 6);
  console.log("Articles fetched:", articles);
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary-95">
      <div className="max-w-7xl mx-auto px-8 py-20">
        <h1 className="text-5xl text-white mb-2 font-light">Latest Content</h1>
        <p className="w-full lg:w-1/2 text-lg text-white mb-8 font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nisl erat, consectetur nec consequat ut, sagittis eu metus. Quisque euismod, sapien ut finibus posuere, massa augue volutpat nibh, quis elementum elit elit consectetur tellus. Nam turpis velit, imperdiet aliquet enim a, vehicula porttitor mi.
        </p>
        {
          ( !articles || articles.nodes.length === 0 ) 
          ?
            <p className="text-lg text-white mb-8 font-light">
              No articles found.
            </p>
          :
            <div className="text-lg text-white mb-8 font-light">
              <ArticleList articles={articles.nodes} endCursor={articles.pageInfo.endCursor} />
            </div>
        }
      </div>
    </div>
  );
}
