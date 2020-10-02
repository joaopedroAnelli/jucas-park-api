import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { DriversService } from './drivers.service';

@Resolver('Driver')
export class DriversResolver {

  constructor(
    private driversService: DriversService
  ) {
  }

  @Query()
  async driver() {
    return this.driversService.getDriver()
  }

  @Mutation()
  async storeDriver(@Args('name')name: string) {
    return this.driversService.storeDriver(name)
  }
}