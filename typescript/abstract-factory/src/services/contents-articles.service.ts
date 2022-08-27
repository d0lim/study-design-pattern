import { ArticleService } from "../interfaces/article-service.interface";
import { Article } from "../interfaces/article.interface";
import { ContentsArticle } from "../model/contents-artlcle";

export class ContentsArticlesService implements ArticleService {
  createArticle(): number {
    return 3;
  }
  loadArticleList(): Article[] {
    return Array(10)
      .fill(null)
      .map(
        (_, index) =>
          new ContentsArticle(
            index,
            `title ${index}`,
            `contents of article ${index}`
          )
      );
  }
  loadArticleDetail(): Article {
    return new ContentsArticle(10, "title", "content");
  }
  deleteArticle(): void {
    console.log("delted");
  }
}
