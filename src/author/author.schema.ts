import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Author {
    @Prop({
        required: true
    })
    nickName: string;

    @Prop({
        required: true
    })
    email: string;

    @Prop()
    firstName: string;

    @Prop()
    lastName: string;

    @Prop()
    avatar: string;
}

export type AuthorDocument = Author & Document;

export const AuthorSchema = SchemaFactory.createForClass(Author);