import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { PubSub } from 'graphql-subscriptions';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
      installSubscriptionHandlers: true
    }),
  ],
  providers: [
    {
      provide: 'PUB_SUB',
      useValue: new PubSub()
    }
  ]
})
export class GraphqlModule {}