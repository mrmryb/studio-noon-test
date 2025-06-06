// Types
import { type Article } from "@/types";

// Next
import Image from "next/image";
import Link from "next/link";

/*

Notes / Tips

# Style the module up to be like the figma mockup – do not be afraid to manipulate or change this file or split into parts.

*/

const Card = (props: Article) => {
  return (
    <article className="text-white mb-6">
      {props.featuredImage.node.sourceUrl && (
        <Image
          src={props.featuredImage.node.sourceUrl}
          width={400}
          height={200}
          alt=""
          className="rounded-lg mb-4 w-full h-48 lg:h-62 object-cover"
          loading="lazy"
        />
      )}
      <h2 className="text-sm font-semibold mb-2 tracking-wider">ARTICLE</h2>
      <Link href={`/articles/${props.slug}`}>
        <h3 className="text-lg mb-2 font-light hover:underline">{props.title}</h3>
      </Link>
      <p className="text-sm font-thin">{props.excerpt}</p>
    </article>
  );
};

export default Card;
