import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose";
import { Author } from "src/author/author.schema";
import { Category } from "src/category/category.schema";

@Schema()
export class Article {
    @Prop({
        required: true
    })
    title: string;

    @Prop()
    content: string;

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author'
    })
    author: Author;

    @Prop({
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Category'
            }
        ]
    })
    categories: Category[];
}

export type ArticleDocument = Article & mongoose.Document;

export const ArticleSchema = SchemaFactory.createForClass(Article);