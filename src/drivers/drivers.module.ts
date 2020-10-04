import { Module } from '@nestjs/common';
import { DriversResolver } from './drivers.resolver';
import { DriversService } from './drivers.service';
import { DriverEntity } from './driver.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [
    DriversResolver,
    DriversService
  ],
  imports: [
    TypeOrmModule.forFeature([DriverEntity]),
  ]
})

export class DriversModule {}
