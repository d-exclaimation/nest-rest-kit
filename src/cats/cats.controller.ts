//
//  cats.controller.ts.ts
//  nest-rest-kit
//
//  Created by d-exclaimation on 1:51 PM.
//  Copyright © 2020 d-exclaimation. All rights reserved.
//

import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Param,
    Body,
    BadRequestException,
    NotFoundException,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { ICatsDTO } from './models/cats';
import { CatPipe } from './pipes/cat.pipe';
import { Cat } from './models/cat.schema';
import { Types } from 'mongoose';

@Controller('/cats')
export class CatsController {

    constructor(private catsService: CatsService) {}

    @Get('all')
    async getAll(): Promise<Cat[]> {
        return await this.catsService.getAll();
    }

    @Get(':id')
    async getOne(@Param('id', CatPipe) id: Types.ObjectId | null): Promise<Cat> {
        if (!id)
            throw new NotFoundException();
        const res = await this.catsService.get(id);
        if(!res)
            throw new NotFoundException();
        return res;
    }

    @Post()
    async createNew(@Body() cat: ICatsDTO): Promise<Cat> {
        const res = await this.catsService.create(cat);
        if (!res)
            throw new BadRequestException();
        return res;
    }

    @Put(':id')
    async updateOne(@Param('id', CatPipe) id: Types.ObjectId | null, @Body() cat: Cat): Promise<Cat> {
        if (id === null || `${cat._id}` !== `${id}`) {
            throw new BadRequestException();
        }

        const changed = await this.catsService.change(cat)

        if (!changed)
            throw new NotFoundException();

        return changed;
    }

    @Delete(':id')
    async remove(@Param('id', CatPipe) id: Types.ObjectId | null): Promise<void> {
        if(id)
            await this.catsService.remove(id);
    }
}
