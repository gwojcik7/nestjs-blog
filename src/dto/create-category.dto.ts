import { Category } from "src/category/category.schema";

export class CreateCategoryDto {
    title: string;
    description: string;
    parent: Category | null;
}