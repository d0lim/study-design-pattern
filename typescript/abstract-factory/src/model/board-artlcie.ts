import { Article } from "../interfaces/article.interface";

export class BoardArticle implements Article {
  constructor(id: number, title: string, content: string) {
    this.id = id;
    this.title = title;
    this.content = content;
  }

  id: number;
  title: string;
  content: string;
}
