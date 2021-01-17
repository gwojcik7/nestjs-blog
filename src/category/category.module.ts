import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Article, ArticleSchema } from 'src/article/article.schema';
import { ArticleService } from 'src/article/article.service';
import { CategoryController } from './category.controller';
import { Category, CategorySchema } from './category.schema';
import { CategoryService } from './category.service';

@Module({
  imports: [
        MongooseModule.forFeature([{
            name: Category.name,
            schema: CategorySchema
        }]),
        MongooseModule.forFeature([{
          name: Article.name,
          schema: ArticleSchema
      }]),
    ],
  controllers: [CategoryController],
  providers: [CategoryService, ArticleService]
})
export class CategoryModule {}
