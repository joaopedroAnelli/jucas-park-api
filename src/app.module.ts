import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphqlModule } from './graphql/graphql.module';
import { CarsModule } from './cars/cars.module';
import { DriversModule } from './drivers/drivers.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { ConfigModule } from '@nestjs/config'

// noinspection JSUnusedLocalSymbols
@Module({
  imports: [
    GraphqlModule,
    CarsModule,
    ConfigModule,
    DriversModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'jucas-park-api',
      password: 'jucas-park-api',
      database: 'jucas-park-api',
      entities: [],
      synchronize: false,
      autoLoadEntities: true,
      migrationsTableName: "migrations",
      migrations: ["/database/migrations/*.js"],
      cli: {
        migrationsDir: "/database/migrations"
      }
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService
  ],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
