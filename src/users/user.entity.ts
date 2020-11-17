import { ObjectType, Field, ID, HideField } from "@nestjs/graphql";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { env } from 'process';

import * as NodeRSA from 'node-rsa';
import { hashPasswordTransform } from "src/common/helpers/crypto";

let public_key = env.public_key;

 const key_public:NodeRSA = new NodeRSA(public_key);

@ObjectType()
@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

    // @Column({
    //     transformer: {
    //         to: (value: string) => key_public.encrypt(value, 'base64'),
    //         from: (value: string) => value
    //     }
    // })
    @Column()
    name: string;


    // @Column({
    //     transformer: {
    //         to: (value: string) => key_public.encrypt(value, 'base64'),
    //         from: (value: string) => value
    //     }
    // })
    @Column()
    email: string;

    @Column({
        transformer: hashPasswordTransform
    })
    @HideField()
    password: string;

}
