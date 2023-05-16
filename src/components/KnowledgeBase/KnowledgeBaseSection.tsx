import { Link } from "react-router-dom";

interface KnowledgeBaseItemProps {
    imgUrl: string,
    title: string,
    description: string,
    linkTo: string
}

const KnowledgeBaseItem =(props: KnowledgeBaseItemProps)=>{
    const {imgUrl, title, description, linkTo} = props;

    return (
        <div className="bg-white rounded-lg	w-[352px] flex flex-col">
            <img src={imgUrl} alt={title} className="w-32 py-8 m-auto"/>
            <div className="px-8 pb-9 pt-6 border-t-[1px] border-primary flex-1 grid text-center grid-cols-1 grid-rows-[auto_1fr_auto]">
                <h3 className="font-semibold text-neutral-black pb-4">{title}</h3>
                <p className="pb-8">{description}</p>
                <Link to={linkTo} className="text-blue-link after:content-[''] after:bg-[url('/src/assets/arrow-right.png')] after:bg-cover after:ml-[10px] after:inline-block after:h-[10px] after:w-[12px]">Read More</Link>
            </div>
        </div>
    )
}

export default KnowledgeBaseItem;