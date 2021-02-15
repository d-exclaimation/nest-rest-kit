//
//  cat.pipe.ts.ts
//  nest-rest-kit
//
//  Created by d-exclaimation on 1:11 PM.
//  Copyright © 2020 d-exclaimation. All rights reserved.
//

import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { Types } from 'mongoose';

@Injectable()
export class CatPipe implements PipeTransform {
    transform(value: string, metadata: ArgumentMetadata): Types.ObjectId | null {
        if (metadata.type !== 'param')
            return null;

        return Types.ObjectId(value);
    }
}
