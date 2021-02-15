//
//  cats.ts
//  nest-rest-kit
//
//  Created by d-exclaimation on 2:16 PM.
//  Copyright © 2020 d-exclaimation. All rights reserved.
//

export interface ICats {
    id: number;
    name: string;
    age: number;
}

export interface ICatsDTO {
    name: string;
    age: number;
}
