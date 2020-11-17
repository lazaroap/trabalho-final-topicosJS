import { ObjectType, Field, ID, HideField } from "@nestjs/graphql";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";
import { env } from 'process';
import * as NodeRSA from 'node-rsa';
import { hashPasswordTransform } from "src/common/helpers/crypto";
import { FilterableField } from "@nestjs-query/query-graphql";

// const key = new NodeRSA({ b: 1024});

let public_key = env.public_key;

 const key_public:NodeRSA = new NodeRSA(public_key);

@ObjectType()
@Entity()
export class Clients {
    @PrimaryGeneratedColumn()
    @Field(() => ID)
    id: string;

    // @Column({
    //     transformer: {
    //         to: (value: string) => key_public.encrypt(value, 'base64'),
    //         from: (value: string) => value
    //     }
    // })
    @Column()
    @FilterableField()
    name: string;

    @Column({
        transformer: {
            to: (value: string) => key_public.encrypt(value, 'base64'),
            from: (value: string) => value
        }
    })
    @FilterableField()
    phone: string;

    @Column({
        transformer: {
            to: (value: string) => key_public.encrypt(value, 'base64'),
            from: (value: string) => value
        }
    })
    @FilterableField()
    email: string;

    @Column({
        transformer: hashPasswordTransform
    })
    //@HideField()
    password: string;

    @CreateDateColumn({ name: 'created_At' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_At' })
    updatedAt: Date;

    @DeleteDateColumn({ name: 'deleted_At' })
    deletedAt: Date;
}