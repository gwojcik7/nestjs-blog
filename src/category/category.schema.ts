import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Category {
    @Prop({
        required: true
    })
    title: string;

    @Prop()
    description: string;

    @Prop({
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Category'
    })
    parent: Category
}

export type CategoryDocument = Category & mongoose.Document;

export const CategorySchema = SchemaFactory.createForClass(Category);