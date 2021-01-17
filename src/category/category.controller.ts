import { Body, Controller, Get, Param, Post, Render } from '@nestjs/common';
import { ArticleService } from 'src/article/article.service';
import { CreateCategoryDto } from 'src/dto/create-category.dto';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
    constructor(private categoryService: CategoryService, private articleService: ArticleService) {}

    @Get(':id')
    @Render('category/index')
    async findPosts(@Param() params) {
        const category = await this.categoryService.find( params.id );
        const posts = await this.articleService.findByCategory( params.id );

        return {
            category,
            posts
        };
    }
    
    @Get()
    async findAll() {
        return await this.categoryService.findAll();
    }

    @Post()
    create( @Body() createCategoryDto: CreateCategoryDto ) {
        return this.categoryService.create(createCategoryDto);
    }

    
}
