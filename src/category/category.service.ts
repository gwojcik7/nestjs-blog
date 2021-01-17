import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCategoryDto } from 'src/dto/create-category.dto';
import { Category, CategoryDocument } from './category.schema';

@Injectable()
export class CategoryService {
    constructor(@InjectModel(Category.name) private categoryModel: Model<CategoryDocument>) {}

    async findAll(): Promise<Category[]> {
        return this.categoryModel.find().exec();
    }

    async find(id: string): Promise<Category> {
        return this.categoryModel.findById(id).exec();
    }

    async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
        const createdCategory = new this.categoryModel(createCategoryDto);

        return createdCategory.save();
    }
}
