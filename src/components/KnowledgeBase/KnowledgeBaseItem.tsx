import ContentContainer from "../ContentContainer";
import KnowledgeBaseItem from "./KnowledgeBaseSection";

const DATA = [
    {
        title:" Support Portal Issues",
        desc: "Optional description, lorem ipsum",
        linkTo: "/"
    },
    {
        title:"Travel",
        desc: "Optional, lorem ipsum",
        linkTo: "/"
    },
    {
        title:"Test",
        desc: "lorem ipsum",
        linkTo: "/"
    }
]

const KnowledgeBaseSection =()=>{
    return(
        <section className="bg-primary">
            <ContentContainer>
                <h2>Select your topic</h2>
                <div>
                    {DATA.map(item => <KnowledgeBaseItem title={item.title} description={item.desc} linkTo={item.linkTo}/>)}
                </div>

            </ContentContainer>
        </section>
    )
}

export default KnowledgeBaseSection;