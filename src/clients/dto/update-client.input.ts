import { InputType, Field } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, IsOptional, IsString, IsNumber } from 'class-validator';

@InputType()
export class UpdateClientInput {
    @Field({ nullable: true })
    //@IsOptional()
    @IsString()
    @IsNotEmpty({ message: 'Invalid characters' })
    name?: string;

    @Field({ nullable: true })
    //@IsOptional()
    @IsEmail()
    @IsNotEmpty({ message: 'Invalid E-mail' })
    email?: string;

    @Field({ nullable: true })
    //@IsOptional()
    @IsString()
    @IsNotEmpty({ message: 'Invalid E-mail' })
    password?: string;
}