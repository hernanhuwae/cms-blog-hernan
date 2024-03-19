const base_id=process.env.BASE_URL_CONTENTFUL
const space_id=process.env.SPACE_ID_CONTENTFUL
const token=process.env.TOKEN_CONTENTFUL
import resolveResponse  from "contentful-resolve-response"

export const getBlogs=async()=>{
    console.log(token);
    
    const res= await fetch(`${base_id}/spaces/${space_id}/environments/master/entries?access_token=${token}&content_type=blog&include=10`,{next:{revalidate:10}})
    const data= await res.json()
    

    const response={
        items:data.items,
        includes:data.includes
    }

    const items= resolveResponse(response)

    return items
}



export const getBlogsSlug=async(slug:string)=>{
    console.log(token);
    
    const res= await fetch(`${base_id}/spaces/${space_id}/environments/master/entries?access_token=${token}&content_type=blog&include=10&fields.sLug=${slug}`,{next:{revalidate:10}})
    const data= await res.json()
    

    const response={
        items:data.items,
        includes:data.includes
    }

    const items= resolveResponse(response)

    return items[0]
}