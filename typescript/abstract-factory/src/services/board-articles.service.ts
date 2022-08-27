import { ArticleService } from "../interfaces/article-service.interface";
import { Article } from "../interfaces/article.interface";
import { BoardArticle } from "../model/board-artlcie";

export class BoardArticlesService implements ArticleService {
  createArticle(): number {
    return 3;
  }
  loadArticleList(): Article[] {
    return Array(10)
      .fill(null)
      .map(
        (_, index) =>
          new BoardArticle(
            index,
            `title ${index}`,
            `contents of article ${index}`
          )
      );
  }
  loadArticleDetail(): Article {
    return new BoardArticle(10, "title", "content");
  }
  deleteArticle(): void {
    console.log("delted");
  }
}
