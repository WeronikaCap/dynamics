import ContentContainer from "components/Layout/ContentContainer";
import KnowledgeBaseItem from "./KnowledgeBaseSection";

const DATA = [
    {
        imgUrl: "/src/assets/knowledgebase-1.png",
        title:" Support Portal Issues",
        desc: "Optional description, lorem ipsum  description, lorem ipsum",
        linkTo: "/"
    },
    {
        imgUrl: "/src/assets/knowledgebase-2.png",
        title:"Travel",
        desc: "Optional, lorem ipsum",
        linkTo: "/"
    },
    {
        imgUrl: "/src/assets/knowledgebase-3.png",
        title:"Test",
        desc: "lorem ipsum",
        linkTo: "/"
    }
]

const KnowledgeBaseSection =()=>{
    return(
        <section className="bg-primary pt-16 pb-24">
            <ContentContainer>
                <h2 className="pb-10 text-center">Select your topic</h2>
                <div className="flex justify-center gap-8">
                    {DATA.map(item => <KnowledgeBaseItem imgUrl={item.imgUrl} title={item.title} description={item.desc} linkTo={item.linkTo}/>)}
                </div>
            </ContentContainer>
        </section>
    )
}

export default KnowledgeBaseSection;