import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateArticleDto } from 'src/dto/create-article.dto';
import { Article, ArticleDocument } from './article.schema';

@Injectable()
export class ArticleService {
    constructor(@InjectModel(Article.name) private articleModel: Model<ArticleDocument> ) {}

    async findAll(): Promise<Article[]> {
        return this.articleModel.find().exec();
    }

    async findByCategory( categoryId ) {
        return this.articleModel.find({
            categories: {
                "$in": [ categoryId ]
            }
        });
    }

    async create(createArticleDto: CreateArticleDto): Promise<Article> {
        const createdArticle = new this.articleModel(createArticleDto);

        return createdArticle.save();
    }
}
