//
//  cats.module.ts
//  nest-rest-kit
//
//  Created by d-exclaimation on 5:12 PM.
//  Copyright © 2020 d-exclaimation. All rights reserved.
//

import { Module } from '@nestjs/common';
import { Cat, CatSchema } from './models/cat.schema';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }])
    ],
    controllers: [CatsController],
    providers: [CatsService],
})
export class CatsModule {}
