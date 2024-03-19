import TwitterButton from "./twitter";


const base_url=process.env.BASE_URL_WEB||"" 
export default function ShareButton({slug,className}:{slug:string,className:string}){
    console.log(slug)
    return(
        <div className={`${className}`}>
            <p className=" text-xs font-bold text-gray-400 py-2 ">BAGIKAN</p>
            <div className="flex gap-1">
                <TwitterButton slug={slug} url={base_url}/>
            </div>
        </div>
    )
}
