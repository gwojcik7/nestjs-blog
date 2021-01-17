import { Author } from "src/author/author.schema";
import { Category } from "src/category/category.schema";

export class CreateArticleDto {
    title: string;
    content: string;
    author: Author;
    categories: Category[];
}