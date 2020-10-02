import { Module } from '@nestjs/common';
import { DriversResolver } from './drivers.resolver';
import { DriversService } from './drivers.service';

@Module({
  providers: [DriversResolver, DriversService]
})

export class DriversModule {}
