import { Article } from "./article.interface";

export interface ArticleService {
  createArticle(): number;
  loadArticleList(): Article[];
  loadArticleDetail(): Article;
  deleteArticle(): void;
}
