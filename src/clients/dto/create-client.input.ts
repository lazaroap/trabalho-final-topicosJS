import { InputType, Field } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateClientInput {
    @Field()
    @IsString()
    @IsNotEmpty({ message: 'Invalid characters' })
    name: string;

    @Field()
    @IsString()
    @IsNotEmpty({ message: 'Invalid characters' })
    phone: string;

    @Field()
    @IsEmail()
    @IsNotEmpty({ message: 'Invalid E-mail' })
    email: string;

    @Field()
    @IsString()
    @IsNotEmpty({ message: 'Invalid password' })
    password: string;
}