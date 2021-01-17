import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateArticleDto } from 'src/dto/create-article.dto';
import { ArticleService } from './article.service';

@Controller('article')
export class ArticleController {
    constructor(private articleService: ArticleService) {}

    @Get()
    findAll() {
        return this.articleService.findAll();
    }

    @Post()
    create( @Body() createArticleDto: CreateArticleDto ) {
        return this.articleService.create(createArticleDto);
    }
}
