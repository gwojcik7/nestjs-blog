import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateAuthorDto } from 'src/dto/create-author.dto';
import { AuthorService } from './author.service';

@Controller('author')
export class AuthorController {

    constructor(private authorService: AuthorService) {}

    @Get()
    findAll() {
        return this.authorService.findAll();
    }

    @Post()
    create(@Body() createAuthorDto: CreateAuthorDto) {
        return this.authorService.create(createAuthorDto);
    }
}
