//
//  cat.schema.ts
//  nest-rest-kit
//
//  Created by d-exclaimation on 4:29 PM.
//  Copyright © 2020 d-exclaimation. All rights reserved.
//

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type CatDocument = Cat & Document;

@Schema()
export class Cat {
    _id!: Types.ObjectId;
    @Prop({ required: true }) name!: string;
    @Prop({ required: true }) age!: number;
}

export const CatSchema = SchemaFactory.createForClass(Cat);
