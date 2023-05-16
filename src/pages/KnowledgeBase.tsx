import Header from "components/Layout/Header";
import KnowledgeBaseSection from "components/KnowledgeBase/KnowledgeBaseItem";

const KnowledgeBase = () =>{
    return (
        <>
            <Header placeHolderText="Search the knowledge base..." title="Customer Self-Service" description="The Knowledge Base contains numerous support references, created by our support professionals who have resolved issues for our customers. It is constantly updated, expanded, and refined to ensure that you have access to the very latest information." 
            backgroundImage="/src/assets/Hero-BG.png"/>
            <KnowledgeBaseSection/>
        </>
    )
}

export default KnowledgeBase;