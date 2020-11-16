import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateUser1605480730325 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'user',
                columns:[
                    {
                        name:'id',
                        type:'uuid',
                        isPrimary: true,
                        generationStrategy:'uuid',
                        default:'uuid_generate_v4()'
                    },
                    {
                        name:'name',
                        type:'string',
                    },
                    {
                        name:'email',
                        type:'string',
                    }
                ]
            })
        )
        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('user');
    }

}
