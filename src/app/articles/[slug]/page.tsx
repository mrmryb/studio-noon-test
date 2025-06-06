import Image from "next/image";
import Link from "next/link";

export default async function Article({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;

  // Get the page content server side not from the api
  // const content = await getPageContent(slug);

  return (
    <div className="min-h-screen bg-[linear-gradient(to_bottom,_#e0535a_400px,_#ffffff_400px)]">
     <div className="max-w-5xl mx-auto px-8 py-10">
      <Link href="/" className="text-white hover:underline mb-4 inline-block">
        ← Back
      </Link>
      <h1 className="text-5xl text-white mb-2 font-light">
        {slug}
      </h1>
      </div>
      <div className="max-w-6xl mx-auto px-8 py-10">
      <Image
        src="/images/placeholder.png"
        width={1200}    
        height={600}
        alt="Placeholder Image"
        className="rounded-lg mb-4 w-full h-96 object-cover object-top bg-amber-400"
        loading="lazy"
      />
      </div>
      <div className="max-w-5xl mx-auto px-8 py-5">
      <div className="text-black mb-6 space-y-4 font-light">
        <h1 className="font-bold text-3xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>

        <p>Aliquam vitae lacus et ante iaculis tempor non quis magna. Fusce eget orci id neque euismod pharetra ac in quam. Nulla facilisi. Cras porta eros sed vestibulum condimentum. Mauris eget consectetur velit. Nunc leo nunc, faucibus quis dapibus sit amet, tempus vel dui. Nam et odio efficitur, vulputate ipsum ultricies, posuere purus.</p>

        <p>Ut eros libero, ornare vitae viverra id, mollis laoreet mauris. Aenean eu fringilla elit. Integer odio arcu, condimentum vel fringilla a, pulvinar vel tortor. Sed posuere viverra quam. Ut tortor quam, posuere ac nisl vulputate, tristique consectetur ligula. Proin libero leo, faucibus in elit quis, tincidunt consequat odio. Etiam ut efficitur risus. Nunc convallis et nulla vitae suscipit. Maecenas fringilla tellus in diam cursus blandit. Quisque ultricies sodales metus, et iaculis ante pharetra eu.</p>

        <p>Proin in odio eu neque vulputate tempus vel sed ipsum. Sed fringilla neque sed lorem varius, ac cursus nisi malesuada. Maecenas commodo arcu sit amet metus venenatis ornare. Sed mattis turpis nec convallis ornare. Aenean ornare, dui vel euismod finibus, enim augue sagittis diam, eget volutpat turpis nisl sit amet lacus. Etiam rutrum risus sed viverra efficitur. Mauris cursus ante metus, et egestas purus volutpat sit amet. Aliquam erat volutpat. Fusce suscipit est sit amet nibh ultricies, placerat accumsan augue gravida. Duis at lectus sapien. Cras ut mauris vehicula, aliquam lectus eu, consectetur ligula. Duis rutrum vitae ligula id hendrerit.</p>

        <p>Vivamus at sapien augue. Ut fringilla dignissim turpis et mollis. Aliquam fringilla gravida sapien, lacinia eleifend sem gravida a. Nulla ac massa ut turpis dictum efficitur. Phasellus at nisi ac urna luctus auctor. Aliquam fermentum est ut ligula malesuada laoreet. Cras vel mauris pharetra, porttitor metus eget, rhoncus metus. Vestibulum gravida sem nisi, vitae ultrices nisl varius sed. Cras at commodo odio, suscipit condimentum dolor. Nam hendrerit felis mi, non blandit urna molestie at. Integer lectus massa, fringilla eu ante in, eleifend rhoncus elit.</p>
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
