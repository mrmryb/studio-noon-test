// Data Functions
import GutenbergBlocks from "@/components/blocks";
import { getArticleBySlug } from "@/lib/data/article";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Article({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  console.log("Articles fetched:", article);
  if (!article) {
    return notFound(); // Shows the 404 page
  }

  return (
    <div className="min-h-screen bg-[linear-gradient(to_bottom,_#e0535a_400px,_#ffffff_400px)]">
     <div className="max-w-5xl mx-auto px-8 py-10">
      <Link href="/" className="text-white hover:underline mb-4 inline-block">
        ← Back
      </Link>
      <h1 className="text-5xl text-white mb-2 font-light">
        {article.title}
      </h1>
      </div>
      <div className="max-w-6xl mx-auto px-8 py-10">
      <Image
        src={article.featuredImage?.node?.sourceUrl || "/placeholder-image.jpg" }
        width={1200}    
        height={600}
        alt={article.featuredImage?.node?.altText || "Article Image"}
        className="rounded-lg mb-4 w-full h-96 object-cover object-top bg-gray-100"
      />
      </div>
      <div className="max-w-5xl mx-auto px-8 py-5">
      <div className="text-black mb-6 space-y-4 font-light">
        <GutenbergBlocks blocks={article.editorBlocks} />
      </div>
      </div>
    </div>
  );
}

//export async function getServerSideProps() {
//  const res = await fetch('');
//  const articles = await res.json();
//
//  return {
//    props: {
//      articles,
//    },
//  };
//}
