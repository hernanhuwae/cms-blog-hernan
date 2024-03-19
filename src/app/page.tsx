import { CardBlog } from "@/components/card";
import { getBlogs } from "@/lib/blog";
import { Key } from "react";

export default async function Home(){

  const blogs=await getBlogs()
  
  
  return(
    <div>
      <div className="flex gap-4">
      {
      blogs.map((items: { fields: { author: { fields: { image: { fields: { file: { url: string; }; }; }; name: string; }; }; title: string; img: { fields: { file: { url: string; }; }; }; sLug: string; }; sys: { id: Key | null | undefined; }; })=>{
        console.log(items.fields.author.fields.image.fields.file.url);
        
        return(
          <div key={items.sys.id}>
            <CardBlog
            titles={items.fields.title}
            image={items.fields.img.fields.file.url}
            slugBlog={items.fields.sLug}
            penulis={items.fields.author.fields.name}
            imgAuhtor={items.fields.author.fields.image.fields.file.url}
            />
          </div>
        )
      })
    }
      </div>
    </div>

  )

}