//
//  cats.service.ts
//  nest-rest-kit
//
//  Created by d-exclaimation on 5:11 PM.
//  Copyright © 2020 d-exclaimation. All rights reserved.
//

import { Injectable } from '@nestjs/common';
import { ICatsDTO } from './models/cats';
import { InjectModel } from '@nestjs/mongoose';
import { Cat, CatDocument } from './models/cat.schema';
import { Model, Types } from 'mongoose';

@Injectable()
export class CatsService {

    constructor(@InjectModel(Cat.name) private catModel: Model<CatDocument>) {}

    async create(cat: ICatsDTO): Promise<Cat> {
        const createdCat = new this.catModel(cat);
        return createdCat.save();
    }

    async change(cat: Cat): Promise<Cat> {
        return await this.catModel
            .replaceOne({ _id: cat._id }, cat)
            .exec();
    }

    async getAll(): Promise<Cat[]> {
        return this.catModel
            .find()
            .exec();
    }

    async get(id: Types.ObjectId): Promise<Cat | null> {
        return this.catModel
            .findById(id)
            .exec();
    }

    async remove(id: Types.ObjectId) {
        await this.catModel
            .deleteOne({ _id: id }).exec();
    }
}
