
import ShareButton from "@/components/share";
import { getBlogsSlug } from "@/lib/blog";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { LineShareButton, LinkedinShareButton } from "react-share";

interface pageParams {
  slug: string;
}

export async function generateMetadata({ params }: { params: { slug: string }}) {
    const blog = await getBlogsSlug(params.slug)

    return {
        title: blog.fields.title,
        description: blog.fields.title,
        authors: blog.fields.author.fields.name,
        openGraph: {
            images: [`https:${blog.fields.img.fields.file.url}`, `https:${blog.fields.author.fields.image.fields.file.url}`],
        },
    }
}

export default async function BlogDetail({ params }: { params: pageParams }) {
  const blog = await getBlogsSlug(params.slug);
  console.log(blog);
  console.log(blog.fields.title);
  return (
    <>
      <div className="flex flex-col">
        <div className="flex">
            <img width={50} height={50} className="rounded-full" src={`https:${blog.fields.author.fields.image.fields.file.url}`} alt="" />
            <h1>{blog.fields.title}</h1>
        </div>
        <div className="flex justify-center">
            <div className="felx flex-col">
                <img className="flex items-center" width={450} src={`https:${blog.fields.img.fields.file.url}`}></img>
                <h1 className="font-bold text-[4rem] text-center text-green-500">{blog.fields.author.fields.name}</h1>
            </div>
        </div>
        <div className="font-semibold mx-8 gap-4">
          {documentToReactComponents(blog.fields.content)}
        </div>
        <ShareButton slug={blog.fields.sLug} className="" />

        
      </div>
    </>
  );
}
