import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsService } from './clients.service';
import { Clients } from './clients.entity';
import { ClientsResolver } from './clients.resolver';

import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm'
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql'


// @Module({
//   imports: [TypeOrmModule.forFeature([Clients])],
//   providers: [ClientsService, ClientsResolver]
// })
// export class ClientsModule {}


@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Clients])],
      resolvers: [
        {
          EntityClass: Clients,
          DTOClass: Clients,
        }
      ],
    }),
  ],
  providers: []
})

export class ClientsModule { }
