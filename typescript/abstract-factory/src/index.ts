import { ArticleService } from "./interfaces/article-service.interface";
import { BoardArticlesService } from "./services/board-articles.service";
import { ContentsArticlesService } from "./services/contents-articles.service";

function clientCode(factory: ArticleService) {
  const loadedList = factory.loadArticleList();
  const loadedArticle = factory.loadArticleDetail();

  console.log(loadedList);
  console.log(loadedArticle);
}

console.log("Client: Testing client code with the first factory type...");
clientCode(new BoardArticlesService());

console.log("-------------------------------------------");

console.log(
  "Client: Testing the same client code with the second factory type..."
);
clientCode(new ContentsArticlesService());
