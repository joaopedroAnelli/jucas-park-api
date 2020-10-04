import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { DriversService } from './drivers.service';
import { Inject } from '@nestjs/common';
import { PubSub } from 'graphql-subscriptions'

@Resolver('Driver')
export class DriversResolver {

  constructor(
    private driversService: DriversService,

    // @Inject('PUB_SUB')
    // private pubSub: PubSub
  ) {
  }

  @Query()
  async drivers() {
    return this.driversService.index()
  }

  @Mutation()
  async storeDriver(@Args('name')name: string) {
    return this.driversService.store(name)
  }

  @Mutation()
  updateDriver(@Args('id')id: number, @Args('name')name: string) {
    return this.driversService.update(id, name)
  }


  // @Subscription()
  // driverCreated() {
  //   return this.pubSub.asyncIterator('driverCreated')
  // }
}