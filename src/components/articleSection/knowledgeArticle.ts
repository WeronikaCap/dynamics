export interface KnowledgeArticle {
  id: number;
  __typename: string;
  title: string;
  rating: number;
  rating_count: number;
  content: string;
  description: string;
  createdon: string;
  _createdby_value: string;
  keywords:string;
}

export interface KnowledgeArticleResponse {
  "@odata.context": string;
  value: KnowledgeArticle[];
  error: ErrorType;
}

export interface ErrorType {
  message: string;
  code: number;
}
