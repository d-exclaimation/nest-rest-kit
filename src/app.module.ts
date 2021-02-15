//
//  app.module.ts
//  nest-rest-kit
//
//  Created by d-exclaimation on 1:53 PM.
//  Copyright © 2020 d-exclaimation. All rights reserved.
//

import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [
        ConfigModule.forRoot(),
        MongooseModule.forRoot(process.env.DATABASE_URL ?? 'mongodb://localhost/cats-db'),
        CatsModule
    ],
})
export class AppModule{
}
