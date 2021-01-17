import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAuthorDto } from 'src/dto/create-author.dto';
import { Author, AuthorDocument } from './author.schema';

@Injectable()
export class AuthorService {
    constructor(@InjectModel(Author.name) private authorModel: Model<AuthorDocument>) {}

    async findAll(): Promise<Author[]> {
        return this.authorModel.find().exec();
    }

    async create(CreateAuthorDto: CreateAuthorDto): Promise<Author> {
        const createdAuthor = new this.authorModel(CreateAuthorDto);

        return createdAuthor.save();
    }
}
