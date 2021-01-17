import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AuthorModule } from './author/author.module';
import { CategoryModule } from './category/category.module';
import { ArticleModule } from './article/article.module';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration]
    }),
    MongooseModule.forRoot(`mongodb+srv://${process.env.MONGO_DB_USER}:${encodeURI(process.env.MONGO_DB_PASSWORD)}@${process.env.MONGO_DB_NAME}.${process.env.MONGO_DB_SERVER}?retryWrites=true&w=majority`),
    AuthorModule,
    CategoryModule,
    ArticleModule,
  ], 
  controllers: [],
  providers: [],
})
export class AppModule {}
