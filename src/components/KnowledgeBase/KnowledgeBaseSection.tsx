import { Link } from "react-router-dom";

interface KnowledgeBaseItemProps {
    title: string,
    description: string,
    linkTo: string
}

const KnowledgeBaseItem =(props: KnowledgeBaseItemProps)=>{
    const {title, description, linkTo} = props;

    return (
        <div>
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <Link to={linkTo}>Read More</Link>
            </div>

        </div>
    )
}

export default KnowledgeBaseItem;