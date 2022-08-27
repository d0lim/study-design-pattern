import { Article } from "../interfaces/article.interface";

export class ContentsArticle implements Article {
  constructor(id: number, title: string, content: string) {
    this.id = id;
    this.title = title;
    this.content = content;

    this.likeCount = 0;
  }

  id: number;
  title: string;
  content: string;

  likeCount: number;
}
