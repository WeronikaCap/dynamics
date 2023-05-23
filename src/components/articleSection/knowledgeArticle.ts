export interface KnowledgeArticle {
  id: number;
  __typename: string;
  title: string;
  rating: number;
  ratingCount: number;
  content: string;
  description: string;
  createdon: string;
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